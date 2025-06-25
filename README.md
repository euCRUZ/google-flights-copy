# Google Flights Clone

A modern, responsive Google Flights clone built with React, TypeScript, and Tailwind CSS, featuring integration with the Sky Scrapper API from RapidAPI.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design inspired by Google Flights
- **Flight Search**: Comprehensive search functionality with multiple filters
- **Real-time Data**: Integration with Sky Scrapper API for live flight data
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **TypeScript**: Full type safety and better developer experience
- **Performance**: Optimized loading states and smooth animations

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Sky Scrapper API (RapidAPI)
- **Build Tool**: Vite
- **Date Handling**: date-fns

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd google-flights-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file and add your RapidAPI key:
   ```
   VITE_RAPIDAPI_KEY=your-rapidapi-key-here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 API Integration

This application uses the Sky Scrapper API from RapidAPI. To get started:

1. Sign up at [RapidAPI](https://rapidapi.com/)
2. Subscribe to the [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper)
3. Get your API key from the dashboard
4. Add the key to your `.env` file

### API Endpoints Used

- `/api/v1/flights/search` - Search for flights
- `/api/v1/airports` - Get airport information
- `/api/v1/airlines` - Get airline information

## 🎯 Key Components

### SearchForm
- Flight search with origin/destination
- Date selection for departure/return
- Passenger count and cabin class selection
- Trip type (round-trip, one-way)

### FlightResults
- Display search results
- Sorting and filtering options
- Pagination support

### FlightCard
- Individual flight information
- Price display
- Airline and duration details
- Carbon emissions tracking

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔄 State Management

Uses React hooks for state management:
- `useFlights` - Custom hook for flight search and data management
- `useState` - Local component state
- `useCallback` - Optimized API calls

## 🚀 Performance Optimizations

- Lazy loading for large datasets
- Optimized re-renders with React.memo
- Efficient API calls with debouncing
- Image optimization and lazy loading

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Demo Features

The application includes:
- Mock data for demonstration purposes
- Realistic flight search interface
- Loading states and error handling
- Professional UI/UX design

## 📈 Future Enhancements

- User authentication
- Booking functionality
- Price alerts
- Multi-city trips
- Advanced filtering options
- Fare comparison charts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Built as a demonstration of modern React development practices and API integration skills.

---

**Note**: This is a demo application built for educational purposes. For production use, ensure proper API rate limiting, error handling, and security measures.