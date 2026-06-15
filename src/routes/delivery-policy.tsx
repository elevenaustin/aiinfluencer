import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Send } from "lucide-react";

export const Route = createFileRoute("/delivery-policy")({
  component: DeliveryPolicy,
  head: () => ({
    meta: [
      { title: "Shipping & Delivery Policy — AI Influencer Course" },
      { name: "description", content: "Shipping and Delivery terms for Shinzo Skills digital products." },
    ],
  }),
});

function DeliveryPolicy() {
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
              <Send className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">Shipping &amp; Delivery</h1>
              <p className="text-xs text-muted-foreground mt-1">Instant Digital Access Details</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                1. Digital Nature of Service
              </h2>
              <p>
                The AI Influencer Course is a 100% digital product. It comprises pre-recorded training videos, PDF workflow templates, bonus asset packs, and guides. There is no physical product, book, DVD, or hardware shipped to your physical address.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                2. Instant Delivery Timeline
              </h2>
              <p>
                Delivery of this course is automated and instant:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Upon successful confirmation of payment on the Razorpay checkout, you will be redirected to the secure course registration portal immediately.</li>
                <li>Simultaneously, a purchase confirmation email containing your direct access link, login credentials, and course instructions will be sent to the email address registered during checkout.</li>
                <li>This email delivery occurs automatically within 5 minutes of transaction completion.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                3. Delivery Failures and Troubleshooting
              </h2>
              <p>
                If you do not receive the access email within 15 minutes of completing your payment:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Please check your email client's "Spam," "Junk," or "Promotions" folders (automated emails can sometimes be routed there).</li>
                <li>Ensure the email address you entered during purchase was spelled correctly.</li>
                <li>If the email is still missing, please contact support immediately at <a href="mailto:support@shinzoskills.shop" className="text-primary hover:underline">support@shinzoskills.shop</a> or call our support line.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                4. Shipping Charges
              </h2>
              <p>
                Since delivery is entirely online/digital, there are zero shipping fees, packaging costs, or delivery convenience charges associated with enrolling in the course.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
