
import React, { useState } from 'react';
import { Vehicle } from '../types';
import { Users, Briefcase, ArrowRight, Fuel, Gauge, Star, Sparkles } from 'lucide-react';

const fleetData: Vehicle[] = [
  {
    id: 1,
    name: "Suburban High Country",
    category: "SUV",
    passengers: 7,
    luggage: 7,
    pricePerDay: 350,
    image: "https://tuagenciadelrio.com/wp-content/uploads/2024/12/Suburban-2025-High-Country.webp",
    features: ["Automática", "Gasolina"]
  },
  {
    id: 2,
    name: "Lincoln Navigator",
    category: "SUV",
    passengers: 6,
    luggage: 5,
    pricePerDay: 450,
    image: "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_62a4b51f7fe243b6a751692f9936e3bb.jpg",
    features: ["Automática", "Híbrida"]
  },
  {
    id: 3,
    name: "MB Sprinter Elite",
    category: "Van",
    passengers: 16,
    luggage: 12,
    pricePerDay: 550,
    image: "https://www.mercedes-benz.com.co/mercedes/site/artic/20250409/imag/foto_0000013220250409041507/Van_de_lujo_Mercedes-Benz_Sprinter_de_pasajeros.jpg",
    features: ["Automática", "Diesel"]
  },
  {
    id: 4,
    name: "Mercedes S-Class",
    category: "Sedán",
    passengers: 3,
    luggage: 3,
    pricePerDay: 300,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    features: ["Automática", "Gasolina"]
  },
  {
    id: 5,
    name: "BMW 7 Series",
    category: "Sedán",
    passengers: 3,
    luggage: 3,
    pricePerDay: 280,
    image: "https://images.unsplash.com/photo-1556189250-72ba95452e5d?q=80&w=2070&auto=format&fit=crop",
    features: ["Automática", "Híbrida"]
  },
  {
    id: 6,
    name: "Escalade ESV",
    category: "SUV",
    passengers: 6,
    luggage: 6,
    pricePerDay: 420,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    features: ["Automática", "Gasolina"]
  }
];

const categories = ["Todos", "Sedán", "SUV", "Van"];

export const Fleet: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredFleet = activeCategory === "Todos" 
    ? fleetData 
    : fleetData.filter(v => v.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(3); 
  };

  const visibleFleet = filteredFleet.slice(0, visibleCount);
  const hasMore = visibleCount < filteredFleet.length;

  return (
    <section id="fleet" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-10 text-center lg:text-left">
          <div className="max-w-3xl flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-accent-500"></div>
                <span className="text-accent-600 uppercase tracking-[0.25em] text-sm md:text-base font-bold">Collection 2025</span>
            </div>
            <h3 className="text-5xl md:text-6xl text-brand-black font-bold tracking-tighter">
              Nuestra <span className="font-serif italic font-light text-brand-black">Flota</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
                <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2.5 text-sm md:text-base font-bold uppercase tracking-widest rounded-full transition-all duration-200 border ${
                    activeCategory === cat
                    ? "bg-brand-black text-white border-brand-black"
                    : "bg-white text-brand-gray border-gray-200 hover:border-brand-black hover:text-brand-black"
                }`}
                >
                {cat}
                </button>
            ))}
          </div>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {visibleFleet.map((car) => (
            <div key={car.id} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2">
              
              {/* Image Section - Clean & Cinematic */}
              <div className="relative h-72 overflow-hidden bg-gray-50">
                  <div className="absolute top-5 left-5 z-10">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest rounded-full text-brand-black shadow-sm">
                          {car.category}
                      </span>
                  </div>
                  {/* Premium Tag on Hover */}
                  <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                          <Sparkles size={12} className="text-accent-500" /> Premium
                      </span>
                  </div>
                  <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col gap-6 flex-grow relative">
                  
                  {/* Title & Price */}
                  <div>
                       <div className="flex justify-between items-start gap-4 mb-2">
                          <h4 className="font-serif text-3xl text-brand-black leading-none group-hover:text-accent-600 transition-colors duration-300">{car.name}</h4>
                       </div>
                       <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-brand-black tracking-tight">${car.pricePerDay}</span>
                            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">/ Día</span>
                       </div>
                  </div>

                  {/* Specs - Clean Row Layout with Dividers */}
                  <div className="flex items-center justify-between py-6 border-t border-gray-100 border-b border-gray-100">
                      <div className="flex flex-col items-center gap-2 px-2 flex-1">
                          <Users size={20} className="text-gray-400 stroke-1.5" />
                          <span className="text-sm font-bold text-brand-black text-center">{car.passengers} Pax</span>
                      </div>
                      <div className="w-[1px] h-8 bg-gray-100"></div>
                      <div className="flex flex-col items-center gap-2 px-2 flex-1">
                          <Briefcase size={20} className="text-gray-400 stroke-1.5" />
                          <span className="text-sm font-bold text-brand-black text-center">{car.luggage} Maletas</span>
                      </div>
                      <div className="w-[1px] h-8 bg-gray-100"></div>
                      <div className="flex flex-col items-center gap-2 px-2 flex-1">
                          <Gauge size={20} className="text-gray-400 stroke-1.5" />
                          <span className="text-sm font-bold text-brand-black text-center">Auto</span>
                      </div>
                  </div>
                  
                  {/* Features Tags */}
                   <div className="flex flex-wrap gap-2 justify-center">
                        {car.features.map((feature, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md">
                                {feature}
                            </span>
                        ))}
                   </div>

                  {/* Action Button */}
                  <button className="mt-auto w-full py-4 bg-brand-black text-white text-sm font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-accent-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      Reservar
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredFleet.length > 3 && (
             <div className="mt-16 flex justify-center">
                <button 
                    onClick={() => setVisibleCount(hasMore ? filteredFleet.length : 3)}
                    className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-black hover:text-accent-600 transition-colors pb-1 border-b border-brand-black hover:border-accent-600"
                >
                    {hasMore ? 'Ver toda la flota' : 'Ver menos'}
                    <ArrowRight size={16} className={`transition-transform duration-300 ${hasMore ? 'group-hover:translate-x-1' : 'rotate-180'}`} />
                </button>
             </div>
        )}

        {filteredFleet.length === 0 && (
            <div className="text-center py-20">
                <p className="text-brand-gray text-lg">No hay vehículos disponibles en esta categoría.</p>
            </div>
        )}
      </div>
    </section>
  );
};
