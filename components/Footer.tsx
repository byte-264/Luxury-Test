import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-brand-black pt-24 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-8">
             <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tighter text-white">
                LUX<span className="text-accent-500 font-serif italic">RIDE</span>
                </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              El estándar definitivo en transporte de lujo para Cancún y Riviera Maya. Viaje con absoluta tranquilidad.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-brand-black transition-all duration-300"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-brand-black transition-all duration-300"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-brand-black transition-all duration-300"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Explorar</h4>
            <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Sobre Nosotros</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Nuestra Flota</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Servicios VIP</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-500 text-sm">
                    <MapPin size={20} className="text-accent-500 shrink-0 mt-0.5" />
                    <span>Zona Hotelera, Cancún,<br/>Quintana Roo, México</span>
                </li>
                <li className="flex items-center gap-4 text-gray-500 text-sm">
                    <Phone size={20} className="text-accent-500 shrink-0" />
                    <span>+52 (998) 123-4567</span>
                </li>
                <li className="flex items-center gap-4 text-gray-500 text-sm">
                    <Mail size={20} className="text-accent-500 shrink-0" />
                    <span>reservas@luxride.mx</span>
                </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Newsletter</h4>
            <form className="flex flex-col gap-4">
                <div className="relative">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full bg-white/5 border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-accent-500 transition-all duration-300 placeholder-gray-600"
                    />
                </div>
                <button type="submit" className="text-left text-xs font-bold uppercase tracking-widest text-white hover:text-accent-500 transition-colors flex items-center gap-2 mt-2">
                    Suscribirse <ArrowRight size={16} />
                </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs font-medium">© 2025 LuxRide. Todos los derechos reservados.</p>
            <div className="flex gap-8">
                <a href="#" className="text-gray-600 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Privacidad</a>
                <a href="#" className="text-gray-600 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Cookies</a>
            </div>
        </div>
      </div>
    </footer>
  );
};