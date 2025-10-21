import type { Metadata } from "next";
import ToursPage from "@/pages/tours/tours";

export const metadata: Metadata = {
  title: "Boat Tours in Alcudia Mallorca | Morning, Sunset & Private Charters - Coral Boats",
  description: "Discover the best boat tours in Alcudia, Mallorca. Choose from our Morning Adventure (4h), Sunset Magic (3h), or Private Charter experiences. Snorkeling, tapas, and drinks included. Book your boat trip in Port d'Alcudia today!",
  keywords: "boat tours Alcudia, boat trips Mallorca, tours en barco Alcudia, excursiones en barco Mallorca, boat tours Port Alcudia, snorkeling Mallorca, sunset boat tour Alcudia, private boat charter Mallorca, boat excursions Alcudia bay, catamaran tours Mallorca, paseo en barco Alcudia, boat tour booking Mallorca",
  openGraph: {
    title: "Boat Tours in Alcudia Mallorca | Morning, Sunset & Private Charters",
    description: "Discover the best boat tours in Alcudia, Mallorca. Choose from our Morning Adventure, Sunset Magic, or Private Charter experiences. Snorkeling, tapas, and drinks included.",
    images: [
      {
        url: "/assets/img/premium/home_new/boat.webp",
        width: 1200,
        height: 630,
        alt: "Coral Boats boat tours in Alcudia Mallorca - Morning, Sunset and Private Charter options",
      },
    ],
  },
};

export default function Tours() {
  return <ToursPage />;
}
