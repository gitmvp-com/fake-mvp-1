import type { User } from '@/types';

const STORAGE_KEY = 'fake-mvp-user';
const SESSION_KEY = 'fake-mvp-session';

const MOCK_USERS: Record<string, { password: string; user: User }> = {
  'demo@example.com': {
    password: 'demo123',
    user: {
      id: '1',
      email: 'demo@example.com',
      name: 'Demo User',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo',
      createdAt: new Date('2024-01-15'),
    },
  },
  'test@example.com': {
    password: 'test123',
    user: {
      id: '2',
      email: 'test@example.com',
      name: 'Test User',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=test',
      createdAt: new Date('2024-02-20'),
    },
  },
};

export function login(email: string, password: string): { success: boolean; user?: User; error?: string } {
  const mockUser = MOCK_USERS[email];

  if (!mockUser) {
    return { success: false, error: 'User not found' };
  }

  if (mockUser.password !== password) {
    return { success: false, error: 'Invalid password' };
  }

  // Store user session
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser.user));
    localStorage.setItem(SESSION_KEY, JSON.stringify({ timestamp: new Date().toISOString() }));
  }

  return { success: true, user: mockUser.user };
}

export function signup(email: string, name: string, password: string): { success: boolean; user?: User; error?: string } {
  // Check if user already exists
  if (MOCK_USERS[email]) {
    return { success: false, error: 'User already exists' };
  }

  // Basic validation
  if (!email || !name || !password) {
    return { success: false, error: 'All fields are required' };
  }

  if (password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters' };
  }

  const newUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    createdAt: new Date(),
  };

  // Add to mock users
  MOCK_USERS[email] = {
    password,
    user: newUser,
  };

  // Store user session
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    localStorage.setItem(SESSION_KEY, JSON.stringify({ timestamp: new Date().toISOString() }));
  }

  return { success: true, user: newUser };
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(SESSION_KEY);
  }
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;

  const userStr = localStorage.getItem(STORAGE_KEY);
  const sessionStr = localStorage.getItem(SESSION_KEY);

  if (!userStr || !sessionStr) return null;

  try {
    const user = JSON.parse(userStr) as User;
    return user;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

// Helper to get mock users for demo purposes
export function getMockCredentials() {
  return Object.keys(MOCK_USERS).map((email) => ({
    email,
    password: MOCK_USERS[email].password,
  }));
}
