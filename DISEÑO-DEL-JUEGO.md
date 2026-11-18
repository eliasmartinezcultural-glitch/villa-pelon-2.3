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

 
## Segunda capa de diseño: mundo vivo y reglas sistémicas

### Rutinas de habitantes
Los habitantes ficticios dejan de ser puntos inmóviles: tienen franjas del día, destinos y actividades. Sus posiciones se calculan a partir del reloj del juego, de forma determinista y económica para el teléfono. El jugador puede encontrarlos en distintos lugares y horarios. No se presentan estas rutinas como testimonios ni costumbres históricas reales.

### Tiempo y clima
El reloj avanza aunque el jugador se quede quieto; el ciclo se conserva en la partida. Se incorpora un calendario de juego y una variación ambiental determinista por día. La estación y el clima son ambientación lúdica, no un registro meteorológico de San Patricio del Chañar.

### Reglas globales de producción
- El mundo debe responder a la acción del jugador; no agregar sistemas que solo decoren una pantalla.
- Cada personaje tiene identidad, agenda, función, diálogo y vínculo potencial con misiones.
- Cada misión debe declarar objetivo, condición de inicio, pasos, recompensa, consecuencia y estado guardado.
- Cada época debe tener mapa, reglas de desplazamiento, habitantes, objetos, arquitectura y fuentes propias.
- Las decisiones del jugador pueden cambiar relaciones y relatos ficticios; nunca deben alterar hechos históricos documentados.
- Todo elemento histórico visible debe indicar DOCUMENTADO, MEMORIA ORAL, RECREACIÓN o PENDIENTE DE VERIFICACIÓN.
- Los controles principales deben poder usarse con una mano, con botones táctiles amplios y sin depender de gestos precisos.
- El juego debe tolerar pausas, cambios de orientación, pérdida de conexión y teléfonos modestos.
- Los textos largos van al diario; durante la exploración se priorizan instrucciones cortas y diálogos breves.
- Toda mecánica nueva debe tener una prueba de regresión en móvil y escritorio antes de integrarse.

### Próximas capas de simulación
1. Interacciones contextuales con opciones y consecuencias persistentes.
2. Misiones secundarias con encargos, recompensas y cadenas de objetivos.
3. Energía, descanso y trabajos con límites comprensibles; sin castigos que frustren a niños o adultos mayores.
4. Interiores y edificios con escenas propias, accesibles y conectadas al exterior.
5. Relaciones con habitantes y memoria personal del protagonista.
6. Mapa por regiones con conexiones reales del mundo del juego y puntos de interés.
7. Archivo histórico consultable con fuentes, procedencia, fechas y permisos.
8. Animación por estados, sonido opcional y ajustes de accesibilidad.


### Mecánicas de vida cotidiana ya integradas en esta iteración
- El reloj avanza durante la partida y no depende de que el personaje camine.
- Los habitantes ficticios cambian de ubicación según franjas horarias; dibujo e interacción consultan la misma rutina.
- El calendario avanza por días; el cambio de día reinicia la tarea laboral diaria y recupera parte de la energía.
- Correr consume energía; caminar permite recuperarla gradualmente.
- La mesa permite descansar; el galpón ofrece una tarea ficticia diaria con recompensa pequeña; el pozo permite una pausa breve.
- La energía, el dinero y el progreso se conservan en la partida. Las partidas anteriores reciben valores iniciales compatibles.

Estas mecánicas son una primera simulación ligera. Todavía no representan una economía completa, una jornada laboral histórica ni una simulación social profunda.


## Tercera capa: misiones, vínculos y progresión personal

### Misiones encadenadas implementadas
- Conocer a Amalia: iniciar una conversación con ella.
- Conocer a Tomás: se habilita después de conocer a Amalia.
- Archivo de pistas: reunir tres descubrimientos; se habilita tras el primer encuentro.
- Visitar el galpón: se habilita después de conocer a Tomás.
- Una jornada de trabajo: completar una tarea del galpón tras visitarlo.

Cada misión tiene identificador, objetivo, condición de desbloqueo, progreso, recompensa y estado. Las recompensas se acreditan una sola vez y quedan guardadas. La pantalla de misiones muestra avance y vínculos. La progresión es lúdica y no constituye información histórica.

### Vínculos con habitantes
Cada conversación nueva por día de juego suma un punto de relación hasta diez. Los niveles son: sin conocer, buen trato, confianza y amistad. El progreso se guarda por personaje. Repetir conversaciones el mismo día no permite acumular puntos de manera ilimitada.

### Próxima evolución
La siguiente iteración debe convertir los diálogos en escenas con opciones reales, memoria de decisiones, favores y consecuencias en el mundo; después sumar interiores y actividades por oficio. Evitar sistemas de relación que solo sean barras sin consecuencias.


