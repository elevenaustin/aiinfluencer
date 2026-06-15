import { useState } from "react";
import { toast } from "sonner";

export function useRazorpay() {
  const [loading, setLoading] = useState(false);

  const startCheckout = async (amountInRupees = 149) => {
    if (loading) return;
    setLoading(true);

    try {
      let orderData = null;

      // 1. Try to create order on the backend
      try {
        const res = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: amountInRupees * 100, // convert to paise
            currency: "INR",
          }),
        });

        if (res.ok) {
          orderData = await res.json();
        } else {
          console.warn("Backend order creation failed, falling back to direct payment mode.");
        }
      } catch (backendErr) {
        console.warn("Backend order creation error, falling back to direct payment mode:", backendErr);
      }

      // 2. Configure Razorpay modal
      const options: any = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderData ? orderData.amount : amountInRupees * 100,
        currency: orderData ? orderData.currency : "INR",
        name: "AI Influencer Course",
        description: "India's #1 AI Influencer Course",
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#c0eb34", // Neon lime theme color matching the site's accent
        },
        modal: {
          ondismiss: function () {
            toast.info("Payment cancelled by user");
          },
        },
      };

      if (orderData && orderData.order_id) {
        options.order_id = orderData.order_id;
        options.handler = async function (response: any) {
          const verifyToastId = toast.loading("Verifying payment signature...");
          try {
            // 3. Send verification request
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(verifyData.error || "Verification failed");
            }

            toast.success("Payment verified! Welcome to the course.", {
              id: verifyToastId,
            });
          } catch (verifyError: any) {
            toast.error(verifyError.message || "Payment verification failed", {
              id: verifyToastId,
            });
          }
        };
      } else {
        // Fallback direct payment handler (no backend signature verification)
        options.handler = function (response: any) {
          toast.success("Payment successful! Welcome to the course.");
          console.log("Direct payment success response:", response);
        };
      }

      if (!(window as any).Razorpay) {
        throw new Error("Razorpay SDK failed to load. Please refresh and try again.");
      }

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        toast.error(response.error.description || "Payment transaction failed");
      });
      rzp.open();
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Something went wrong during checkout initialization");
    } finally {
      setLoading(false);
    }
  };

  return {
    startCheckout,
    loading,
  };
}
