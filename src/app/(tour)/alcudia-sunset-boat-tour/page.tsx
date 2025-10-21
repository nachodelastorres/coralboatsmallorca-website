import { Metadata } from 'next';
import SunsetTourPage from '@/pages/tours/sunset-tour';

export const metadata: Metadata = {
  title: 'Sunset Boat Tour in Alcudia Bay – Coral Boats Mallorca',
  description: 'Join our 3-hour Sunset Magic boat tour in Alcudia Bay, Mallorca. Experience a magical Mediterranean sunset with swimming, authentic Mallorcan tapas, and good vibes. Departs daily at 6:00 PM from Port d\'Alcúdia. Only €65 per person.',
  keywords: 'sunset boat tour Alcudia, boat trip Mallorca, evening cruise Alcudia, Bay of Alcudia sunset tour, Mallorca sunset excursion, evening sailing Mallorca, Mediterranean vibes',
  openGraph: {
    title: 'Sunset Magic Boat Tour | Coral Boats Alcudia',
    description: 'Experience the ultimate sunset boat tour in Alcudia Bay with swimming, tapas, and pure Mediterranean vibes. Book your 3-hour Sunset Magic tour now! €65 per person.',
    images: ['/assets/img/premium/01morning.jpg'],
  },
};

const SunsetTour = () => {
  return <SunsetTourPage />;
};

export default SunsetTour;
