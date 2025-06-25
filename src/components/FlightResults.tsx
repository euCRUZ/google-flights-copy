import React from "react"
import { Filter, SortAsc } from "lucide-react"
import { Flight } from "../types/flight"
import { FlightCard } from "./FlightCard"

interface FlightResultsProps {
  flights: Flight[]
  totalResults: number
}

export const FlightResults: React.FC<FlightResultsProps> = ({
  flights,
  totalResults,
}) => {
  if (flights.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-500 dark:text-gray-400 text-lg">
          No flights found
        </div>
        <div className="text-gray-400 dark:text-gray-500 mt-2">
          Try adjusting your search criteria
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Cheap flights from Sao Paulo to Joao Pessoa
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            To help with your next trip, check out the information about the
            flights from Sao Paulo to Joao Pessoa.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
            <SortAsc className="w-4 h-4" />
            Sort
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 dark:bg-gray-700 text-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Cheapest round-trip flight</h3>
          <div className="text-2xl font-bold">R$ 1.224</div>
          <div className="text-sm text-gray-300">
            LATAM • 1 stop • 8 h • 4 Sep. – 10 Sep.
          </div>
          <p className="text-sm mt-2">
            Currently, the cheapest round-trip flight from Sao Paulo to Joao
            Pessoa costs R$ 1.224
          </p>
          <button className="mt-3 text-blue-400 hover:text-blue-300 text-sm">
            Find flights
          </button>
        </div>

        <div className="bg-gray-800 dark:bg-gray-700 text-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Cheapest one-way flight</h3>
          <div className="text-2xl font-bold">R$ 602</div>
          <div className="text-sm text-gray-300">
            LATAM • 1 stop • 6 h • 3 Sep.
          </div>
          <p className="text-sm mt-2">
            Currently, the cheapest one-way flight from Sao Paulo to Joao Pessoa
            costs R$ 602
          </p>
          <button className="mt-3 text-blue-400 hover:text-blue-300 text-sm">
            Find flights
          </button>
        </div>

        <div className="bg-gray-800 dark:bg-gray-700 text-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Fastest flight</h3>
          <div className="text-2xl font-bold">3 h 5 min</div>
          <div className="text-sm text-gray-300">
            The fastest flight from Sao Paulo to Joao Pessoa without stops takes
            3 h 5 min
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Direct flights</h4>
            <h4 className="text-xl font-bold">Every day</h4>
            <p className="text-sm">
              There are direct flights every day on this route.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>

      {flights.length < totalResults && (
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Load more flights
          </button>
        </div>
      )}
    </div>
  )
}
