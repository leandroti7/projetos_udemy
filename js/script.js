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
	var qtd_baloes = 0; //Quantidade de baloes

	if(nivel_jogo == 1 ){
		//Facil 120s
		tempo_seg = 90;
		var qtd_baloes = 52;
	}

	if(nivel_jogo == 2 ){
		// Normal 60s	
		tempo_seg = 75;
		var qtd_baloes = 78;
	}

	if(nivel_jogo == 3 ){
		// Dificil 30s
		tempo_seg = 50;
		var qtd_baloes = 104;
	}

	if(nivel_jogo == 4 ){
		// Dificil 30s
		tempo_seg = 45;
		var qtd_baloes = 120;
	}


	// Definindo o tempo do jogo acessando o elemento passado pelo id e atribuindo o valor a ser exibido com o innerHTML com o valor da variavel tempo_seg;
	document.getElementById('cronometro').innerHTML = tempo_seg;

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
	for(var i = 1; i  <= qtd_baloes; i++){ // Laço de repetição para preencher o espaço do jogo com os balões
		var balao = document.createElement("img"); // variavel balão que recebe os elemntos img que serão os balões do jogo
		balao.src ="imagens/balao_azul_pequeno.png"; // Inserindo uma imagem de fundo nos balões do jogo
		balao.style.margin = '10px 5px'; // Aplicando um margin nos balões
		balao.id = 'b'+i; // definindo um id para cad um balão criado no jogo 
		balao.onclick = function(){estourar(this);};

		document.getElementById('cenario').appendChild(balao); // 
	} // Função que cria os balões a ser estourado no jogo
}

function estourar(e){

	var id_balao = e.id; // Variavel que recebe o id do elemento que está sendo estourado

	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';
	//alert(id_balao);

	pontos(-1);
}


function pontos(acao){

	var baloes_inteiros = document.getElementById('qtd_b').innerHTML;
	var baloes_estourados = document.getElementById('qtd_be').innerHTML;

	baloes_inteiros = parseInt(baloes_inteiros);
	baloes_estourados = parseInt(baloes_estourados);

	baloes_inteiros = baloes_inteiros + acao;
	baloes_estourados = baloes_estourados - acao;

	document.getElementById('qtd_be').innerHTML = baloes_estourados;
	document.getElementById('qtd_b').innerHTML = baloes_inteiros;

	situacao_jogo(baloes_inteiros);

}

function situacao_jogo(bal_int){
	if(bal_int == 0){
		alert('Parabéns você conseguiu estourar todos os balões a tempo');
		para_jogo();
	}
}

function para_jogo(){

	clearTimeout(timerId);

}

function reinicia_jogo(){
	window.location = 'index.html';
}