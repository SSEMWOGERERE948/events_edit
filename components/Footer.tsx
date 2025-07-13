import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-400">The Events Edit</h3>
            <p className="text-gray-300">
              Creating extraordinary moments through exceptional event design and planning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-emerald-400 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Wedding Planning</li>
              <li className="text-gray-300">Corporate Events</li>
              <li className="text-gray-300">Social Celebrations</li>
              <li className="text-gray-300">Event Styling</li>
              <li className="text-gray-300">Venue Selection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-emerald-400" />
                <span className="text-gray-300">123 Event Plaza, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-gray-300">hello@theeventsedit.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 The Events Edit. All rights reserved. | 
          </p>
        </div>
      </div>
    </footer>
  );
}