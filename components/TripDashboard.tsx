
import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Star, Clock, CheckCircle2, Calendar, ArrowRight, XCircle, History, User, Car } from 'lucide-react';

interface TripDashboardProps {
  onBack: () => void;
}

type Tab = 'current' | 'history' | 'cancelled';

// Mock Data for History
const pastTrips = [
    { id: "LUX-8810", date: "12 Oct 2024", time: "14:30", origin: "Hotel Xcaret", dest: "Aeropuerto (CUN)", price: 350, car: "Suburban High Country", rating: 5 },
    { id: "LUX-8750", date: "05 Sep 2024", time: "09:00", origin: "Aeropuerto (CUN)", dest: "Tulum Centro", price: 450, car: "Escalade ESV", rating: 5 },
];

const cancelledTrips = [
    { id: "LUX-8900", date: "20 Nov 2024", origin: "Playa del Carmen", dest: "Aeropuerto (CUN)", price: 280, car: "BMW 7 Series", reason: "Cancelado por usuario" }
];

export const TripDashboard: React.FC<TripDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<Tab>('current');
  const [progress, setProgress] = useState(35); // Mock progress percentage

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-brand-black text-white rounded-xl flex items-center justify-center">
                <span className="font-serif italic font-bold text-lg">L</span>
             </div>
             <span className="font-bold text-brand-black tracking-tight text-lg hidden md:block">Mi Panel</span>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" alt="User" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-bold text-brand-black hidden md:block">Alejandro</span>
             </div>
             <button onClick={onBack} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-black transition-colors">
                Salir
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-10">
            <div className="bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm inline-flex relative">
                <button 
                    onClick={() => setActiveTab('current')}
                    className={`px-6 md:px-8 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                        activeTab === 'current' 
                        ? 'bg-brand-black text-white shadow-lg' 
                        : 'text-gray-400 hover:text-brand-black hover:bg-gray-50'
                    }`}
                >
                    <Car size={16} />
                    <span>En Curso</span>
                </button>
                <button 
                    onClick={() => setActiveTab('history')}
                    className={`px-6 md:px-8 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                        activeTab === 'history' 
                        ? 'bg-brand-black text-white shadow-lg' 
                        : 'text-gray-400 hover:text-brand-black hover:bg-gray-50'
                    }`}
                >
                    <History size={16} />
                    <span>Historial</span>
                </button>
                <button 
                    onClick={() => setActiveTab('cancelled')}
                    className={`px-6 md:px-8 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                        activeTab === 'cancelled' 
                        ? 'bg-brand-black text-white shadow-lg' 
                        : 'text-gray-400 hover:text-brand-black hover:bg-gray-50'
                    }`}
                >
                    <XCircle size={16} />
                    <span>Cancelados</span>
                </button>
            </div>
        </div>

        {/* TAB CONTENT: CURRENT TRIP */}
        {activeTab === 'current' && (
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Left Column: Trip Status & Route (The "Ticket") */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-lg flex flex-col">
                    
                    {/* Status Header */}
                    <div className="bg-brand-black p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/20 rounded-full blur-[40px] -mr-10 -mt-10"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-accent-500 text-brand-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                                    En Progreso
                                </span>
                                <span className="text-white/60 font-mono text-xs tracking-wider">REF: LUX-9921</span>
                            </div>
                            <h2 className="text-3xl font-serif italic mb-2">Chofer en Camino</h2>
                            <p className="text-white/80 text-sm">Su unidad llegará en aproximadamente 15 minutos.</p>
                            
                            {/* Progress Bar */}
                            <div className="w-full h-1.5 bg-white/20 rounded-full mt-6 overflow-hidden">
                                <div className="h-full bg-accent-500 rounded-full transition-all duration-1000" style={{ width: '35%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Route Details */}
                    <div className="p-8 flex-grow flex flex-col justify-center">
                        <div className="relative pl-8 space-y-10">
                            {/* Line */}
                            <div className="absolute left-[11px] top-2 bottom-10 w-[2px] bg-gray-100"></div>
                            
                            {/* Origin */}
                            <div className="relative">
                                <div className="absolute -left-[39px] w-6 h-6 rounded-full bg-brand-black border-4 border-white shadow-sm z-10"></div>
                                <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Origen • 10:30 AM</label>
                                <h3 className="text-xl font-bold text-brand-black">Aeropuerto (CUN)</h3>
                                <p className="text-sm text-gray-500">Terminal 3, Puerta 4</p>
                            </div>

                            {/* Destination */}
                            <div className="relative">
                                <div className="absolute -left-[39px] w-6 h-6 rounded-full bg-accent-500 border-4 border-white shadow-sm z-10"></div>
                                <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Destino • Estimado 11:15 AM</label>
                                <h3 className="text-xl font-bold text-brand-black">Hotel Xcaret Arte</h3>
                                <p className="text-sm text-gray-500">Lobby Principal</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider">
                             <Shield size={14} /> Viaje Asegurado
                        </div>
                        <div className="text-right">
                            <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total</span>
                            <span className="text-lg font-bold text-brand-black">$350.00</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Vehicle & Driver Info */}
                <div className="space-y-6">
                    
                    {/* Vehicle Card */}
                    <div className="bg-white rounded-[2.5rem] p-2 shadow-sm border border-gray-100">
                        <div className="relative h-48 rounded-[2rem] overflow-hidden mb-4 group">
                            <img 
                                src="https://tuagenciadelrio.com/wp-content/uploads/2024/12/Suburban-2025-High-Country.webp" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Vehicle"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white">
                                SUV Premium
                            </div>
                        </div>
                        <div className="px-6 pb-6">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black">Suburban High Country</h3>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Chevrolet • Negro</p>
                                </div>
                                <div className="bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">
                                    <span className="font-mono font-bold text-brand-black tracking-widest">LUX-998</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                    <CheckCircle2 size={16} className="text-accent-500" /> A/C Control
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                    <CheckCircle2 size={16} className="text-accent-500" /> WiFi a bordo
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Driver Info (Static) */}
                    <div className="bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm flex items-center gap-6">
                        <div className="relative">
                            <img 
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" 
                                className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                                alt="Driver"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-brand-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                                5.0 <Star size={8} fill="white" />
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Su Chofer</p>
                            <h3 className="text-lg font-bold text-brand-black">Roberto Martinez</h3>
                            <p className="text-sm text-gray-500">Certificado • Bilingüe</p>
                        </div>
                    </div>

                </div>
            </div>
        )}

        {/* TAB CONTENT: HISTORY */}
        {activeTab === 'history' && (
            <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {pastTrips.map(trip => (
                    <div key={trip.id} className="bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-center gap-6 group">
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-black shrink-0 group-hover:bg-brand-black group-hover:text-white transition-colors">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">#{trip.id}</span>
                                    <span className="text-xs font-bold text-brand-black bg-gray-100 px-2 py-0.5 rounded">{trip.date}</span>
                                </div>
                                <h3 className="text-lg font-bold text-brand-black flex items-center gap-2">
                                    {trip.origin} <ArrowRight size={16} className="text-gray-400" /> {trip.dest}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1 font-medium">{trip.car} • {trip.time}</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2 w-full md:w-auto text-right border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                            <span className="text-2xl font-bold text-brand-black">${trip.price}</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className={`${i < trip.rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-black transition-colors mt-1">
                                Ver Recibo
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* TAB CONTENT: CANCELLED */}
        {activeTab === 'cancelled' && (
            <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 {cancelledTrips.map(trip => (
                    <div key={trip.id} className="bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-sm opacity-75 hover:opacity-100 transition-opacity flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 shrink-0">
                                <XCircle size={24} />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">#{trip.id}</span>
                                    <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">Cancelado</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-500 line-through decoration-gray-300 flex items-center gap-2">
                                    {trip.origin} <ArrowRight size={16} className="text-gray-300" /> {trip.dest}
                                </h3>
                                <p className="text-sm text-red-400 mt-1 font-medium">Motivo: {trip.reason}</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2 w-full md:w-auto text-right border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                            <span className="text-xl font-bold text-gray-400">${trip.price}</span>
                            <button className="text-xs font-bold uppercase tracking-widest text-brand-black underline decoration-gray-300 hover:decoration-brand-black transition-all mt-1">
                                Detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )}

      </main>
    </div>
  );
};
