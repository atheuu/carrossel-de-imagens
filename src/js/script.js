// Função que cria e anima uma "gota" no plano de fundo
function chuvaDeCoracoes() {
    // Seleciona o contêiner do corpo da página
    let body = document.body;

    // Cria um novo elemento div para representar a "gota"
    let coracao = document.createElement('div');
    coracao.classList.add('gota'); // Adiciona a classe 'gota' para estilização
    body.appendChild(coracao); // Adiciona o elemento ao corpo

    // Calcula uma posição aleatória para a "gota" ao longo da largura da tela
    let posicaoHorizontal = Math.floor(Math.random() * window.innerWidth);

    // Calcula uma duração aleatória para a animação da "gota"
    let duracaoAnimacao = Math.random() * 0.5;

    // Define a posição horizontal e a duração da animação
    coracao.style.left = posicaoHorizontal + 'px';
    coracao.style.animationDuration = 5 + duracaoAnimacao + 's'; // Aumenta a duração, deixando mais lento

    // Remove a "gota" após 7 segundos para evitar sobrecarga de elementos
    setTimeout(function () {
        body.removeChild(coracao);
    }, 7000);
    // Removendo elementos antigos da memória
    setTimeout(() => coracao.remove(), 7000);
}

// Chama a função chuvaDeCoracoes a cada 400 milissegundos
setInterval(chuvaDeCoracoes, 400); // Reduz o número de corações ao aumentar o intervalo





// Variáveis para o controle das imagens do carrossel
let indiceImagemAtual = 0;
const imagensCarrossel = document.querySelectorAll('.carrossel img');
const totalImagens = imagensCarrossel.length;

// Função para mostrar a próxima imagem do carrossel
function mostrarProximaImagem() {
    imagensCarrossel[indiceImagemAtual].classList.remove('ativo'); // Remove a classe 'ativo' da imagem atual
    indiceImagemAtual = (indiceImagemAtual + 1) % totalImagens; // Atualiza o índice da imagem
    imagensCarrossel[indiceImagemAtual].classList.add('ativo'); // Adiciona a classe 'ativo' à próxima imagem
}

// Troca a imagem a cada 3 segundos
setInterval(mostrarProximaImagem, 3000);





// Função para atualizar a diferença de tempo entre a data de inicio e a data atual
function atualizarTempo() {
    // Data inicial
    const dataInicial = moment("2023-10-14T16:00:00");

    // Data atual (momento presente)
    const dataAtual = moment();

    // Calcula a diferença entre a data atual e a data fixa
    const diferenca = moment.duration(dataAtual.diff(dataInicial));

    // Extrai anos, meses, dias, horas, minutos e segundos da diferença
    const anos = diferenca.years();
    const meses = diferenca.months();
    const dias = diferenca.days();
    const horas = diferenca.hours();
    const minutos = diferenca.minutes();
    const segundos = diferenca.seconds();

    // Atualiza o conteúdo HTML com os valores calculados
    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Chama a função atualizarTempo a cada segundo
setInterval(atualizarTempo, 1000);

// Chama a função uma vez para inicializar os valores na tela
atualizarTempo();