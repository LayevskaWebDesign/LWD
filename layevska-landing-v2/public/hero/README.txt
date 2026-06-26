CARPETA DE IMAGENES DEL HERO · ATLAS ZOU (V3)
===============================================

Aqui van las 7 ilustraciones de la isla-ballena Zou que conforman
la animacion cinematografica del Hero. Layevska Web Design.

NOMBRES EXACTOS QUE EL CODIGO ESPERA
------------------------------------
Deben llamarse exactamente asi (en minusculas, con guion):

  zou-01.jpg  →  Vista panoramica amplia con arcoiris sobre la isla
  zou-02.jpg  →  Detalle de torre antigua de piedra con arcoiris al fondo
  zou-03.jpg  →  Vista cenital aerea de la meseta central con el gran arbol
  zou-04.jpg  →  Torre antigua de piedra cubierta de musgo (primer plano)
  zou-05.jpg  →  Gran arbol central con la silueta de aleta de ballena
  zou-06.jpg  →  La espalda de la ballena-isla vista de lateral
  zou-07.jpg  →  Reveal final: el gran arbol sobre la cima de Zou

CORRESPONDENCIA CON LAS IMAGENES QUE ENVIASTE EN ORDEN
------------------------------------------------------
Imagen 1 (panoramica con arcoiris)        →  zou-01.jpg
Imagen 2 (torre con arcoiris detalle)     →  zou-02.jpg
Imagen 3 (vista aerea de la meseta)       →  zou-03.jpg
Imagen 4 (torre de piedra musgo)          →  zou-04.jpg
Imagen 5 (arbol con aleta de ballena)     →  zou-05.jpg
Imagen 6 (espalda de la ballena)          →  zou-06.jpg
Imagen 7 (arbol sobre la cima)            →  zou-07.jpg

SECUENCIA NARRATIVA EN LA ANIMACION
-----------------------------------
01 → Establecimiento (panoramica + zoom suave)
02 → Pan-down hacia la torre/ciudad antigua
03 → Pan-up hasta la meseta y el arbol central
04 → Pan ascendente con drift lateral por la espalda
05 → Zoom-in lento al arbol gigante
06 → Pull-back con pan lateral, vision completa
07 → Pan-up majestuoso al reveal final
[loop a 01]

TIMING
------
- Cada imagen visible: 3.5 segundos
- Crossfade con blur dissolve: 2.0 segundos
- Tiempo total del ciclo: ~38.5 segundos
- Loop infinito y suave

FORMATO RECOMENDADO
-------------------
- Formato: .jpg (default) o .webp si las podes convertir
- Resolucion ideal: 1920x1080 (16:9) o 2400x1500
- Peso por imagen: idealmente <300KB
- Si tenes las originales en PNG, convertilas a JPG con calidad 82-88%

COMO COMPRIMIRLAS RAPIDO
------------------------
- Web gratis: https://squoosh.app (drag & drop, exporta a WebP/JPG)
- Tinypng: https://tinypng.com (drag & drop, comprime sin perder calidad)

LIMPIEZA OPCIONAL
-----------------
Si todavia tenes los archivos hero-01.jpg ... hero-08.jpg de la version
anterior (anime de pueblos apilados), los podes borrar — el codigo
ya no los referencia. Solo se usan los zou-01 a zou-07.

DESPUES DE COPIARLAS
--------------------
Una vez las 7 imagenes esten aqui con los nombres exactos:

  1. Ejecuta el script 4-COMPILAR.bat en la raiz del proyecto
  2. Visualiza el resultado en /dist/index.html
  3. Subi /dist a Vercel/Netlify

Si alguna imagen no esta cuando se carga la pagina, vas a ver un fondo
azul oscuro en su lugar — no se rompe nada, simplemente esa "escena"
se ve vacia hasta que la dropees.

NOTA SOBRE "MORPHING"
---------------------
La directiva original pedia interpolacion morphing entre imagenes.
Eso requiere herramientas de IA generativa (Nanobanana, RunwayML, etc.)
que no se pueden integrar en una landing estatica.

Lo que se implemento en cambio es una tecnica cinematografica
equivalente:
  · Crossfade extendido de 2 segundos
  · Gaussian blur que sube a 6px al midpoint del cambio
    y vuelve a 0 — efecto "dream sequence"
  · Continuidad de camara: el zoom final de cada frame empata
    con el zoom inicial del siguiente, dando ilusion de cinematografia
    continua, como una sola toma con cambios de plano suaves

El ojo lee esto como cinematografia fluida, no como cortes.

Atte,
Claude (asistente de Layevska Web Design)
