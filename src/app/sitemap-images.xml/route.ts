import { NextResponse } from 'next/server';

const baseUrl = 'https://www.coralboatsmallorca.com';
const imageBasePath = '/assets/img/premium/gallery_new';

// Imágenes de la galería con sus metadatos SEO
const galleryImages = [
  { file: 'faro-alcanada-excursion-barco-alcudia-mallorca.webp', title: 'Alcanada Lighthouse Boat Trip Alcudia Mallorca', caption: 'View of Alcanada Lighthouse from boat excursion in Alcudia Bay, Mallorca' },
  { file: 'coral-boats-navegando-isla-alcanada-alcudia.webp', title: 'Coral Boats Sailing Alcanada Island', caption: 'Coral Boats sailing towards Alcanada Island in Alcudia Bay' },
  { file: 'turistas-paseo-barco-aguas-cristalinas-mallorca.webp', title: 'Tourists Boat Trip Crystal Waters Mallorca', caption: 'Tourists enjoying boat trip through crystal-clear waters of Mallorca' },
  { file: 'interior-barco-coral-boats-puerto-alcudia.webp', title: 'Coral Boats Interior Port Alcudia', caption: 'Spacious interior of Coral Boats excursion vessel in Port Alcudia' },
  { file: 'excursion-matutina-snorkel-paddle-surf-alcudia.webp', title: 'Morning Boat Excursion Snorkeling Paddle Surf Alcudia', caption: 'Morning boat excursion with snorkeling and paddle surf in Alcudia, Mallorca' },
  { file: 'charter-privado-lujo-grupos-alcudia-mallorca.webp', title: 'Private Luxury Charter Groups Alcudia Mallorca', caption: 'Luxury private charter for groups in Alcudia Bay, Mallorca' },
  { file: 'crucero-atardecer-sunset-magic-alcudia.webp', title: 'Sunset Magic Cruise Alcudia Mediterranean', caption: 'Sunset Magic cruise in Alcudia waters with Mediterranean views' },
  { file: 'barco-clasico-madera-coral-boats-mallorca.webp', title: 'Classic Wooden Boat Coral Boats Mallorca', caption: 'Classic wooden boat by Coral Boats for excursions in Mallorca' },
  { file: 'vistas-costa-norte-mallorca-excursion-barco.webp', title: 'North Coast Views Mallorca Boat Excursion', caption: 'Panoramic views of Mallorca north coast from boat excursion' },
  { file: 'cala-secreta-accesible-barco-alcudia-mallorca.webp', title: 'Secret Cove Boat Access Alcudia Mallorca', caption: 'Secret cove accessible only by boat near Alcudia, Mallorca' },
  { file: 'tripulacion-profesional-sirviendo-paseo-barco-alcudia.webp', title: 'Professional Crew Service Boat Trip Alcudia', caption: 'Professional crew serving guests during boat trip in Alcudia' },
  { file: 'amigos-excursion-barco-bahia-alcudia.webp', title: 'Friends Boat Excursion Alcudia Bay', caption: 'Group of friends enjoying boat excursion in Alcudia Bay' },
  { file: 'amigos-recuerdos-paseo-barco-calas-mallorca.webp', title: 'Friends Memories Boat Trip Mallorca Coves', caption: 'Friends creating memories on boat trip through Mallorca coves' },
  { file: 'celebracion-grupo-charter-privado-alcudia-mallorca.webp', title: 'Group Celebration Private Charter Alcudia Mallorca', caption: 'Group celebration aboard private charter in Alcudia, Mallorca' },
  { file: 'hora-dorada-mediterraneo-crucero-mallorca.webp', title: 'Golden Hour Mediterranean Cruise Mallorca', caption: 'Golden hour over Mediterranean Sea during Mallorca cruise' },
  { file: 'calas-escondidas-norte-mallorca-excursion-barco.webp', title: 'Hidden Coves North Mallorca Boat Excursion', caption: 'Hidden coves of northern Mallorca explored by boat excursion' },
  { file: 'excursion-barco-isla-alcanada-puerto-alcudia.webp', title: 'Boat Excursion Alcanada Island Port Alcudia', caption: 'Boat excursion to Alcanada Island from Port Alcudia' },
  { file: 'ninos-actividades-acuaticas-excursion-familiar-mallorca.webp', title: 'Kids Water Activities Family Trip Mallorca', caption: 'Children enjoying water activities on family boat trip in Mallorca' },
  { file: 'paisaje-costero-mallorca-barco-excursiones-alcudia.webp', title: 'Coastal Landscape Mallorca Boat Excursions Alcudia', caption: 'Mallorca coastal landscape from excursion boat in Alcudia' },
  { file: 'tapas-mallorquinas-tradicionales-bordo-paseo-barco.webp', title: 'Traditional Mallorcan Tapas Boat Trip', caption: 'Traditional Mallorcan tapas served aboard boat trip' },
  { file: 'relax-colchoneta-flotante-aguas-alcudia.webp', title: 'Relaxing Floating Mattress Alcudia Waters', caption: 'Relaxing on floating mattress during boat excursion in Alcudia waters' },
  { file: 'comida-mediterranea-excursion-barco-mallorca.webp', title: 'Mediterranean Food Boat Excursion Mallorca', caption: 'Fresh Mediterranean food included in Mallorca boat excursion' },
  { file: 'paddle-surf-aguas-turquesas-excursion-alcudia.webp', title: 'Paddle Surf Turquoise Waters Alcudia', caption: 'Paddle surfing in turquoise waters during Alcudia boat trip' },
  { file: 'vista-panoramica-playa-muro-bahia-alcudia.webp', title: 'Panoramic View Playa Muro Alcudia Bay', caption: 'Panoramic view of Playa de Muro from boat in Alcudia Bay' },
  { file: 'pareja-crucero-romantico-atardecer-mallorca.webp', title: 'Couple Romantic Sunset Cruise Mallorca', caption: 'Couple enjoying romantic sunset cruise in Mallorca' },
  { file: 'tripulacion-experta-coral-boats-alcudia.webp', title: 'Expert Crew Coral Boats Alcudia', caption: 'Expert Coral Boats crew preparing activities in Alcudia' },
  { file: 'sangria-espanola-tapas-excursion-barco-mallorca.webp', title: 'Spanish Sangria Tapas Boat Excursion Mallorca', caption: 'Spanish sangria and tapas served during Mallorca boat excursion' },
  { file: 'atardecer-espectacular-mar-bahia-alcudia.webp', title: 'Spectacular Sunset Sea Alcudia Bay', caption: 'Spectacular sunset over the sea from boat in Alcudia Bay' },
  { file: 'puesta-sol-mediterranea-crucero-sunset-magic-mallorca.webp', title: 'Mediterranean Sunset Cruise Sunset Magic Mallorca', caption: 'Mediterranean sunset during Sunset Magic cruise in Mallorca' },
  { file: 'luz-dorada-atardecer-aguas-alcudia-mallorca.webp', title: 'Golden Sunset Light Alcudia Waters Mallorca', caption: 'Golden sunset light reflected on Alcudia waters, Mallorca' },
  { file: 'puerto-alcudia-atardecer-barcos-excursiones.webp', title: 'Port Alcudia Sunset Excursion Boats', caption: 'Port Alcudia at sunset with excursion boats moored' },
  { file: 'pasajeros-excursion-barco-coral-boats-mallorca.webp', title: 'Passengers Boat Excursion Coral Boats Mallorca', caption: 'Passengers enjoying boat excursion with Coral Boats in Mallorca' },
  { file: 'actividades-acuaticas-snorkel-paddle-surf-alcudia.webp', title: 'Water Activities Snorkeling Paddle Surf Alcudia', caption: 'Water activities included in Alcudia boat trip: snorkeling and paddle surf' },
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/en/gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
${galleryImages.map(img => `    <image:image>
      <image:loc>${baseUrl}${imageBasePath}/${img.file}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>
  <url>
    <loc>${baseUrl}/es/gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
${galleryImages.map(img => `    <image:image>
      <image:loc>${baseUrl}${imageBasePath}/${img.file}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>
  <url>
    <loc>${baseUrl}/de/gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
${galleryImages.map(img => `    <image:image>
      <image:loc>${baseUrl}${imageBasePath}/${img.file}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>
  <url>
    <loc>${baseUrl}/fr/gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
${galleryImages.map(img => `    <image:image>
      <image:loc>${baseUrl}${imageBasePath}/${img.file}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>
  <url>
    <loc>${baseUrl}/it/gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
${galleryImages.map(img => `    <image:image>
      <image:loc>${baseUrl}${imageBasePath}/${img.file}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>
  <url>
    <loc>${baseUrl}/ca/gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
${galleryImages.map(img => `    <image:image>
      <image:loc>${baseUrl}${imageBasePath}/${img.file}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
