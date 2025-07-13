'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'social', name: 'Social Events' },
    { id: 'styling', name: 'Styling & Decor' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Elegant Garden Wedding",
      category: "weddings",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Romantic outdoor ceremony with white and green florals"
    },
    {
      id: 2,
      title: "Corporate Product Launch",
      category: "corporate",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern tech company product unveiling event"
    },
    {
      id: 3,
      title: "Birthday Celebration",
      category: "social",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Colorful and vibrant 30th birthday party"
    },
    {
      id: 4,
      title: "Luxury Wedding Reception",
      category: "weddings",
      image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Sophisticated indoor reception with crystal chandeliers"
    },
    {
      id: 5,
      title: "Annual Conference",
      category: "corporate",
      image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional conference setup for 500+ attendees"
    },
    {
      id: 6,
      title: "Bridal Shower",
      category: "social",
      image: "https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Intimate bridal shower with pastel decorations"
    },
    {
      id: 7,
      title: "Balloon Arch Installation",
      category: "styling",
      image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Custom balloon arch for grand opening event"
    },
    {
      id: 8,
      title: "Beach Wedding Ceremony",
      category: "weddings",
      image: "https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Oceanfront ceremony with natural coastal elements"
    },
    {
      id: 9,
      title: "Networking Event",
      category: "corporate",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional networking mixer with cocktail setup"
    },
    {
      id: 10,
      title: "Floral Centerpieces",
      category: "styling",
      image: "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Elegant table centerpieces with seasonal flowers"
    },
    {
      id: 11,
      title: "Graduation Party",
      category: "social",
      image: "https://images.pexels.com/photos/1464184/pexels-photo-1464184.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Celebratory graduation party with photo booth"
    },
    {
      id: 12,
      title: "Rustic Wedding Setup",
      category: "weddings",
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Charming rustic wedding with wooden accents"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Event Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of stunning events and celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white sticky top-16 z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="secondary" className="capitalize">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}