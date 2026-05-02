import { readdirSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const dir = 'public/assets/img/premium/2026/gallery';
const files = readdirSync(dir).filter((f) => /\.webp$/i.test(f)).sort();

const titles = {
  'aereal-view-of-boat-trip-in-mallorca-north-water-classic-vessel': ['Aerial View Boat Trip North Mallorca', 'Aerial view of a classic boat sailing the turquoise waters of north Mallorca'],
  'aereal-view-of-coral-boat-sailing-past-alcanada-lighthouse-island': ['Coral Boat Past Alcanada Lighthouse', 'Aerial view of Coral Boats sailing past Alcanada Lighthouse Island'],
  'alcanada-island-lighhouse-near-port-of-alcudia-during-boat-trip': ['Alcanada Lighthouse Boat Trip', 'View of Alcanada Lighthouse from a boat trip out of Port of Alcudia'],
  'boat-cruise-meal-with-local-products-experience-alcudia-mallorca': ['Boat Cruise Local Products Meal', 'On-board cruise meal with local Mallorcan products in Alcudia'],
  'boat-ride-from-port-of-alcudia-with-sunset-vibes-and-lights': ['Sunset Boat Ride from Port of Alcudia', 'Boat ride departing Port of Alcudia with golden sunset vibes and lights'],
  'classic-boat-interior-with-spacious-seats-for-a-boat-trip': ['Classic Boat Spacious Interior', 'Spacious classic boat interior with comfortable seating for a boat trip'],
  'cliffs-caves-and-coves-during-boat-trip-alcudia-mallorca': ['Cliffs Caves and Coves Alcudia', 'Cliffs, sea caves and hidden coves seen from a boat trip in Alcudia, Mallorca'],
  'coral-boat-for-water-activities-and-boat-excursiones-mallorca-alcudia': ['Coral Boat Water Activities', 'Coral Boats vessel ready for water activities and excursions in Alcudia, Mallorca'],
  'coral-boat-ride-in-best-beaches-mallorca-alcudia-views': ['Coral Boat Ride Best Beaches Alcudia', 'Coral Boats ride along the best beaches of Alcudia Bay in Mallorca'],
  'coral-boats-crew-cruise-mallorca-north': ['Coral Boats Crew at Cruise', 'Friendly Coral Boats crew during a cruise in north Mallorca'],
  'coral-boats-mallorca-boat-trips-in-turquoise-water': ['Coral Boats Turquoise Water', 'Coral Boats trips through the turquoise water of Mallorca'],
  'crystal-clear-water-in-mallorca-beach-during-boat-tour-alcudia': ['Crystal Clear Water Alcudia Tour', 'Crystal-clear water on a Mallorca beach seen during a boat tour from Alcudia'],
  'fantastic-buffet-meal-served-during-boat-cruise-in-alcududia-mallorca': ['Fantastic Buffet Boat Cruise', 'Fantastic buffet meal served during a boat cruise in Alcudia, Mallorca'],
  'mountain-coastal-view-and-best-boat-ride-in-north-mallorca': ['Mountain Coastal Boat Ride', 'Spectacular mountain and coastal view from the best boat ride in north Mallorca'],
  'north-coats-cliffs-coves-mallorca-views-from-boat-trip': ['North Coast Cliffs and Coves', 'Views of north Mallorca cliffs and coves from a boat trip'],
  'north-mallorca-sea-views-from-back-of-boat-during-water-excursion': ['North Mallorca Sea Views', 'Sea views of north Mallorca from the back of a boat during a water excursion'],
  'port-of-alcudia-sunset-view-from-a-boat-tours': ['Port of Alcudia at Sunset', 'Sunset view of Port of Alcudia from a Coral Boats tour'],
  'puesta-de-sol-puerto-alcuida-paseo-en-barco': ['Sunset at Port of Alcudia Boat Trip', 'Sunset over Port of Alcudia during a boat trip'],
  'scenic-view-of-coll-baix-from-the-sky-during-boat-tour': ['Scenic View of Coll Baix', 'Aerial scenic view of Coll Baix beach during a boat tour'],
  'scenic-views-north-mallorca-cliffs-from-relaxed-boat-trip': ['Scenic Cliffs North Mallorca', 'Scenic views of north Mallorca cliffs from a relaxed boat trip'],
  'side-of-classic-mediterranean-boat-during-excursion-north-mallorca': ['Side of Classic Mediterranean Boat', 'Side view of a classic Mediterranean boat during an excursion in north Mallorca'],
  'sunset-boat-trous-in-alcudia-beach-from-classic-vessel': ['Sunset Tours Alcudia Classic Vessel', 'Sunset boat tours along Alcudia beach aboard a classic vessel'],
  'sunset-horizon-alcudia-mallorca-views-boat-trip': ['Sunset Horizon Alcudia Boat Trip', 'Sunset horizon views over Alcudia, Mallorca during a boat trip'],
  'sunset-lights-from-sea-excursion-experience-in-mallorca-alcudia': ['Sunset Lights Sea Excursion', 'Sunset lights seen from a sea excursion experience in Alcudia, Mallorca'],
  'sunset-view-in-alcudia-with-coral-boats-tour-mallorca': ['Sunset View Alcudia with Coral Boats', 'Sunset view in Alcudia during a Coral Boats tour, Mallorca'],
  'tapas-and-sangria-served-in-boat-trip-cruise-mallorca-alcudia': ['Tapas and Sangria on Boat Trip', 'Tapas and sangria served on a boat trip cruise in Alcudia, Mallorca'],
  'typical-local-mallorca-tapas-meal-during-boat-trip-alcudia': ['Local Mallorca Tapas on Boat Trip', 'Typical local Mallorca tapas meal during a boat trip in Alcudia'],
  'wooden-classic-boat-trips-alcudia-with-confortable-interior': ['Wooden Classic Boat Comfortable Interior', 'Wooden classic boat trips in Alcudia featuring a comfortable interior'],
};

const out = [];
for (const f of files) {
  const meta = await sharp(join(dir, f)).metadata();
  const base = f.replace(/\.webp$/i, '');
  const t = titles[base] || [base, base];
  const orient = meta.width > meta.height ? 'landscape' : meta.width < meta.height ? 'portrait' : 'square';
  out.push({ file: f, w: meta.width, h: meta.height, orient, name: t[0], description: t[1] });
}
console.log(JSON.stringify(out, null, 2));
