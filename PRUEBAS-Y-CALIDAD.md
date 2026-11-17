# Lista de pruebas antes de publicar

Este archivo separa las verificaciones hechas sobre el código de las que todavía requieren un teléfono o navegador real.

## Comprobaciones técnicas realizadas

- [x] Los archivos HTML, CSS, datos y motor están separados.
- [x] JavaScript de datos y motor pasa comprobación de sintaxis.
- [x] Prueba de inicialización con DOM simulado y apertura de la primera escena.
- [x] Los elementos HTML referenciados por el motor existen en la página.
- [x] No hay IDs duplicados en el HTML.
- [x] El service worker incluye los módulos principales en la caché.
- [x] El movimiento corrige la asignación de coordenadas del jugador.
- [x] Los edificios y árboles usan coordenadas relativas a la cámara.
- [x] Los árboles se dibujan solo en la zona visible.
- [x] Los objetos investigables de las tres etapas tienen identificadores únicos.
- [x] Sprites SVG originales integrados con alternativa vectorial si no cargan.
- [x] La progresión temporal exige completar las pistas de cada etapa.
- [x] El guardado contempla mochila, regiones y reloj.
- [x] Existe exportación e importación de respaldo JSON.

## Pruebas pendientes en dispositivos reales

- [ ] Android Chrome: retrato.
- [ ] Android Chrome: paisaje.
- [ ] iPhone Safari: retrato.
- [ ] iPhone Safari: paisaje.
- [ ] Joystick: movimiento en ocho direcciones y liberación fuera del control.
- [ ] Botón de carrera: mantener, soltar y cancelar.
- [ ] Interacción con todos los objetos de cada época.
- [ ] Colisiones contra casas, agua y arboledas.
- [ ] Desbloqueo de las tres épocas en el orden correcto.
- [ ] Guardado al cerrar/reabrir el navegador.
- [ ] Exportar e importar partida entre dos dispositivos.
- [ ] Instalación como aplicación y apertura sin conexión.
- [ ] Rendimiento y consumo de batería en un teléfono de gama baja.

## Publicación

No se considera confirmada la publicación de GitHub Pages hasta abrir la URL desde un dispositivo externo y completar una partida de prueba. La comprobación de sintaxis no reemplaza una prueba de juego real.
