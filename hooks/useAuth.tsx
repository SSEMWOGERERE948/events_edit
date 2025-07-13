'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('admin-token');
    if (token) {
      // Verify token with server
      fetch('/api/auth/verify', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => {
        setIsAdmin(data.valid);
        setLoading(false);
      })
      .catch(() => {
        setIsAdmin(false);
        setLoading(false);
        Cookies.remove('admin-token');
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const { token } = await response.json();
        Cookies.set('admin-token', token, { expires: 1 }); // 1 day
        setIsAdmin(true);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const logout = () => {
    Cookies.remove('admin-token');
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}