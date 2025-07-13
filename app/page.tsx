import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedGallery from '@/components/FeaturedGallery';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedGallery />
      <Testimonials />
      <ContactCTA />
    </>
  );
}