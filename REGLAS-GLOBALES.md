# Reglas globales de diseño y producción
## Biblia de calidad del videojuego

Este documento define las reglas que deben respetar todas las futuras mejoras. Si una función nueva contradice estas reglas, se rediseña la función; no se degrada la experiencia para conservar una idea.

## 1. Identidad del juego
- Género: aventura 2D de exploración, simulación cotidiana y aprendizaje histórico.
- Territorio protagonista: San Patricio del Chañar y su entorno, con escala y límites geográficos documentados cuando se incorporen al juego.
- Fantasía central: una persona viajera del tiempo recorre distintas capas del territorio, conoce a sus habitantes, investiga objetos y comprende transformaciones.
- El jugador controla un protagonista persistente. La personalización no debe romper la continuidad narrativa.
- La historia local es el contenido distintivo; las mecánicas deben ayudar a descubrirla, no taparla.

## 2. Reglas de verdad histórica
Cada pieza de contenido tendrá una etiqueta editorial:
1. DOCUMENTADO: respaldado por una fuente identificable.
2. MEMORIA ORAL: testimonio atribuido, autorizado, fechado y contextualizado.
3. RECREACIÓN: ficción declarada para hacer jugable una situación.
4. PENDIENTE DE VERIFICACIÓN: no se presenta como hecho.

Reglas obligatorias:
- Nunca inventar fechas, fundaciones, nombres históricos, edificios, mapas, citas ni acontecimientos.
- Nunca presentar personajes compuestos o diálogos ficticios como vecinos reales o testimonios.
- No ubicar un sitio histórico en el mapa sin respaldo geográfico suficiente.
- No convertir una mecánica de juego en afirmación histórica.
- Los cambios visuales entre épocas se rotulan como recreación hasta que exista documentación.
- Las fuentes deben poder consultarse desde el diario o la ficha del descubrimiento.
- Las fotografías y documentos necesitan procedencia, autoría y permiso de uso.

## 3. Reglas del mundo simulado
- Todo personaje no jugador debe tener identidad funcional, ubicación, rutina, actividad y contenido de diálogo.
- Las rutinas deben ser deterministas, coherentes y económicas en CPU; el juego no debe simular miles de agentes invisibles.
- El tiempo del mundo avanza con una escala estable y comprensible.
- El clima y las estaciones de ambientación no deben confundirse con datos meteorológicos históricos o actuales.
- Las actividades deben responder al lugar: descansar en un espacio de pausa, realizar tareas en espacios de trabajo, investigar en puntos de interés.
- Toda recompensa debe tener una fuente, un límite y una consecuencia. No regalar recursos sin razón.
- Los estados persistentes deben sobrevivir al cierre del navegador y a la importación de partidas.
- Si una actividad tiene límite diario, el reinicio debe ocurrir al cambiar el día del juego, no al recargar la página.

## 4. Reglas de misiones
Toda misión futura debe especificar:
- ID único y título corto.
- Tipo: principal, secundaria, cotidiana, exploración o investigación.
- Personaje o lugar que la inicia.
- Objetivo medible y pasos claros.
- Condiciones de finalización.
- Recompensa y coste (tiempo, energía, recurso o relación).
- Consecuencia visible en el mundo o en el diario.
- Estado guardado: bloqueada, disponible, activa, completada o abandonada.
- Etiqueta histórica y fuentes, si contiene afirmaciones sobre el pasado.

Una misión no puede depender de una pista imposible de encontrar ni bloquear permanentemente la historia por una decisión menor. Siempre debe existir una salida comprensible.

