import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone, MapPin, Building } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactUs,
  head: () => ({
    meta: [
      { title: "Contact Us — AI Influencer Course" },
      { name: "description", content: "Get in touch with Shinzo Skills support team." },
    ],
  }),
});

function ContactUs() {
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
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">Contact Us</h1>
              <p className="text-xs text-muted-foreground mt-1">We are here to support you 24/7</p>
            </div>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <p>
              If you have any questions about the AI Influencer Course, payment queries, checkout issues, or require refund assistance, please reach out to us using the contact details below:
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card/40">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email Support</h3>
                  <a href="mailto:support@shinzoskills.shop" className="text-primary hover:underline text-sm font-semibold">
                    support@shinzoskills.shop
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Response time: Within 12-24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card/40">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Helpline Number</h3>
                  <a href="tel:+919876543210" className="text-primary hover:underline text-sm font-semibold">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Available: 10:00 AM - 6:00 PM IST (Mon-Sat)</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card/40">
              <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Office Address</h3>
                <p className="text-sm font-semibold text-foreground">Shinzo Skills HQ</p>
                <p className="text-sm mt-1">
                  1st Floor, Tower A, Sector 62,<br />
                  Noida, Uttar Pradesh, 201301,<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card/40">
              <Building className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Legal Entity</h3>
                <p className="text-sm">
                  The AI Influencer Course and Shinzo Skills website are owned and operated under the registered legal entity: <strong className="text-foreground">Shinzo Skills Private Limited</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
