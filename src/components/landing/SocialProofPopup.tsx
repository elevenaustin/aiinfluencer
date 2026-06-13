import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { socialProofNames } from "@/lib/landing-data";

export function SocialProofPopup() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
        timer = setTimeout(() => {
          setIndex((i) => (i + 1) % socialProofNames.length);
          cycle();
        }, 4000);
      }, 5000);
    };
    const start = setTimeout(cycle, 2500);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, []);

  const [name, city] = socialProofNames[index];
  const minutes = ((index * 3) % 11) + 2;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -40, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="fixed bottom-24 left-4 z-50 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-2xl backdrop-blur max-w-[calc(100vw-2rem)]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-foreground">
              {name} from {city}
            </p>
            <p className="text-xs text-muted-foreground">
              just enrolled · <span className="text-primary">Verified ✓</span>
            </p>
            <p className="text-[10px] text-muted-foreground/70">{minutes} min ago</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
