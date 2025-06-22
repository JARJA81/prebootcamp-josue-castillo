const nombre = document.getElementById('nombre');
const boton = document.getElementById('boton');
const mensaje = document.getElementById('contenedor');

boton.onclick = () => {
    mensaje.textContent = "buenas estimado o estimada " + nombre.value
}