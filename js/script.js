// --- BLOQUE DE INICIALIZACIÓN ---
// Esperamos a que el DOM (la estructura HTML) esté cargado antes de ejecutar nada
document.addEventListener('DOMContentLoaded', () => {

    // Si estamos en la página de servicios, buscamos el contenedor y cargamos los datos
    const listaServicios = document.getElementById('lista-servicios');
    if (listaServicios) {
        cargarServicios(); // Llama a la función que consume el JSON
    }

    // --- BLOQUE DE VALIDACIÓN DE FORMULARIO ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Evita que la página se recargue al enviar

            // Capturamos los valores de los inputs
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validación básica: comprobamos que no estén vacíos
            if (nombre && email && mensaje) {
                document.getElementById('success-msg').style.display = 'block'; // Mostramos mensaje de éxito
                form.reset(); // Limpiamos el formulario
            } else {
                alert("Por favor, rellena todos los campos.");
            }
        });
    }
});

// --- FUNCIONES INTERACTIVAS ---

// Función simple de saludo para la consola
function saludo_al_pulsar() {
    alert("Hola clase! Mirad la consola con F12");
    console.log("--------------------------------");
    console.log(" SALUDO :");
    console.log("Bienvenidos al entrenamiento");
    console.log("--------------------------------");
}

// Función para el sistema de pestañas (Tabs)
function showTab(evt, tabId) {
    // 1. Ocultamos todos los contenidos de las pestañas
    const contents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // 2. Quitamos el estado "activo" de todos los botones
    const buttons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // 3. Mostramos solo la pestaña elegida y activamos su botón
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// --- BLOQUE DE CARGA DINÁMICA (JSON) ---
function cargarServicios() {
    const contenedor = document.getElementById('lista-servicios');

    // Consumimos el archivo de datos local. 
    // Añadimos '?v=' + timestamp para evitar que el navegador use una versión antigua (caché)
    fetch('data/servicios.json?v=' + new Date().getTime())
        .then(res => res.json()) // Convertimos la respuesta a formato JSON (objeto JS)
        .then(datos => {
            contenedor.innerHTML = ''; // Limpiamos el texto de "Cargando..."

            // Recorremos cada objeto del array JSON
            datos.forEach(servicio => {
                // Creamos un nuevo elemento div para la tarjeta (card)
                const card = document.createElement('div');
                card.classList.add('card');

                // Le insertamos el contenido usando Template Literals (las comillas ` `)
                card.innerHTML = `
                    <div class="card-info">
                        <h3>${servicio.titulo}</h3>
                        <p>${servicio.descripcion}</p>
                    </div>
                `;
                // Añadimos la tarjeta al DOM
                contenedor.appendChild(card);
            });
        })
        .catch(err => {
            console.error('Error cargando servicios:', err);
            contenedor.innerHTML = '<p>Error al cargar las clases.</p>';
        });
}
