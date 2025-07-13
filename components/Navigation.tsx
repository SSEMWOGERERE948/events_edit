'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, Settings } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/hooks/useAuth';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emerald-600">The Events Edit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            {isAdmin && (
              <>
                <Button asChild variant="outline" size="sm">
                  <Link href="/admin">
                    <Settings className="w-4 h-4 mr-2" />
                    Admin
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            )}
            {!isAdmin && (
              <Button asChild variant="ghost" size="sm">
                <Link href="/admin">
                  <Settings className="w-4 h-4 mr-2" />
                  Admin Login
                </Link>
              </Button>
            )}
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Theme</span>
                <ThemeToggle />
              </div>
              {isAdmin && (
                <>
                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium flex items-center"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Admin Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium flex items-center text-left"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </>
              )}
              {!isAdmin && (
                <Link
                  href="/admin"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium flex items-center"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Admin Login
                </Link>
              )}
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 w-fit">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}