import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

function useCountdown(totalSeconds: number) {
  const [remaining, setRemaining] = useState(totalSeconds);
  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : totalSeconds));
    }, 1000);
    return () => clearInterval(id);
  }, [totalSeconds]);

  const h = Math.floor(remaining / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;
  return { h, m, s };
}

const pad = (n: number) => n.toString().padStart(2, "0");

function Box({ value, unit }: { value: number; unit: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-black/30 px-2 py-1 font-mono text-sm font-bold tabular-nums text-white">
      {pad(value)}
      <span className="ml-0.5 text-xs opacity-70">{unit}</span>
    </span>
  );
}

export function CountdownBar() {
  const { h, m, s } = useCountdown(23 * 3600 + 59 * 60 + 55);
  return (
    <div className="w-full bg-destructive py-2.5 text-center text-sm font-medium text-white">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          Offer ends in
        </span>
        <Box value={h} unit="h" />
        <span className="font-bold">:</span>
        <Box value={m} unit="m" />
        <span className="font-bold">:</span>
        <Box value={s} unit="s" />
        <span className="opacity-90">· Price jumps to ₹499 after</span>
      </div>
    </div>
  );
}
