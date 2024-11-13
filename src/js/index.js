function calcularROSA() {
    let puntos = 0;
    const form = document.getElementById('rosaForm')
    // Tiempo de uso diario
    const usoDiario = document.querySelector('input[name="tiempoUso"]:checked').value;
    if (usoDiario === 'alto') puntos += 2;

    // Altura del asiento
    const alturaSilla = document.querySelector('input[name="alturaSilla"]:checked').value;
    if (alturaSilla !== 'neutra') puntos += 1;

    // Criterios adicionales para altura de la silla
    if (document.querySelector('input[name="alturaSillaAdicional"][value="espacio"]').checked) puntos += 1;
    if (document.querySelector('input[name="alturaSillaAdicional"][value="noAjustable"]').checked) puntos += 1;

    // Profundidad del asiento
    const profundidadSilla = document.querySelector('input[name="profundidadSilla"]:checked').value;
    if (profundidadSilla !== 'neutra') puntos += 1;

    // Criterios adicionales para profundidad de la silla
    if (document.querySelector('input[name="profundidadSillaAdicional"][value="noAjustable"]').checked) puntos += 1;

    // Reposabrazos
    const reposabrazos = document.querySelector('input[name="reposabrazos"]:checked').value;
    if (reposabrazos !== 'neutra') puntos += 1;

    // Criterios adicionales para reposabrazos
    if (document.querySelector('input[name="reposabrazosAdicional"][value="bordes"]').checked) puntos += 1;
    if (document.querySelector('input[name="reposabrazosAdicional"][value="ancho"]').checked) puntos += 1;
    if (document.querySelector('input[name="reposabrazosAdicional"][value="noAjustable"]').checked) puntos += 1;

    // Respaldo
    const respaldo = document.querySelector('input[name="respaldo"]:checked').value;
    if (respaldo !== 'neutra') puntos += 1;

    // Criterios adicionales para respaldo
    if (document.querySelector('input[name="respaldoAdicional"][value="alto"]').checked) puntos += 1;
    if (document.querySelector('input[name="respaldoAdicional"][value="noAjustable"]').checked) puntos += 1;

    // Teléfono
    const telefono = document.querySelector('input[name="telefono"]:checked').value;
    if (telefono !== 'neutra') puntos += 1;

    // Criterios adicionales para teléfono
    if (document.querySelector('input[name="telefonoAdicional"][value="hombro"]').checked) puntos += 1;
    if (document.querySelector('input[name="telefonoAdicional"][value="sinManosLibres"]').checked) puntos += 1;

    // Altura de los ojos
    const alturaOjos = document.querySelector('input[name="alturaOjos"]:checked').value;
    if (alturaOjos !== 'neutra') puntos += 1;

    // Criterios adicionales para altura de los ojos
    if (document.querySelector('input[name="alturaOjosAdicional"][value="distancia"]').checked) puntos += 1;
    if (document.querySelector('input[name="alturaOjosAdicional"][value="giro"]').checked) puntos += 1;
    if (document.querySelector('input[name="alturaOjosAdicional"][value="portadocumentos"]').checked) puntos += 1;
    if (document.querySelector('input[name="alturaOjosAdicional"][value="reflejos"]').checked) puntos += 1;

    // Ratón
    const raton = document.querySelector('input[name="raton"]:checked').value;
    if (raton !== 'neutra') puntos += 1;

    // Criterios adicionales para ratón
    if (document.querySelector('input[name="ratonAdicional"][value="pequeno"]').checked) puntos += 1;
    if (document.querySelector('input[name="ratonAdicional"][value="diferenteAltura"]').checked) puntos += 1;
    if (document.querySelector('input[name="ratonAdicional"][value="reposamanos"]').checked) puntos += 1;

    // Teclado
    const teclado = document.querySelector('input[name="teclado"]:checked').value;
    if (teclado !== 'neutra') puntos += 1;

    // Criterios adicionales para teclado
    if (document.querySelector('input[name="tecladoAdicional"][value="desviacionEscribir"]').checked) puntos += 1;
    if (document.querySelector('input[name="tecladoAdicional"][value="elevado"]').checked) puntos += 1;
    if (document.querySelector('input[name="tecladoAdicional"][value="soporteNoAjustable"]').checked) puntos += 1;

    // Resultados
    const resultadoDiv = document.getElementById('result');
    resultadoDiv.innerHTML = `<h2 class="bg-primary text-light">Resultado de la Evaluación</h2><h4>Puntuación total: ${puntos}</h4>`;
    form.classList.add('d-none')
    if (puntos < 5) {
        resultadoDiv.innerHTML += "<h4 class='text-success fs-4'>La ergonomía de su espacio de trabajo es adecuada.</h4>";
    } else if (puntos < 10) {
        resultadoDiv.innerHTML += "<h4 class='text-warning fs-4'>Hay algunas áreas que necesitan mejoras ergonómicas.</h4>";
    } else {
        resultadoDiv.innerHTML += "<h4 class='text-danger fs-4'>Se requieren cambios significativos para mejorar la ergonomía.</h4>";
    }
    document.getElementById('rosaForm').addEventListener('submit', function(event) {
        event.preventDefault();
        calcularROSA();
    });
    document.getElementById('reiniciar').classList.remove('d-none')

    
}
document.getElementById('rosaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularROSA();
});
