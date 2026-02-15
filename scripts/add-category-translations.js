const fs = require('fs');
const path = require('path');

const placeholder = {
  back_to_blog: '[TRANSLATE] Back to all posts',
  tours: {
    hero: {
      badge: '[TRANSLATE] Boat Tours',
      title: '[TRANSLATE] Boat Tours & Maritime Excursions in Mallorca',
      subtitle: '[TRANSLATE] Explore our guides to the best boat tours around the Bay of Alcudia.',
    },
    post_count: '[TRANSLATE] articles about boat tours',
    seo: {
      title: '[TRANSLATE] All About Boat Tours in Mallorca',
      intro: '[TRANSLATE] Boat tours in Mallorca are the perfect way to discover the Mediterranean coastline.',
      card1_title: '[TRANSLATE] Types of Excursions Available',
      card1_text: '[TRANSLATE] Discover the differences between morning tours, sunset cruises and private charters.',
      card2_title: '[TRANSLATE] How to Choose Your Perfect Tour',
      card2_text: '[TRANSLATE] Our comparative guides help you find the ideal excursion.',
      cta_title: '[TRANSLATE] Book Your Maritime Adventure',
      cta_text: '[TRANSLATE] Read our articles to prepare for your boat trip in Mallorca.',
    },
    faq: {
      q1: '[TRANSLATE] What are the best boat tours from Alcudia?',
      a1: '[TRANSLATE] The best excursions include morning snorkeling tours, sunset cruises, and private charters.',
      q2: '[TRANSLATE] What is the difference between private and shared boat tours?',
      a2: '[TRANSLATE] Shared tours are budget-friendly with set routes. Private tours offer total exclusivity.',
      q3: '[TRANSLATE] How much does a boat tour in Mallorca cost?',
      a3: '[TRANSLATE] Shared tours cost 50-70 per adult. Private charters start from 400.',
      q4: '[TRANSLATE] Which boat tour is best for families with children?',
      a4: '[TRANSLATE] Morning shared tours are ideal for families with calm water stops and snorkel gear for kids.',
    },
  },
  destinations: {
    hero: {
      badge: '[TRANSLATE] Destinations',
      title: '[TRANSLATE] Must-Visit Destinations & Places in Mallorca',
      subtitle: '[TRANSLATE] Discover the most special corners of Mallorca and Alcudia.',
    },
    post_count: '[TRANSLATE] articles about destinations',
    seo: {
      title: '[TRANSLATE] The Best Destinations & Hidden Gems in Mallorca',
      intro: '[TRANSLATE] Mallorca is much more than sun and beach.',
      card1_title: '[TRANSLATE] Coastal Destinations & Beaches',
      card1_text: '[TRANSLATE] Explore the most beautiful beaches in Mallorca.',
      card2_title: '[TRANSLATE] Villages, Culture & Heritage',
      card2_text: '[TRANSLATE] Mallorca is home to villages with centuries of history.',
      cta_title: '[TRANSLATE] Plan Your Mallorca Route',
      cta_text: '[TRANSLATE] Read our destination guides to plan your perfect island itinerary.',
    },
    faq: {
      q1: '[TRANSLATE] What to see in Alcudia in one day?',
      a1: '[TRANSLATE] Visit the old town, Port of Alcudia, Playa de Muro, and the Alcanada lighthouse.',
      q2: '[TRANSLATE] What are the most beautiful villages near Alcudia?',
      a2: '[TRANSLATE] Pollenca, Arta, and Campanet are all within 30 minutes.',
      q3: '[TRANSLATE] What are the best beaches near Alcudia?',
      a3: '[TRANSLATE] Playa de Muro, Playa de Alcudia, Alcanada beach, and Coll Baix.',
      q4: '[TRANSLATE] What are the most interesting markets in Mallorca?',
      a4: '[TRANSLATE] Alcudia market (Tuesdays and Sundays), Pollenca, Sineu, and Inca markets.',
    },
  },
  guides: {
    hero: {
      badge: '[TRANSLATE] Guides & Tips',
      title: '[TRANSLATE] Practical Guides for Your Mallorca Trip',
      subtitle: '[TRANSLATE] All the practical information you need to organize your trip to Mallorca.',
    },
    post_count: '[TRANSLATE] articles with guides and tips',
    seo: {
      title: '[TRANSLATE] Practical Travel Guides for Mallorca',
      intro: '[TRANSLATE] Planning a holiday in Mallorca can raise many questions. Our practical guides answer them all.',
      card1_title: '[TRANSLATE] Practical Information & Logistics',
      card1_text: '[TRANSLATE] Transport, parking, accommodation, weather.',
      card2_title: '[TRANSLATE] Itineraries & Planning',
      card2_text: '[TRANSLATE] Whether you have 3 days, a week, or a weekend, our itineraries help you organize each day.',
      cta_title: '[TRANSLATE] Prepare Your Trip with Confidence',
      cta_text: '[TRANSLATE] Check our practical guides to arrive in Mallorca fully prepared.',
    },
    faq: {
      q1: '[TRANSLATE] How to get around Mallorca without a rental car?',
      a1: '[TRANSLATE] Mallorca has a good bus network (TIB) connecting main tourist areas.',
      q2: '[TRANSLATE] Where to park for free in Alcudia during summer?',
      a2: '[TRANSLATE] Free parking is available in areas further from the center.',
      q3: '[TRANSLATE] What to bring on a boat tour in Mallorca?',
      a3: '[TRANSLATE] Sunscreen SPF 50+, towel, swimsuit, hat, sunglasses, water shoes, and a light jacket.',
      q4: '[TRANSLATE] How many days do I need to visit Mallorca?',
      a4: '[TRANSLATE] 3-4 days for the Alcudia area, 7+ days for a complete island exploration.',
    },
  },
  tips: {
    hero: {
      badge: '[TRANSLATE] Travel Tips',
      title: '[TRANSLATE] Tips & Activities for Enjoying Mallorca',
      subtitle: '[TRANSLATE] Snorkeling, paddle surfing, family beaches, marine life, local gastronomy.',
    },
    post_count: '[TRANSLATE] articles with travel tips',
    seo: {
      title: '[TRANSLATE] The Best Tips & Activities in Mallorca',
      intro: '[TRANSLATE] Mallorca offers an incredible variety of activities beyond sunbathing on the beach.',
      card1_title: '[TRANSLATE] Water Activities & Nature',
      card1_text: '[TRANSLATE] Snorkeling, paddle surfing, marine life observation.',
      card2_title: '[TRANSLATE] Family Experiences & Gastronomy',
      card2_text: '[TRANSLATE] Find the safest beaches for kids and the local flavors you must try.',
      cta_title: '[TRANSLATE] Discover the Best of Mallorca',
      cta_text: '[TRANSLATE] Read our tips for a complete and memorable trip.',
    },
    faq: {
      q1: '[TRANSLATE] Where to snorkel in Mallorca near Alcudia?',
      a1: '[TRANSLATE] Best spots include Alcanada, Coll Baix, Cala Sant Vicenc, and north coast coves.',
      q2: '[TRANSLATE] What are the best beaches in Mallorca for kids?',
      a2: '[TRANSLATE] Playa de Muro, Playa de Alcudia, and Alcanada beach are all great for families.',
      q3: '[TRANSLATE] Can I try paddle surfing in Alcudia as a beginner?',
      a3: '[TRANSLATE] Yes, the Bay of Alcudia is perfect for beginners with calm, shallow waters.',
      q4: '[TRANSLATE] What marine life can you see in Alcudia waters?',
      a4: '[TRANSLATE] You can see wrasse, sea bream, starfish, octopus, and occasionally sea turtles.',
    },
  },
};

const locales = ['en', 'de', 'fr', 'it', 'ca'];
let success = 0;

for (const locale of locales) {
  const filePath = path.join(__dirname, '..', 'public', 'locales', locale, 'common.json');
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);
    json.blog_category = placeholder;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
    success++;
    console.log('Updated: ' + locale);
  } catch (err) {
    console.log('ERROR for ' + locale + ': ' + err.message);
  }
}
console.log('Done: ' + success + '/5 locales updated');
