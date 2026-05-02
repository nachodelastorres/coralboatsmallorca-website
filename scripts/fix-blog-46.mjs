import { readFileSync, writeFileSync } from 'fs';

const path = 'public/locales/es/common.json';
const dict = JSON.parse(readFileSync(path, 'utf-8'));
const blog = dict.blog_cuarenta_y_seis;

// 1) Remove single-asterisk italics (markdown not rendered) — preserve **bold**.
function stripItalicAsterisks(s) {
  if (typeof s !== 'string') return s;
  return s.replace(/(?<!\*)\*(?!\*)([^*\n]+?)(?<!\*)\*(?!\*)/g, '$1');
}
function walk(node) {
  if (typeof node === 'string') return stripItalicAsterisks(node);
  if (Array.isArray(node)) return node.map(walk);
  if (node && typeof node === 'object') {
    const out = {};
    for (const k of Object.keys(node)) out[k] = walk(node[k]);
    return out;
  }
  return node;
}
const cleaned = walk(blog);

// 2) Section 5: honest about our boats not reaching Cala Sant Vicenç.
cleaned.section5.body = "Cala Sant Vicenç está a **14 kilómetros del centro de Alcudia** y aproximadamente **25 minutos en coche**. Es una de las mejores excursiones de medio día que puedes hacer si te alojas en Alcudia o Playa de Muro. Hay tres formas de llegar — y cada una tiene su gracia.\n\n**1. En coche (la opción más cómoda).**\nDesde Alcudia, hay que dirigirse hacia Pollença por la **carretera Ma-2200** y, ya cerca de Pollença, tomar el desvío Ma-2203 hacia Cala Sant Vicenç. Es una carretera estrecha pero bien señalizada, con vistas espectaculares en los últimos 4 kilómetros — vas serpenteando entre montaña y bajando hacia el mar. **Hay tres aparcamientos públicos gratuitos** en Cala Sant Vicenç, repartidos entre las cuatro calas. En julio y agosto, llegan llenos hacia las 11 de la mañana, así que conviene salir temprano. En el resto del año, no tendrás problema.\n\n**Truco local:** si vas en julio o agosto, aparca en el aparcamiento alto (cerca de Cala Carbó) en lugar del de Cala Molins. Suele tener más sitio, y bajas andando entre pinos en cinco minutos.\n\n**2. En autobús (la opción económica).**\nLa **línea 340 del TIB (Transports de les Illes Balears)** conecta Alcudia con Cala Sant Vicenç con paradas intermedias en Pollença. Los precios son ridículamente bajos — apenas **3-4 € por trayecto** —, hay servicios cada hora aproximadamente entre mayo y octubre, y el viaje dura unos 45-50 minutos por la propia ruta del autobús. Es una buena opción si quieres tomarte algo de vino con la comida sin preocuparte del coche. Para ver horarios actualizados puedes consultar la web oficial de [TIB Mallorca](https://www.tib.org/) o nuestra guía sobre **[cómo moverse por Mallorca sin coche](/es/blog-details/como-moverse-por-mallorca-transporte-alquiler-coche)**.\n\n**3. En barco desde el Puerto de Pollença (la opción más espectacular).**\nLlegar a Cala Sant Vicenç **por mar es probablemente la forma más bonita y menos conocida** de descubrirla. Varias compañías locales ofrecen excursiones marítimas saliendo del **Puerto de Pollença** — a apenas 5 minutos en coche de Cala Sant Vicenç —, con paradas para baño y snorkel en las calas intermedias. La gracia es que **ves el Cavall Bernat acercarse desde el agua**, un plano que casi nadie ve porque casi todo el mundo llega por carretera. Si quieres incluir una experiencia náutica, busca operadores en el Moll Vell de Port de Pollença.\n\n**Importante: nosotros no llegamos hasta Cala Sant Vicenç.** Nuestras excursiones salen del **Puerto de Alcudia** y se mantienen dentro de la **Bahía de Alcudia** — Alcanada, Coll Baix, la costa norte de la bahía y los acantilados que la cierran. Es nuestra zona, la que conocemos al detalle, y tiene su propio paisaje espectacular muy distinto al de Cala Sant Vicenç. Si quieres descubrir esa otra parte del norte de Mallorca desde el agua, mira nuestra **[excursión matinal](/es/alcudia-morning-boat-tour)**, el **[crucero al atardecer](/es/alcudia-sunset-boat-tour)** o nuestros **[charters privados](/es/alcudia-private-boat-charter)**. Y para entender mejor toda la oferta marítima del norte, consulta nuestra guía de **[las mejores excursiones en barco desde Alcudia](/es/blog-details/mejores-excursiones-barco-mallorca)**.";