## 5. Reglas de controles y experiencia móvil
- Diseñar primero para pantallas pequeñas; escritorio es una adaptación, no el patrón de origen.
- Controles principales visibles, táctiles, amplios y separados para evitar pulsaciones accidentales.
- Movimiento en ocho direcciones; el personaje no debe quedar atrapado por una colisión menor.
- Acción principal contextual: hablar, investigar, descansar o trabajar según el objetivo cercano.
- No exigir precisión de píxel ni mantener pulsado un botón diminuto.
- El juego debe funcionar en vertical y horizontal, con textos cortos y legibles.
- Los paneles deben poder cerrarse fácilmente y no tapar controles críticos.
- Permitir pausas sin perder progreso.
- Respetar zoom del navegador, áreas seguras y preferencias de movimiento reducido.
- No usar temporizadores agresivos ni penalizaciones que castiguen a niños, mayores o jugadores ocasionales.

## 6. Accesibilidad y comprensión
- Una instrucción principal por pantalla.
- Lenguaje cotidiano, frases breves y vocabulario explicado cuando sea necesario.
- Contraste suficiente y objetivos identificables por forma además de color.
- Tamaños de texto cómodos y botones de al menos 44 CSS px cuando sea posible.
- Ninguna información imprescindible debe depender solo del sonido.
- Los descubrimientos se guardan en un diario para leer a ritmo propio.
- La ayuda debe explicar controles y objetivos con ejemplos sencillos.

## 7. Dirección artística
- Estilo ilustrado coherente, cálido y reconocible; no mezclar paquetes de arte de estilos incompatibles.
- Siluetas legibles en pantallas chicas.
- Personajes con animaciones de reposo, caminar, interacción y trabajo antes de sumar gestos decorativos.
- Arquitectura, vegetación, ropa y objetos deben responder a cada período cuando existan referencias fiables.
- Evitar imágenes enormes, fondos recargados, texto sobre texturas difíciles y exceso de efectos.
- Cada sprite debe tener tamaño, punto de apoyo y escala coherentes con el mundo.
- Los elementos interactivos deben tener una señal visual discreta y consistente.

## 8. Arquitectura y rendimiento
- Separar datos, sistemas, interfaz, motor, guardado y contenido histórico.
- No introducir dependencias externas innecesarias.
- Cargar solo recursos requeridos y usar caché offline con versión actualizada.
- Limitar el renderizado a la zona visible.
- Evitar bucles costosos, búsquedas repetidas y creación continua de objetos en cada frame.
- Los sistemas deben aceptar partidas antiguas con valores por defecto seguros.
- Validar todo dato importado antes de modificar la partida.
- No romper IDs, controles, rutas ni archivos existentes sin migración comprobada.
- Priorizar teléfonos modestos, consumo razonable de batería y recuperación tras interrupciones.

## 9. Economía y progresión
- El dinero debe tener usos concretos antes de multiplicar recompensas.
- La energía facilita ritmo y variedad; nunca debe impedir terminar la historia principal.
- Los trabajos son actividades cortas, comprensibles y opcionales.
- Las recompensas no deben fomentar repetición tediosa ni explotación de un único punto.
- La progresión principal se basa en descubrir, comparar y comprender, no en acumular monedas.
- Las misiones secundarias amplían el mundo, pero no son requisito para acceder a información histórica esencial.

## 10. Reglas de publicación
No declarar una versión lista hasta:
- Completar una partida de inicio a fin.
- Probar controles y paneles en Android y iPhone cuando estén disponibles.
- Probar vertical y horizontal.
- Verificar guardado, restauración y partidas antiguas.
- Verificar carga offline después de la primera visita.
- Revisar contraste, tamaños, lectura y navegación con usuarios de edades distintas.
- Comprobar que todos los datos históricos publicados tienen fuentes.
- Resolver errores críticos, bloqueos y pérdidas de progreso.
- Registrar qué pruebas se hicieron realmente y cuáles siguen pendientes.

## 11. Regla de crecimiento
Cada actualización debe mejorar al menos una de estas dimensiones sin perjudicar las otras:
- diversión y capacidad de elección;
- comprensión histórica;
- vida y coherencia del mundo;
- claridad y accesibilidad;
- calidad visual y sonora;
- estabilidad y rendimiento;
- continuidad y profundidad de la aventura.

No se agregan funciones por cantidad. Se agregan sistemas que se conectan y generan situaciones interesantes.
