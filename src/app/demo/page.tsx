import Link from 'next/link'
import { MapPin, Play, ArrowLeft } from 'lucide-react'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <MapPin className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">PRECISION TOURING</span>
            </Link>
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Demo Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Precision Touring Demo
          </h1>
          <p className="text-xl text-gray-600">
            See how our platform transforms tour planning from days to hours
          </p>
        </div>

        {/* Demo Video Placeholder */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <Play className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Demo Video Coming Soon</p>
              <p className="text-gray-500">Watch how Precision Touring streamlines tour management</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What You'll See in the Demo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">AI Tour Parsing</h4>
                <p className="text-gray-600">
                  Paste a simple list of cities and dates, watch AI structure it into a complete tour plan
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Route Optimization</h4>
                <p className="text-gray-600">
                  See PC*Miler calculate precise mileage and optimal routes between stops
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cost Calculation</h4>
                <p className="text-gray-600">
                  Real-time pricing with current diesel costs and comprehensive budget breakdowns
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Professional Output</h4>
                <p className="text-gray-600">
                  Generate client-ready PDF budgets and tour plans in minutes, not hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-red-600 text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Complete tour planning in minutes instead of days with our AI-powered tools
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-red-600 text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision Accurate</h3>
            <p className="text-gray-600">
              Professional-grade calculations using PC*Miler and real-time data sources
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-red-600 text-3xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">DOT Compliant</h3>
            <p className="text-gray-600">
              Automated Hours of Service tracking ensures you stay compliant with regulations
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Tour Planning?</h2>
          <p className="text-xl mb-6 text-red-100">
            Join tour managers who save hours every week with Precision Touring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/signup"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/dashboard"
              className="border border-white text-white hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Live Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
