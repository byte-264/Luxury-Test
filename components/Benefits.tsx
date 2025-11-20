
import React from 'react';
import { Clock, Shield, Star, Smartphone, Award, CheckCircle2 } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-light relative overflow-hidden">
      {/* Subtle Background Decorator */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/40 -skew-x-12 pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-accent-500"></div>
                <span className="text-accent-600 uppercase tracking-[0.25em] text-sm font-bold">Nuestra Promesa</span>
            </div>
            <h2 className="text-5xl md:text-6xl text-brand-black font-bold leading-[1.1] tracking-tight">
                Redefiniendo el <br/>
                <span className="font-serif italic font-light text-accent-500">Estándar de Viaje</span>.
            </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: The Main Value Prop (Large, Dark) */}
            <div className="md:col-span-2 bg-brand-black text-white rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                {/* Abstract Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-[80px] -mr-16 -mt-16 transition-all duration-700 group-hover:bg-accent-500/30"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
                        <Star size={24} className="text-accent-400 fill-accent-400" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Servicio White-Glove</h3>
                    <p className="text-white/70 text-lg leading-relaxed max-w-md mb-8">
                        Más que un traslado, ofrecemos una extensión de su estilo de vida. Choféres certificados, amenidades premium y una atención meticulosa a cada detalle.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent-400">
                            <CheckCircle2 size={16} />
                            <span>Recepción VIP</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent-400">
                            <CheckCircle2 size={16} />
                            <span>Concierge 24/7</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2: Punctuality (Vertical, Light) */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center group">
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-black group-hover:scale-110 transition-transform duration-500 group-hover:bg-brand-black group-hover:text-white">
                    <Clock size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Puntualidad Suiza</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                    Monitorizamos su vuelo en tiempo real. Su chofer estará esperando antes de que aterrice, sin excepciones.
                </p>
            </div>

            {/* Card 3: Privacy (Vertical, Light) */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center group">
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-black group-hover:scale-110 transition-transform duration-500 group-hover:bg-brand-black group-hover:text-white">
                    <Shield size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Privacidad Total</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                    Vehículos con vidrios tintados y choferes entrenados en discreción absoluta y protocolos de seguridad.
                </p>
            </div>

            {/* Card 4: Visual / Comfort (Span 2, Image) */}
            <div className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden min-h-[320px] group shadow-lg">
                 <img 
                    src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Luxury Interior" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-10 md:p-12">
                     <div className="flex items-center gap-2 mb-3 text-accent-400">
                        <Award size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest">Confort de Primera Clase</span>
                     </div>
                     <h3 className="text-white text-3xl font-bold mb-2">Interiores Ejecutivos</h3>
                     <p className="text-white/80 max-w-lg text-lg">Asientos de cuero reclinables, climatización personalizada y conectividad WiFi de alta velocidad.</p>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};
