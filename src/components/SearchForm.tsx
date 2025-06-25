import React, { useState } from 'react';
import { Search, Calendar, Users, ArrowUpDown, Plane } from 'lucide-react';
import { SearchParams } from '../types/flight';

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
  loading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loading }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    origin: 'São Paulo',
    destination: 'João Pessoa',
    departureDate: '2024-03-15',
    returnDate: '2024-03-22',
    passengers: { adults: 1, children: 0, infants: 0 },
    cabinClass: 'economy',
    tripType: 'round-trip'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  const swapDestinations = () => {
    setSearchParams(prev => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin
    }));
  };

  const totalPassengers = searchParams.passengers.adults + searchParams.passengers.children + searchParams.passengers.infants;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          type="button"
          onClick={() => setSearchParams(prev => ({ ...prev, tripType: 'round-trip' }))}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            searchParams.tripType === 'round-trip'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Ida e volta
        </button>
        <button
          type="button"
          onClick={() => setSearchParams(prev => ({ ...prev, tripType: 'one-way' }))}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            searchParams.tripType === 'one-way'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Só ida
        </button>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
          <Users className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm text-gray-700 dark:text-gray-300">1</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
          <span className="text-sm text-gray-700 dark:text-gray-300">Econômica</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Origin and Destination */}
          <div className="lg:col-span-2 relative">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchParams.origin}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, origin: e.target.value }))}
                    className="w-full pl-10 pr-3 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="São Paulo"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchParams.destination}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, destination: e.target.value }))}
                    className="w-full pl-10 pr-3 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="João Pessoa"
                  />
                </div>
              </div>
            </div>
            
            <button
              type="button"
              onClick={swapDestinations}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <ArrowUpDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Dates */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Partida</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={searchParams.departureDate}
                onChange={(e) => setSearchParams(prev => ({ ...prev, departureDate: e.target.value }))}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {searchParams.tripType === 'round-trip' && (
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Volta</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  value={searchParams.returnDate || ''}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, returnDate: e.target.value }))}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          {loading ? 'Pesquisando...' : 'Pesquisar'}
        </button>
      </form>
    </div>
  );
};