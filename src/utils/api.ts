const API_BASE_URL = "https://sky-scrapper.p.rapidapi.com"

// You'll need to add your RapidAPI key here
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
  "Content-Type": "application/json",
}

export const apiClient = {
  get: async (endpoint: string, params?: Record<string, string>) => {
    const url = new URL(`${API_BASE_URL}${endpoint}`)
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          // Só adiciona parâmetros com valor
          url.searchParams.append(key, value)
        }
      })
    }

    console.log("API Request URL:", url.toString()) // Debug

    const response = await fetch(url.toString(), {
      method: "GET",
      headers,
    })

    console.log("API Response Status:", response.status) // Debug

    if (!response.ok) {
      const errorText = await response.text()
      console.error("API Error Response:", errorText) // Debug
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  },

  post: async (endpoint: string, data: Record<string, unknown>) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("API Error Response:", errorText) // Debug
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  },
}

export const formatCurrency = (amount: number, currency: string = "USD") => {
  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount)
}

export const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours === 0) return `${mins}m`
  if (mins === 0) return `${hours}h`
  return `${hours}h ${mins}m`
}

export const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
}
