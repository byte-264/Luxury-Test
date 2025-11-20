
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookingClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  const [activeTab, setActiveTab] = useState('Sencillo');

  return (
    <section className="relative h-screen min-h-[800px] flex flex-col overflow-hidden bg-brand-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="https://cdn.orcchdev.com/imgs/Lux.mp4" type="video/mp4" />
        </video>
        
        {/* Sophisticated Overlay - Modern Cool Tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-6 pt-24 md:pt-32 pb-8">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mx-auto opacity-0 animate-fade-in-up">
                <span className="text-white/90 uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold">Cancún • Riviera Maya • Tulum</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-lg opacity-0 animate-fade-in-up">
              Viajes de Lujo <br/>
              <span className="text-white font-serif italic font-light">Exclusivos</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-md opacity-0 animate-fade-in-up-delay">
              Experimente el máximo confort y discreción en cada kilómetro de su viaje.
            </p>
        </div>
      </div>

      {/* Unified Floating Reservation Component */}
      <div className="relative z-20 w-full px-4 pb-8 md:pb-16 opacity-0 animate-fade-in-up-delay">
        <div className="max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-1.5 md:p-3 shadow-2xl shadow-black/20 border border-white/50">
                
                {/* Tabs */}
                <div className="flex justify-center items-center gap-2 md:gap-4 p-2 mb-2">
                    {['Sencillo', 'Redondo', 'Por Hora'].map((type) => (
                        <button 
                            key={type}
                            onClick={() => setActiveTab(type)}
                            className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                                activeTab === type 
                                ? 'bg-brand-black text-white shadow-lg' 
                                : 'text-brand-gray hover:bg-brand-light hover:text-brand-black'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Inputs & Button Wrapper - Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr_auto] gap-2 items-stretch">
                    
                    {/* Origin - Soft Neutral Background */}
                    <div className="md:col-span-6 lg:col-span-auto relative px-5 py-3 md:py-4 group transition-all duration-300 bg-brand-light hover:bg-white rounded-2xl border border-transparent focus-within:border-accent-500/50 focus-within:bg-white focus-within:shadow-sm">
                        <label className="block text-[10px] font-bold text-gray-400 group-focus-within:text-accent-600 uppercase tracking-wider mb-1 transition-colors">Origen</label>
                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-gray-400 group-focus-within:text-accent-500 transition-colors shrink-0" />
                            <input 
                                type="text" 
                                placeholder="Aeropuerto (CUN)" 
                                className="w-full bg-transparent outline-none text-brand-black font-bold text-sm md:text-base placeholder-gray-400 truncate transition-all"
                            />
                        </div>
                        {/* Subtle Gold Focus Line */}
                        <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out"></div>
                    </div>

                    {/* Destination */}
                    <div className="md:col-span-6 lg:col-span-auto relative px-5 py-3 md:py-4 group transition-all duration-300 bg-brand-light hover:bg-white rounded-2xl border border-transparent focus-within:border-accent-500/50 focus-within:bg-white focus-within:shadow-sm">
                        <label className="block text-[10px] font-bold text-gray-400 group-focus-within:text-accent-600 uppercase tracking-wider mb-1 transition-colors">Destino</label>
                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-gray-400 group-focus-within:text-accent-500 transition-colors shrink-0" />
                            <input 
                                type="text" 
                                placeholder="Hotel o Dirección" 
                                className="w-full bg-transparent outline-none text-brand-black font-bold text-sm md:text-base placeholder-gray-400 truncate transition-all"
                            />
                        </div>
                        <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out"></div>
                    </div>

                    {/* Date */}
                    <div className="md:col-span-6 lg:col-span-auto relative px-5 py-3 md:py-4 group transition-all duration-300 bg-brand-light hover:bg-white rounded-2xl border border-transparent focus-within:border-accent-500/50 focus-within:bg-white focus-within:shadow-sm">
                         <label className="block text-[10px] font-bold text-gray-400 group-focus-within:text-accent-600 uppercase tracking-wider mb-1 transition-colors">Fecha</label>
                         <div className="flex items-center gap-3">
                            <Calendar size={18} className="text-gray-400 group-focus-within:text-accent-500 transition-colors shrink-0" />
                            <input 
                                type="text" 
                                placeholder="Hoy"
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type = 'text'}
                                className="w-full bg-transparent outline-none text-brand-black font-bold text-sm md:text-base placeholder-gray-400 min-w-0 transition-all"
                            />
                         </div>
                         <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out"></div>
                    </div>

                    {/* Time */}
                    <div className="md:col-span-6 lg:col-span-auto relative px-5 py-3 md:py-4 group transition-all duration-300 bg-brand-light hover:bg-white rounded-2xl border border-transparent focus-within:border-accent-500/50 focus-within:bg-white focus-within:shadow-sm">
                         <label className="block text-[10px] font-bold text-gray-400 group-focus-within:text-accent-600 uppercase tracking-wider mb-1 transition-colors">Hora</label>
                         <div className="flex items-center gap-3">
                            <Clock size={18} className="text-gray-400 group-focus-within:text-accent-500 transition-colors shrink-0" />
                            <input 
                                type="text" 
                                placeholder="12:00"
                                onFocus={(e) => e.target.type = 'time'}
                                onBlur={(e) => e.target.type = 'text'}
                                className="w-full bg-transparent outline-none text-brand-black font-bold text-sm md:text-base placeholder-gray-400 min-w-0 transition-all"
                            />
                         </div>
                         <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out"></div>
                    </div>

                    {/* Button */}
                    <div className="md:col-span-12 lg:col-span-auto">
                        <button 
                            onClick={onBookingClick}
                            className="w-full h-full min-h-[64px] px-8 bg-brand-black hover:bg-accent-600 text-white rounded-xl md:rounded-2xl font-bold text-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                        >
                            <span>Cotizar</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
