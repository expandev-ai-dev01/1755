# Catálogo de Carros - Backend API

## Description
Backend API for vehicle catalog management system with contact form functionality.

## Features
- Vehicle listing with filtering and sorting
- Vehicle detail views
- Contact form submission

## Technology Stack
- Node.js
- Express.js
- TypeScript
- In-memory data storage (no database)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

## API Endpoints

Base URL: `http://localhost:3000/api/v1`

### Health Check
- `GET /health` - API health status

## Project Structure

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
└── server.ts         # Application entry point
```

## Development

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
npm run lint:fix
```

## License
ISC
