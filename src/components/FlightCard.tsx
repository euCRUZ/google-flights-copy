import React from "react"
import { Clock, Plane, Leaf } from "lucide-react"
import { Flight } from "../types/flight"
import { formatCurrency, formatTime } from "../utils/api"

interface FlightCardProps {
  flight: Flight
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  const outboundSegment = flight.outbound[0]
  const lastOutboundSegment = flight.outbound[flight.outbound.length - 1]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {outboundSegment.airline.name}
              </span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {outboundSegment.flightNumber}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatTime(outboundSegment.departure.time)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {outboundSegment.departure.airport.code}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                {outboundSegment.departure.airport.city}
              </div>
            </div>

            <div className="flex-1 flex items-center">
              <div className="flex-1 border-t-2 border-gray-300 dark:border-gray-600 relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3 h-3" />
                    {flight.totalDuration}
                  </div>
                </div>
                {flight.stops > 0 && (
                  <div className="absolute -top-1 left-1/3 w-2 h-2 bg-gray-400 rounded-full"></div>
                )}
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatTime(lastOutboundSegment.arrival.time)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {lastOutboundSegment.arrival.airport.code}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                {lastOutboundSegment.arrival.airport.city}
              </div>
            </div>
          </div>

          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            {flight.stops === 0 ? (
              <span className="text-green-600 font-medium">Direct</span>
            ) : (
              <span>
                {flight.stops} stop{flight.stops > 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-row lg:flex-col items-center gap-4">
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(flight.price.amount, "USD")}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              per person
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
            Find flights
          </button>
        </div>
      </div>

      {flight.carbonEmissions && (
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Leaf className="w-4 h-4 text-green-600" />
            <span>{flight.carbonEmissions} kg CO₂ emissions</span>
            <span className="text-green-600 font-medium">-23% emissions</span>
          </div>
        </div>
      )}
    </div>
  )
}
