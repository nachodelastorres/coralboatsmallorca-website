import { Metadata } from 'next';
import CharterPricingPage from '@/pages/tours/charter-pricing';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Private Boat Charter Pricing Mallorca | Rates & Booking - Coral Boats Alcudia',
  description: 'Transparent pricing for private boat charter in Alcudia, Mallorca. Up to 40 passengers. High season: €1,550 (3h) / €2,015 (4h). Low season: €1,250 (3h) / €1,615 (4h). Optional catering and open bar available. Book your exclusive charter today.',
  keywords: 'private charter pricing Mallorca, boat rental rates Alcudia, charter boat prices Mallorca, boat hire cost Alcudia, private boat charter rates, Mallorca boat rental pricing, Alcudia charter rates, boat charter cost Mallorca',
  openGraph: {
    title: 'Private Charter Pricing | Up to 40 Guests - Coral Boats Alcudia',
    description: 'Transparent pricing for your private boat charter in Mallorca. From €1,250 for 3 hours. Capacity up to 40 guests. Optional catering and bar service available.',
    images: ['/assets/img/premium/home_new/04portrait.webp'],
  },
};

const CharterPricing = () => {
  return <CharterPricingPage />;
};

export default CharterPricing;
