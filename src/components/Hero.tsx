import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background image ── */}
      <motion.img
        src="/images/hero-woman.png"
        alt="Mulher brasileira madura elegante em jardim botânico com luz dourada"
        className="absolute inset-0 w-full h-full object-cover object-top"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />

      {/* ── Overlay: dark on left for readability, fades to reveal image on right ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(10,24,12,0.97) 0%, rgba(10,24,12,0.95) 42%, rgba(10,24,12,0.80) 65%, rgba(10,24,12,0.45) 100%)',
        }}
      />
      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(10,24,12,0.85), transparent)' }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-main mx-auto px-8 md:px-14 lg:px-20 py-24">
        <motion.div
          className="max-w-xl lg:max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <span className="eyebrow-white mb-5">NATIVA — PROTOCOLO ANCESTRAL</span>

          {/* H1 */}
          <h1
            className="font-display text-4xl md:text-5xl lg:text-[3.1rem] xl:text-[3.5rem] leading-tight mb-8"
            style={{ color: 'white' }}
          >
            Mulheres na menopausa estão{' '}
            <span style={{
              textDecoration: 'underline',
              textDecorationColor: 'hsl(37,34%,60%)',
              textUnderlineOffset: '5px',
            }}>
              recuperando o controle do corpo
            </span>{' '}
            e{' '}
            <span style={{
              textDecoration: 'underline',
              textDecorationColor: 'hsl(37,34%,60%)',
              textUnderlineOffset: '5px',
            }}>
              silenciando os sintomas
            </span>{' '}
            em apenas{' '}
            <span style={{ color: 'hsl(37,44%,68%)' }}>10 minutos por dia</span>{' '}
            de forma{' '}
            <span style={{
              textDecoration: 'underline',
              textDecorationColor: 'hsl(37,34%,60%)',
              textUnderlineOffset: '5px',
            }}>
              100% natural
            </span>.
          </h1>

          {/* Pull quote */}
          <motion.div
            className="mb-9 pl-5 py-1"
            style={{ borderLeft: '2px solid hsl(37,34%,54%)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <span
              className="font-display text-5xl leading-none block mb-2"
              style={{ color: 'hsl(37,44%,58%)', lineHeight: '1' }}
            >
              "
            </span>
            <p className="font-body font-light leading-relaxed text-sm lg:text-base" style={{ color: 'hsl(40,20%,82%)' }}>
              Com o{' '}
              <span className="font-semibold text-white">aplicativo NATIVA</span>
              , toda mulher na menopausa acessa{' '}
              <span className="font-semibold text-white">protocolos ancestrais</span>{' '}
              para{' '}
              <span className="font-semibold text-white">silenciar as ondas de calor</span>
              ,{' '}
              <span className="font-semibold text-white">eliminar a névoa mental</span>{' '}
              e recuperar o{' '}
              <span className="font-semibold text-white">sono</span>, a{' '}
              <span className="font-semibold text-white">libido</span>{' '}
              e o{' '}
              <span className="font-semibold text-white">equilíbrio de humor</span>{' '}
              — de uma só vez.
            </p>
          </motion.div>

          {/* Micro social proof */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex -space-x-2">
              {[
                '/images/avatar-maria.png',
                '/images/avatar-ana.png',
                '/images/avatar-juliana.png',
                '/images/avatar-lucia.png',
                '/images/avatar-rosa.png',
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white overflow-hidden flex-shrink-0"
                  style={{ zIndex: 5 - i }}
                >
                  <img
                    src={src}
                    alt="Usuária Nativa"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="hsl(37,44%,58%)">
                    <polygon points="6,1 7.5,4.5 11,4.5 8.5,7 9.5,11 6,9 2.5,11 3.5,7 1,4.5 4.5,4.5" />
                  </svg>
                ))}
              </div>
              <p className="font-body font-light text-xs" style={{ color: 'hsl(40,15%,75%)' }}>
                <strong className="font-semibold text-white">+5.000 mulheres</strong> já silenciaram os sintomas
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom brass line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'hsl(var(--brass) / 0.4)' }}
      />
    </section>
  );
}
