# San Patricio del Chañar · El viajero del tiempo

Aventura histórica 2D ilustrada, pensada para navegador y celulares.

## Estado actual

**Prototipo jugable ampliado, con enfoque mobile-first.** Incluye:
- Creación básica del viajero: nombre, apariencia y color de ropa.
- Mundo explorable dibujado en Canvas 2D.
- Movimiento con teclado, joystick táctil y botón de carrera.
- Interfaz móvil adaptable a vertical/horizontal y áreas seguras de pantalla.
- Sprites SVG originales dibujados para viajero, habitantes, casas, galpón, árbol, pozo y mesa.
- HUD de época, hora y región actual.
- Habitantes ficticios con rutinas horarias y posiciones dinámicas.
- Reloj continuo, calendario de días, clima y estación ambientales deterministas.
- Energía de carrera, descanso y una tarea diaria sencilla con recompensa.
- Misiones encadenadas con objetivos, desbloqueos y premios persistentes.
- Vínculos con habitantes: conversaciones, puntos de relación y niveles de confianza.
- Objetos y lugares investigables, mochila y diario.
- Tres etapas con tres pistas cada una y desbloqueo secuencial.
- Paisaje que cambia visualmente entre etapas temporales.
- Regiones visitadas, reloj de juego y ambiente nocturno.
- Descubrimientos y diario de viaje.
- Tres capas temporales de prueba con cambios visuales del paisaje entre épocas.
- Interfaz adaptable a escritorio y móvil.
- Guardado automático local, exportación/importación de partida y reinicio confirmado.
- Estructura modular separada en HTML, CSS, datos y motor JavaScript.

## Cómo jugar

Abrir `index.html` desde GitHub Pages o un servidor web estático.

- PC: WASD o flechas para moverse; E o espacio para interactuar.
- Celular: joystick izquierdo y botón redondo de acción.
- Diario: permite revisar hallazgos y cambiar de época cuando se reúnen pistas.

## Criterio histórico

Esta versión es un prototipo de mecánicas y atmósfera. El mapa es una composición ilustrativa provisional, no cartografía histórica exacta. Los personajes, diálogos y objetos narrativos son ficticios. Las épocas son marcos de prueba, no reconstrucciones documentales completas. Ningún diálogo ficticio debe publicarse como testimonio real.

Antes de convertir una escena en contenido histórico definitivo se debe registrar:
1. afirmación o acontecimiento;
2. fecha o período y grado de certeza;
3. fuente primaria o institucional;
4. ubicación y correspondencia geográfica;
5. imagen/documento y permisos de uso;
6. distinción entre dato documentado, memoria oral y recreación.

Ver `HISTORIA-Y-FUENTES.md`.

## Próximos hitos

1. Reemplazar el mapa provisional por cartografía y regiones verificadas.
2. Incorporar fuentes, documentos, fotografías y fichas de descubrimiento.
3. Profundizar colisiones, caminos, edificios interiores y navegación.
4. Completar el sistema de misiones y progresión.
5. Incorporar sonido, animaciones y arte final original.
6. Probar rendimiento, accesibilidad, guardado y funcionamiento sin conexión en celulares.

## Estructura técnica

- `index.html`: estructura y pantallas de entrada.
- `styles.css`: diseño adaptable y controles móviles.
- `game-data.js`: épocas, personajes, pistas y elementos del mundo.
- `world-systems.js`: rutinas de habitantes, calendario y clima de ambientación.
- `progression-data.js`: catálogo de misiones y reglas de progresión.
- `assets/`: ilustraciones SVG originales.
- `game.js`: motor Canvas, movimiento, colisiones, misiones, interfaz y guardado.
- `manifest.webmanifest`, `sw.js`, `icon.svg`: instalación y recursos offline.
- `DISEÑO-DEL-JUEGO.md`: arquitectura y hoja de ruta.
- `REGLAS-GLOBALES.md`: biblia de diseño, simulación, accesibilidad, historia y calidad.
- `HISTORIA-Y-FUENTES.md`: criterio de verificación histórica.

HTML, CSS y JavaScript sin dependencias externas. Renderizado Canvas 2D. Publicación estática posible mediante GitHub Pages.
