'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MapPin, Home, Settings, Users, LogOut, Plus, DollarSign, Calendar } from 'lucide-react'
import { getCurrentUser, getDemoTours, signOut, type User } from '@/lib/auth'
import { formatCurrency, getTourStatusColor, getTourStatusText } from '@/utils'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [tours, setTours] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication and load user data
    const currentUser = getCurrentUser()
    if (!currentUser) {
      // Redirect to sign in if not authenticated
      window.location.href = '/auth/signin'
      return
    }

    setUser(currentUser)
    
    // Load demo tours for demo user
    if (currentUser.isDemo) {
      setTours(getDemoTours())
    }
    
    setLoading(false)
  }, [])

  const handleSignOut = () => {
    signOut()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-red-600">Precision Touring</span>
              </Link>
              <div className="ml-4">
                <p className="text-gray-600">Professional tour planning for artist managers</p>
                {user?.isDemo && (
                  <p className="text-sm text-blue-600 font-medium">Demo Mode - Welcome {user.name}!</p>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <nav className="flex items-center space-x-6">
                <Link 
                  href="/dashboard" 
                  className="flex items-center text-gray-900 hover:text-red-600 font-medium"
                >
                  <Home className="h-5 w-5 mr-1" />
                  Home
                </Link>
                <Link 
                  href="/dashboard/admin" 
                  className="flex items-center text-gray-600 hover:text-red-600 font-medium"
                >
                  <Settings className="h-5 w-5 mr-1" />
                  Admin
                </Link>
                <Link 
                  href="/dashboard/users" 
                  className="text-gray-600 hover:text-red-600 font-medium"
                >
                  Create Test Users
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center text-gray-600 hover:text-red-600 font-medium"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Sign Out
                </button>
              </nav>
              
              <Link 
                href="/dashboard/tours/new"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors duration-200"
              >
                <Plus className="h-5 w-5 mr-1" />
                New Tour
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        {tours.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Tours</p>
                  <p className="text-2xl font-bold text-gray-900">{tours.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Value</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(tours.reduce((sum, tour) => sum + (tour.totalCost || 0), 0))}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Active Tours</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {tours.filter(t => t.status === 'Active').length}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Stops</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {tours.reduce((sum, tour) => sum + (tour.stops || 0), 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div 
              key={tour.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-red-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{tour.name}</h3>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">Created {new Date(tour.created).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">{tour.stops} stops • {formatCurrency(tour.totalCost || 0)}</p>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTourStatusColor(tour.status)}`}>
                  {getTourStatusText(tour.status)}
                </span>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-1">💲</span>
                  <span>{tour.currency}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  href={`/dashboard/tours/${tour.id}`}
                  className="text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  View Tour →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for New Users */}
        {tours.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tours yet</h3>
            <p className="text-gray-600 mb-6">Get started by creating your first tour</p>
            <Link 
              href="/dashboard/tours/new"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors duration-200"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create Your First Tour
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
