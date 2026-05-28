import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const symptoms = [
  { label: 'Fogachos e calores', emoji: '🔥' },
  { label: 'Insônia e sono ruim', emoji: '🌙' },
  { label: 'Névoa mental', emoji: '🧠' },
  { label: 'Irritabilidade', emoji: '😤' },
  { label: 'Libido baixa', emoji: '💔' },
  { label: 'Peso e inchaço', emoji: '⚖️' },
];

export function SymptomsChecklist() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const count = checked.size;

  return (
    <section ref={ref} className="py-16 lg:py-20" style={{ background: 'hsl(var(--forest))' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow-white mb-4">RECONHECE ALGUM DESSES SINAIS?</span>
          <h2 className="font-display text-2xl lg:text-3xl text-white mb-10 leading-tight">
            Marque os sintomas que você sente
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {symptoms.map((s, i) => {
            const isChecked = checked.has(i);
            return (
              <motion.button
                key={i}
                onClick={() => toggle(i)}
                className="relative flex flex-col items-center gap-2 py-5 px-3 rounded-lg border-2 transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: isChecked ? 'hsl(var(--brass))' : 'rgba(255,255,255,0.15)',
                  background: isChecked ? 'hsl(var(--brass) / 0.15)' : 'rgba(255,255,255,0.04)',
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileTap={{ scale: 0.96 }}
              >
                {/* Check mark */}
                <AnimatePresence>
                  {isChecked && (
                    <motion.div
                      className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'hsl(var(--brass))' }}
                      initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5 L4 7 L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="text-2xl">{s.emoji}</span>
                <span className="font-body font-light text-xs text-center leading-snug"
                  style={{ color: isChecked ? 'hsl(var(--brass))' : 'rgba(255,255,255,0.75)' }}>
                  {s.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Result message */}
        <AnimatePresence mode="wait">
          {count === 0 ? (
            <motion.p key="hint"
              className="font-body font-light text-sm"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              Toque nos sintomas que você reconhece ↑
            </motion.p>
          ) : (
            <motion.div key="result"
              className="py-5 px-6 rounded-lg"
              style={{ background: 'hsl(var(--brass) / 0.12)', border: '1px solid hsl(var(--brass) / 0.4)' }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-xl lg:text-2xl font-bold mb-1" style={{ color: 'hsl(var(--brass))' }}>
                {count} {count === 1 ? 'sintoma identificado' : 'sintomas identificados'}
              </p>
              <p className="font-body font-light text-sm text-white/80">
                O Protocolo Nativa age em <strong className="text-white font-semibold">todos eles</strong> — em apenas 10 minutos por dia.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
