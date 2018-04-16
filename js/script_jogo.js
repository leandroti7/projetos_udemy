var rodada = 1;
//var matriz_jogo = array(3);

$(function(){
	
	$('#ini').click(function(){
		var nick1 = prompt("Digite seu apelido para jogar como 1° player");
		if(nick1 == ''){
			alert('Favor digitar o apelido do jogador 1°');
			return false;
		}

		var nick2 = prompt("Digite seu apelido para jogar como 2° player");
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
	}
});

