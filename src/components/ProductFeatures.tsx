import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Busca por Sintoma SOS',
    desc: 'Selecione o que sente — calorão, insônia, etc. — e receba na hora a fórmula exata para alívio imediato.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="hsl(120,33%,17%)" strokeWidth="1.2">
        <circle cx="14" cy="14" r="9"/>
        <path d="M21 21 L28 28"/>
        <path d="M14 10 L14 18 M10 14 L18 14"/>
      </svg>
    ),
  },
  {
    title: 'Passo a Passo Visual',
    desc: 'Ficha técnica com fotos e instruções simples. Ingredientes da sua cozinha, precisão de laboratório natural.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="hsl(120,33%,17%)" strokeWidth="1.2">
        <rect x="4" y="4" width="24" height="24" rx="2"/>
        <path d="M9 11 L23 11 M9 16 L20 16 M9 21 L17 21"/>
        <circle cx="26" cy="10" r="1" fill="hsl(120,33%,17%)"/>
      </svg>
    ),
  },
  {
    title: 'Agenda de Nutrição Rítmica',
    desc: 'Horários ideais para preparo e consumo, sincronizando ativos naturais com o seu metabolismo.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="hsl(120,33%,17%)" strokeWidth="1.2">
        <circle cx="16" cy="16" r="12"/>
        <path d="M16 8 L16 16 L21 21"/>
      </svg>
    ),
  },
  {
    title: 'Assistente Virtual Nativa',
    desc: 'Suporte 24h por dia para tirar dúvidas e guiar sua jornada.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="hsl(120,33%,17%)" strokeWidth="1.2">
        <path d="M4 8 Q4 4, 8 4 L24 4 Q28 4, 28 8 L28 20 Q28 24, 24 24 L18 24 L12 29 L12 24 L8 24 Q4 24, 4 20 Z"/>
        <path d="M11 14 L11 14 M16 14 L16 14 M21 14 L21 14" strokeLinecap="round" strokeWidth="2"/>
      </svg>
    ),
  },
];

const included = [
  { text: 'Acesso Imediato à Plataforma', sub: 'Login e senha no e-mail em minutos. iOS/Android.' },
  { text: 'Biblioteca de Receitas Ancestrais', sub: 'Acervo organizado por sintoma.' },
  { text: 'Assistente Virtual Nativa', sub: 'Suporte 24h.' },
  { text: 'Cronograma de Implementação', sub: 'Plano prático para introduzir as receitas.' },
  { text: 'Bônus: Guia de Desintoxicação', sub: 'Manual exclusivo para expulsar resíduos de hormônios sintéticos.', bonus: true },
];


export function ProductFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 lg:py-28" style={{ background: 'white' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-4">RECURSOS DO APLICATIVO</span>
          <h2 className="font-display text-3xl lg:text-[2.2rem]" style={{ color: 'hsl(var(--forest))' }}>
            Tudo que você precisa, na palma da mão
          </h2>
        </motion.div>

        {/* 4 feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="flex gap-5 p-7 rounded-sm border"
              style={{ borderColor: 'hsl(var(--brass) / 0.2)', background: 'hsl(var(--parchment))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 pt-1">{f.icon}</div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: 'hsl(var(--forest))' }}>{f.title}</h3>
                <p className="font-body font-light text-sm lg:text-base leading-[1.8]" style={{ color: 'hsl(var(--charcoal))' }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's included + App mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Included list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display font-bold text-2xl mb-7" style={{ color: 'hsl(var(--forest))' }}>O que está incluído</h3>
            <ul className="flex flex-col gap-4">
              {included.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="10" cy="10" r="9" stroke="hsl(37,34%,54%)" strokeWidth="1"/>
                    <path d="M6 10 L9 13 L14 7" stroke="hsl(37,34%,54%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <span className={`font-body text-sm ${item.bonus ? 'font-semibold' : 'font-medium'}`} style={{ color: item.bonus ? 'hsl(var(--brass))' : 'hsl(var(--forest))' }}>
                      {item.text}
                    </span>
                    <span className="font-body font-light text-sm lg:text-base" style={{ color: 'hsl(var(--charcoal))' }}> — {item.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div
              className="w-full max-w-sm rounded-sm overflow-hidden"
              style={{
                background: 'hsl(var(--forest))',
                boxShadow: '0 24px 56px rgba(0,0,0,0.14)',
              }}
            >
              {/* Header stripe */}
              <div
                className="px-7 pt-6 pb-5"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 12 12" fill="hsl(37,44%,62%)">
                      <polygon points="6,1 7.5,4.5 11,4.5 8.5,7 9.5,11 6,9 2.5,11 3.5,7 1,4.5 4.5,4.5" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p
                  className="font-display leading-snug mb-5"
                  style={{ color: 'white', fontSize: '1.05rem', fontStyle: 'italic' }}
                >
                  "Em 28 dias os fogachos foram de{' '}
                  <span style={{ color: 'hsl(37,44%,68%)' }}>8 vezes por dia para quase zero</span>.
                  Voltei a dormir a noite toda. Não acreditei até acontecer comigo."
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src="/images/avatar-lucia.png"
                    alt="Lúcia, usuária NATIVA"
                    className="w-11 h-11 rounded-full object-cover object-top flex-shrink-0"
                    style={{ border: '2px solid hsl(37,34%,54%)' }}
                  />
                  <div>
                    <p className="font-body font-semibold text-sm text-white">Lúcia Fernandes</p>
                    <p className="font-body font-light text-xs" style={{ color: 'hsl(37,34%,64%)' }}>62 anos · Belo Horizonte</p>
                  </div>
                  <div
                    className="ml-auto px-3 py-1 rounded-full font-body font-semibold text-[10px] uppercase tracking-widest"
                    style={{ background: 'hsl(37,34%,54%,0.18)', color: 'hsl(37,44%,68%)', border: '1px solid hsl(37,34%,54%,0.3)' }}
                  >
                    Verificada
                  </div>
                </div>
              </div>

              {/* Before / After */}
              <div className="px-7 py-5">
                <p
                  className="font-body font-semibold text-[10px] tracking-widest uppercase mb-4"
                  style={{ color: 'hsl(37,34%,54%)' }}
                >
                  Antes → Depois do Protocolo
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Fogachos', before: '8×/dia', after: 'quase zero' },
                    { label: 'Sono', before: 'acordava 3–4×', after: 'noite completa' },
                    { label: 'Humor', before: 'irritada', after: 'equilibrada' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between gap-2">
                      <span className="font-body font-light text-xs w-16 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.55)' }}>{row.label}</span>
                      <span
                        className="font-body text-xs px-2 py-0.5 rounded flex-shrink-0"
                        style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}
                      >
                        {row.before}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                        <path d="M2 6 L10 6 M7 3 L10 6 L7 9" stroke="hsl(37,44%,58%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span
                        className="font-body font-semibold text-xs px-2 py-0.5 rounded flex-shrink-0"
                        style={{ background: 'hsl(37,34%,54%,0.2)', color: 'hsl(37,44%,72%)' }}
                      >
                        {row.after}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer tag */}
              <div
                className="px-7 py-3 text-center font-body font-light text-xs"
                style={{ background: 'rgba(0,0,0,0.18)', color: 'rgba(255,255,255,0.38)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                Resultado em 28 dias · Protocolo Soberana Nativa
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