### Conversaciones con opciones y memoria
La interacción con un habitante abre una conversación con tres temas: el lugar, el trabajo y los recuerdos. Cada tema elegido queda guardado por personaje. Repetir una pregunta no vuelve a premiar el vínculo. Los textos están redactados como ficción y explicitan que no son testimonios ni datos históricos. El nivel de vínculo se refleja en la pantalla de misiones.

La relación es una primera capa narrativa: aún no cambia horarios, rutas ni disponibilidad de misiones por nivel. Esa consecuencia sistémica queda como siguiente hito para evitar una barra decorativa sin efecto real.


## Cuarta capa: identidad territorial y archivo consultable

Se incorpora `chanar-archive.js` como catálogo de contenido local separado del motor. El panel Archivo local reúne fichas de territorio, cronología y producción. Cada entrada contiene ID estable, período, etiqueta de certeza, texto, fuente y enlace. El jugador puede registrar lecturas en `archiveReadIds`; el progreso se conserva en el guardado existente.

La primera selección documental se apoya en la reseña oficial municipal de identidad y en el documento del Consejo Federal de Inversiones sobre el valle inferior del río Neuquén. Las escenas interactivas de chacras, riego, cosecha y vendimia serán recreaciones jugables; no deben atribuirse a personas reales ni ubicarse con precisión hasta validar fuentes y cartografía.


## Tercera capa: actividad contextual y lectura espacial

- El mapa del juego ahora presenta un esquema visual del mundo, posición aproximada del viajero, río ilustrativo, caminos y zonas de arboleda. Está rotulado como mapa de la maqueta, nunca como cartografía histórica.
- El galpón ofrece una tarea diaria rotativa: ordenar herramientas, preparar cajones, revisar un canal ilustrativo, clasificar cosecha o acomodar materiales. Cada tarea tiene descripción, coste de energía y recompensa diferenciados. Son actividades de juego, no atribuciones históricas.
- Las conversaciones muestran la actividad horaria actual del personaje. Al alcanzar tres puntos de vínculo se desbloquea una pregunta especial sobre la memoria del pueblo.
- El HUD móvil informa energía y monedas sin obligar a abrir el mapa.

## Reglas de economía y ritmo

1. Una tarea diaria no debe repetirse como recompensa infinita dentro del mismo día.
2. Cada actividad informa antes de ejecutarse su coste y recompensa.
3. El jugador debe tener alternativas claras para recuperar energía.
4. La economía es lúdica y no simula salarios ni precios históricos reales.
5. Los vínculos desbloquean contenido narrativo, no alteran los hechos históricos.
6. Los mapas de interfaz deben indicar si son esquemáticos o georreferenciados; este mapa es esquemático.


## Iteración v10 — diseño desde el celular
- El teléfono es la plataforma de referencia: el lienzo ocupa el espacio útil completo y el escritorio se considera una adaptación.
- Se incorpora una hoja de estilos mobile-first independiente para no mezclar correcciones de escritorio con reglas táctiles.
- Se reorganizan encabezado, controles, HUD, diálogo, paneles y modal de inicio para pantallas estrechas, áreas seguras y orientación horizontal.
- Los paneles de lectura pasan a ocupar la pantalla en móvil; el diálogo de juego deja despejados joystick y botón de acción.
- Se añade foco visible, regiones de estado accesibles y respeto por movimiento reducido.
- El canvas limita su resolución interna a 1,75 veces la densidad del dispositivo para equilibrar nitidez, memoria y batería en móviles.
- Se refuerza el ciclo de vida: redimensionado, cambio de orientación, pérdida de foco y regreso a segundo plano.
- La hoja móvil se precarga en la caché offline con una versión nueva.

Esta iteración mejora la base responsive, pero no reemplaza las pruebas físicas en teléfonos Android e iPhone de distintas dimensiones. La compatibilidad debe verificarse en equipos reales antes de publicar.


## Iteración v11 — movimiento y aventura investigativa
- El personaje principal incorpora una animación sutil de desplazamiento con rebote de pasos, reposo y orientación horizontal según la dirección.
- La animación es económica: no crea sprites nuevos por fotograma ni depende de librerías externas.
- Las misiones ahora amplían el recorrido: abrir el archivo, leer tres fichas, comparar épocas y reunir cinco fuentes.
- Las lecturas del archivo y los viajes entre épocas alimentan los objetivos de misión.
- La sincronización recupera el progreso histórico de partidas existentes a partir de fichas ya leídas y épocas visitadas.
- Las recompensas siguen siendo lúdicas y no representan dinero, salarios ni valores históricos.
