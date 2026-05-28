import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const items = [
  { icon: '📚', label: 'Já comprou cursos ineficazes' },
  { icon: '💊', label: 'Já comprou suplementos caros' },
  { icon: '⚠️', label: 'Tem efeitos colaterais de químicos' },
  { icon: '🚫', label: 'Quer largar os químicos' },
  { icon: '🌙', label: 'Quer sono reparador' },
  { icon: '📋', label: 'Quer passo a passo pronto' },
  { icon: '⚡', label: 'Quer preparo rápido' },
  { icon: '⚖️', label: 'Quer ter o peso estável' },
  { icon: '🧠', label: 'Quer foco mental' },
  { icon: '✨', label: 'Quer pele e cabelos bonitos' },
  { icon: '❤️', label: 'Quer resgatar a libido' },
  { icon: '😌', label: 'Quer equilíbrio emocional' },
  { icon: '💪', label: 'Quer corpo sem dores' },
  { icon: '🌿', label: 'Quer algo 100% natural' },
];

export function IdealCustomer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="pt-0 pb-20 lg:pb-28 overflow-hidden" style={{ background: 'hsl(var(--sage) / 0.28)' }}>
      {/* Wide image banner */}
      <div className="relative w-full overflow-hidden mb-14" style={{ aspectRatio: '21/6', minHeight: 140 }}>
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1800&q=80"
          alt="Mulher confiante e radiante em jardim ensolarado"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
          style={{ background: 'linear-gradient(to right, hsl(var(--forest) / 0.75), hsl(var(--forest) / 0.5) 50%, hsl(var(--forest) / 0.7))' }}
        >
          <span className="eyebrow-white mb-3">PARA QUEM É O NATIVA</span>
          <h2 className="font-display font-bold text-3xl lg:text-[2.4rem] text-white leading-tight">
            O caminho ideal para você que:
          </h2>
        </div>
      </div>

      {/* Icon grid */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 py-4 px-2 bg-white rounded-sm"
              style={{ borderTop: '2px solid hsl(var(--brass) / 0.5)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-body font-light text-center leading-tight text-[0.65rem] lg:text-[0.78rem]"
                style={{ color: 'hsl(var(--forest))' }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-10 font-body font-light text-sm lg:text-base"
          style={{ color: 'hsl(var(--charcoal))' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Se você se identificou com <strong style={{ color: 'hsl(var(--forest))' }}>pelo menos um desses pontos</strong>, o Protocolo Nativa foi feito para você.
        </motion.p>
      </div>
    </section>
  );
}
