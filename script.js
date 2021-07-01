// função que fecha todos os detalhes
function cerraDetalles() {
    let detalles = document.getElementsByClassName('detalles');
    for(i = 0; i < detalles.length; i++) {
        detalles[i].style.display = 'none';
    }
}

// função que abre um detalhe específico ao se clicar no título de uma obra, fechando os outros abertos
function abrePersistencia() {
    cerraDetalles();
    persistencia = document.getElementById('persistencia');
    detalles = persistencia.querySelector(".detalles");
    detalles.style.display = 'block';    
}

function abreMasturbador() {
    cerraDetalles();
    persistencia = document.getElementById('masturbador');
    detalles = masturbador.querySelector(".detalles");
    detalles.style.display = 'block';    
}

function abreDream() {
    cerraDetalles();
    dream = document.getElementById('dream');
    detalles = dream.querySelector(".detalles");
    detalles.style.display = 'block';    
}

function abreToreador() {
    cerraDetalles();
    toreador = document.getElementById('toreador');
    detalles = toreador.querySelector(".detalles");
    detalles.style.display = 'block';    
}

// coloca um listener de click em cada uma das obras
persistencia = document.getElementById('persistencia');
persistencia.onclick = abrePersistencia;
masturbador = document.getElementById('masturbador');
masturbador.onclick = abreMasturbador;
dream = document.getElementById('dream');
dream.onclick = abreDream;
toreador = document.getElementById('toreador');
toreador.onclick = abreToreador;

// acrescenta um listener ao evento abrir página
window.onload = cerraDetalles;