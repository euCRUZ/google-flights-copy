import { useState, useCallback } from 'react';
import { Flight, SearchParams, FlightSearchResponse } from '../types/flight';
import { apiClient } from '../utils/api';

export const useFlights = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState(0);

  const searchFlights = useCallback(async (searchParams: SearchParams) => {
    setLoading(true);
    setError(null);
    
    try {
      // Mock API call - replace with actual Sky Scrapper API endpoints
      // The actual implementation would depend on the Sky Scrapper API documentation
      
      // Simulating API call with mock data for demo purposes
      const mockFlights: Flight[] = [
        {
          id: '1',
          price: { amount: 1224, currency: 'BRL' },
          outbound: [{
            departure: {
              airport: { code: 'GRU', name: 'Aeroporto Internacional de São Paulo', city: 'São Paulo', country: 'Brasil' },
              time: '2024-03-15T08:00:00Z',
              terminal: '3'
            },
            arrival: {
              airport: { code: 'JPA', name: 'Aeroporto Castro Pinto', city: 'João Pessoa', country: 'Brasil' },
              time: '2024-03-15T11:30:00Z',
              terminal: '1'
            },
            airline: { code: 'LA', name: 'LATAM' },
            flightNumber: 'LA3456',
            aircraft: 'Airbus A320',
            duration: '3h 30m'
          }],
          totalDuration: '3h 30m',
          stops: 0,
          carbonEmissions: 189
        },
        {
          id: '2',
          price: { amount: 602, currency: 'BRL' },
          outbound: [{
            departure: {
              airport: { code: 'GRU', name: 'Aeroporto Internacional de São Paulo', city: 'São Paulo', country: 'Brasil' },
              time: '2024-03-15T14:15:00Z',
              terminal: '2'
            },
            arrival: {
              airport: { code: 'REC', name: 'Aeroporto Internacional do Recife', city: 'Recife', country: 'Brasil' },
              time: '2024-03-15T17:45:00Z'
            },
            airline: { code: 'G3', name: 'GOL' },
            flightNumber: 'G31234',
            duration: '3h 30m'
          }, {
            departure: {
              airport: { code: 'REC', name: 'Aeroporto Internacional do Recife', city: 'Recife', country: 'Brasil' },
              time: '2024-03-15T19:30:00Z'
            },
            arrival: {
              airport: { code: 'JPA', name: 'Aeroporto Castro Pinto', city: 'João Pessoa', country: 'Brasil' },
              time: '2024-03-15T20:30:00Z',
              terminal: '1'
            },
            airline: { code: 'G3', name: 'GOL' },
            flightNumber: 'G35678',
            duration: '1h 00m'
          }],
          totalDuration: '6h 15m',
          stops: 1,
          carbonEmissions: 245
        },
        {
          id: '3',
          price: { amount: 890, currency: 'BRL' },
          outbound: [{
            departure: {
              airport: { code: 'GRU', name: 'Aeroporto Internacional de São Paulo', city: 'São Paulo', country: 'Brasil' },
              time: '2024-03-15T06:00:00Z',
              terminal: '2'
            },
            arrival: {
              airport: { code: 'JPA', name: 'Aeroporto Castro Pinto', city: 'João Pessoa', country: 'Brasil' },
              time: '2024-03-15T09:05:00Z',
              terminal: '1'
            },
            airline: { code: 'AD', name: 'Azul' },
            flightNumber: 'AD2789',
            aircraft: 'Embraer E195',
            duration: '3h 05m'
          }],
          totalDuration: '3h 05m',
          stops: 0,
          carbonEmissions: 165
        }
      ];

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFlights(mockFlights);
      setTotalResults(mockFlights.length);
      
      // Uncomment below for actual API implementation:
      /*
      const response = await apiClient.get('/api/v1/flights/search', {
        origin: searchParams.origin,
        destination: searchParams.destination,
        departure_date: searchParams.departureDate,
        return_date: searchParams.returnDate || '',
        adults: searchParams.passengers.adults.toString(),
        children: searchParams.passengers.children.toString(),
        infants: searchParams.passengers.infants.toString(),
        cabin_class: searchParams.cabinClass,
        trip_type: searchParams.tripType,
      });
      
      setFlights(response.flights || []);
      setTotalResults(response.totalResults || 0);
      */
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao buscar voos');
      setFlights([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    flights,
    loading,
    error,
    totalResults,
    searchFlights,
  };
};