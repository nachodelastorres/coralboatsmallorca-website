# Instrucciones para Añadir Metadata SEO a los Blogs

## ✅ Lo que ya está hecho:

1. ✅ Modificado `src/app/[lang]/blog-details/[slug]/page.tsx` para usar traducciones
2. ✅ Creada función `src/lib/get-translations.ts` para cargar traducciones en server components
3. ✅ Actualizado `src/data/blog-data.ts` para usar claves de traducción (ej: `blog_uno.metaTitle`)
4. ✅ Generados archivos JSON con todas las traducciones de metadata para los 5 idiomas

## 📝 Lo que necesitas hacer manualmente:

Necesitas añadir las claves `metaTitle` y `metaDescription` a cada sección de blog en los archivos `common.json` de cada idioma.

### Archivos a modificar:

1. `public/locales/en/common.json`
2. `public/locales/es/common.json`
3. `public/locales/de/common.json`
4. `public/locales/fr/common.json`
5. `public/locales/it/common.json`

### Cómo hacerlo:

Para cada archivo de idioma, busca cada sección de blog (por ejemplo `"blog_uno": {`) y añade las dos líneas nuevas **después de** la línea `"meta_description"`:

#### Ejemplo para `blog_uno` en inglés:

**ANTES:**
```json
"blog_uno": {
  "title": "The best boat tours in Mallorca for this summer",
  "slug": "best-boat-tours-mallorca",
  "keyword": "boat tours Mallorca",
  "meta_description": "Discover the most recommended boat tours to enjoy the Mediterranean Sea during your holidays in Mallorca.",
  "publishedDate": "March 26, 2025",
  "btnText": "Read more",
  ...
}
```

**DESPUÉS:**
```json
"blog_uno": {
  "title": "The best boat tours in Mallorca for this summer",
  "slug": "best-boat-tours-mallorca",
  "keyword": "boat tours Mallorca",
  "meta_description": "Discover the most recommended boat tours to enjoy the Mediterranean Sea during your holidays in Mallorca.",
  "metaTitle": "Best Boat Tours in Mallorca 2025: Top Excursions & Hidden Coves | Coral Boats",
  "metaDescription": "Discover the best boat tours in Mallorca for 2025. Explore hidden coves, pristine beaches, and crystal-clear waters in Alcudia Bay. Expert guides, traditional boat tours, sunset cruises. Book your unforgettable Mediterranean adventure today.",
  "publishedDate": "March 26, 2025",
  "btnText": "Read more",
  ...
}
```

### Archivos JSON con los valores a copiar:

He generado 5 archivos JSON en la raíz del proyecto con todos los valores traducidos:

- **BLOG_METADATA_EN.json** - Para `public/locales/en/common.json`
- **BLOG_METADATA_ES.json** - Para `public/locales/es/common.json`
- **BLOG_METADATA_DE.json** - Para `public/locales/de/common.json`
- **BLOG_METADATA_FR.json** - Para `public/locales/fr/common.json`
- **BLOG_METADATA_IT.json** - Para `public/locales/it/common.json`

### Blogs que necesitan metadata (16 en total):

1. `blog_uno`
2. `blog_dos`
3. `blog_tres`
4. `blog_cuatro`
5. `blog_cinco`
6. `blog_seis`
7. `blog_siete`
8. `blog_ocho`
9. `blog_nueve`
10. `blog_comida`
11. `blog_once`
12. `blog_doce`
13. `blog_trece`
14. `blog_catorce`
15. `blog_quince`
16. `blog_dieciseis`

### Proceso recomendado:

1. Abre cada archivo `public/locales/[idioma]/common.json`
2. Abre el archivo JSON correspondiente (`BLOG_METADATA_[IDIOMA].json`)
3. Para cada blog, copia las dos líneas (`metaTitle` y `metaDescription`) del archivo JSON
4. Pégalas en el archivo common.json justo después de `"meta_description"`
5. Asegúrate de que las comas estén correctas
6. Guarda el archivo

### Verificación:

Después de añadir todos los metadata, ejecuta:
```bash
npm run build
```

Si hay errores de sintaxis JSON, el build fallará y te indicará dónde está el problema.

### Resultado esperado:

Una vez completado, todos los blogs tendrán metadata SEO optimizado en los 5 idiomas, lo que mejorará significativamente el posicionamiento en buscadores de tu web.

## 🎯 Beneficios SEO:

- ✅ Títulos optimizados para SEO en todos los idiomas
- ✅ Meta descriptions completas y atractivas
- ✅ Palabras clave estratégicamente ubicadas
- ✅ Contenido fresco con año 2025
- ✅ Mejor CTR en resultados de búsqueda
- ✅ Mayor relevancia para búsquedas locales (Mallorca, Alcudia, etc.)
