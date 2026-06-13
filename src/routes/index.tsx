import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Check,
  Sparkles,
  Flame,
  Gift,
  ShieldCheck,
  Smartphone,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero.png";
import moneyBackImg from "@/assets/money-back.jpg";
import {
  influencers,
  tickerItems,
  masterFeatures,
  curriculum,
  steps,
  bonuses,
  offerIncludes,
  faqs,
  fmt,
} from "@/lib/landing-data";
import { CTAButton } from "@/components/landing/CTAButton";
import { CountdownBar } from "@/components/landing/CountdownBar";
import { SocialProofPopup } from "@/components/landing/SocialProofPopup";
import { getImageManifest } from "@/lib/api/image.functions";
import { EditorProvider, useEditor } from "@/components/landing/EditorProvider";
import { CustomizableImage } from "@/components/landing/CustomizableImage";
import { ImageEditorController } from "@/components/landing/ImageEditorController";

export const Route = createFileRoute("/")({
  loader: async () => {
    const manifest = await getImageManifest();
    return { manifest };
  },
  head: () => ({
    meta: [
      { title: "AI Influencer Course — Create Viral AI Reels & Earn Lakhs" },
      {
        name: "description",
        content:
          "India's #1 AI Influencer Course. Build a hyper-realistic AI influencer, make viral reels and earn lakhs — all from your phone. Launch offer ₹149.",
      },
      { property: "og:title", content: "Create a Real AI Influencer — Go Viral. Earn Lakhs." },
      {
        property: "og:description",
        content: "Build a hyper-realistic AI influencer and earn lakhs from your phone. Just ₹149.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

function SectionHeading({ kicker, title }: { kicker?: string; title: React.ReactNode }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      {kicker && (
        <span className="mb-3 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {kicker}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/40 py-3">
      <div className="flex w-max animate-marquee gap-8">
        {[...tickerItems, ...tickerItems].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-muted-foreground"
          >
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfluencerGallery() {
  const mid = Math.ceil(influencers.length / 2);
  const firstHalf = influencers.slice(0, mid);
  const secondHalf = influencers.slice(mid);

  const row1 = [...firstHalf, ...firstHalf];
  const row2 = [...secondHalf, ...secondHalf];

  return (
    <div className="relative overflow-hidden flex flex-col gap-4">
      {/* Row 1: Right to Left */}
      <div className="flex w-max animate-marquee-fast gap-4 py-2">
        {row1.map((inf, i) => (
          <article
            key={`row1-${i}`}
            className="w-44 shrink-0 overflow-hidden rounded-2xl border border-border bg-card sm:w-52"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <CustomizableImage
                imageKey={`influencer-${inf.imageIndex}`}
                defaultSrc={inf.image}
                alt={`${inf.handle} AI influencer subscription page`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
                @{inf.handle}
              </span>
            </div>
            <div className="p-3 text-center">
              <p className="text-xs text-muted-foreground">
                ₹{inf.price} × {inf.subs} subs
              </p>
              <p className="text-lg font-bold text-primary">₹{fmt(inf.price * inf.subs)}/mo</p>
            </div>
          </article>
        ))}
      </div>

      {/* Row 2: Left to Right */}
      <div className="flex w-max animate-marquee-fast-reverse gap-4 py-2">
        {row2.map((inf, i) => (
          <article
            key={`row2-${i}`}
            className="w-44 shrink-0 overflow-hidden rounded-2xl border border-border bg-card sm:w-52"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <CustomizableImage
                imageKey={`influencer-${inf.imageIndex}`}
                defaultSrc={inf.image}
                alt={`${inf.handle} AI influencer subscription page`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
                @{inf.handle}
              </span>
            </div>
            <div className="p-3 text-center">
              <p className="text-xs text-muted-foreground">
                ₹{inf.price} × {inf.subs} subs
              </p>
              <p className="text-lg font-bold text-primary">₹{fmt(inf.price * inf.subs)}/mo</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Index() {
  const { manifest } = Route.useLoaderData();

  return (
    <EditorProvider initialManifest={manifest}>
      <IndexContent />
    </EditorProvider>
  );
}

function IndexContent() {
  const { editMode } = useEditor();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      {editMode && (
        <div className="sticky top-0 z-50 flex items-center justify-center gap-2 bg-primary/95 text-primary-foreground py-1.5 px-4 text-xs font-semibold backdrop-blur shadow-sm border-b border-primary/20">
          <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
          <span>🔧 Edit Mode Active. Click on any image overlay to upload your custom file.</span>
        </div>
      )}

      {/* offer bar */}
      <div className="flex items-center justify-center gap-2 bg-primary px-4 py-2 text-center text-sm font-bold text-primary-foreground">
        <Flame className="h-4 w-4" />
        LAUNCH OFFER — 95% OFF this Week! · Only ₹149
      </div>
      <CountdownBar />

      {/* HERO */}
      <section className="relative mx-auto max-w-5xl px-4 pb-16 pt-10 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-primary/30 shadow-[0_0_60px_-20px_var(--color-lime-neon)]"
        >
          <CustomizableImage
            imageKey="hero"
            defaultSrc={heroImg}
            alt="Create viral AI reels and earn lakhs every month"
            width={1280}
            height={768}
            className="w-full"
          />
        </motion.div>

        <motion.div {...fade} className="mt-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            India's #1 AI Influencer Course
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Create a <span className="italic text-primary">Real AI Influencer</span>
            <br />
            Go Viral. Earn Lakhs.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            No PC. No paid software. No subscriptions. Just your phone (Android &amp; iOS) and the
            right workflow — taught step-by-step in Video, beginner-friendly.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="text-xl text-muted-foreground line-through">₹3,999</span>
            <span className="rounded-md bg-destructive px-2 py-1 text-xs font-bold text-white">
              95% OFF
            </span>
            <span className="font-display text-4xl font-bold text-primary sm:text-5xl">₹149</span>
          </div>

          <CTAButton size="lg" className="mt-7">
            <Sparkles className="h-5 w-5" />
            Get Instant Access — ₹149
          </CTAButton>
          <p className="mt-3 text-xs text-muted-foreground">
            Secure checkout · Tomorrow's price ₹499
          </p>
        </motion.div>
      </section>

      <Ticker />

      {/* INFLUENCER PROOF */}
      <section className="py-16">
        <motion.div {...fade}>
          <SectionHeading
            title={
              <>
                AI Influencer Pages
                <br />
                <span className="text-primary">Making Lakhs</span>
              </>
            }
          />
          <p className="mx-auto -mt-4 mb-8 max-w-xl px-4 text-center text-sm text-muted-foreground">
            These are real subscription pages running right now — built using the exact workflow
            inside this course.
          </p>
        </motion.div>
        <InfluencerGallery />
        <div className="mt-10 text-center">
          <CTAButton size="lg">Start Your AI Page — ₹149</CTAButton>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-card/40 py-16">
        <motion.div {...fade} className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Nothing to lose. Everything to gain.
          </h2>
          <CustomizableImage
            imageKey="money-back"
            defaultSrc={moneyBackImg}
            alt="100% Money-Back Guarantee — 7-day risk-free refund"
            loading="lazy"
            width={300}
            height={300}
            className="mx-auto my-8 w-56 rounded-2xl"
          />
          <CTAButton size="lg">Start Risk-Free — ₹149</CTAButton>
        </motion.div>
      </section>

      {/* MASTER + CURRICULUM */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <motion.div {...fade} className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
              Master the Workflow
            </span>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Master AI Influencer &amp; Earn Lakhs
            </h2>
            <ul className="mt-6 space-y-3">
              {masterFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
              What you'll learn
            </span>
            <h3 className="font-display text-2xl font-bold">The full A→Z system</h3>
            <ol className="mt-6 space-y-4">
              {curriculum.map((c, i) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground/90">{c}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
        <div className="mt-10 text-center">
          <CTAButton size="lg">Get Instant Access — ₹149</CTAButton>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-card/40 py-16">
        <motion.div {...fade}>
          <SectionHeading kicker="3 Simple Steps" title="Watch. Build. Earn." />
          <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <span className="font-display text-5xl font-bold text-primary/30">{s.n}</span>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BONUSES */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <motion.div {...fade}>
          <SectionHeading
            kicker="🎁 Free Bonuses Worth ₹10,000"
            title="All Free Today"
          />
          <p className="mx-auto -mt-4 mb-8 max-w-xl text-center text-sm text-muted-foreground">
            Premium tools &amp; assets — yours when you enroll right now.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {bonuses.map((b) => (
              <div
                key={b.name}
                className="relative rounded-2xl border border-border bg-card p-5 text-center"
              >
                <Gift className="mx-auto h-7 w-7 text-primary" />
                <h3 className="mt-3 font-bold">{b.name}</h3>
                <p className="text-xs text-muted-foreground">{b.sub}</p>
                <span className="mt-3 inline-block rounded-full bg-primary/15 px-3 py-0.5 text-xs font-bold text-primary">
                  FREE
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PRICING */}
      <section className="bg-card/40 py-16">
        <motion.div {...fade} className="mx-auto max-w-lg px-4">
          <SectionHeading
            kicker="Limited Time Offer"
            title="Everything you get for just ₹149"
          />
          <div className="rounded-3xl border border-primary/30 bg-card p-6 shadow-[0_0_50px_-20px_var(--color-lime-neon)] sm:p-8">
            <ul className="space-y-3">
              {offerIncludes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90">{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-lg text-muted-foreground line-through">₹3,999</span>
              <span className="font-display text-4xl font-bold text-primary">₹149</span>
              <span className="rounded-md bg-destructive px-2 py-1 text-xs font-bold text-white">
                95% OFF
              </span>
            </div>
            <CTAButton size="lg" className="mt-6 w-full">
              Buy Now — ₹149
            </CTAButton>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              <ShieldCheck className="mr-1 inline h-3.5 w-3.5" />
              Secure checkout · Tomorrow's price ₹499
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-4 py-16">
        <motion.div {...fade}>
          <SectionHeading title="Questions? Answers." />
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton size="lg">Enroll Now — ₹149</CTAButton>
          </div>
        </motion.div>
      </section>

      {/* footer spacer for sticky bar */}
      <div className="h-24" />

      {/* STICKY BOTTOM BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Smartphone className="hidden h-6 w-6 text-primary sm:block" />
            <div>
              <p className="text-sm font-bold leading-none">Enroll Now</p>
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-primary">₹149</span>{" "}
                <span className="line-through">₹3,999</span>
              </p>
            </div>
          </div>
          <CTAButton>Enroll Now — ₹149</CTAButton>
        </div>
      </div>

      <SocialProofPopup />
      <ImageEditorController />
    </div>
  );
}
