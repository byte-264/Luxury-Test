
import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onLoginClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use a slightly higher threshold to prevent accidental triggers
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Flota', href: '#fleet' },
    { name: 'Servicios', href: '#services' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#footer' },
  ];

  // --- FLUID TRANSITION STYLES ---
  // Faster duration (300ms) and ease-out for an "agile" feel.
  const transitionClass = "transition-all duration-300 ease-out";

  return (
    <>
      <nav
        className={`fixed z-50 left-0 right-0 flex justify-center ${transitionClass} ${
          isScrolled ? 'top-4' : 'top-0'
        }`}
      >
        {/* 
           The Container:
           - Scrolled: Wider max-width (7xl) on desktop to prevent massive layout jumps.
           - Consistent vertical padding adjustment.
        */}
        <div
          className={`${transitionClass} flex items-center justify-between ${
            isScrolled
              ? 'w-[94%] lg:w-[92%] max-w-7xl bg-brand-black/90 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl py-2.5 px-6 md:px-8'
              : 'w-full bg-transparent border-transparent py-6 px-6 lg:px-12'
          }`}
        >
          {/* Logo - Subtle & Modern */}
          <div className="flex items-center gap-2 z-50">
            <div className={`flex flex-col leading-none ${transitionClass}`}>
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                LUX<span className="font-serif italic font-light text-white">RIDE</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative py-2"
              >
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-white/70 group-hover:text-white transition-colors duration-200">
                  {link.name}
                </span>
                {/* Agile underline animation */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-500 origin-left transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer group"
            >
              <User size={16} className="group-hover:scale-110 transition-transform duration-200"/>
              <span className="text-xs font-bold uppercase tracking-wider">Acceder</span>
            </button>

            {/* Button remains stable in size to avoid layout thrashing during scroll */}
            <Button
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white hover:text-brand-black hover:border-white rounded-full px-6 h-10 text-xs tracking-widest"
            >
              Reservar
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white relative z-50 p-1 hover:scale-105 transition-transform duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Optimized Animation */}
      <div
        className="fixed inset-0 z-[60] bg-white flex flex-col"
        style={{
          clipPath: isMobileMenuOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)',
          transition: 'clip-path 0.7s cubic-bezier(0.16, 1, 0.3, 1)', // Silky smooth easing
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
      >
        {/* Header inside menu */}
        <div className="flex justify-between items-center p-6 md:p-8">
            <span className="text-2xl font-bold tracking-tighter text-brand-black">
                LUX<span className="font-serif italic font-light">RIDE</span>
            </span>
            <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 text-brand-black flex items-center justify-center hover:bg-brand-black hover:text-white transition-all duration-200"
            >
                <X size={20} />
            </button>
        </div>

        {/* Links Container */}
        <div className="flex-grow flex flex-col justify-center items-center gap-6 w-full px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-4xl md:text-5xl font-bold tracking-tighter text-brand-black transition-all duration-500 ease-out hover:text-accent-600 ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100 blur-0'
                  : 'translate-y-12 opacity-0 blur-lg'
              }`}
              style={{ transitionDelay: `${isMobileMenuOpen ? index * 75 + 100 : 0}ms` }}
            >
              {link.name}
            </a>
          ))}

          {/* Prominent Mobile Login Button */}
          <div 
            className={`w-full max-w-xs mt-8 transition-all duration-700 ease-out ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${isMobileMenuOpen ? 400 : 0}ms` }}
          >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onLoginClick) onLoginClick();
                }}
                className="w-full py-4 rounded-full bg-brand-black text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-accent-600 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <User size={18} />
                <span>Iniciar Sesión</span>
              </button>
          </div>
        </div>

        {/* Footer inside menu */}
        <div className="p-8 text-center border-t border-gray-100">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Contacto</p>
            <a href="mailto:hola@luxride.mx" className="text-xl font-serif italic text-brand-black">hola@luxride.mx</a>
        </div>
      </div>
    </>
  );
};
