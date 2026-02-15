import { Metadata } from 'next';
import PrivateCharterPage from '@/pages/tours/private-charter';

export const metadata: Metadata = {
  title: 'Private Charter for Groups Up to 40 People – Coral Boats Mallorca',
  description: 'Book our exclusive private charter boat for groups up to 40 people in Alcudia Bay, Mallorca. Perfect for corporate events, birthdays, bachelor/bachelorette parties, family reunions, and special celebrations. Fully customizable itinerary and catering.',
  keywords: 'private charter Mallorca, boat rental Alcudia, corporate events boat, birthday party boat, bachelor party boat Mallorca, group boat charter, large group boat rental, 40 people boat charter',
  openGraph: {
    title: 'Private Charter for Up to 40 Guests | Coral Boats Alcudia',
    description: 'Exclusive private boat charter for groups up to 40 people. Perfect for corporate events, celebrations, and special occasions in Mallorca. Fully customizable experience.',
    images: ['/assets/img/premium/home_new/private-charter-capacity-40-people-alcudia.webp'],
  },
};

const PrivateCharter = () => {
  return <PrivateCharterPage />;
};

export default PrivateCharter;