// 3) Section 7: replace boat-CTA paragraph that wrongly implied we go there.
cleaned.section7.body = cleaned.section7.body.replace(
  /O, si prefieres una variante completamente diferente:[\s\S]*$/,
  "O, si prefieres una variante completamente diferente: **descubrirlo desde el mar contratando una excursión que salga del Puerto de Pollença**, donde varios operadores locales ofrecen rutas marítimas hacia Cala Sant Vicenç con paradas para baño y snorkel. Si después quieres conocer también la costa de Alcudia desde el agua — que es nuestra zona y donde no llegan las rutas de Pollença —, combina la visita con una de **[nuestras excursiones por la Bahía de Alcudia](/es/boat-tours-alcudia)**: dos paisajes vecinos pero radicalmente distintos."
);

// 4) Conclusion: drop the false boat-CTA, replace with honest version.
cleaned.conclusion = "Cala Sant Vicenç es uno de esos lugares donde **la magia no está en la postal — está en los detalles**. Está en darse cuenta de que en realidad son cuatro calas, y de que cada una tiene su carácter. Está en el silencio que hubo allí siglos antes de que llegara el turismo. Está en saber que en alguna mesa de algún hotel cercano, una mujer llamada Agatha Christie tomaba notas hace casi noventa años mientras observaba a los huéspedes ingleses. Está en mirar el Cavall Bernat al atardecer y entender, sin que nadie te lo explique, por qué los locales le dieron ese nombre.\n\nEs uno de los pocos rincones del Mediterráneo que ha sabido mantener su escala, su discreción y su autenticidad — sin convertirse en parque temático ni en escaparate de Instagram. Y sin embargo, está a 14 kilómetros de Alcudia. A 20 minutos en coche. A 50 minutos en autobús. Es **uno de los planes más fáciles y al mismo tiempo más memorables que puedes hacer durante unas vacaciones en el norte de Mallorca**.\n\nLa próxima vez que vengas — o si todavía estás organizando el viaje — guarda al menos medio día para Cala Sant Vicenç. Camina entre las cuatro calas, métete al agua en cada una, come tranquilo en una terraza viendo el Cavall Bernat, y, sobre todo, no llegues con prisa. Es uno de esos lugares en los que el tiempo se mide diferente. Y si después quieres descubrir también la **otra cara del norte de Mallorca desde el mar — la Bahía de Alcudia, su costa, sus calas y sus aguas turquesas —, ahí sí que es nuestra zona**: **[ven a navegar con nosotros desde el Puerto de Alcudia](/es/boat-tours-alcudia)**. Cala Sant Vicenç te emocionará por su luz y su historia. Alcudia, por su silencio.";

// 5) Caption tweak so it doesn't claim WE reach Cala Sant Vicenç.
cleaned.inlineImages.barcoTurquesa.caption = "Llegar a Cala Sant Vicenç por mar es la forma menos masificada y más espectacular: ves el Cavall Bernat acercarse desde el agua, te ahorras el aparcamiento y descubres calas intermedias que no son accesibles por tierra. Estos servicios salen del Puerto de Pollença — nuestras excursiones desde Alcudia operan dentro de la Bahía de Alcudia.";
cleaned.inlineImages.tapasBarco.caption = "Una parada para comer a bordo, con tapas mallorquinas y sangría, frente a la costa norte de Mallorca. Mucha gente descubre que comer en el mar — sin reservas, sin esperas, con vistas — es una experiencia diferente al restaurante.";

dict.blog_cuarenta_y_seis = cleaned;
writeFileSync(path, JSON.stringify(dict, null, 2) + '\n');
console.log('blog_cuarenta_y_seis: italics removed + boat tour scope corrected');
