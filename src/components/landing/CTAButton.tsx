import { useRazorpay } from "@/hooks/use-razorpay";
import { cn } from "@/lib/utils";

export function CTAButton({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
}) {
  const { startCheckout, loading } = useRazorpay();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (loading) return;
    startCheckout(149); // Launch Offer ₹149
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-primary font-bold text-primary-foreground shadow-[0_0_30px_-4px_var(--color-lime-neon)] transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer",
        loading && "opacity-75 cursor-not-allowed",
        size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base",
        className,
      )}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
          <span>Opening Checkout...</span>
        </>
      ) : (
        children
      )}
    </a>
  );
}
