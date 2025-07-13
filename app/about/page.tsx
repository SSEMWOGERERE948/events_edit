import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About The Events Edit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating extraordinary moments through exceptional event design and planning
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Events Edit was born from a passion for creating unforgettable experiences. 
                We believe that every event, whether it's an intimate wedding or a grand corporate 
                celebration, deserves meticulous attention to detail and creative excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in event planning and design, our team has perfected 
                the art of transforming visions into reality. We take pride in our ability to 
                understand our clients' unique needs and exceed their expectations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Award-Winning Design</Badge>
                <Badge variant="secondary">5+ Years Experience</Badge>
                <Badge variant="secondary">200+ Events Planned</Badge>
                <Badge variant="secondary">100% Client Satisfaction</Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Event planning team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, ensuring exceptional service and results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for perfection in every detail, ensuring your event exceeds expectations
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Creativity</h3>
                <p className="text-gray-600">
                  Innovative designs and unique concepts that make your event truly memorable
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                <p className="text-gray-600">
                  Collaborative approach working closely with you to bring your vision to life
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our passionate team of event professionals dedicated to making your dreams come true
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Team member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-emerald-600 font-medium mb-2">Lead Event Designer</p>
                <p className="text-gray-600 text-sm">
                  Specializes in luxury weddings and corporate events with over 8 years of experience
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Team member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
                <p className="text-emerald-600 font-medium mb-2">Creative Director</p>
                <p className="text-gray-600 text-sm">
                  Award-winning designer known for innovative concepts and flawless execution
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Team member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Emma Rodriguez</h3>
                <p className="text-emerald-600 font-medium mb-2">Event Coordinator</p>
                <p className="text-gray-600 text-sm">
                  Detail-oriented coordinator ensuring every aspect of your event runs smoothly
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}