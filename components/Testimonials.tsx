
import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, TechStart",
    content: "La precisión y elegancia del servicio superaron todas mis expectativas. Absolutamente recomendable para viajes de negocios.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Travel Editor",
    content: "He probado servicios de chofer en todo el mundo. LuxRide tiene esa atención al detalle que es difícil de encontrar hoy en día.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Event Planner",
    content: "Coordinar el transporte para 50 ejecutivos fue sencillo gracias a su equipo. Los vehículos estaban impecables.",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
            <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-6 shadow-sm text-accent-500">
                <Star size={20} fill="currentColor" stroke="none" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-4">Opiniones Reales</h2>
            <p className="text-brand-gray text-lg max-w-2xl">La confianza de nuestros clientes es nuestro mayor activo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-brand-light p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start border border-gray-100/50">
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-black" fill="currentColor" stroke="none" />
                ))}
              </div>

              <p className="text-brand-black text-xl font-medium leading-relaxed mb-10 flex-grow">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover bg-white ring-2 ring-white"
                />
                <div>
                    <h4 className="text-brand-black font-bold text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};