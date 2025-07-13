import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Wedding Planning & Design",
      description: "From intimate ceremonies to grand celebrations, we create magical wedding experiences tailored to your love story.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Venue Selection", "Floral Design", "Catering Coordination", "Photography Coordination", "Day-of Coordination"],
      price: "Starting at $3,500"
    },
    {
      title: "Corporate Events",
      description: "Professional corporate events that impress clients, engage employees, and elevate your brand presence.",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Conference Planning", "Product Launches", "Team Building Events", "Award Ceremonies", "Networking Events"],
      price: "Starting at $2,000"
    },
    {
      title: "Social Celebrations",
      description: "Birthday parties, anniversaries, and milestone celebrations designed to create lasting memories.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Birthday Parties", "Anniversary Celebrations", "Graduation Parties", "Holiday Events", "Themed Parties"],
      price: "Starting at $1,500"
    },
    {
      title: "Event Styling & Decor",
      description: "Transform any space with our expert styling and decor services, creating the perfect ambiance for your event.",
      image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Floral Arrangements", "Lighting Design", "Furniture Rental", "Backdrop Creation", "Centerpieces"],
      price: "Starting at $800"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive event planning and design services to make your vision a reality
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                      {service.price}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to planning your perfect event
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "We start with understanding your vision, budget, and requirements" },
              { step: "2", title: "Planning", description: "Detailed planning with timelines, vendor coordination, and design concepts" },
              { step: "3", title: "Execution", description: "Professional setup and management on the day of your event" },
              { step: "4", title: "Follow-up", description: "Post-event support and feedback to ensure complete satisfaction" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}