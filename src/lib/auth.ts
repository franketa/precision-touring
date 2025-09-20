// Authentication utilities for demo user and future Supabase integration

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'customer';
  isDemo?: boolean;
}

// Demo user configuration
export const DEMO_USER: User = {
  id: 'demo-user-id',
  email: 'demo@precisiontouring.com',
  name: 'Demo User',
  role: 'admin',
  isDemo: true
};

// Get current user from localStorage (for demo purposes)
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const userStr = localStorage.getItem('precision_user');
    return userStr ? JSON.parse(userStr) : null;
  } catch {
    return null;
  }
}

// Set current user in localStorage
export function setCurrentUser(user: User): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('precision_user', JSON.stringify(user));
  } catch {
    console.error('Failed to save user to localStorage');
  }
}

// Clear current user session
export function clearCurrentUser(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem('precision_user');
  } catch {
    console.error('Failed to clear user from localStorage');
  }
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

// Check if current user is demo user
export function isDemoUser(): boolean {
  const user = getCurrentUser();
  return user?.isDemo === true;
}

// Authenticate demo user
export function authenticateDemo(): User {
  setCurrentUser(DEMO_USER);
  return DEMO_USER;
}

// Sign out current user
export function signOut(): void {
  clearCurrentUser();
  if (typeof window !== 'undefined') {
    window.location.href = '/auth/signin';
  }
}

// Mock authentication for other users (for development)
export async function authenticateUser(email: string, password: string): Promise<User | null> {
  // Demo user authentication
  if (email === DEMO_USER.email && password === 'demo123') {
    return authenticateDemo();
  }
  
  // In production, this would integrate with Supabase
  // For now, return null for any other credentials
  return null;
}

// Generate mock tours for demo user
export function getDemoTours() {
  return [
    {
      id: '1',
      name: 'Conan Gray Fall Tour',
      created: '2025-09-17',
      status: 'Planning' as const,
      currency: 'USD',
      totalCost: 45000,
      stops: 12
    },
    {
      id: '2',
      name: 'Sabrina Carpenter World Tour',
      created: '2025-09-16',
      status: 'Planning' as const,
      currency: 'USD',
      totalCost: 125000,
      stops: 24
    },
    {
      id: '3',
      name: "Oscar's Regional Tour",
      created: '2025-09-12',
      status: 'Active' as const,
      currency: 'USD',
      totalCost: 28000,
      stops: 8
    },
    {
      id: '4',
      name: 'Miguels Summer Festival Circuit',
      created: '2025-09-10',
      status: 'Planning' as const,
      currency: 'USD',
      totalCost: 67000,
      stops: 15
    },
    {
      id: '5',
      name: 'Jeffs Acoustic Tour',
      created: '2025-09-10',
      status: 'Completed' as const,
      currency: 'USD',
      totalCost: 18500,
      stops: 6
    },
    {
      id: '6',
      name: 'Bon Jovi Legacy Tour',
      created: '2025-09-08',
      status: 'Planning' as const,
      currency: 'USD',
      totalCost: 250000,
      stops: 35
    },
    {
      id: '7',
      name: 'Josh Abbott Band Texas Run',
      created: '2025-09-08',
      status: 'Active' as const,
      currency: 'USD',
      totalCost: 32000,
      stops: 10
    },
    {
      id: '8',
      name: 'Maluma Latin America Tour',
      created: '2025-09-06',
      status: 'Planning' as const,
      currency: 'USD',
      totalCost: 180000,
      stops: 28
    },
    {
      id: '9',
      name: 'Chris Brown Under The Influence',
      created: '2025-09-06',
      status: 'Completed' as const,
      currency: 'USD',
      totalCost: 195000,
      stops: 42
    }
  ];
}
