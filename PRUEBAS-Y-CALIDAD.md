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
- [x] Casas, galpón, pozo y mesa tienen interacción contextual.
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

- [x] Rutinas horarias deterministas para habitantes ficticios.
- [x] Posición de los habitantes compartida por dibujo e interacción.
- [x] Reloj de mundo que avanza aunque el jugador esté quieto.
- [x] Calendario de días guardado en la partida.
- [x] Capa de clima/estación lúdica y determinista (no meteorología real).
- [x] Energía de carrera, recuperación al caminar y descanso contextual.
- [x] Tarea diaria en el galpón con recompensa y límite por día.
- [x] Reinicio de tarea y recuperación parcial de energía al cambiar de día.
- [x] Compatibilidad de energía/calendario con partidas guardadas antiguas.
- [ ] Verificar rutinas y accesibilidad con usuarios reales en Android/iPhone.
- [ ] Probar cambios de día, importación de partidas antiguas y guardado tras varios ciclos.

- [x] Catálogo de misiones encadenadas separado del motor.
- [x] Progreso, bloqueos y recompensas de misiones persistentes.
- [x] Conversaciones con progreso de vínculo limitado a una vez por día.
- [x] Pantalla de misiones y vínculos accesible desde la interfaz.
- [ ] Probar todas las cadenas de misiones con una partida nueva y una partida importada.
- [ ] Probar recompensas únicas, límite diario de vínculo y cambios de día en móvil.

- [x] Conversaciones con tres temas elegibles por habitante.
- [x] Temas conversados guardados por personaje.
- [x] Repetir un tema no vuelve a sumar puntos de relación.
- [x] Salida clara de la conversación y regreso al juego.
- [ ] Verificar diálogos y controles de panel con lector de pantalla y pantallas pequeñas.

- [x] Prueba de humo con DOM simulado: inicialización del motor y apertura del panel de misiones.
- [x] Panel de misiones muestra las cinco misiones y la sección de vínculos.
- [ ] Completar una partida real para verificar la cadena de misiones, las conversaciones y las recompensas de principio a fin.


- [x] HUD móvil de energía y monedas conectado al estado de partida.
- [x] Tareas diarias rotativas con coste/recompensa configurados en el módulo de mundo.
- [x] Tarea diaria bloqueada tras completarse y renovada al cambiar de día.
- [x] Mapa visual esquemático con posición aproximada del jugador y advertencia de no cartografía.
- [x] Actividad horaria visible al conversar con habitantes.
- [x] Pregunta especial de vínculo desbloqueable al alcanzar tres puntos.
- [ ] Prueba manual en Android de lectura del HUD en 320 px y paisaje.
- [ ] Completar las cinco variantes de tarea en cinco días de juego.
- [ ] Verificar el desbloqueo de pregunta especial en partida nueva e importada.


## v10 — revisión mobile-first
- [x] Hoja mobile-first separada y cargada desde el documento principal.
- [x] Viewport con áreas seguras y adaptación al teclado virtual.
- [x] Canvas con densidad interna limitada para reducir carga gráfica.
- [x] Reorganización táctil de controles, diálogo, HUD y paneles.
- [x] Captura del puntero al correr y liberación al perder foco.
- [x] Redimensionado ante cambios de tamaño y orientación.
- [x] Nueva versión de caché offline con la hoja móvil incluida.
- [ ] Prueba física en Android vertical y horizontal.
- [ ] Prueba física en iPhone vertical y horizontal.
- [ ] Prueba de lectura y controles con personas mayores y niños.


## v11 — movimiento y misiones investigativas
- [x] Movimiento actualiza el estado de animación del protagonista.
- [x] Sprite principal orienta su lectura hacia la dirección horizontal del movimiento.
- [x] Misiones conectadas con fichas efectivamente leídas en el archivo.
- [x] Misiones conectadas con cambios de época.
- [x] Recuperación de progreso previo para lecturas y épocas ya visitadas.
- [ ] Probar visualmente animación y legibilidad en teléfonos de baja resolución.
- [ ] Completar la cadena de cuatro misiones en una partida nueva.
- [ ] Verificar que una partida antigua no duplique recompensas al sincronizar.


## v12 — parcelas y ciclo productivo
- [x] Tres parcelas incorporadas al mapa y excluidas de la época anterior.
- [x] Estado individual de parcela guardado por ID.
- [x] Sembrar, regar, crecimiento por reloj del juego y cosechar.
- [x] Recursos de semillas y agua visibles en el HUD móvil.
- [x] Recuperación diaria de agua y reposición de semilla tras cosechar.
- [x] Cosechas conectadas con inventario, monedas y misiones.
- [x] Migración de partidas antiguas con valores seguros para el nuevo sistema.
- [ ] Completar una cosecha real en navegador móvil.
- [ ] Verificar persistencia de las tres parcelas tras cerrar y reabrir.
- [ ] Probar agotamiento y recuperación de agua y semillas.


## v13 — compatibilidad
- [x] Versión de guardado incrementada para la nueva capa de simulación.
- [x] Objetivos táctiles principales con altura mínima de 44 px en móvil.
- [x] Caché versionada para forzar la actualización de recursos.
- [ ] Confirmar actualización del service worker en Android e iOS.


## v14 — motor y conexión de sistemas
- [x] Simulación desacoplada del refresco de pantalla mediante paso fijo de 1/60 s.
- [x] Límite de delta y de pasos de recuperación para evitar saltos.
- [x] Bucle suspendido en segundo plano y reanudado al volver.
- [x] Teclas de juego ignoradas cuando se escribe en campos.
- [x] Acción de teclado protegida contra repetición involuntaria.
- [x] Joystick con captura y liberación segura del puntero.
- [x] Mensaje de interacción y etiqueta accesible según objetivo cercano.
- [x] Inventario conectado al estado de recursos y parcelas.
- [x] Crecimiento de cultivo comienza después del riego.
- [x] Migración de estado y sincronización de misiones al cargar.
- [ ] Probar movimiento táctil y cosecha en dispositivo físico.
- [ ] Medir fluidez en teléfonos de gama baja.
