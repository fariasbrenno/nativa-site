import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Como recebo o acesso ao aplicativo?',
    a: 'Logo após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso e o link para instalação. O processo é automático e você pode começar a usar a Assistente Virtual Nativa e as receitas em menos de 5 minutos.',
  },
  {
    q: 'Existe alguma garantia de satisfação?',
    a: 'Sim. Você tem uma Garantia Incondicional de 7 dias. Se por qualquer motivo você sentir que o Protocolo Nativa não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento, sem perguntas e sem burocracia. O risco é todo nosso.',
  },
  {
    q: 'Em quanto tempo começo a ver os primeiros resultados?',
    a: 'Muitas mulheres relatam alívio nos fogachos e melhora na qualidade do sono já nos primeiros 3 a 7 dias seguindo as receitas de SOS. Para resultados metabólicos e hormonais mais profundos, como desinchaço e energia, o Protocolo de Desintoxicação completo leva cerca de 21 dias.',
  },
  {
    q: 'Quanto tempo do meu dia preciso dedicar ao Protocolo?',
    a: 'O Protocolo Nativa foi desenhado para mulheres ocupadas. Você precisará de apenas 10 a 15 minutos por dia para preparar suas infusões ou tônicos. A nossa Assistente Virtual também agiliza todo o processo, entregando as respostas que você precisa instantaneamente.',
  },
  {
    q: 'O Protocolo Nativa substitui meus remédios atuais?',
    a: 'Nosso objetivo é oferecer um caminho natural para o equilíbrio. O Guia de Desintoxicação ajudará seu organismo a se limpar, mas recomendamos que qualquer alteração em medicações prescritas seja acompanhada pelo seu médico. O Protocolo atua de forma complementar e integrativa.',
  },
  {
    q: 'Já passei pela menopausa, o aplicativo ainda serve para mim?',
    a: 'Com certeza. Mesmo na pós-menopausa, o corpo sofre com ressecamento, perda de libido, insônia e riscos ósseos. As fórmulas ancestrais ajudam a manter a vitalidade, a proteção cardiovascular e a hidratação dos tecidos em qualquer fase da maturidade.',
  },
  {
    q: 'Preciso comprar ingredientes caros ou difíceis de achar?',
    a: 'Não. 90% das receitas utilizam ervas, raízes e alimentos que você encontra facilmente em bons supermercados ou lojas de produtos naturais. O foco é a combinação exata e o método de preparo ancestral, não a raridade dos ingredientes.',
  },
  {
    q: 'É seguro pagar com cartão de crédito ou Pix?',
    a: 'Sim. Utilizamos a plataforma de pagamentos mais segura do Brasil, com criptografia de ponta a ponta. Seus dados financeiros são processados com total privacidade e segurança bancária.',
  },
  {
    q: 'Tenho acesso a atualizações de novas receitas?',
    a: 'Sim. Como assinante, você recebe todas as atualizações da nossa biblioteca botânica. Estamos constantemente resgatando novas fórmulas milenares e inserindo no sistema sem custo adicional para quem já é membro.',
  },
  {
    q: 'Posso cancelar a assinatura quando quiser?',
    a: 'Sim. No plano mensal, o cancelamento da renovação pode ser feito a qualquer momento. No plano anual, você assegura o valor promocional e o acesso a todos os bônus exclusivos pelo período de 12 meses, sem reajustes.',
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid hsl(var(--brass) / 0.2)' }}>
      <button
        className="w-full flex justify-between items-center py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-display font-bold text-lg leading-snug" style={{ color: 'hsl(var(--forest))' }}>{item.q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light transition-transform duration-300"
          style={{
            background: open ? 'hsl(var(--brass))' : 'transparent',
            border: '1px solid hsl(var(--brass))',
            color: open ? 'white' : 'hsl(var(--brass))',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="font-body font-light text-sm lg:text-base leading-[1.85] pb-5"
              style={{ color: 'hsl(var(--charcoal))', borderLeft: '3px solid hsl(var(--brass))', paddingLeft: '1rem' }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 lg:py-28" style={{ background: 'hsl(var(--parchment))' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-4">DÚVIDAS FREQUENTES</span>
          <h2 className="font-display text-3xl lg:text-[2.2rem]" style={{ color: 'hsl(var(--forest))' }}>
            Respondemos tudo para você
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Left: botanical illustration */}
          <motion.div
            className="hidden lg:flex justify-center pt-4"
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="220" height="320" viewBox="0 0 220 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Main stem */}
              <path d="M110 300 C110 240, 100 200, 108 160 C112 140, 115 100, 110 60" stroke="hsl(120,33%,17%)" strokeWidth="1.5" fill="none"/>
              {/* Left branches */}
              <path d="M108 220 C80 210, 50 220, 30 200" stroke="hsl(120,33%,17%)" strokeWidth="1" fill="none"/>
              <path d="M110 170 C85 155, 55 160, 40 140" stroke="hsl(120,33%,17%)" strokeWidth="1" fill="none"/>
              <path d="M109 130 C88 112, 65 115, 50 95" stroke="hsl(120,33%,17%)" strokeWidth="1" fill="none"/>
              {/* Right branches */}
              <path d="M108 200 C135 188, 165 195, 185 175" stroke="hsl(120,33%,17%)" strokeWidth="1" fill="none"/>
              <path d="M110 155 C135 140, 160 145, 178 125" stroke="hsl(120,33%,17%)" strokeWidth="1" fill="none"/>
              <path d="M110 110 C130 93, 155 96, 170 76" stroke="hsl(120,33%,17%)" strokeWidth="1" fill="none"/>
              {/* Leaves left */}
              <ellipse cx="45" cy="198" rx="18" ry="9" transform="rotate(-25 45 198)" stroke="hsl(120,33%,17%)" strokeWidth="0.8" fill="hsl(120,33%,17%,0.08)"/>
              <ellipse cx="48" cy="138" rx="16" ry="8" transform="rotate(-30 48 138)" stroke="hsl(120,33%,17%)" strokeWidth="0.8" fill="hsl(120,33%,17%,0.08)"/>
              <ellipse cx="56" cy="92" rx="14" ry="7" transform="rotate(-28 56 92)" stroke="hsl(120,33%,17%)" strokeWidth="0.8" fill="hsl(120,33%,17%,0.08)"/>
              {/* Leaves right */}
              <ellipse cx="183" cy="172" rx="18" ry="9" transform="rotate(25 183 172)" stroke="hsl(37,34%,54%)" strokeWidth="0.8" fill="hsl(37,34%,54%,0.1)"/>
              <ellipse cx="177" cy="122" rx="16" ry="8" transform="rotate(28 177 122)" stroke="hsl(37,34%,54%)" strokeWidth="0.8" fill="hsl(37,34%,54%,0.1)"/>
              <ellipse cx="169" cy="73" rx="14" ry="7" transform="rotate(32 169 73)" stroke="hsl(37,34%,54%)" strokeWidth="0.8" fill="hsl(37,34%,54%,0.1)"/>
              {/* Top flower */}
              <circle cx="110" cy="55" r="10" stroke="hsl(37,34%,54%)" strokeWidth="0.8" fill="hsl(37,34%,54%,0.12)"/>
              <circle cx="110" cy="55" r="4" fill="hsl(37,34%,54%,0.3)"/>
              {/* Petal-like shapes */}
              {[0,60,120,180,240,300].map((angle, i) => (
                <ellipse key={i} cx={110 + 13 * Math.cos(angle * Math.PI/180)} cy={55 + 13 * Math.sin(angle * Math.PI/180)} rx="6" ry="3" transform={`rotate(${angle} ${110 + 13 * Math.cos(angle * Math.PI/180)} ${55 + 13 * Math.sin(angle * Math.PI/180)})`} stroke="hsl(37,34%,54%)" strokeWidth="0.7" fill="hsl(37,34%,54%,0.08)"/>
              ))}
            </svg>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} item={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
