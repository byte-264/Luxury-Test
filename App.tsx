
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Fleet } from './components/Fleet';
import { Benefits } from './components/Benefits';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Auth } from './components/Auth';
import { Booking } from './components/Booking';
import { TripDashboard } from './components/TripDashboard';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'auth' | 'booking' | 'dashboard'>('home');

  // Handle Navigation Logic
  if (currentView === 'auth') {
    return (
      <Auth 
        onBack={() => setCurrentView('home')} 
        onLogin={() => setCurrentView('dashboard')}
      />
    );
  }

  if (currentView === 'booking') {
    return <Booking 
      onBack={() => setCurrentView('home')} 
      onComplete={() => setCurrentView('dashboard')}
    />;
  }

  if (currentView === 'dashboard') {
    return <TripDashboard onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-black selection:bg-accent-500 selection:text-white">
      <Navbar onLoginClick={() => setCurrentView('auth')} />
      <main>
        {/* Pass callback to Hero to trigger booking view */}
        <Hero onBookingClick={() => setCurrentView('booking')} />
        <Benefits />
        <Fleet />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
