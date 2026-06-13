import { CHECKOUT_URL } from "@/lib/landing-data";
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
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-primary font-bold text-primary-foreground shadow-[0_0_30px_-4px_var(--color-lime-neon)] transition-transform hover:scale-[1.03] active:scale-95",
        size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base",
        className,
      )}
    >
      {children}
    </a>
  );
}
