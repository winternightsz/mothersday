const mensagem = document.getElementById("mensagem");
const textoMensagem = document.getElementById("texto-mensagem");
const botaoIniciar = document.getElementById("botao-iniciar");
const animacao = document.getElementById("animacao");

// Texto da mensagem que será animada
const texto = "clique no botãozinho";

// Velocidade da animação (em milissegundos)
const velocidadeAnimacao = 100;
const velocidadeimagem = 20 ;

// Função para animar o texto da mensagem
function animarTexto() {
	let i = 0;
	const intervalo = setInterval(() => {
		textoMensagem.textContent += texto[i];
		i++;
		if (i > texto.length - 1) {
			clearInterval(intervalo);
			botaoIniciar.classList.remove("escondido");
		}
	}, velocidadeAnimacao);
}

// Adicionar evento de clique ao botão "Iniciar"
botaoIniciar.addEventListener("click", () => {
	mensagem.classList.add("escondido");
	animacao.classList.remove("escondido");
    animarImagem();
});

// Função para animar a imagem
function animarImagem() {
	let escala = 1.0;
	const intervalo = setInterval(() => {
		escala += 0.1;
		animacao.style.transform = `scale(${escala})`;
		if (escala >= 2.0) {
			clearInterval(intervalo);
		}
	}, velocidadeimagem);

}

// Chamar as funções de animação
animarTexto();

