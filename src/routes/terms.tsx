import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsAndConditions,
  head: () => ({
    meta: [
      { title: "Terms and Conditions — AI Influencer Course" },
      { name: "description", content: "Terms of Service and Conditions for Shinzo Skills." },
    ],
  }),
});

function TermsAndConditions() {
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
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">Terms &amp; Conditions</h1>
              <p className="text-xs text-muted-foreground mt-1">Last updated: June 15, 2026</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                1. Terms Acceptance
              </h2>
              <p>
                By accessing this website and enrolling in the AI Influencer Course, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                2. Use of License
              </h2>
              <p>
                Upon enrolling, you are granted a personal, non-exclusive, non-transferable license to access the course content for your individual, non-commercial education. You may not copy, share, redistribute, resell, or modify any course videos, guides, templates, or resources.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                3. Payment Terms and Pricing
              </h2>
              <p>
                We offer the AI Influencer Course at a launch offer price of ₹149 (inclusive of all applicable payment charges). Payments are processed securely via Razorpay Standard Checkout. All prices are in Indian Rupees (INR). We reserve the right to modify prices at any time without prior notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                4. Disclaimer
              </h2>
              <p>
                The earnings, followers, or viral results showcased on this site are illustrative examples of what is possible with dedication and effort. They do not constitute a guarantee of future earnings or success. Your individual results will depend on your skill, effort, and creative application of the workflow.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                5. Limitation of Liability
              </h2>
              <p>
                In no event shall Shinzo Skills or its members be liable for any direct, indirect, special, punitive, or consequential damages arising out of your access to or use of the course content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                6. Governing Law
              </h2>
              <p>
                Any claim relating to the Shinzo Skills website or course shall be governed by the laws of India, subject to the jurisdiction of the courts in Noida, Uttar Pradesh, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
