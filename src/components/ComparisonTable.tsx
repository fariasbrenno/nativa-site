import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const rows = [
  {
    synthetic: 'Fogachos: remédios te deixam letárgica e sem energia.',
    natural: 'Equilíbrio Térmico: receitas que estabilizam sua temperatura naturalmente.',
  },
  {
    synthetic: "Insônia: pílulas te apagam à força, mas você acorda com 'ressaca'.",
    natural: 'Sono Reparador: acorde com a mente clara e descansada.',
  },
  {
    synthetic: 'Ganho de Peso e Inchaço: retenção de líquido e metabolismo travado.',
    natural: 'Leveza: ingredientes que desinflamam e aceleram o metabolismo.',
  },
  {
    synthetic: 'Oscilações de Humor: montanha-russa emocional sem paciência.',
    natural: 'Estabilidade Emocional: ativos que equilibram o sistema nervoso.',
  },
  {
    synthetic: 'Baixa Libido: hormônios que anulam seu desejo.',
    natural: 'Vitalidade Retomada: estímulo natural para recuperar o desejo e a autoconfiança.',
  },
  {
    synthetic: "Névoa Mental: sempre 'aérea', com dificuldade de foco.",
    natural: 'Clareza Mental: nutrição que devolve agilidade de raciocínio.',
  },
  {
    synthetic: 'Pele e Cabelos Secos: ressecamento que hidratação comum não resolve.',
    natural: 'Nutrição de Dentro para Fora: viço da pele e força dos fios.',
  },
];

export function ComparisonTable() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 lg:py-28" style={{ background: 'hsl(var(--sage) / 0.18)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-4">SINTÉTICOS VS. NATURAL</span>
          <h2 className="font-display text-3xl lg:text-[2.2rem] leading-tight max-w-3xl mx-auto" style={{ color: 'hsl(var(--forest))' }}>
            A medicina tradicional <span className="kw-strong">cala o corpo com químicos</span>. O Protocolo Nativa dá ao seu organismo{' '}
            <span className="kw">o que ele precisa para se reequilibrar</span>.
          </h2>
        </motion.div>

        {/* Banner — mobile: clean 50/50, desktop: diagonal */}
        <motion.div
          className="relative w-full rounded-sm mb-10 overflow-hidden"
          style={{ height: 160 }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* ── Mobile: two equal columns, no clipPath ── */}
          <div className="flex h-full lg:hidden">
            <div className="relative w-1/2 h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=700&q=80"
                alt="Comprimidos sintéticos"
                className="w-full h-full object-cover grayscale"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'rgba(42,26,26,0.62)' }}
              >
                <span className="font-display font-bold text-white text-lg tracking-widest leading-tight text-center px-2">
                  SINTÉTICOS
                </span>
              </div>
            </div>
            <div className="relative w-1/2 h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&q=80"
                alt="Plantas naturais medicinais"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'hsl(var(--forest) / 0.56)' }}
              >
                <span
                  className="font-display font-bold text-lg tracking-widest leading-tight text-center px-2"
                  style={{ color: 'hsl(var(--brass))' }}
                >
                  NATIVA
                </span>
              </div>
            </div>
          </div>

          {/* ── Desktop: diagonal split ── */}
          <div className="hidden lg:block absolute inset-0" style={{ height: 220 }}>
            {/* Images + overlays — clipped */}
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(0 0, 57% 0, 43% 100%, 0 100%)' }}>
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&q=80"
                alt="Comprimidos e medicamentos sintéticos"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(42,26,26,0.55)' }} />
            </div>
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(57% 0, 100% 0, 100% 100%, 43% 100%)' }}>
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=80"
                alt="Ervas e plantas naturais medicinais"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'hsl(var(--forest) / 0.5)' }} />
            </div>
            {/* Text labels — outside clip, centered in each half */}
            <div className="absolute inset-0 flex pointer-events-none" style={{ height: 160 }}>
              <div className="w-1/2 flex items-center justify-center">
                <span className="font-display font-bold text-3xl text-white tracking-wider drop-shadow-lg">SINTÉTICOS</span>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <span className="font-display font-bold text-3xl tracking-wider drop-shadow-lg" style={{ color: 'hsl(var(--brass))' }}>NATIVA</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Comparison grid — zero horizontal scroll ── */}
        <motion.div
          className="rounded-sm overflow-hidden"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Desktop header (hidden on mobile) */}
          <div className="hidden sm:grid grid-cols-2">
            <div
              className="py-4 px-6 font-display font-bold text-white text-base lg:text-lg"
              style={{ background: '#3A2A2A', borderLeft: '4px solid #8B0000' }}
            >
              O Que Te Oferecem Hoje
            </div>
            <div
              className="py-4 px-6 font-display font-bold text-white text-base lg:text-lg"
              style={{ background: 'hsl(var(--forest))', borderLeft: '4px solid hsl(var(--brass))' }}
            >
              A Experiência Nativa
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{ background: i % 2 === 0 ? 'white' : 'hsl(var(--parchment))' }}
            >
              {/* Synthetic cell */}
              <div
                className="py-3 px-4 sm:py-4 sm:px-6 font-body font-light text-sm lg:text-base leading-relaxed"
                style={{ borderLeft: '4px solid #8B0000', color: '#5a3a3a' }}
              >
                {/* Mobile-only micro-label */}
                <span
                  className="sm:hidden block font-body font-semibold tracking-widest uppercase mb-1"
                  style={{ fontSize: '0.58rem', color: '#8B0000' }}
                >
                  SINTÉTICOS
                </span>
                {row.synthetic}
              </div>

              {/* Natural cell */}
              <div
                className="py-3 px-4 sm:py-4 sm:px-6 font-body font-light text-sm lg:text-base leading-relaxed"
                style={{
                  borderLeft: '4px solid hsl(var(--brass))',
                  color: 'hsl(var(--forest))',
                  background: i % 2 === 0 ? 'hsl(var(--sage) / 0.09)' : 'hsl(var(--sage) / 0.18)',
                }}
              >
                {/* Mobile-only micro-label */}
                <span
                  className="sm:hidden block font-body font-semibold tracking-widest uppercase mb-1"
                  style={{ fontSize: '0.58rem', color: 'hsl(var(--forest))' }}
                >
                  NATIVA
                </span>
                <strong className="font-semibold">{row.natural.split(':')[0]}:</strong>
                {row.natural.includes(':') ? row.natural.substring(row.natural.indexOf(':') + 1) : ''}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Closing text */}
        <motion.div
          className="mt-10 flex flex-col gap-4 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="font-display font-semibold italic text-lg" style={{ color: 'hsl(var(--forest))' }}>
            Se você aceita <span className="kw">"efeitos colaterais"</span> como parte da rotina, o Nativa{' '}
            <span className="kw-strong">não é para você</span>.
          </p>
          <p className="font-body font-light leading-[1.85] text-base" style={{ color: 'hsl(var(--charcoal))' }}>
            Remédios sintéticos <span className="kw-strong">mascaram sintomas</span> e trocam um mal por outro. O aplicativo Nativa entrega{' '}
            <span className="kw">fórmulas testadas para cada queixa da menopausa</span>{' '}
            — <span className="kw-strong">100% naturais, ancestrais e seguras</span>. É o fim do pânico e o início de um{' '}
            <span className="kw">novo ciclo de vitalidade</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
