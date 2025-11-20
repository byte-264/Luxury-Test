
import React from 'react';
import { Button } from './ui/Button';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-0 bg-white">
      {/* Section 1: Image Left */}
      <div className="grid lg:grid-cols-2 min-h-[800px]">
        <div className="relative h-[500px] lg:h-full overflow-hidden group">
            <img 
                src="https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Chauffeur Profesional" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
        </div>
        <div className="flex items-center justify-center p-12 lg:p-24 bg-brand-light">
            <div className="max-w-lg">
                <span className="text-accent-600 uppercase tracking-widest text-sm font-bold mb-6 block">Servicio Personalizado</span>
                <h2 className="text-5xl text-brand-black font-bold mb-8 leading-tight tracking-tight">
                    Más que un <br/>
                    <span className="font-serif italic text-accent-500 font-normal">Chofer</span>.
                </h2>
                <p className="text-brand-gray mb-10 leading-relaxed font-normal text-xl">
                    Nuestros conductores son embajadores de la hospitalidad. Entrenados en protocolo, discreción y conocimiento local para asegurar que su viaje sea impecable.
                </p>
                <ul className="space-y-6">
                    <li className="flex items-center gap-4 text-brand-black font-bold text-lg">
                        <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div>
                        <span>Bilingües y Certificados</span>
                    </li>
                    <li className="flex items-center gap-4 text-brand-black font-bold text-lg">
                        <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div>
                        <span>Asistencia con Equipaje</span>
                    </li>
                    <li className="flex items-center gap-4 text-brand-black font-bold text-lg">
                        <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div>
                        <span>Concierge en Ruta</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      {/* Section 2: Image Right */}
      <div className="grid lg:grid-cols-2 min-h-[800px]">
        <div className="flex items-center justify-center p-12 lg:p-24 bg-white order-2 lg:order-1">
             <div className="max-w-lg">
                <span className="text-accent-600 uppercase tracking-widest text-sm font-bold mb-6 block">Corporativo & Placer</span>
                <h2 className="text-5xl text-brand-black font-bold mb-8 leading-tight tracking-tight">
                    Excelencia <br/>
                    <span className="font-serif italic text-accent-500 font-normal">Sin Límites</span>.
                </h2>
                <p className="text-brand-gray mb-12 leading-relaxed font-normal text-xl">
                    Desde retiros corporativos de alto nivel hasta escapadas románticas en Tulum. Adaptamos cada detalle de la logística terrestre a sus necesidades específicas.
                </p>
                <Button variant="outline" className="px-12 py-4 border-brand-black text-brand-black hover:bg-brand-black hover:text-white">
                    Servicios Corporativos
                </Button>
            </div>
        </div>
        <div className="relative h-[500px] lg:h-full overflow-hidden group order-1 lg:order-2">
            <img 
                src="https://images.pexels.com/photos/20779815/pexels-photo-20779815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Luxury Interior" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
        </div>
      </div>
    </section>
  );
};