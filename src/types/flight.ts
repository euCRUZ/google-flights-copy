export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

export interface Airline {
  code: string;
  name: string;
  logo?: string;
}

export interface FlightSegment {
  departure: {
    airport: Airport;
    time: string;
    terminal?: string;
  };
  arrival: {
    airport: Airport;
    time: string;
    terminal?: string;
  };
  airline: Airline;
  flightNumber: string;
  aircraft?: string;
  duration: string;
}

export interface Flight {
  id: string;
  price: {
    amount: number;
    currency: string;
  };
  outbound: FlightSegment[];
  inbound?: FlightSegment[];
  totalDuration: string;
  stops: number;
  bookingUrl?: string;
  carbonEmissions?: number;
}

export interface SearchParams {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  cabinClass: 'economy' | 'premium' | 'business' | 'first';
  tripType: 'round-trip' | 'one-way' | 'multi-city';
}

export interface FlightSearchResponse {
  flights: Flight[];
  totalResults: number;
  searchId: string;
}