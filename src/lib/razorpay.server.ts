import Razorpay from "razorpay";
import crypto from "node:crypto";

export async function handleCreateOrder(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return new Response(
        JSON.stringify({ error: "Razorpay credentials not configured on server" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { amount, currency = "INR", receipt } = body;

    // Validate amount >= 100 paise
    if (!amount || typeof amount !== "number" || amount < 100) {
      return new Response(
        JSON.stringify({ error: "Invalid amount. Minimum amount is 100 paise (1 INR)" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    // Create order in Razorpay
    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
    });

    return new Response(
      JSON.stringify({
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    const statusCode = error.statusCode || 500;
    return new Response(
      JSON.stringify({ error: error.message || "Failed to create order" }),
      { status: statusCode, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function handleVerifyPayment(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return new Response(
        JSON.stringify({ error: "Razorpay secret not configured on server" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // Validate missing fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return new Response(
        JSON.stringify({ error: "Missing required verification parameters" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Generate expected signature using HMAC-SHA256
    const generatedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return new Response(
        JSON.stringify({ error: "Payment signature mismatch verification failed" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Payment verified successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error verifying payment signature:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Verification failed due to server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
