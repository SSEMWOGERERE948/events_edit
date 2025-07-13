import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Create Your Perfect Event?
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Let's discuss your vision and bring it to life. Contact us today for a personalized consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link href="/contact">Start Planning Today</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3">
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}