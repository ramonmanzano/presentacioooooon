# MEMORIA TÉCNICA DEL PROYECTO: MANZANO BOXING CLUB

**Autor**: Luis  
**Curso**: 1º Grado Superior - Desarrollo de Aplicaciones Web (DAW)  
**Proyecto**: Desarrollo de Interfaz y Lógica Dinámica en Entorno Cliente  
**Fecha**: Marzo de 2026  

---

## INTRODUCCIÓN

Este proyecto consiste en el desarrollo integral de la plataforma web oficial para el "Manzano Boxing Club". La propuesta nace de la necesidad de trasladar la fuerza y la disciplina de un gimnasio de boxeo real al entorno digital, creando un sitio que no solo informe sobre los horarios o precios, sino que proyecte una imagen de marca profesional y moderna.

A nivel académico, este trabajo sirve para consolidar el uso de los estándares web actuales, enfocándome en la creación de una interfaz dinámica donde el contenido y la lógica de negocio están separados. He buscado que la web sea rápida, intuitiva y que demuestre un control total sobre las herramientas de desarrollo en el lado del cliente (frontend) sin depender de librerías externas que compliquen la arquitectura del sitio.

---

## 1. DISEÑO Y ESTRUCTURA DE LAS PÁGINAS WEB

### 1.1. Concepto Visual y Filosofía de Diseño
El diseño de Manzano Boxing se aleja de las webs de gimnasios genéricas. He buscado lo que yo llamo un "estilo de combate": una interfaz de alto contraste donde el negro es el color dominante para dar elegancia y seriedad, y el rojo actúa como el motor visual que guía la atención del usuario hacia los puntos más importantes del sitio.

He cuidado mucho la jerarquía visual. Los encabezados son grandes y directos, usando una tipografía con mucha verticalidad que refuerza esa idea de "muro" o "guardia" propia del boxeo. No hay elementos que distraigan; cada botón, cada icono y cada bloque de texto tiene un propósito claro: facilitar que el futuro socio encuentre lo que busca y se sienta motivado a apuntarse.

### 1.2. Estructura de Navegación y Secciones
La arquitectura de la web está pensada para ser explorada de forma rápida. He dividido el contenido en tres ejes principales:

#### A. El Eje de Identidad (index.html)
Es el escaparate del club. Lo más importante aquí es la flexibilidad. Implementé un motor de pestañas interactivo porque me parece una forma mucho más limpia de mostrar mucha información en poco espacio.
- **Historia y Misión**: En la pestaña de inicio, explico de dónde venimos. He puesto un botón de bienvenida que lanza un saludo interactivo; me parece un detalle humano para romper el hielo con el usuario nada más entrar.
- **La Galería de Entrenamiento**: En lugar de usar los típicos deslizadores (carruceles) que a veces fallan o son pesados de cargar, decidí mostrar las fotos de las instalaciones en una sola columna vertical. Esto permite que el usuario vea la calidad de los sacos, el ring y el área de pesas de forma natural mientras hace scroll, asegurándome de que nada del equipo pase desapercibido.

#### B. El Eje Técnico y de Servicios (servicios.html)
Aquí es donde el usuario decide qué quiere entrenar. La estructura es muy limpia:
- **Catálogo de Clases**: Las tarjetas de las clases (Boxeo Fitness, Competición, etc.) son el núcleo dinámico de la web. He diseñado un sistema donde el formato es siempre perfecto y uniforme, dando una imagen de orden absoluto.
- **Horarios Semanales**: He usado una tabla clásica, muy contrastada, donde los horarios de Fitness y competición están bien diferenciados. Es fundamental que un alumno nuevo sepa exactamente a qué hora tiene que venir sin perderse en menús complicados.
- **Staff de Entrenadores**: Para mí era vital que la web tuviera "caras". Presentar a Jose, Rafa y Ramon con avatares circulares y vídeos técnicos en bucle debajo de sus nombres añade una capa de veracidad. El usuario ya sabe qué técnica tienen sus profes antes de pisar el gimnasio.

#### C. El Eje de Captación (contacto.html)
Un formulario directo. No he querido pedir mil datos; solo lo esencial para que el club pueda contactar con el interesado. El mensaje de confirmación aparece en pantalla de forma dinámica para que el usuario sepa que todo ha ido bien sin que la página se reinicie.

---

## 2. LENGUAJES Y TECNOLOGÍAS UTILIZADOS

En este proyecto he querido ceñirme a las bases del desarrollo web profesional, huyendo de herramientas automáticas y escribiendo cada línea de código de forma manual.

### 2.1. HTML5 (Maquetación y Semántica)
He aplicado un marcado HTML5 estricto. Me parece fundamental usar etiquetas semánticas para que la estructura sea lógica: cabeceras para los logos, secciones para el contenido principal y pies de página para los créditos. Esto hace que la web sea mucho más amigable para los lectores de pantalla y para los motores de búsqueda, algo que a veces se olvida en proyectos de clase pero que en el mundo real es obligatorio.

