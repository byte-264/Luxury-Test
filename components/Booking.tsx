
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Clock, CheckCircle2, Users, Briefcase, Shield, ArrowRight, Star, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';

interface BookingProps {
  onBack: () => void;
  onComplete: () => void;
}

// Mock data reused for consistency
const vehicles = [
  {
    id: 1,
    name: "Suburban High Country",
    category: "SUV",
    passengers: 7,
    luggage: 7,
    price: 350,
    image: "https://tuagenciadelrio.com/wp-content/uploads/2024/12/Suburban-2025-High-Country.webp",
  },
  {
    id: 3,
    name: "MB Sprinter Elite",
    category: "Van",
    passengers: 16,
    luggage: 12,
    price: 550,
    image: "https://www.mercedes-benz.com.co/mercedes/site/artic/20250409/imag/foto_0000013220250409041507/Van_de_lujo_Mercedes-Benz_Sprinter_de_pasajeros.jpg",
  },
  {
    id: 4,
    name: "Mercedes S-Class",
    category: "Sedán",
    passengers: 3,
    luggage: 3,
    price: 300,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
  }
];

export const Booking: React.FC<BookingProps> = ({ onBack, onComplete }) => {
  const [step, setStep] = useState<1 | 2>(1); // 1: Select Vehicle, 2: Details/Checkout
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleContinue = () => {
    if (step === 1 && selectedVehicle) {
      setStep(2);
      window.scrollTo(0,0);
    }
  };

  const handleConfirm = () => {
    setIsProcessing(true);
    // Simulate API call / Payment processing
    setTimeout(() => {
        setIsProcessing(false);
        onComplete();
    }, 2000);
  };

  const selectedCarData = vehicles.find(v => v.id === selectedVehicle);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* Navbar simplified for Booking Process */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={step === 1 ? onBack : () => setStep(1)} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
               <ArrowLeft size={20} className="text-brand-black" />
            </button>
            <span className="text-xl font-bold tracking-tighter text-brand-black">
              LUX<span className="font-serif italic">RIDE</span>
            </span>
          </div>
          
          {/* Progress Steps */}
          <div className="hidden md:flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
            <span className={`flex items-center gap-2 ${step >= 1 ? 'text-brand-black' : 'text-gray-300'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${step >= 1 ? 'bg-brand-black text-white border-brand-black' : 'border-gray-200'}`}>1</div>
              Vehículo
            </span>
            <div className="w-8 h-[1px] bg-gray-200"></div>
            <span className={`flex items-center gap-2 ${step >= 2 ? 'text-brand-black' : 'text-gray-400'}`}>
               <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${step >= 2 ? 'bg-brand-black text-white border-brand-black' : 'border-gray-200'}`}>2</div>
              Detalles
            </span>
          </div>

          <div className="w-10"></div> {/* Spacer */}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 mt-8 grid lg:grid-cols-3 gap-8">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
            
            {step === 1 ? (
                /* STEP 1: Vehicle Selection */
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h1 className="text-3xl font-bold text-brand-black mb-6">Seleccione su Vehículo</h1>
                    
                    {vehicles.map((vehicle) => (
                        <div 
                            key={vehicle.id}
                            onClick={() => setSelectedVehicle(vehicle.id)}
                            className={`group relative bg-white rounded-[2rem] p-4 md:p-6 border-2 cursor-pointer transition-all duration-300 flex flex-col md:flex-row gap-6 ${
                                selectedVehicle === vehicle.id 
                                ? 'border-brand-black shadow-lg' 
                                : 'border-transparent hover:border-gray-200 shadow-sm hover:shadow-md'
                            }`}
                        >
                             <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0 relative">
                                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
                                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                    {vehicle.category}
                                </div>
                             </div>

                             <div className="flex-grow flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif text-2xl text-brand-black">{vehicle.name}</h3>
                                    <div className="text-right">
                                        <span className="block text-xl font-bold text-brand-black">${vehicle.price}</span>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">Total Estimado</span>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4 mb-4 text-gray-500">
                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
                                        <Users size={14} /> {vehicle.passengers} Pax
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
                                        <Briefcase size={14} /> {vehicle.luggage} Maletas
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-accent-600 text-xs font-bold uppercase tracking-wider">
                                     <CheckCircle2 size={14} /> Disponibilidad Inmediata
                                </div>
                             </div>

                             {/* Selection Indicator */}
                             <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                 selectedVehicle === vehicle.id ? 'bg-brand-black border-brand-black' : 'border-gray-200'
                             }`}>
                                 {selectedVehicle === vehicle.id && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                             </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* STEP 2: Guest Details */
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h1 className="text-3xl font-bold text-brand-black">Detalles del Viaje</h1>
                    
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 space-y-6">
                        <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-100 pb-4 mb-4">Información de Contacto</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Nombre</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="Su nombre completo" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Apellido</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="Sus apellidos" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="correo@ejemplo.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Teléfono</label>
                                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="+52 ..." />
                            </div>
                        </div>

                        <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-100 pb-4 mb-4 mt-8">Notas Adicionales</h3>
                        <textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-brand-black transition-colors h-32" placeholder="Número de vuelo, requerimientos especiales (silla de bebé, bebidas)..."></textarea>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                         <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-100 pb-4 mb-4">Método de Pago</h3>
                         <div className="p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center">
                             <p className="text-sm text-gray-500 font-medium">Tarjeta de Crédito vinculada (Simulado)</p>
                         </div>
                    </div>
                </div>
            )}
        </div>

        {/* Sidebar - Summary */}
        <div className="lg:col-span-1">
             <div className="bg-white rounded-[2rem] p-8 shadow-lg shadow-gray-100 border border-gray-100 sticky top-28">
                <h3 className="text-xl font-serif text-brand-black mb-6">Resumen de Reserva</h3>
                
                {/* Route Info */}
                <div className="space-y-6 mb-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] top-8 bottom-8 w-[1px] bg-gray-200 border-l border-dashed border-gray-300"></div>
                    
                    <div className="flex gap-4 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-brand-black text-white flex items-center justify-center shrink-0 text-[10px]">A</div>
                        <div>
                            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Origen</span>
                            <p className="font-bold text-brand-black text-sm">Aeropuerto Internacional (CUN)</p>
                        </div>
                    </div>
                     <div className="flex gap-4 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-white border-2 border-brand-black flex items-center justify-center shrink-0 text-[8px]">B</div>
                        <div>
                            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Destino</span>
                            <p className="font-bold text-brand-black text-sm">Zona Hotelera, Cancún</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between py-4 border-t border-gray-100">
                     <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Fecha</span>
                        <p className="font-bold text-brand-black text-sm">Hoy</p>
                     </div>
                     <div className="text-right">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Hora</span>
                        <p className="font-bold text-brand-black text-sm">12:00 PM</p>
                     </div>
                </div>

                {selectedCarData && (
                    <div className="py-4 border-t border-gray-100 animate-in fade-in zoom-in duration-300">
                         <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Vehículo Seleccionado</span>
                         <div className="flex items-center gap-3">
                            <img src={selectedCarData.image} alt="car thumb" className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <p className="font-bold text-brand-black text-sm">{selectedCarData.name}</p>
                                <p className="text-xs text-accent-600 font-bold uppercase">Premium Class</p>
                            </div>
                         </div>
                    </div>
                )}

                <div className="mt-8 pt-6 border-t border-brand-black/10">
                    <div className="flex justify-between items-end mb-6">
                        <span className="font-serif text-lg text-brand-black">Total</span>
                        <span className="text-3xl font-bold text-brand-black tracking-tight">
                            ${selectedCarData ? selectedCarData.price : '0'}
                        </span>
                    </div>
                    
                    {step === 1 ? (
                         <Button 
                            variant="dark" 
                            className="w-full rounded-xl" 
                            disabled={!selectedVehicle}
                            onClick={handleContinue}
                         >
                            CONTINUAR
                         </Button>
                    ) : (
                        <Button 
                            variant="primary" 
                            className="w-full rounded-xl"
                            onClick={handleConfirm}
                            disabled={isProcessing}
                         >
                            {isProcessing ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="animate-spin" size={18} /> PROCESANDO...
                                </span>
                            ) : 'CONFIRMAR Y PAGAR'}
                         </Button>
                    )}
                </div>
             </div>

             {/* Trust Badges */}
             <div className="mt-6 flex justify-center gap-4 text-gray-400">
                 <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
                    <Shield size={12} /> Pago Seguro
                 </div>
                 <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
                    <Star size={12} /> Satisfacción 100%
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};
