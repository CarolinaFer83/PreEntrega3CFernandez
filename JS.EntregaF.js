// Definir los costos de los trámites
const costos = {
    comun: 100,
    urgente: 200,
    online: 50
};

// Carrito de trámites
let carrito = [];

// Función para mostrar el formulario de turno
function mostrarFormulario() {
    ocultarSecciones();
    document.getElementById('formulario-turno').style.display = 'block';
}

// Función para mostrar el carrito
function mostrarCarrito() {
    ocultarSecciones();
    document.getElementById('carrito').style.display = 'block';
    actualizarCarrito();
}

// Función para mostrar seguimiento de expediente
function mostrarSeguimientoExpediente() {
    ocultarSecciones();
    document.getElementById('seguimiento-expediente').style.display = 'block';
}

// Función para mostrar el formulario de trámite en línea
function mostrarTramiteOnline() {
    ocultarSecciones();
    document.getElementById('tramite-online').style.display = 'block';
}

// Función para ocultar todas las secciones
function ocultarSecciones() {
    document.getElementById('formulario-turno').style.display = 'none';
    document.getElementById('carrito').style.display = 'none';
    document.getElementById('seguimiento-expediente').style.display = 'none';
    document.getElementById('tramite-online').style.display = 'none';
}

// Función para agregar un trámite al carrito
function agregarAlCarrito() {
    const nombre = document.getElementById('nombre').value;
    const tipoTramite = document.getElementById('tramite').value;

    if (!nombre) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (!costos[tipoTramite]) {
        alert('Tipo de trámite no válido.');
        return;
    }

    const tramite = {
        nombre,
        tipoTramite,
        costo: costos[tipoTramite]
    };

    carrito.push(tramite);
    document.getElementById('mensaje').innerText = `Trámite agregado al carrito. Total de trámites en el carrito: ${carrito.length}`;
}

// Función para actualizar el carrito en el DOM
function actualizarCarrito() {
    const lista = document.getElementById('carrito-lista');
    const totalElement = document.getElementById('carrito-total');
    lista.innerHTML = '';
    let total = 0;

    carrito.forEach((tramite, index) => {
        const li = document.createElement('li');
        li.textContent = `${tramite.nombre} - ${tramite.tipoTramite} - $${tramite.costo}`;
        lista.appendChild(li);
        total += tramite.costo;
    });

    totalElement.textContent = total;
}

// Función para realizar el pago
function realizarPago() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    let numeroOrden = Math.floor(Math.random() * 1000000);
    alert(`Pago realizado. Número de Orden: ${numeroOrden}`);

    carrito = [];
    actualizarCarrito();
}

// Función para consultar el estado de un expediente
function consultarExpediente() {
    const numeroExpediente = document.getElementById('numero-expediente').value;
    if (!numeroExpediente) {
        document.getElementById('resultado-expediente').innerText = "Por favor, ingrese el número de expediente.";
        return;
    }

    // Simulación de estado de expediente (esto puede reemplazarse con una consulta a un servidor real)
    const estados = ["En Proceso", "Aprobado", "Rechazado"];
    const estadoAleatorio = estados[Math.floor(Math.random() * estados.length)];
    document.getElementById('resultado-expediente').innerText = `Estado del expediente ${numeroExpediente}: ${estadoAleatorio}`;
}

// Función para iniciar un trámite en línea
function iniciarTramiteOnline() {
    const documento = document.getElementById('documento').value;
    const nombre = document.getElementById('nombre-tramite').value;

    if (!documento || !nombre) {
        document.getElementById('mensaje-tramite-online').innerText = "Por favor, ingrese su número de documento y nombre.";
        return;
    }

    document.getElementById('mensaje-tramite-online').innerText = `Trámite iniciado para ${nombre} (Documento: ${documento}).`;
}