### 2.2. CSS3 (Estilos y Diseño Responsive)
Para los estilos, he trabajado con un archivo centralizado donde controlo todo el aspecto visual. He usado variables para los colores principales para asegurar que el rojo y el negro sean siempre los mismos en todas las páginas.
- **Layouts con Flexbox**: Ha sido mi herramienta principal para alinear los elementos. Me permite que la web se adapte sola: si añado un enlace más al menú, Flexbox se encarga de que todo siga centrado sin que yo tenga que recalcular los píxeles.
- **CSS Grid**: Lo he reservado para las rejillas más complejas, como la lista de servicios. Es una forma muy potente de asegurar que las tarjetas de las clases se vean bien tanto en pantallas de 27 pulgadas como en un móvil pequeño.

### 2.3. JavaScript y JSON (Lógica y Datos)
Aquí es donde la web deja de ser un cartel pegado a una pared y se convierte en una aplicación.
- **Separación de datos (JSON)**: He guardado la información técnica de las clases en un archivo separado. Para mí, separar el contenido (qué se enseña) del código (cómo se ve) es clave para cualquier proyecto que quiera durar en el tiempo.
- **Interactividad**: He programado las funciones que controlan el cambio de pestañas y la validación del formulario. El objetivo era que la web reaccionara al usuario de forma instantánea.
- **Consumo Asíncrono**: Uso técnicas de JavaScript moderno para cargar los datos del gimnasio sin que el usuario note interrupciones, logrando una experiencia mucho más profesional.

---

## 3. RETOS ENFRENTADOS Y SOLUCIONES APLICADAS

El desarrollo no ha estado exento de problemas, pero cada reto me ha servido para aprender a depurar y mejorar el código.

### 3.1. Navegación Fluida sin Recargas
Uno de los mayores retos fue hacer que la navegación por pestañas en la página principal fuera "de hierro". Al principio, al cambiar de sección, el cambio podía ser brusco o el usuario podía perder el contexto de dónde estaba.
- **Solución**: Diseñé un sistema lógico que primero "limpia" la interfaz y luego activa la nueva sección. Trabajé mucho los estados visuales de los botones para que el usuario siempre sepa qué pestaña tiene abierta mediante el color rojo. Fue un ejercicio de lógica y de atención al detalle en el DOM.

### 3.2. Gestión Dinámica de la Información
No quería tener que editar el HTML cada vez que el gimnasio cambiara una clase. El reto era traer los datos de fuera y que el diseño no se rompiera si el texto era más largo de lo previsto.
- **Solución**: Creé un motor de carga que construye las tarjetas de servicio sobre la marcha. Me obligó a trabajar con lógica de bucles y a diseñar el CSS de forma que las cajas se expandan o contraigan solas, manteniendo siempre la alineación independientemente del texto que llegue desde el archivo de datos.

### 3.3. Rendimiento Multimedia
Meter tres vídeos en una web puede matarla si no se tiene cuidado. El reto era que los vídeos de los entrenadores se vieran bien, en bucle y que no hicieran que la página tardara siglos en cargar.
- **Solución**: Opté por fragmentos de vídeo muy optimizados, quitándoles el audio por completo a nivel de fichero para que pesaran menos. Además, configuré la carga para que los vídeos trabajen de forma silenciosa, evitando que el navegador los bloquee por política de autoplay, logrando un fondo dinámico muy potente.

### 3.4. El Desafío de la Adaptabilidad (Mobile First)
El boxeo se consume mucho en móvil (buscando el gimnasio mientras vas por la calle). El reto era que la galería de fotos gigante se viera bien en pantallas verticales.
- **Solución**: Ajusté las proporciones de las imágenes para que siempre ocuparan el ancho total de la pantalla móvil, evitando que se vieran pequeñas o con márgenes feos. Al forzar el diseño de "una sola columna" para la galería, logré que la experiencia de usuario sea idéntica a la que tendrían mirando una red social, lo que hace que la navegación sea mucho más intuitiva.

---

## 4. METODOLOGÍA Y MEJORAS FUTURAS

Para este proyecto he seguido un flujo de trabajo iterativo. Primero monté la estructura básica (el "esqueleto" HTML), luego le di vida con el CSS y finalmente añadí la inteligencia con el JavaScript. Este enfoque me ha permitido detectar errores de diseño antes de empezar a programar las funciones más complejas.

En el futuro, la arquitectura del sitio me permitiría escalar el proyecto fácilmente. Algunas ideas en las que he pensado durante el desarrollo han sido:
- Integrar un mapa real de Google para la ubicación exacta.
- Crear un área de socios donde puedan registrar sus propios entrenamientos.
- Ampliar el catálogo de servicios con un sistema de reserva directa desde la web.

---

## CONCLUSIÓN PERSONAL

Desarrollar Manzano Boxing ha sido una experiencia muy satisfactoria. Me ha servido para darme cuenta de que en el desarrollo web no basta con que el código funcione; hay que cuidar la experiencia del usuario de principio a fin. He aprendido a gestionar la complejidad de los datos dinámicos y a entender que el diseño responsivo no es una opción, sino el punto de partida.

Me quedo con la satisfacción de haber creado una herramienta que realmente podría servir a un gimnasio de barrio para dar el salto profesional a internet, manteniendo un código limpio, manual y fácil de entender por cualquier otro desarrollador que trabaje en él en el futuro.

---
**Luis - Alumno de 1º DAW**  
*Manzano Boxing Club: Disciplina en cada píxel*
********************************************************************************
