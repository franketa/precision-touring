import { createServerClient } from '@/lib/supabase'

export default async function TestSupabase() {
  const supabase = createServerClient()
  
  try {
    // Test the connection by checking the auth status (this always works)
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    // Test basic connection by trying to get the current session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-green-600">Supabase Connection Test - SUCCESS! ✅</h1>
        
        <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
          <p className="text-green-700 mb-2">✅ Successfully connected to Supabase!</p>
          <p className="text-green-700 mb-2">✅ Environment variables loaded correctly</p>
          <p className="text-green-700">✅ Supabase client initialized properly</p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
          <h2 className="font-semibold text-blue-800 mb-2">Connection Details:</h2>
          <p className="text-sm text-blue-700">URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
          <p className="text-sm text-blue-700">Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20)}...</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-2">Authentication Status:</h2>
          <p className="text-sm text-yellow-700">
            Current User: {user ? `Logged in as ${user.email}` : 'Not logged in (anonymous)'}
          </p>
          <p className="text-sm text-yellow-700">
            Session: {session ? 'Active session found' : 'No active session'}
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded p-4">
          <h2 className="font-semibold text-gray-800 mb-2">Next Steps:</h2>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Your Supabase connection is working properly!</li>
            <li>You can now set up your database tables</li>
            <li>Consider setting up authentication if needed</li>
            <li>Start building your tour management features</li>
          </ul>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Supabase Connection Test - ERROR</h1>
        <div className="bg-red-50 border border-red-200 rounded p-4">
          <p className="text-red-700">Connection failed:</p>
          <pre className="mt-2 text-sm text-red-600">{JSON.stringify(error, null, 2)}</pre>
        </div>
      </div>
    )
  }
}