import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="8" y="6" width="20" height="24" rx="2"/>
        <path d="M13 14 L23 14 M13 18 L23 18 M13 22 L19 22"/>
        <circle cx="26" cy="10" r="5" fill="hsl(37,34%,54%)" stroke="none"/>
        <path d="M24 10 L25.5 11.5 L28 8.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'A MEDICINA CONVENCIONAL',
    title: 'Décadas de fórmulas sintéticas',
    desc: 'Hormônios e remédios que mascaram o sintoma — e trocam um mal por outro.',
    bg: 'hsl(var(--parchment))',
    accent: '#8B4A3A',
  },
  {
    num: '02',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M18 4 C18 4, 30 12, 30 20 C30 27, 24 32, 18 32 C12 32, 6 27, 6 20 C6 12, 18 4, 18 4Z"/>
        <path d="M18 4 L18 32" strokeWidth="0.8"/>
        <path d="M12 14 C15 10, 21 10, 24 14" strokeWidth="0.8" fill="none"/>
        <path d="M10 20 C13 16, 23 16, 26 20" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
    label: 'A SABEDORIA ANCESTRAL',
    title: 'Milênios de conhecimento vivo',
    desc: 'Mulheres da Amazônia floresciam na menopausa — raízes e rituais que reativam o corpo naturalmente.',
    bg: 'hsl(var(--sage) / 0.3)',
    accent: 'hsl(var(--forest))',
  },
  {
    num: '03',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="18" cy="18" r="12"/>
        <path d="M18 10 L18 18 L23 23"/>
        <circle cx="18" cy="18" r="3" fill="hsl(37,34%,54%)" stroke="none"/>
        <path d="M8 18 L6 18 M30 18 L28 18 M18 8 L18 6 M18 30 L18 32"/>
      </svg>
    ),
    label: 'A CIÊNCIA CONFIRMA',
    title: 'Natureza + precisão moderna',
    desc: 'Harvard, Nature e Johns Hopkins validaram o que os ancestrais sabiam: o corpo não precisa de químicos.',
    bg: 'hsl(var(--parchment))',
    accent: 'hsl(var(--brass))',
  },
];

export function Narrative() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 lg:py-28" style={{ background: 'hsl(var(--parchment))' }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-4">A CIÊNCIA ANCESTRAL</span>
          <h2 className="font-display text-3xl lg:text-[2.2rem] max-w-2xl mx-auto leading-tight" style={{ color: 'hsl(var(--forest))' }}>
            Como a natureza sempre soube o que a medicina demorou para entender
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, hsl(var(--brass) / 0.4), hsl(var(--brass) / 0.4), transparent)', zIndex: 0 }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.18 }}
              >
                {/* Icon circle */}
                <div className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center mb-5 border"
                  style={{
                    background: step.bg,
                    borderColor: 'hsl(var(--brass) / 0.35)',
                    color: 'hsl(var(--forest))',
                    boxShadow: '0 0 0 6px hsl(var(--parchment))',
                  }}>
                  {step.icon}
                  {/* Step number */}
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center font-body font-semibold text-[10px] text-white"
                    style={{ background: 'hsl(var(--brass))' }}>
                    {step.num}
                  </span>
                </div>

                <span className="eyebrow mb-2">{step.label}</span>
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-3 leading-snug" style={{ color: 'hsl(var(--forest))' }}>
                  {step.title}
                </h3>
                <p className="font-body font-light text-sm lg:text-base leading-relaxed max-w-xs" style={{ color: 'hsl(var(--charcoal))' }}>
                  {step.desc}
                </p>

                {/* Mobile arrow */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden my-4" style={{ color: 'hsl(var(--brass) / 0.5)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 5 L12 19 M6 13 L12 19 L18 13"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <p className="font-display italic text-lg font-semibold" style={{ color: '#4A5240' }}>
            "O corpo <span className="kw">não precisa de substitutos químicos</span>. Precisa de{' '}
            <span className="kw-strong">estímulos que reativem seus receptores hormonais naturalmente</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
