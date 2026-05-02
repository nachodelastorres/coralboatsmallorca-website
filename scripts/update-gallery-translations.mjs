import { readFileSync, writeFileSync } from 'fs';

// 28 image alt texts × 6 locales. Keys are stable identifiers used from page.tsx
// and GallerySchema; values are descriptive sentences indexed by Google.
const TRANSLATIONS = {
  image_aerial_north_classic: {
    en: 'Aerial view of a classic boat sailing the turquoise waters of north Mallorca',
    es: 'Vista aérea de un barco clásico navegando por las aguas turquesas del norte de Mallorca',
    de: 'Luftaufnahme eines klassischen Bootes auf den türkisblauen Gewässern Nord-Mallorcas',
    fr: "Vue aérienne d'un bateau classique sur les eaux turquoise du nord de Majorque",
    it: 'Vista aerea di una barca classica nelle acque turchesi del nord di Maiorca',
    ca: "Vista aèria d'un vaixell clàssic per les aigües turqueses del nord de Mallorca",
  },
  image_aerial_alcanada_lighthouse: {
    en: 'Aerial view of Coral Boats sailing past Alcanada Lighthouse Island',
    es: 'Vista aérea de Coral Boats navegando junto a la isla del faro de Alcanada',
    de: 'Luftaufnahme von Coral Boats an der Leuchtturminsel Alcanada',
    fr: "Vue aérienne de Coral Boats passant devant l'île du phare d'Alcanada",
    it: "Vista aerea di Coral Boats che passa accanto all'isola del faro di Alcanada",
    ca: "Vista aèria de Coral Boats passant per l'illa del far d'Alcanada",
  },
  image_alcanada_lighthouse_trip: {
    en: 'View of Alcanada Lighthouse from a boat trip out of Port of Alcudia',
    es: 'Vista del faro de Alcanada desde una excursión en barco desde el Puerto de Alcúdia',
    de: 'Blick auf den Leuchtturm Alcanada bei einer Bootstour ab dem Hafen von Alcúdia',
    fr: "Vue du phare d'Alcanada lors d'une excursion en bateau depuis le port d'Alcúdia",
    it: "Vista del faro di Alcanada da un'escursione in barca dal porto di Alcúdia",
    ca: "Vista del far d'Alcanada des d'una excursió en vaixell des del Port d'Alcúdia",
  },
  image_local_products_meal: {
    en: 'On-board cruise meal with local Mallorcan products in Alcudia',
    es: 'Comida a bordo durante el crucero con productos locales mallorquines en Alcudia',
    de: 'Bordverpflegung mit lokalen mallorquinischen Produkten während der Bootstour in Alcudia',
    fr: 'Repas à bord pendant la croisière avec des produits locaux de Majorque à Alcudia',
    it: 'Pasto a bordo durante la crociera con prodotti locali di Maiorca ad Alcudia',
    ca: 'Menjar a bord durant el creuer amb productes locals mallorquins a Alcúdia',
  },
  image_sunset_vibes: {
    en: 'Boat ride departing Port of Alcudia with golden sunset vibes and lights',
    es: 'Paseo en barco saliendo del Puerto de Alcúdia con luces y ambiente de atardecer dorado',
    de: 'Bootsfahrt ab dem Hafen Alcúdia mit goldenen Sonnenuntergangslichtern',
    fr: "Sortie en bateau depuis le port d'Alcúdia avec des lumières dorées de coucher de soleil",
    it: "Gita in barca in partenza dal porto di Alcúdia con luci dorate del tramonto",
    ca: "Passeig en vaixell sortint del Port d'Alcúdia amb llums i ambient de capvespre daurat",
  },
  image_classic_interior_seats: {
    en: 'Spacious classic boat interior with comfortable seating for a boat trip',
    es: 'Interior amplio de un barco clásico con asientos cómodos para una excursión',
    de: 'Großzügiges Interieur eines klassischen Bootes mit bequemen Sitzen für die Bootstour',
    fr: "Intérieur spacieux d'un bateau classique avec des sièges confortables pour l'excursion",
    it: "Ampio interno di una barca classica con sedute comode per l'escursione",
    ca: "Interior ampli d'un vaixell clàssic amb seients còmodes per a una excursió",
  },
  image_cliffs_caves_coves: {
    en: 'Cliffs, sea caves and hidden coves seen from a boat trip in Alcudia, Mallorca',
    es: 'Acantilados, cuevas marinas y calas escondidas vistas desde una excursión en barco en Alcudia, Mallorca',
    de: 'Klippen, Meereshöhlen und versteckte Buchten von einer Bootstour in Alcudia, Mallorca',
    fr: 'Falaises, grottes marines et criques cachées vues lors d’une excursion en bateau à Alcudia, Majorque',
    it: "Scogliere, grotte marine e calette nascoste viste da un'escursione in barca ad Alcudia, Maiorca",
    ca: "Penya-segats, coves marines i cales amagades des d'una excursió en vaixell a Alcúdia, Mallorca",
  },
  image_water_activities_boat: {
    en: 'Coral Boats vessel ready for water activities and excursions in Alcudia, Mallorca',
    es: 'Embarcación de Coral Boats lista para actividades acuáticas y excursiones en Alcudia, Mallorca',
    de: 'Coral-Boats-Schiff bereit für Wassersport und Bootsausflüge in Alcudia, Mallorca',
    fr: 'Bateau Coral Boats prêt pour activités nautiques et excursions à Alcudia, Majorque',
    it: 'Imbarcazione Coral Boats pronta per attività acquatiche ed escursioni ad Alcudia, Maiorca',
    ca: 'Embarcació de Coral Boats llesta per a activitats aquàtiques i excursions a Alcúdia, Mallorca',
  },
  image_best_beaches: {
    en: 'Coral Boats ride along the best beaches of Alcudia Bay in Mallorca',
    es: 'Paseo en Coral Boats por las mejores playas de la Bahía de Alcudia en Mallorca',
    de: 'Bootsfahrt mit Coral Boats entlang der schönsten Strände der Bucht von Alcudia, Mallorca',
    fr: "Balade en Coral Boats le long des plus belles plages de la baie d'Alcudia, Majorque",
    it: 'Giro in Coral Boats lungo le migliori spiagge della Baia di Alcudia, Maiorca',
    ca: "Passeig en Coral Boats per les millors platges de la Badia d'Alcúdia a Mallorca",
  },
  image_crew_cruise: {
    en: 'Friendly Coral Boats crew during a cruise in north Mallorca',
    es: 'Tripulación amable de Coral Boats durante un crucero por el norte de Mallorca',
    de: 'Freundliche Coral-Boats-Crew während einer Tour im Norden Mallorcas',
    fr: "Équipage chaleureux de Coral Boats lors d'une croisière dans le nord de Majorque",
    it: 'Equipaggio cordiale di Coral Boats durante una crociera nel nord di Maiorca',
    ca: 'Tripulació amable de Coral Boats durant un creuer pel nord de Mallorca',
  },
  image_turquoise_trips: {
    en: 'Coral Boats trips through the turquoise water of Mallorca',
    es: 'Excursiones de Coral Boats por las aguas turquesas de Mallorca',
    de: 'Bootstouren mit Coral Boats durch das türkisfarbene Wasser Mallorcas',
    fr: 'Excursions Coral Boats à travers les eaux turquoise de Majorque',
    it: 'Escursioni Coral Boats nelle acque turchesi di Maiorca',
    ca: 'Excursions de Coral Boats per les aigües turqueses de Mallorca',
  },
  image_crystal_clear: {
    en: 'Crystal-clear water on a Mallorca beach seen during a boat tour from Alcudia',
    es: 'Aguas cristalinas en una playa de Mallorca vistas durante una excursión en barco desde Alcudia',
    de: 'Kristallklares Wasser an einem Strand auf Mallorca während einer Bootstour ab Alcudia',
    fr: "Eaux cristallines sur une plage de Majorque lors d'une excursion en bateau depuis Alcudia",
    it: "Acque cristalline su una spiaggia di Maiorca durante un'escursione in barca da Alcudia",
    ca: "Aigües cristal·lines en una platja de Mallorca durant una excursió en vaixell des d'Alcúdia",
  },
  image_buffet_cruise: {
    en: 'Fantastic buffet meal served during a boat cruise in Alcudia, Mallorca',
    es: 'Fantástico bufé servido durante un crucero en barco en Alcudia, Mallorca',
    de: 'Hervorragendes Buffet während einer Bootstour in Alcudia, Mallorca',
    fr: 'Délicieux buffet servi pendant la croisière en bateau à Alcudia, Majorque',
    it: 'Fantastico buffet servito durante una crociera in barca ad Alcudia, Maiorca',
    ca: 'Bufet fantàstic servit durant un creuer en vaixell a Alcúdia, Mallorca',
  },
  image_mountain_coastal: {
    en: 'Spectacular mountain and coastal view from the best boat ride in north Mallorca',
    es: 'Espectaculares vistas de montaña y costa desde la mejor excursión en barco del norte de Mallorca',
    de: 'Spektakulärer Berg- und Küstenblick auf der besten Bootstour im Norden Mallorcas',
    fr: "Vue spectaculaire sur les montagnes et la côte lors de la meilleure excursion du nord de Majorque",
    it: 'Spettacolari viste su montagne e costa dalla migliore escursione in barca nel nord di Maiorca',
    ca: 'Vistes espectaculars de muntanya i costa des de la millor excursió en vaixell del nord de Mallorca',
  },
  image_north_cliffs: {
    en: 'Views of north Mallorca cliffs and coves from a boat trip',
    es: 'Vistas de los acantilados y calas del norte de Mallorca desde una excursión en barco',
    de: 'Blick auf die Klippen und Buchten Nord-Mallorcas von einer Bootstour',
    fr: "Vues sur les falaises et criques du nord de Majorque depuis une excursion en bateau",
    it: "Vista sulle scogliere e calette del nord di Maiorca da un'escursione in barca",
    ca: "Vistes dels penya-segats i cales del nord de Mallorca des d'una excursió en vaixell",
  },
  image_sea_views_back: {
    en: 'Sea views of north Mallorca from the back of a boat during a water excursion',
    es: 'Vistas del mar del norte de Mallorca desde la popa del barco durante una excursión acuática',
    de: 'Meerblick auf Nord-Mallorca vom Heck eines Bootes während einer Wassertour',
    fr: "Vue sur la mer du nord de Majorque depuis l'arrière du bateau pendant l'excursion",
    it: "Vista sul mare del nord di Maiorca dalla poppa di una barca durante l'escursione",
    ca: "Vistes del mar del nord de Mallorca des de la popa d'un vaixell durant una excursió aquàtica",
  },
  image_port_sunset_view: {
    en: 'Sunset view of Port of Alcudia from a Coral Boats tour',
    es: 'Vista del atardecer en el Puerto de Alcúdia desde un tour de Coral Boats',
    de: 'Sonnenuntergang über dem Hafen Alcúdia während einer Coral-Boats-Tour',
    fr: "Vue du coucher de soleil sur le port d'Alcúdia depuis un tour Coral Boats",
    it: 'Vista del tramonto al porto di Alcúdia da un tour Coral Boats',
    ca: "Vista del capvespre al Port d'Alcúdia des d'un tour de Coral Boats",
  },
  image_sunset_port_trip: {
    en: 'Sunset over Port of Alcudia during a boat trip',
    es: 'Puesta de sol sobre el Puerto de Alcúdia durante un paseo en barco',
    de: 'Sonnenuntergang über dem Hafen von Alcúdia während einer Bootstour',
    fr: "Coucher de soleil sur le port d'Alcúdia pendant une excursion en bateau",
    it: "Tramonto sul porto di Alcúdia durante un'escursione in barca",
    ca: "Posta de sol sobre el Port d'Alcúdia durant un passeig en vaixell",
  },
  image_coll_baix_aerial: {
    en: 'Aerial scenic view of Coll Baix beach during a boat tour',
    es: 'Vista aérea panorámica de la playa Coll Baix durante un tour en barco',
    de: 'Panoramablick aus der Luft auf den Strand Coll Baix während einer Bootstour',
    fr: 'Vue aérienne panoramique sur la plage de Coll Baix lors d’une excursion en bateau',
    it: 'Vista aerea panoramica della spiaggia di Coll Baix durante un tour in barca',
    ca: 'Vista aèria panoràmica de la platja de Coll Baix durant un tour en vaixell',
  },
  image_scenic_relaxed: {
    en: 'Scenic views of north Mallorca cliffs from a relaxed boat trip',
    es: 'Vistas panorámicas de los acantilados del norte de Mallorca desde un relajado paseo en barco',
    de: 'Malerische Ausblicke auf die Klippen Nord-Mallorcas bei einer entspannten Bootstour',
    fr: 'Vues panoramiques sur les falaises du nord de Majorque lors d’une croisière détendue',
    it: 'Vista panoramica sulle scogliere del nord di Maiorca da un rilassante giro in barca',
    ca: "Vistes panoràmiques dels penya-segats del nord de Mallorca des d'un passeig relaxat en vaixell",
  },
  image_classic_mediterranean_side: {
    en: 'Side view of a classic Mediterranean boat during an excursion in north Mallorca',
    es: 'Vista lateral de un barco clásico mediterráneo durante una excursión por el norte de Mallorca',
    de: 'Seitenansicht eines klassischen Mittelmeerbootes bei einer Tour im Norden Mallorcas',
    fr: "Vue latérale d'un bateau méditerranéen classique lors d'une excursion dans le nord de Majorque",
    it: "Vista laterale di una barca classica mediterranea durante un'escursione nel nord di Maiorca",
    ca: "Vista lateral d'un vaixell clàssic mediterrani durant una excursió pel nord de Mallorca",
  },
  image_sunset_classic_vessel: {
    en: 'Sunset boat tours along Alcudia beach aboard a classic vessel',
    es: 'Excursiones en barco al atardecer por la playa de Alcudia a bordo de un barco clásico',
    de: 'Sonnenuntergangs-Bootstouren entlang des Strands von Alcudia an Bord eines klassischen Schiffes',
    fr: "Excursions au coucher de soleil le long de la plage d'Alcudia à bord d'un bateau classique",
    it: "Tour in barca al tramonto lungo la spiaggia di Alcudia a bordo di un'imbarcazione classica",
    ca: "Excursions en vaixell al capvespre per la platja d'Alcúdia a bord d'un vaixell clàssic",
  },
  image_sunset_horizon: {
    en: 'Sunset horizon views over Alcudia, Mallorca during a boat trip',
    es: 'Vistas del horizonte al atardecer sobre Alcudia, Mallorca durante una excursión en barco',
    de: 'Sonnenuntergangshorizont über Alcudia, Mallorca während einer Bootstour',
    fr: "Vue de l'horizon au coucher du soleil sur Alcudia, Majorque pendant une excursion",
    it: "Vista dell'orizzonte al tramonto su Alcudia, Maiorca durante un'escursione in barca",
    ca: "Vistes de l'horitzó al capvespre sobre Alcúdia, Mallorca durant una excursió en vaixell",
  },
  image_sunset_lights_sea: {
    en: 'Sunset lights seen from a sea excursion experience in Alcudia, Mallorca',
    es: 'Luces del atardecer vistas desde una excursión marítima en Alcudia, Mallorca',
    de: 'Sonnenuntergangslichter während einer Seetour in Alcudia, Mallorca',
    fr: "Lumières du coucher de soleil vues lors d'une excursion en mer à Alcudia, Majorque",
    it: "Luci del tramonto viste durante un'escursione in mare ad Alcudia, Maiorca",
    ca: "Llums del capvespre vistes des d'una excursió marítima a Alcúdia, Mallorca",
  },
  image_sunset_view_alcudia: {
    en: 'Sunset view in Alcudia during a Coral Boats tour, Mallorca',
    es: 'Vista del atardecer en Alcudia durante un tour de Coral Boats, Mallorca',
    de: 'Sonnenuntergangsblick in Alcudia während einer Coral-Boats-Tour, Mallorca',
    fr: "Vue du coucher de soleil à Alcudia lors d'un tour Coral Boats, Majorque",
    it: 'Vista del tramonto ad Alcudia durante un tour Coral Boats, Maiorca',
    ca: 'Vista del capvespre a Alcúdia durant un tour de Coral Boats, Mallorca',
  },
  image_tapas_sangria: {
    en: 'Tapas and sangria served on a boat trip cruise in Alcudia, Mallorca',
    es: 'Tapas y sangría servidas en un crucero en barco en Alcudia, Mallorca',
    de: 'Tapas und Sangria serviert während einer Bootstour in Alcudia, Mallorca',
    fr: "Tapas et sangria servis lors d'une croisière en bateau à Alcudia, Majorque",
    it: "Tapas e sangria servite durante una crociera in barca ad Alcudia, Maiorca",
    ca: 'Tapes i sangria servides en un creuer en vaixell a Alcúdia, Mallorca',
  },
  image_local_tapas: {
    en: 'Typical local Mallorca tapas meal during a boat trip in Alcudia',
    es: 'Comida típica local de tapas mallorquinas durante una excursión en barco en Alcudia',
    de: 'Typisches mallorquinisches Tapas-Mahl während einer Bootstour in Alcudia',
    fr: "Repas typique de tapas locales de Majorque pendant une excursion à Alcudia",
    it: "Pasto tipico di tapas locali di Maiorca durante un'escursione in barca ad Alcudia",
    ca: "Menjar típic local de tapes mallorquines durant una excursió en vaixell a Alcúdia",
  },
  image_wooden_classic: {
    en: 'Wooden classic boat trips in Alcudia featuring a comfortable interior',
    es: 'Excursiones en barco clásico de madera en Alcudia con un interior confortable',
    de: 'Tours mit dem klassischen Holzboot in Alcudia mit komfortablem Interieur',
    fr: 'Excursions en bateau classique en bois à Alcudia avec un intérieur confortable',
    it: 'Escursioni in barca classica di legno ad Alcudia con interno confortevole',
    ca: "Excursions en vaixell clàssic de fusta a Alcúdia amb un interior confortable",
  },
};

const LOCALES = ['en', 'es', 'de', 'fr', 'it', 'ca'];

for (const locale of LOCALES) {
  const path = `public/locales/${locale}/common.json`;
  const dict = JSON.parse(readFileSync(path, 'utf-8'));

  if (!dict.premium?.gallery) {
    console.error(`Missing premium.gallery in ${locale}`);
    continue;
  }
  const gallery = dict.premium.gallery;

  // Drop old image_* keys
  let removed = 0;
  for (const key of Object.keys(gallery)) {
    if (key.startsWith('image_')) {
      delete gallery[key];
      removed++;
    }
  }

  // Add new keys (insertion order preserved by JSON.stringify)
  for (const [key, t] of Object.entries(TRANSLATIONS)) {
    if (!t[locale]) {
      console.error(`Missing ${locale} for ${key}`);
      continue;
    }
    gallery[key] = t[locale];
  }

  writeFileSync(path, JSON.stringify(dict, null, 2) + '\n');
  console.log(`${locale}: removed ${removed} old keys, added ${Object.keys(TRANSLATIONS).length} new keys`);
}
