import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FeaturedGallery() {
  const featuredImages = [
    {
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Elegant wedding ceremony"
    },
    {
      src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Corporate event setup"
    },
    {
      src: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Birthday celebration"
    },
    {
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Wedding reception"
    },
    {
      src: "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Event decoration"
    },
    {
      src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Outdoor event"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a glimpse at some of our recent events and celebrations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}