import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const annualIncludes = [
  'Tudo do plano Essência + protocolos exclusivos.',
  'Bônus: Guia de Desintoxicação.',
  'Bônus: Cronograma de Implementação.',
  '40% off — Economia de R$ 200,00.',
  'Garantia de 7 dias.',
];

const monthlyIncludes = [
  'Biblioteca completa de Receitas Ancestrais.',
  'Assistente Virtual 24h.',
  'Guia visual de preparo.',
  'Atualizações mensais de novas fórmulas.',
];

function CheckIcon({ gold = false }: { gold?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8" stroke={gold ? 'hsl(37,34%,54%)' : 'rgba(255,255,255,0.5)'} strokeWidth="1"/>
      <path d="M5 9 L8 12 L13 6" stroke={gold ? 'hsl(37,34%,54%)' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" ref={ref} className="relative overflow-hidden" style={{ background: 'hsl(var(--forest))' }}>
      {/* Botanical background pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" style={{ opacity: 0.05 }}>
        <path d="M0 400 C200 200, 400 600, 600 400 C800 200, 1000 600, 1200 400" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M0 200 C150 100, 300 300, 450 200 C600 100, 750 300, 900 200" stroke="white" strokeWidth="1.2" fill="none"/>
        <path d="M300 0 C350 200, 400 400, 350 600" stroke="white" strokeWidth="1" fill="none"/>
        <path d="M900 0 C950 200, 1000 400, 950 600" stroke="white" strokeWidth="1" fill="none"/>
        <ellipse cx="150" cy="300" rx="50" ry="25" transform="rotate(-20 150 300)" stroke="white" strokeWidth="0.8" fill="none"/>
        <ellipse cx="1050" cy="500" rx="50" ry="25" transform="rotate(20 1050 500)" stroke="white" strokeWidth="0.8" fill="none"/>
      </svg>

      {/* Wide image banner */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '21/5', minHeight: 140 }}>
        <img
          src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=1800&q=80"
          alt="Duas mulheres maduras rindo e celebrando ao ar livre, cheias de vitalidade"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsl(var(--forest) / 0.3) 0%, hsl(var(--forest)) 100%)' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pb-20 lg:pb-28">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow-white mb-4">INVESTIMENTO</span>
          <h2 className="font-display text-3xl lg:text-[2.6rem] text-white">
            Invista na <span className="kw-glow">Sua Nova Fase</span>
          </h2>
          <p className="font-body font-light text-white/70 mt-3 text-base">
            Acesso exclusivo para uma <span className="kw-glow">menopausa sem sintomas</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start mb-10">
          {/* ── ANNUAL PLAN (highlighted) ── */}
          <motion.div
            className="relative rounded-sm overflow-hidden"
            style={{
              background: 'hsl(var(--parchment))',
              boxShadow: '0 0 0 2px hsl(var(--brass)), 0 20px 60px hsl(var(--brass) / 0.3)',
            }}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Badge */}
            <div className="text-center py-2 font-body font-semibold text-xs tracking-widest uppercase" style={{ background: 'hsl(var(--brass))', color: 'white' }}>
              <span className="kw-pulse">✦ O MAIS ESCOLHIDO ✦</span>
            </div>

            <div className="p-8">
              <h3 className="font-display font-bold text-2xl mb-1" style={{ color: 'hsl(var(--forest))' }}>SOBERANA NATIVA</h3>
              <p className="font-body font-light text-sm tracking-widest uppercase mb-6" style={{ color: 'hsl(var(--brass))' }}>Plano Anual</p>

              <div className="mb-6">
                <span className="font-body font-light text-sm line-through" style={{ color: 'hsl(var(--charcoal) / 0.5)' }}>De R$ 497,00</span>
                <div className="flex items-end gap-2 mt-1">
                  <span className="font-display font-bold text-4xl" style={{ color: 'hsl(var(--forest))' }}>12x R$ 29,70</span>
                </div>
                <span className="font-body font-light text-sm" style={{ color: 'hsl(var(--charcoal))' }}>ou <strong style={{ color: 'hsl(var(--forest))' }}>R$ 297,00 à vista</strong></span>
              </div>

              <ul className="flex flex-col gap-3 mb-8">
                {annualIncludes.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckIcon gold />
                    <span className="font-body font-light text-sm leading-snug" style={{ color: 'hsl(var(--charcoal))' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="block w-full text-center py-4 font-body font-medium text-white text-sm tracking-widest uppercase transition-all duration-300 hover:brightness-110 hover:shadow-lg rounded-sm"
                style={{ background: 'hsl(var(--brass))', letterSpacing: '0.1em' }}
              >
                Garantir acesso anual
              </a>
            </div>
          </motion.div>

          {/* ── MONTHLY PLAN ── */}
          <motion.div
            className="rounded-sm overflow-hidden"
            style={{ background: 'hsl(255 255% 100% / 0.07)', border: '1px solid hsl(var(--brass) / 0.3)' }}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="p-8">
              <h3 className="font-display font-bold text-2xl mb-1 text-white">ESSÊNCIA NATIVA</h3>
              <p className="font-body font-light text-sm tracking-widest uppercase mb-6" style={{ color: 'hsl(var(--brass))' }}>Plano Mensal</p>

              <div className="mb-6">
                <span className="font-body font-light text-sm line-through" style={{ color: 'rgba(255,255,255,0.4)' }}>De R$ 67,90</span>
                <div className="flex items-end gap-2 mt-1">
                  <span className="font-display font-bold text-4xl text-white">R$ 47,90</span>
                  <span className="font-body font-light text-white/60 mb-1">/mês</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8">
                {monthlyIncludes.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckIcon />
                    <span className="font-body font-light text-sm leading-snug text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="block w-full text-center py-4 font-body font-medium text-sm tracking-widest uppercase border transition-colors duration-300 hover:bg-brass/10 rounded-sm"
                style={{ borderColor: 'hsl(var(--brass))', color: 'hsl(var(--brass))', letterSpacing: '0.1em' }}
              >
                Garantir acesso mensal
              </a>
            </div>
          </motion.div>
        </div>

        {/* Urgency box */}
        <motion.div
          className="rounded-sm p-7 mb-10"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid hsl(var(--brass) / 0.25)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="eyebrow-white mb-3"><span className="kw-pulse">⚠ ATENÇÃO</span></p>
          <p className="font-body font-light text-sm leading-[1.85] text-white/80">
            <span className="kw-glow">Valor promocional por tempo limitado.</span>{' '}
            Após o fim da campanha, os preços voltam a R$ 67,90 (mensal) e R$ 497,00 (anual). Aproveite o{' '}
            <span className="kw-glow">desconto de 40%</span>{' '}
            enquanto durar.
          </p>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 lg:gap-10"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {[
            { icon: '🔒', label: 'Pagamento 100% Seguro' },
            { icon: '📱', label: 'iOS e Android' },
            { icon: '↩', label: 'Garantia de 7 dias' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <span className="font-body font-light text-sm" style={{ color: 'hsl(var(--brass))' }}>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
