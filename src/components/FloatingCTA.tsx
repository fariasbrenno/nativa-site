import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pricing = document.getElementById('pricing');
      if (!pricing) {
        setVisible(scrollY > 500);
        return;
      }
      const rect = pricing.getBoundingClientRect();
      const pricingVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setVisible(scrollY > 500 && !pricingVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-5 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="#pricing"
            className="pointer-events-auto flex items-center gap-3 px-7 py-4 rounded-full font-body font-medium text-white text-sm tracking-wider uppercase transition-all hover:brightness-110 hover:scale-105"
            style={{
              background: 'hsl(var(--forest))',
              boxShadow: '0 8px 32px hsl(var(--forest) / 0.4), 0 0 0 1px hsl(var(--brass) / 0.4)',
              letterSpacing: '0.1em',
            }}
          >
            {/* Leaf icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1 C8 1, 14 5, 14 9 C14 13, 11 15, 8 15 C5 15, 2 13, 2 9 C2 5, 8 1, 8 1Z"
                fill="hsl(37,34%,54%)" stroke="none"/>
              <path d="M8 1 L8 15" stroke="hsl(var(--forest))" strokeWidth="0.7"/>
            </svg>
            Garantir meu acesso
            <span className="ml-1" style={{ color: 'hsl(var(--brass))' }}>→</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
