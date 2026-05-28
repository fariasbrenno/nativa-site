import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  { title: 'Ativos isolados que não funcionam', icon: '💊' },
  { title: 'Receitas de internet sem fundamento', icon: '🌐' },
  { title: 'Fortunas com fórmulas vazias', icon: '💸' },
  { title: 'Alívio passageiro, rebote certo', icon: '🔄' },
  { title: 'Orientações rasas e incompletas', icon: '📋' },
];

export function PainPoints() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(var(--forest))' }}>
      {/* Botanical background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" fill="none" style={{ opacity: 0.05 }}>
        <path d="M0 250 Q300 100, 600 250 Q900 400, 1200 250" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M200 0 Q250 150, 300 500" stroke="white" strokeWidth="1" fill="none"/>
        <path d="M900 0 Q950 150, 1000 500" stroke="white" strokeWidth="1" fill="none"/>
      </svg>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow-white mb-4">AS ARMADILHAS COMUNS</span>
          <h2 className="font-display text-3xl lg:text-[2.2rem] text-white leading-tight max-w-2xl mx-auto">
            Se você já tentou de tudo e ainda se sente{' '}
            <span className="kw-glow">refém do próprio corpo</span>…
          </h2>
        </motion.div>

        {/* Cards — só ícone + título */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="card-frost p-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-3xl flex-shrink-0">{card.icon}</span>
              <h3 className="font-display font-bold text-base text-white leading-snug">{card.title}</h3>
            </motion.div>
          ))}
          {/* Último card — fecho */}
          <motion.div
            className="card-frost p-6 flex items-center gap-4 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-3xl flex-shrink-0">⚠️</span>
            <p className="font-body font-light text-sm leading-snug" style={{ color: 'hsl(var(--parchment) / 0.8)' }}>
              O problema <span className="kw-glow font-semibold">não é você</span> — é a abordagem errada.
            </p>
          </motion.div>
        </div>

        {/* Fecho */}
        <motion.p
          className="text-center font-display italic text-lg font-semibold"
          style={{ color: 'hsl(var(--brass))' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Existe uma saída diferente — e ela começa com a <span className="kw-glow">decodificação completa do seu corpo</span>.
        </motion.p>
      </div>
    </section>
  );
}
