import { useState, useCallback } from "react"
import { Flight, SearchParams } from "../types/flight"
import { apiClient } from "../utils/api"

export const useFlights = () => {
  const [flights, setFlights] = useState<Flight[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [totalResults, setTotalResults] = useState(0)

  const searchFlights = useCallback(async (searchParams: SearchParams) => {
    setLoading(true)
    setError(null)

    try {
      // Endpoint correto baseado no curl
      const response = await apiClient.get("/api/v1/flights/searchFlights", {
        originSkyId: searchParams.origin,
        destinationSkyId: searchParams.destination,
        date: searchParams.departureDate,
        cabinClass: searchParams.cabinClass,
        adults: searchParams.passengers.adults.toString(),
        children: searchParams.passengers.children.toString(),
        infants: searchParams.passengers.infants.toString(),
        sortBy: "best",
        currency: "USD",
        market: "en-US",
        countryCode: "US",
      })

      // DEBUG: Vamos ver o que a API retorna
      console.log("API Response:", response)
      console.log("Response type:", typeof response)
      console.log("Response keys:", Object.keys(response))

      // Tentar diferentes estruturas possíveis
      const flightsData =
        response.data?.itineraries ||
        response.itineraries ||
        response.flights ||
        response.data ||
        []

      console.log("Flights data found:", flightsData)

      setFlights(flightsData)
      setTotalResults(flightsData.length || 0)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setFlights([])
      setTotalResults(0)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    flights,
    loading,
    error,
    totalResults,
    searchFlights,
  }
}
