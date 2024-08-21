function rain() {
    let carrossel = document.querySelector('.carrossel-wrapper');
    let e = document.createElement('div');
    e.classList.add('drop');
    carrossel.appendChild(e);

    let left = Math.floor(Math.random() * carrossel.offsetWidth); // Ajuste para largura do carrossel
    let duracao = Math.random() * 0.5;

    e.style.left = left + 'px';
    e.style.animationDuration = 4 + duracao + 's'; // Aumenta a duração mínima para 4 segundos

    setTimeout(function () {
        carrossel.removeChild(e);
    }, 3000);
}

setInterval(rain, 350); // Reduz o número de corações ao aumentar o intervalo

let indiceAtual = 0;
const imagens = document.querySelectorAll('.carrossel img');
const totalImagens = imagens.length;

function mostrarProximaImagem() {
    imagens[indiceAtual].classList.remove('active');
    indiceAtual = (indiceAtual + 1) % totalImagens;
    imagens[indiceAtual].classList.add('active');
}

setInterval(mostrarProximaImagem, 3000);

function atualizarTempo() {
    // Data fixa
    const dataFixa = moment("2023-10-14T16:00:00");

    // Data atual
    const dataAtual = moment();

    // Calcula a diferença
    const diferenca = moment.duration(dataAtual.diff(dataFixa));

    // Extrai anos, meses, dias, horas, minutos e segundos
    const anos = diferenca.years();
    const meses = diferenca.months();
    const dias = diferenca.days();
    const horas = diferenca.hours();
    const minutos = diferenca.minutes();
    const segundos = diferenca.seconds();

    // Atualiza o HTML
    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Atualiza a cada segundo
setInterval(atualizarTempo, 1000);

// Chama a função uma vez para inicializar
atualizarTempo();