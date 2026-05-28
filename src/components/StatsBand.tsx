import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return count;
}

function StatItem({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useCountUp(value, 2000, inView);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 px-8 py-2">
      <span className="font-display font-bold leading-none" style={{ fontSize: 'clamp(3rem,7vw,5rem)', color: 'hsl(var(--brass))' }}>
        {count}{suffix}
      </span>
      <span className="font-body font-light italic text-white text-sm tracking-[0.1em] text-center" style={{ maxWidth: 140 }}>
        {label}
      </span>
    </div>
  );
}

export function StatsBand() {
  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{ background: 'hsl(var(--forest))' }}
    >
      {/* Botanical SVG background — white 10% opacity */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 160"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.08 }}
      >
        {/* Large branch left */}
        <path d="M-40 120 C80 80, 160 100, 280 60 C320 45, 340 30, 400 20" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M180 70 C190 50, 210 45, 220 60" stroke="white" strokeWidth="1" fill="none"/>
        <path d="M280 60 C295 35, 310 30, 315 50" stroke="white" strokeWidth="1" fill="none"/>
        <ellipse cx="225" cy="52" rx="12" ry="7" transform="rotate(-20 225 52)" stroke="white" strokeWidth="1" fill="none"/>
        <ellipse cx="315" cy="42" rx="10" ry="6" transform="rotate(-35 315 42)" stroke="white" strokeWidth="1" fill="none"/>
        {/* Large branch right */}
        <path d="M1240 120 C1120 80, 1040 100, 920 60 C880 45, 860 30, 800 20" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M1020 70 C1010 50, 990 45, 980 60" stroke="white" strokeWidth="1" fill="none"/>
        <ellipse cx="985" cy="52" rx="12" ry="7" transform="rotate(20 985 52)" stroke="white" strokeWidth="1" fill="none"/>
        {/* Center leaves */}
        <path d="M580 0 C590 30, 600 40, 600 80" stroke="white" strokeWidth="1" fill="none"/>
        <ellipse cx="588" cy="30" rx="9" ry="5" transform="rotate(-30 588 30)" stroke="white" strokeWidth="1" fill="none"/>
        <ellipse cx="612" cy="50" rx="9" ry="5" transform="rotate(25 612 50)" stroke="white" strokeWidth="1" fill="none"/>
      </svg>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <StatItem value={10}   label="minutos por dia" />
          <StatItem value={5000} suffix="+" label="mulheres transformadas" />
          <StatItem value={100}  suffix="%" label="Natural e Ancestral" />
        </div>
      </div>
    </section>
  );
}
