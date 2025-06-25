import React from 'react';
import { Filter, SortAsc } from 'lucide-react';
import { Flight } from '../types/flight';
import { FlightCard } from './FlightCard';

interface FlightResultsProps {
  flights: Flight[];
  totalResults: number;
}

export const FlightResults: React.FC<FlightResultsProps> = ({ flights, totalResults }) => {
  if (flights.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-500 dark:text-gray-400 text-lg">Nenhum voo encontrado</div>
        <div className="text-gray-400 dark:text-gray-500 mt-2">Tente ajustar seus critérios de busca</div>
      </div>
    );
  }

  return (
    <div>
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Voos baratos de São Paulo para João Pessoa
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Para ajudar no planejamento da sua próxima viagem, confira as informações dos voos de São Paulo para João Pessoa.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
            <SortAsc className="w-4 h-4" />
            Ordenar
          </button>
        </div>
      </div>

      {/* Flight Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 dark:bg-gray-700 text-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Voo de ida e volta mais barato</h3>
          <div className="text-2xl font-bold">R$ 1.224</div>
          <div className="text-sm text-gray-300">LATAM • 1 parada • 8 h • 4 de set. – 10 de set.</div>
          <p className="text-sm mt-2">Atualmente, o voo de ida e volta mais barato de São Paulo para João Pessoa custa R$ 1.224</p>
          <button className="mt-3 text-blue-400 hover:text-blue-300 text-sm">Encontrar voos</button>
        </div>

        <div className="bg-gray-800 dark:bg-gray-700 text-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Voo só de ida mais barato</h3>
          <div className="text-2xl font-bold">R$ 602</div>
          <div className="text-sm text-gray-300">LATAM • 1 parada • 6 h • 3 de set.</div>
          <p className="text-sm mt-2">Atualmente, o voo só de ida mais barato de São Paulo para João Pessoa custa R$ 602</p>
          <button className="mt-3 text-blue-400 hover:text-blue-300 text-sm">Encontrar voos</button>
        </div>

        <div className="bg-gray-800 dark:bg-gray-700 text-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Voo mais rápido</h3>
          <div className="text-2xl font-bold">3 h 5 min</div>
          <div className="text-sm text-gray-300">O voo mais rápido sem escalas de São Paulo para João Pessoa leva 3 h 5 min</div>
          <div className="mt-4">
            <h4 className="font-semibold">Voos diretos</h4>
            <h4 className="text-xl font-bold">Todos os dias</h4>
            <p className="text-sm">Todo dia há voos diretos nessa rota.</p>
          </div>
        </div>
      </div>

      {/* Flight Cards */}
      <div className="space-y-4">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>

      {/* Load More */}
      {flights.length < totalResults && (
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Carregar mais voos
          </button>
        </div>
      )}
    </div>
  );
};