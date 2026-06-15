import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicy,
  head: () => ({
    meta: [
      { title: "Refund and Cancellation Policy — AI Influencer Course" },
      { name: "description", content: "Refund and Cancellation terms for Shinzo Skills." },
    ],
  }),
});

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Navbar */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <span className="font-display font-bold text-lg text-primary">Shinzo Skills</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-3xl border border-border bg-card/30 p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <RotateCcw className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">Refund &amp; Cancellation</h1>
              <p className="text-xs text-muted-foreground mt-1">Last updated: June 15, 2026</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                1. 7-Day Money-Back Guarantee
              </h2>
              <p>
                We stand behind the quality of our course. We offer a 100% money-back guarantee within 7 days of purchase. If you are not satisfied with the course contents or curriculum for any reason, you are entitled to a full refund.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                2. Eligibility for Refunds
              </h2>
              <p>
                To claim your refund under our 7-day guarantee:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your request must be submitted within 7 calendar days of your payment timestamp.</li>
                <li>You must send your refund request from the registered email address used during checkout.</li>
                <li>Please mention your transaction ID or payment ID returned by Razorpay.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                3. Refund Processing
              </h2>
              <p>
                Once a valid refund request is received via email:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We will immediately revoke your access credentials to the course.</li>
                <li>We will initiate the refund through Razorpay to your original payment method.</li>
                <li>The refunded amount will appear in your bank account/card statements within 5 to 7 working days, depending on your bank's processing cycles.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                4. Cancellation Policy
              </h2>
              <p>
                Since our course is a single, one-time payment of ₹149, there are no ongoing monthly subscription cycles or future cancellation options. Your access is lifetime unless you claim a refund within the first 7 days.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                5. How to Initiate a Refund
              </h2>
              <p>
                To request a refund, simply email us at <a href="mailto:support@shinzoskills.shop" className="text-primary hover:underline">support@shinzoskills.shop</a> with the subject line "Refund Request - [Your Name]".
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
