import { Metadata } from 'next';
import MorningTourPage from '@/pages/tours/morning-tour';

export const metadata: Metadata = {
  title: 'Morning Boat Tour in Alcudia Bay – Coral Boats Mallorca',
  description: 'Join our 4-hour morning boat tour in Alcudia Bay, Mallorca. Snorkel in crystal-clear waters, explore hidden coves, and enjoy authentic Mallorcan tapas. Departs daily at 9:30 AM from Port d\'Alcúdia.',
  keywords: 'morning boat tour Alcudia, boat trip Mallorca, snorkeling Alcudia, Bay of Alcudia tour, Mallorca boat excursion, morning sailing Mallorca',
  openGraph: {
    title: 'Morning Adventure Boat Tour | Coral Boats Alcudia',
    description: 'Experience the best morning boat tour in Alcudia Bay with snorkeling, paddle boarding, and Mallorcan tapas. Book your 4-hour adventure now!',
    images: ['/assets/img/premium/01morning.jpg'],
  },
};

const MorningTour = () => {
  return <MorningTourPage />;
};

export default MorningTour;
