export interface Vehicle {
  id: number;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  pricePerDay: number;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}