import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Outlet = 'g1' | 'cnn';

interface Article {
  outlet: Outlet;
  section: string;
  date: string;
  headline: string;
  excerpt: string;
  highlight: string;
  image: string;
  imageAlt: string;
}

const articles: Article[] = [
  {
    outlet: 'g1',
    section: 'Bem Estar',
    date: '09/04/2026 10:30',
    headline: 'Fitoterapia ancestral é validada como base para longevidade feminina na menopausa.',
    excerpt: 'Fitoterápicos populares como amora e cimicífuga ganham respaldo científico para uso no climatério.',
    highlight: 'alternativa segura à reposição hormonal sintética',
    image: '/images/social-1-botanica.png',
    imageAlt: 'Ervas medicinais ancestrais: amora-preta, sálvia e camomila em flat lay botânico',
  },
  {
    outlet: 'g1',
    section: 'Bem Estar',
    date: '09/04/2026 10:30',
    headline: 'Estudos comprovam benefícios de fitoterápicos no alívio de sintomas da menopausa.',
    excerpt: 'Estudos indicam eficácia de plantas ancestrais no controle de fogachos e equilíbrio emocional.',
    highlight: 'redução de fogachos e insônia com plantas como amora e cimicífuga',
    image: '/images/social-2-amber.png',
    imageAlt: 'Frascos âmbar de óleos essenciais com ervas medicinais secas ao redor',
  },
  {
    outlet: 'cnn',
    section: 'SAÚDE · CONSENSO BRASILEIRO DE GINECOLOGIA',
    date: '09/04/2026 10:30',
    headline: 'Diretrizes Atualizadas sobre o Manejo Não Farmacológico da Menopausa.',
    excerpt: 'Painel de especialistas conclui que intervenções baseadas em estilo de vida devem ser a primeira linha de tratamento.',
    highlight: 'intervenções baseadas em estilo de vida e ativos botânicos validados',
    image: '/images/social-3-diretrizes.png',
    imageAlt: 'Equipe médica em reunião revisando diretrizes de tratamento da menopausa',
  },
  {
    outlet: 'cnn',
    section: 'Health',
    date: '09/04/2026 10:30',
    headline: 'The Lancet pede mudança na forma como a sociedade encara a menopausa e critica medicalização.',
    excerpt: 'Série de estudos da revista científica mais prestigiada do mundo defende abordagens além dos tratamentos hormonais convencionais.',
    highlight: 'critica a medicalização excessiva da menopausa',
    image: '/images/social-4-lancet.png',
    imageAlt: 'Revista científica aberta sobre mesa com planta medicinal e chá de ervas',
  },
  {
    outlet: 'g1',
    section: 'Bem Estar',
    date: '09/04/2026 10:30',
    headline: 'Fitoterápicos ajudam a amenizar sintomas da menopausa e são alternativa à reposição hormonal.',
    excerpt: 'Estudos indicam eficácia de plantas ancestrais no controle de fogachos e equilíbrio emocional.',
    highlight: 'alternativa à reposição hormonal sintética',
    image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800&q=80',
    imageAlt: 'Ervas e óleos essenciais naturais',
  },
];

function G1Logo() {
  return (
    <div className="flex items-center gap-0" style={{ height: 36 }}>
      <div
        className="flex items-center justify-center px-2 h-full"
        style={{ background: '#cc0000', minWidth: 40 }}
      >
        <span
          className="font-bold text-white select-none"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.3rem', letterSpacing: '-0.03em' }}
        >
          g1
        </span>
      </div>
      <div className="flex items-center h-full border-l border-gray-300 px-3">
        <span
          className="font-bold text-gray-800 select-none"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.9rem' }}
        >
          Bem Estar
        </span>
      </div>
    </div>
  );
}

function CNNLogo({ section }: { section: string }) {
  const isHealth = section === 'Health';
  return (
    <div className="flex items-center gap-2" style={{ height: 36 }}>
      <div
        className="flex items-center justify-center px-2 h-full"
        style={{ background: '#cc0000', minWidth: 44 }}
      >
        <span
          className="font-bold text-white select-none"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.8rem', letterSpacing: '0.05em' }}
        >
          CNN
        </span>
      </div>
      <span
        className="font-bold text-gray-800 select-none"
        style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.9rem' }}
      >
        {isHealth ? 'BRASIL Health' : 'SAÚDE'}
      </span>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <div
      className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[440px] rounded-sm overflow-hidden bg-white"
      style={{
        boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.08)',
        border: '1px solid #e5e7eb',
      }}
    >
      {/* Outlet header */}
      <div className="px-4 pt-3 pb-2 border-b border-gray-200">
        {article.outlet === 'g1' ? (
          <G1Logo />
        ) : (
          <CNNLogo section={article.section} />
        )}
        {article.outlet === 'cnn' && article.section.includes('CONSENSO') && (
          <p
            className="mt-1 font-bold text-gray-700 tracking-wider"
            style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.65rem' }}
          >
            {article.section}
          </p>
        )}
      </div>

      {/* Article body */}
      <div className="px-4 pt-3 pb-4">
        {/* Date */}
        <p
          className="text-gray-400 mb-2"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.72rem' }}
        >
          {article.date}
        </p>

        {/* Headline */}
        <h3
          className="font-bold text-gray-900 leading-tight mb-2"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.05rem' }}
        >
          {article.headline}
        </h3>

        {/* Excerpt with highlight */}
        <p
          className="text-gray-700 leading-snug mb-3"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.78rem' }}
        >
          {article.excerpt.split(article.highlight).map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <mark
                  style={{
                    background: 'rgba(255, 235, 59, 0.7)',
                    borderRadius: 2,
                    padding: '0 2px',
                  }}
                >
                  {article.highlight}
                </mark>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>

        {/* Article image */}
        <div
          className="w-full rounded-sm overflow-hidden"
          style={{ aspectRatio: '16/7' }}
        >
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );

  return (
    <section ref={ref} className="py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(var(--parchment))' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 px-6"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-4">NA MÍDIA</span>
          <h2 className="font-display text-3xl lg:text-[2.2rem]" style={{ color: 'hsl(var(--forest))' }}>
            O que a ciência e a mídia dizem sobre a fitoterapia ancestral
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex gap-5 px-6 pb-4">
            {articles.map((article, i) => (
              <ArticleCard key={i} article={article} />
            ))}
          </div>
        </motion.div>

        {/* Dots indicator */}
        <motion.div
          className="flex justify-center gap-2 mt-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {articles.map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 0 ? 20 : 6,
                height: 6,
                background: i === 0 ? 'hsl(var(--brass))' : 'hsl(var(--brass) / 0.3)',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </motion.div>

        {/* Closing text */}
        <motion.p
          className="mt-12 text-center font-body font-light leading-[1.85] text-base max-w-3xl mx-auto px-6"
          style={{ color: 'hsl(var(--charcoal))' }}
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          É uma{' '}
          <span className="kw">verdade validada pela ciência</span>: a combinação{' '}
          <span className="kw">natureza milenar + precisão moderna</span>{' '}
          é o que devolve o{' '}
          <span className="kw">controle real da mulher sobre o próprio corpo</span>. Chega de{' '}
          <span className="kw">dependência química</span>{' '}
          — é hora de{' '}
          <span className="kw">retomar o comando do corpo</span>.
        </motion.p>
      </div>
    </section>
  );
}
