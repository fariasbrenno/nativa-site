export function Footer() {
  return (
    <footer className="relative overflow-hidden py-14 px-6" style={{ background: 'hsl(var(--forest))' }}>
      {/* Botanical branch top */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1200 40" fill="none" height="40" preserveAspectRatio="xMidYMin slice">
        <path d="M0 30 C150 10, 350 35, 600 20 C850 5, 1050 30, 1200 18" stroke="hsl(37,34%,54%)" strokeWidth="0.8" fill="none" opacity="0.4"/>
        <path d="M200 20 C220 8, 240 6, 250 18" stroke="hsl(37,34%,54%)" strokeWidth="0.6" fill="none" opacity="0.3"/>
        <path d="M600 15 C615 4, 630 3, 635 15" stroke="hsl(37,34%,54%)" strokeWidth="0.6" fill="none" opacity="0.3"/>
        <path d="M950 22 C965 10, 980 8, 985 20" stroke="hsl(37,34%,54%)" strokeWidth="0.6" fill="none" opacity="0.3"/>
        <ellipse cx="250" cy="14" rx="9" ry="5" transform="rotate(-15 250 14)" stroke="hsl(37,34%,54%)" strokeWidth="0.6" fill="none" opacity="0.3"/>
        <ellipse cx="635" cy="10" rx="9" ry="5" transform="rotate(-10 635 10)" stroke="hsl(37,34%,54%)" strokeWidth="0.6" fill="none" opacity="0.3"/>
        <ellipse cx="985" cy="14" rx="9" ry="5" transform="rotate(-15 985 14)" stroke="hsl(37,34%,54%)" strokeWidth="0.6" fill="none" opacity="0.3"/>
      </svg>

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-7">
        {/* Logo */}
        <div>
          <h2 className="font-display font-bold text-4xl" style={{ color: 'hsl(var(--parchment) / 0.9)' }}>NATIVA</h2>
          <p className="font-body font-light text-xs tracking-[0.25em] uppercase mt-1" style={{ color: 'hsl(var(--brass))' }}>
            Protocolo Ancestral · Menopausa Natural
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-40" style={{ background: 'hsl(var(--brass) / 0.3)' }} />

        {/* Legal links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {['Termos de Uso', 'Política de Privacidade', 'Contato'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body font-light text-xs tracking-wide transition-colors duration-200 hover:opacity-100"
              style={{ color: 'hsl(var(--parchment) / 0.55)' }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-body font-light text-xs" style={{ color: 'hsl(var(--parchment) / 0.35)' }}>
          © {new Date().getFullYear()} Protocolo Nativa. Todos os direitos reservados.
        </p>

        {/* Disclaimer */}
        <p className="font-body font-light text-[11px] max-w-xl leading-relaxed" style={{ color: 'hsl(var(--parchment) / 0.3)' }}>
          Este produto não substitui orientação médica profissional. Consulte seu médico antes de alterar qualquer tratamento. Resultados podem variar individualmente.
        </p>
      </div>
    </footer>
  );
}
