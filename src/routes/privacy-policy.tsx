import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — AI Influencer Course" },
      { name: "description", content: "Privacy Policy and data protection terms for Shinzo Skills." },
    ],
  }),
});

function PrivacyPolicy() {
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
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
              <p className="text-xs text-muted-foreground mt-1">Last updated: June 15, 2026</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                1. Introduction
              </h2>
              <p>
                Welcome to Shinzo Skills ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs our privacy practices regarding information collected from users who enroll in our online courses.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                2. Information We Collect
              </h2>
              <p>
                We collect personal information that you voluntarily provide to us when registering for the course or completing a purchase. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Personal Identifiers: Full name, email address, and phone number.</li>
                <li>Payment Information: Credit card number, billing address, or UPI details (processed securely by Razorpay; we do not store your raw card credentials).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide, operate, and maintain our online course platform.</li>
                <li>Process your payment transactions via Razorpay.</li>
                <li>Send you purchase confirmations, course access links, and support updates.</li>
                <li>Respond to customer service inquiries or refund requests.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                4. Data Security and Sharing
              </h2>
              <p>
                We implement robust security measures to protect your personal information. Your transaction data is processed through secure, PCI-DSS compliant payment gateways (Razorpay) using SSL encryption. We do not sell, trade, or rent your personal identification information to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                5. Your Data Protection Rights
              </h2>
              <p>
                Depending on your location, you have the right to request access to, correction of, or deletion of the personal information we hold about you. To exercise these rights, please contact us at <a href="mailto:support@shinzoskills.shop" className="text-primary hover:underline">support@shinzoskills.shop</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                6. Changes to This Policy
              </h2>
              <p>
                We reserve the right to update this Privacy Policy at any time. When we do, we will update the "Last updated" date at the top of this page. We encourage users to frequently check this page for any changes.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
