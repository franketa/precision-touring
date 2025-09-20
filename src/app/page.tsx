import Link from 'next/link'
import { MapPin, Calculator, FileText, Clock, Users, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">PRECISION TOURING</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/signin" 
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            OPTIMIZE YOUR{' '}
            <span className="text-red-600">TOUR</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The complete solution for tour managers and coordinators. Plan routes, 
            calculate costs, ensure compliance, and generate professional budget plans with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              START PLANNING
            </Link>
            <Link 
              href="/demo" 
              className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              WATCH DEMO
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              EVERYTHING YOU NEED
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools designed specifically for professional tour management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Intelligent Route Planning */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-6">
                <MapPin className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                INTELLIGENT ROUTE PLANNING
              </h3>
              <p className="text-gray-600">
                Calculate optimal routes between tour stops with real-time mileage calculations 
                and Hours of Service (HOS) compliance tracking.
              </p>
            </div>

            {/* Detailed Cost Analysis */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-6">
                <Calculator className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                DETAILED COST ANALYSIS
              </h3>
              <p className="text-gray-600">
                Comprehensive breakdowns for vehicles, drivers, fuel, lodging, 
                and per diems with dynamic diesel price integration.
              </p>
            </div>

            {/* Professional Budget Plans */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-6">
                <FileText className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                PROFESSIONAL BUDGET PLANS
              </h3>
              <p className="text-gray-600">
                Generate detailed PDF budget plans with comprehensive cost breakdowns 
                and professional formatting.
              </p>
            </div>

            {/* HOS Compliance */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-6">
                <Clock className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                HOS COMPLIANCE
              </h3>
              <p className="text-gray-600">
                Automated tracking of driver hours and mandatory rest periods 
                to ensure DOT compliance.
              </p>
            </div>

            {/* Multi-Vehicle Fleet */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-6">
                <Users className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                MULTI-VEHICLE FLEET
              </h3>
              <p className="text-gray-600">
                Manage complex tours with multiple vehicles, drivers, 
                and crew members across different routes.
              </p>
            </div>

            {/* Route Optimization */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ROUTE OPTIMIZATION
              </h3>
              <p className="text-gray-600">
                AI-powered optimization to minimize overdrives and reduce total tour costs 
                while maintaining schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                WHY CHOOSE<br />
                PRECISION TOURING?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built by industry professionals who understand the complexities of tour logistics. 
                Our platform eliminates guesswork and reduces costly mistakes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Reduce tour planning time from days to hours
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Eliminate costly routing mistakes and overdrives
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Ensure DOT compliance and avoid violations
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Generate professional budget plans that secure approvals
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Track real-time fuel costs and budget accuracy
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                READY TO GET STARTED?
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Join tour managers who trust Precision Touring for their logistics planning.
              </p>
              <Link 
                href="/auth/signup"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
              >
                CREATE YOUR ACCOUNT
              </Link>
              <p className="text-sm text-gray-500 text-center mt-4">
                Free to use • No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-red-600 mr-2" />
              <span className="text-lg font-bold text-gray-900">PRECISION TOURING</span>
            </div>
            <p className="text-gray-600 text-center">
              Professional tour planning for the entertainment industry
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
