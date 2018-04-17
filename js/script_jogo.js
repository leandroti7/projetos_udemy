var rodada = 1;
var nick1,nick2 = '';
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(function(){
	
	$('#ini').click(function(){
		nick1 = prompt("Digite seu apelido para jogar como 1° player");
		if(nick1 == ''){
			alert('Favor digitar o apelido do jogador 1°');
			return false;
		}

		nick2 = prompt("Digite seu apelido para jogar como 2° player");
		if(nick2 == ''){
			alert('Favor digitar o apelido do jogador 2°');
			return false;
		}

		$('#pl1').html(nick1);
		$('#pl2').html(nick2);

		$('.palco_jogo').show() && $('.player').hide();
	});



	$('.area').click(function(){
		var id_area_click = this.id;
		$('#'+id_area_click).off();

		jogada(id_area_click);
		
	});

	function jogada(id){
		var icone = '';
		var ponto = 0;

		if((rodada % 2) == 1){
			ponto = -1;
			icone = '<i class="far fa-circle o"></i>';
		}else{
			ponto = 1;
			icone = '<i class="fas fa-times x"></i>';
		}
		rodada++;

		$('#'+id).append(icone);

		var linha_coluna = id.split('-');
		matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

		verifica_vitoria();

		
	}

	function verifica_vitoria(){

		//percorre horizontal
		var pontos =0;

		for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz_jogo['a'][i];
		}
		 vencedor(pontos);

		 pontos =0;
		 for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz_jogo['b'][i];
		}
		 vencedor(pontos);
	
		 pontos =0;
		 for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz_jogo['c'][i];
		}
		 vencedor(pontos);

		 //percorre vertical
		 for(var l =1; l <= 3; l++){
		 	pontos = 0;
		 	pontos += matriz_jogo['a'][l];
		 	pontos += matriz_jogo['b'][l];
		 	pontos += matriz_jogo['c'][l];

		 	vencedor(pontos);
		 }


		 //percorre diagonal
		 pontos =0;
		 pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
		 vencedor(pontos);

		 pontos =0;
		 pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
		 vencedor(pontos);


	}

	function vencedor(pontos) {

		if(pontos == -3 ){
			alert(nick1 + '  é o gandre Vencedor !!!!!  Parabéns');
			$('.area').off();
		} else if(pontos == 3){
			alert( nick2 + '  é o gandre Vencedor !!!!!  Parabéns Você foi o melhor');
			$('.area').off();
		}
	}
});

