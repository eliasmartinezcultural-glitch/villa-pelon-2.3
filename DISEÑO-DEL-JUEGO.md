# Diseño y arquitectura de juego

## Identidad

Aventura 2D de exploración, ilustrada y dibujada, para celulares. El jugador crea un viajero y recorre distintas capas temporales de San Patricio del Chañar. El objetivo es descubrir cómo se transforma un territorio y aprender su historia jugando.

La dirección artística es de cuaderno ilustrado: formas cálidas, vegetación, caminos, construcciones, objetos destacados y personajes legibles en pantallas pequeñas. La maqueta combina Canvas con sprites SVG originales dibujados para el viajero, habitantes, casas, galpón, árbol, pozo y mesa. La dirección artística todavía debe ampliarse con escenarios y animaciones finales.

## Principios no negociables

1. Primero celular: controles táctiles grandes, objetivos cortos, texto legible, interfaz adaptable a vertical y horizontal.
2. Aprender haciendo: caminar, observar, conversar, investigar, comparar y registrar.
3. Historia responsable: separar hechos documentados, memoria oral, recreación y datos pendientes.
4. Libertad con orientación: explorar sin perder de vista la misión principal.
5. Progreso persistente: guardar automáticamente y permitir exportar/importar una copia de la partida.
6. No bloquear el juego por conexión: el núcleo debe funcionar como aplicación web estática y conservar su estructura offline.

## Bucle principal

1. Explorar una región.
2. Acercarse a un personaje o elemento investigable.
3. Interactuar y recibir una pista.
4. Registrar el hallazgo en el diario y la mochila.
5. Completar el conjunto de pistas de la etapa.
6. Desbloquear el siguiente viaje temporal.
7. Comparar el mismo territorio en otra época.

## Controles

### Celular
- Joystick táctil izquierdo: movimiento en ocho direcciones.
- Acción derecha: conversar o investigar.
- Botón de carrera: desplazamiento rápido mientras se mantiene pulsado.
- Accesos superiores: diario, mochila, mapa y ayuda.
- La interfaz respeta el área segura de pantalla y se adapta a orientación vertical u horizontal.

### Computadora
- WASD o flechas: movimiento.
- E o espacio: interactuar.
- Shift: correr.

## Sistemas implementados en el prototipo

- Personaje inicial configurable (nombre, variante visual y color de ropa).
- Sprites SVG originales para protagonista, habitantes y elementos principales del escenario.
- Mapa 2D generado por tiles y cámara que sigue al personaje.
- Caminos, agua, arboleda, edificios y colisiones.
- Regiones explorables con registro de zonas visitadas.
- Personajes no jugadores con diálogos de ambientación.
- Objetos investigables, hallazgos y mochila.
- Construcciones y puntos del escenario con descripciones e historial de lugares visitados.
- Tres etapas temporales de prueba con tres pistas por etapa y cambios visibles del paisaje.
- Desbloqueo secuencial: presente → transformación → paisaje anterior.
- Reloj de juego y tinte nocturno.
- Diario, mapa, ayuda y progreso de etapa.
- Guardado local automático, respaldo JSON, restauración y reinicio confirmado.
- Manifest y service worker para instalación/recursos offline.

## Estructura de progresión de la maqueta

### Etapa 1 — El presente
Pistas: fragmento de mapa, fotografía sin fecha, curso del agua.

### Etapa 2 — Un tiempo de transformación
Pistas: herramienta de trabajo, semillas guardadas, plano imaginario.

### Etapa 3 — Un paisaje anterior
Pistas: huella en el camino, marca en la piedra, restos de un fogón.

**Advertencia:** los títulos y elementos de estas etapas son recursos narrativos ficticios de prototipo. No describen hallazgos, documentos ni escenas históricas reales.

## Modelo de contenido histórico futuro

Cada objeto, personaje, misión o lugar debe tener:
- identificador único;
- era y región;
- título y descripción;
- tipo de contenido;
- coordenadas del mundo;
- estado de desbloqueo;
- etiqueta editorial: DOCUMENTADO / MEMORIA ORAL / RECREACIÓN / PENDIENTE;
- fuente, fecha, autoría y permiso cuando corresponda;
- referencia visual y atribución.

Los datos históricos no deben quedar mezclados con el código de renderizado. La próxima refactorización debe trasladar mapas, personajes, misiones y fuentes a archivos de datos separados.

## Guardado

La partida se guarda en el dispositivo del jugador mediante almacenamiento local del navegador. El respaldo JSON permite trasladar la partida manualmente. El guardado local no equivale a sincronización en la nube: borrar los datos del navegador puede borrar el progreso si no se descargó una copia.

## Próximas prioridades técnicas

1. Pruebas reales en Android y iPhone, vertical y horizontal.
2. Dividir el archivo único en módulos: motor, mundo, datos, interfaz y guardado.
3. Convertir las regiones en mapas conectados con límites y transiciones claras.
4. Mejorar animaciones, sprites y dirección artística dibujada.
5. Crear interiores accesibles y edificios con interacción.
6. Dar rutinas y estados a los habitantes.
7. Incorporar misiones con objetivos, recompensas y consecuencias personales.
8. Añadir archivos históricos auténticos con fuentes y atribuciones.
9. Añadir pruebas automáticas de movimiento, colisiones, guardado y desbloqueos.
10. Optimizar memoria, batería y rendimiento en teléfonos de gama baja.

## Limitaciones actuales

El mundo todavía es una maqueta procedural, no una reconstrucción cartográfica real. En la etapa de transformación aparecen trazas ilustrativas de infraestructura de agua; en el paisaje anterior se reducen las construcciones y las hileras de cultivo. Son cambios visuales ficticios, no reconstrucciones de fechas o sitios reales. Los personajes son estáticos y sus diálogos son ficticios. El reloj y la iluminación son una primera capa de ambiente. El prototipo debe probarse en dispositivos reales antes de considerarse estable para publicación.
