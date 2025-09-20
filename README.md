# Precision Touring

Professional tour planning platform designed specifically for the entertainment industry. This application helps tour managers and coordinators plan, optimize, and budget multi-city tours with precision and efficiency.

## Features

### Core MVP Features
- **AI-Powered Tour Planning**: Parse city/state/date lists into structured tour plans
- **Professional Route Optimization**: PC*Miler integration for precise mileage calculations
- **Dynamic Cost Calculation**: Real-time pricing engine with daily diesel price integration
- **HOS Compliance**: Hours of Service tracking for DOT compliance
- **Fleet Management**: Support for multiple vehicles and crew members
- **Professional Export**: Generate detailed PDF budget plans

### Technical Stack
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)
- **APIs**: PC*Miler, EIA (Energy Information Administration), OpenAI
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- API keys for external services (optional for development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd precision-touring
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example.txt .env.local
```

Edit `.env.local` with your actual values:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# External API Keys (optional for development)
PCMILER_API_KEY=your_pcmiler_api_key
EIA_API_KEY=your_eia_api_key
OPENAI_API_KEY=your_openai_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard and tour management
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable React components
│   └── ui/               # UI components
├── lib/                   # Core utilities and configurations
│   ├── supabase.ts       # Supabase client setup
│   └── api-clients.ts    # External API clients
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
└── styles/               # Global styles
```

## API Integration

### Supabase Setup
1. Create a new Supabase project
2. Set up authentication (email/password)
3. Configure Row Level Security (RLS) policies
4. Create database tables for tours, stops, costs, etc.

### External APIs
- **PC*Miler**: Professional routing and mileage calculations
- **EIA API**: Real-time diesel price data
- **OpenAI**: AI-powered tour parsing and optimization

*Note: The application includes mock implementations for all external APIs, so you can develop and test without actual API keys.*

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Key Features in Development
1. **Tour Creation**: AI-powered parsing of tour descriptions
2. **Route Optimization**: Calculate optimal routes between stops
3. **Cost Management**: Dynamic pricing with real-time fuel costs
4. **PDF Generation**: Professional budget documents
5. **HOS Compliance**: Driver hours tracking

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@precisiontouring.com or create an issue in the GitHub repository.

## Roadmap

### Phase 1 (MVP) ✅
- Basic authentication and dashboard
- Tour creation and management
- AI tour parsing
- Route calculation with PC*Miler
- Cost calculation engine

### Phase 2 (Post-MVP)
- Roster & Travel Integration (Amadeus + Expense Cards)
- Venue Database + Load-in Instructions
- Advanced Reporting Suite
- Backline Rider Upload + Cargo Estimator
- Fuel Stop Optimization

---

**Built by industry professionals for the entertainment industry.**
