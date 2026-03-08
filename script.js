// Imprimir archivo específico solicitado
const btnImprimir = document.querySelector('#btn-imprimir button');

btnImprimir.addEventListener('click', () => {
    // Nombre del archivo actualizado a Curriculum.pdf
    window.open('Curriculum.pdf', '_blank');
});

// Función para expandir cajas y animar el botón interno
function toggleCaja(id) {
    const caja = document.getElementById(id);
    const boton = caja.querySelector('.sixth-container button');
    
    caja.classList.toggle('expandida');
    
    if (caja.classList.contains('expandida')) {
        boton.textContent = 'Ver menos';
    } else {
        boton.textContent = 'Más información';
    }
}