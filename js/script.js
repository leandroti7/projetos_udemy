var timerId = null; //Variavel que armazena a função da timerout

function escolheNivel(){
	var nivel = document.getElementById('nivel').value; // recebendo o valor do elemento nivel, pelo id do proprio elemento id="nivel".


	//passando a referencia da pagina do jogo com o location.href, e atribuindo com o "?" e o nivel apontando o nivel correto do jogo
	window.location.href = 'jogo.html?' + nivel; // Função para escolher o nivel do Jogo
}

function iniciaJogo(){

	var url = window.location.search; // variavel que recebe a url da pagina, com o atributo search para pegar somente o que está depois do ?
	var nivel_jogo = url.replace("?", ""); // variavel recebe conteudo da variavel url e com o atributo replace encontra o ? e substitiu por "";
	var tempo_seg = 0;

	if(nivel_jogo == 1 ){
		//Facil 120s
		tempo_seg = 120;
	}

	if(nivel_jogo == 2 ){
		// Normal 60s	
		tempo_seg = 60;
	}

	if(nivel_jogo == 3 ){
		// Dificil 30s
		tempo_seg = 30;
	}


	// Definindo o tempo do jogo acessando o elemento passado pelo id e atribuindo o valor a ser exibido com o innerHTML com o valor da variavel tempo_seg;
	document.getElementById('cronometro').innerHTML = tempo_seg;

	//Quantidade de baloes
	var qtd_baloes = 20;

	cria_baloes(qtd_baloes);

	// imprimir qtad de balões
	document.getElementById('qtd_b').innerHTML = qtd_baloes;
	
	// imprimir qtad de balões
	document.getElementById('qtd_be').innerHTML = 0;

	countTempo(tempo_seg + 1); // Função geral que inicia o jogo e suas ações durante cada partida
}

function countTempo(segundos){

	segundos = segundos -1;

	if(segundos == -1){
		clearTimeout(timerId); // Finaliza a execução da função setTimerout
		game_over();
		return false;
	}


	document.getElementById('cronometro').innerHTML = segundos; 

	timerId = setTimeout("countTempo("+segundos+")",1000); // A cada 1000 segundos  chama a função countTempo com o parametro de segundos // Função que incrementa o tempo de cada nivel no jogo
}

function game_over(){
	alert('Você não conseguiu estourar todos os balões a tempo');
}

function cria_baloes(qtd_baloes){
	for(var i = 1; i  <= qtd_baloes; i++){
		var balao = document.createElement("img");
		balao.src ="imagens/balao_azul_pequeno.png";
		balao.style.margin = '10px';
		balao.onclick = function(){estourar(this);};

		document.getElementById('cenario').appendChild(balao);
	} // Função que cria os balões a ser estourado no jogo
}

function estourar(){
	alert('Balão estourado');
}