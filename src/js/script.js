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