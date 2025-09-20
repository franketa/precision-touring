'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, ArrowLeft, Sparkles, Upload, FileText } from 'lucide-react'

export default function NewTourPage() {
  const [tourName, setTourName] = useState('')
  const [tourInput, setTourInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [parsedTour, setParsedTour] = useState<any>(null)

  const handleParseTour = async () => {
    if (!tourInput.trim()) return
    
    setLoading(true)
    
    // Simulate AI parsing
    setTimeout(() => {
      const mockParsedTour = {
        stops: [
          { city: 'Los Angeles', state: 'CA', date: '2025-10-01', venue: 'The Forum' },
          { city: 'Phoenix', state: 'AZ', date: '2025-10-03', venue: 'Talking Stick Resort Arena' },
          { city: 'Denver', state: 'CO', date: '2025-10-05', venue: 'Ball Arena' },
          { city: 'Chicago', state: 'IL', date: '2025-10-07', venue: 'United Center' },
          { city: 'New York', state: 'NY', date: '2025-10-09', venue: 'Madison Square Garden' }
        ],
        recommendations: [
          'Consider fuel stops every 300-400 miles',
          'Plan for driver rest periods every 8 hours',
          'Total estimated mileage: 2,847 miles',
          'Estimated fuel cost: $1,423 (based on current diesel prices)'
        ],
        totalMileage: 2847,
        estimatedCost: 15420
      }
      
      setParsedTour(mockParsedTour)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 mr-6">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Create New Tour</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tour Information</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="tourName" className="block text-sm font-medium text-gray-700 mb-2">
                  Tour Name
                </label>
                <input
                  id="tourName"
                  type="text"
                  value={tourName}
                  onChange={(e) => setTourName(e.target.value)}
                  placeholder="Enter tour name (e.g., Conan Gray Fall Tour 2025)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="tourInput" className="block text-sm font-medium text-gray-700 mb-2">
                  Tour Stops
                </label>
                <textarea
                  id="tourInput"
                  value={tourInput}
                  onChange={(e) => setTourInput(e.target.value)}
                  placeholder="Paste your tour stops here. Format examples:&#10;Los Angeles, CA - October 1, 2025 - The Forum&#10;Phoenix, AZ - October 3, 2025 - Talking Stick Resort Arena&#10;Denver, CO - October 5, 2025 - Ball Arena&#10;&#10;Or simply:&#10;Los Angeles, CA - Oct 1&#10;Phoenix, AZ - Oct 3&#10;Denver, CO - Oct 5"
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <button
                onClick={handleParseTour}
                disabled={!tourInput.trim() || loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-3 rounded-md font-medium flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Parsing with AI...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />
                    Parse Tour with AI
                  </>
                )}
              </button>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">Alternative input methods:</p>
                <div className="flex space-x-2">
                  <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    <Upload className="h-4 w-4 mr-1" />
                    Upload CSV
                  </button>
                  <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    <FileText className="h-4 w-4 mr-1" />
                    Import Excel
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Parsed Tour Plan</h2>
            
            {!parsedTour ? (
              <div className="text-center py-12 text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Enter tour stops and click "Parse Tour with AI" to see the structured plan</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Tour Stops */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Tour Stops ({parsedTour.stops.length})</h3>
                  <div className="space-y-2">
                    {parsedTour.stops.map((stop: any, index: number) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="font-medium text-gray-900">
                            {stop.city}, {stop.state}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stop.date} {stop.venue && `• ${stop.venue}`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Tour Summary</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Total Mileage:</span>
                      <span className="font-medium text-gray-900 ml-2">{parsedTour.totalMileage.toLocaleString()} miles</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Estimated Cost:</span>
                      <span className="font-medium text-gray-900 ml-2">${parsedTour.estimatedCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">AI Recommendations</h3>
                  <ul className="space-y-1 text-sm">
                    {parsedTour.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="border-t pt-4 flex space-x-3">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium">
                    Create Tour
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Edit Stops
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
