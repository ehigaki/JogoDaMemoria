/*
//Coloque aqui oq você fez!!!!!!
//
//Lista!
//Opcoes -> 
//Jogo1 ->
//Jogo2 ->
//Jogo3 ->
//desvirar ->
//pontuacao ->
//mistura -> OK
//historico -> OK
//reinicia -> OK
//esconde ->
//termina o jogo ->
*/
var jogador1 = false;
var jogador2 = true;
var QtdPeca;
var ptJogador1 = 0;
var ptJogador2;
var jogo;
var click = 1;
var vez = 0;
var pontuacao;
var peca1;
var peca2;
var QtdJogador=0;
var mistura1 = new Array; // Vetores com valores embaralhados
var mistura2 = new Array;
var mistura3 = new Array;

var historico ='';
var partida =1;

function Opcoes(){
	QtdJogador = prompt(" 1 ou 2 jogadores? (escreva apenas 1 ou 2)");
	//var QtdJogador = prompt("<input type="radio" name="numJogador" value="um" />"); //<< errado <input type="radio"
	//falta verificacao de erros
	if(QtdJogador == 1){
	var name = prompt("Entre com o nome do jogador 1");
	if(name != null && name != "")
	{
		jogador1 = name;
		document.getElementById("jogador1").innerHTML = "Pontuacao do jogador " + jogador1 + ": ";
		QtdPeca = prompt("Qtd de pecas? 2x2(1) 4x4(2) ou 6x6(3)"); //errado <input type="radio"

	}
	}
	
	//2 jogadores
	if(QtdJogador == 2){
	var name = prompt("Entre com o nome do jogador 1"); 
	if(name != null && name != "")
	{
		jogador1 = name;
		document.getElementById("jogador1").innerHTML = "Pontuacao do jogador " + jogador1 + ": ";
	}
	var name = prompt("Entre com o nome do jogador 2");
	if(name != null && name != "")
	{
		jogador2 = name;
		document.getElementById("jogador2").innerHTML = "Pontuacao do jogador " + jogador2 + ": ";
		QtdPeca = prompt("Qtd de pecas? 2x2(1) 4x4(2) ou 6x6(3)"); //errado<input type="radio"
	}
	}
		if(QtdPeca == 1)
		{
			jogo = 1;
			jogo1();
		}
		if(QtdPeca == 2)
		{
			jogo = 2;
			jogo2();
		}
		if(QtdPeca == 3)
		{
			jogo = 3
			jogo3();
		}
}
function jogo1(){
        op1 = new Array();
        mistura();
        op1[mistura1[0]] = "<img src='imagens/peca1.png'>";
        op1[mistura1[1]] = "<img src='imagens/peca2.png'>";
        inv = new Array();
        inv[0] = "<img src='imagens/virado.png'>";
        document.getElementById("1x1").innerHTML = inv[0];
        document.getElementById("1x2").innerHTML = inv[0];
        document.getElementById("2x1").innerHTML = inv[0];
        document.getElementById("2x2").innerHTML = inv[0];
	}
function jogo2(){
    inv = new Array();
    inv[0] = "<img src='imagens/virado.png'>";
    op2 = new Array();
    op2[mistura2[0]] = "<img src='imagens/peca1.png'>";
    op2[mistura2[1]] = "<img src='imagens/peca2.png'>";
    op2[mistura2[2]] = "<img src='imagens/peca3.png'>";
    op2[mistura2[3]] = "<img src='imagens/peca4.png'>";
    op2[mistura2[4]] = "<img src='imagens/peca5.png'>";
    op2[mistura2[5]] = "<img src='imagens/peca6.png'>";
    op2[mistura2[6]] = "<img src='imagens/peca7.png'>";
    op2[mistura2[7]] = "<img src='imagens/peca8.png'>";
    document.getElementById("1x1").innerHTML = inv[0];
    document.getElementById("1x2").innerHTML = inv[0];
    document.getElementById("1x3").innerHTML = inv[0];
    document.getElementById("1x4").innerHTML = inv[0];
    document.getElementById("2x1").innerHTML = inv[0];
    document.getElementById("2x2").innerHTML = inv[0];
    document.getElementById("2x3").innerHTML = inv[0];
    document.getElementById("2x4").innerHTML = inv[0];
    document.getElementById("3x1").innerHTML = inv[0];
    document.getElementById("3x2").innerHTML = inv[0];
    document.getElementById("3x3").innerHTML = inv[0];
    document.getElementById("3x4").innerHTML = inv[0];
    document.getElementById("4x1").innerHTML = inv[0];
    document.getElementById("4x2").innerHTML = inv[0];
    document.getElementById("4x3").innerHTML = inv[0];
    document.getElementById("4x4").innerHTML = inv[0];
}
function jogo3(){
    inv = new Array();
    inv[0] = "<img src='imagens/virado.png'>";
    op3 = new Array();
    op3[mistura3[0]] = "<img src='imagens/peca1.png'>";
    op3[mistura3[1]] = "<img src='imagens/peca2.png'>";
    op3[mistura3[2]] = "<img src='imagens/peca3.png'>";
    op3[mistura3[3]] = "<img src='imagens/peca4.png'>";
    op3[mistura3[4]] = "<img src='imagens/peca5.png'>";
    op3[mistura3[5]] = "<img src='imagens/peca6.png'>";
    op3[mistura3[6]] = "<img src='imagens/peca7.png'>";
    op3[mistura3[7]] = "<img src='imagens/peca8.png'>";
    op3[mistura3[8]] = "<img src='imagens/peca9.png'>";
    op3[mistura3[9]] = "<img src='imagens/peca10.png'>";
    op3[mistura3[10]] = "<img src='imagens/peca11.png'>";
    op3[mistura3[11]] = "<img src='imagens/peca12.png'>";
    op3[mistura3[12]] = "<img src='imagens/peca13.png'>";
    op3[mistura3[13]] = "<img src='imagens/peca14.png'>";
    op3[mistura3[14]] = "<img src='imagens/peca15.png'>";
    op3[mistura3[15]] = "<img src='imagens/peca16.png'>";
    op3[mistura3[16]] = "<img src='imagens/peca17.png'>";
    op3[mistura3[17]] = "<img src='imagens/peca18.png'>";
    document.getElementById("1x1").innerHTML = inv[0];
    document.getElementById("1x2").innerHTML = inv[0];
    document.getElementById("1x3").innerHTML = inv[0];
    document.getElementById("1x4").innerHTML = inv[0];
	document.getElementById("1x5").innerHTML = inv[0];
	document.getElementById("1x6").innerHTML = inv[0];
    document.getElementById("2x1").innerHTML = inv[0];
    document.getElementById("2x2").innerHTML = inv[0];
    document.getElementById("2x3").innerHTML = inv[0];
    document.getElementById("2x4").innerHTML = inv[0];
	document.getElementById("2x5").innerHTML = inv[0];
	document.getElementById("2x6").innerHTML = inv[0];
    document.getElementById("3x1").innerHTML = inv[0];
    document.getElementById("3x2").innerHTML = inv[0];
    document.getElementById("3x3").innerHTML = inv[0];
    document.getElementById("3x4").innerHTML = inv[0];
	document.getElementById("3x5").innerHTML = inv[0];
	document.getElementById("3x6").innerHTML = inv[0];
    document.getElementById("4x1").innerHTML = inv[0];
    document.getElementById("4x2").innerHTML = inv[0];
    document.getElementById("4x3").innerHTML = inv[0];
    document.getElementById("4x4").innerHTML = inv[0];
	document.getElementById("4x5").innerHTML = inv[0];
	document.getElementById("4x6").innerHTML = inv[0];
	document.getElementById("5x1").innerHTML = inv[0];
	document.getElementById("5x2").innerHTML = inv[0];
	document.getElementById("5x3").innerHTML = inv[0];
	document.getElementById("5x4").innerHTML = inv[0];
	document.getElementById("5x5").innerHTML = inv[0];
	document.getElementById("5x6").innerHTML = inv[0];
	document.getElementById("6x1").innerHTML = inv[0];
	document.getElementById("6x2").innerHTML = inv[0];
	document.getElementById("6x3").innerHTML = inv[0];
	document.getElementById("6x4").innerHTML = inv[0];
	document.getElementById("6x5").innerHTML = inv[0];
	document.getElementById("6x6").innerHTML = inv[0];
}
function desvirar(id){
	if(jogo == 1){
    switch(id)
    {
        case "1x1": document.getElementById(id).innerHTML = op1[mistura1[0]];
            break;
        case "1x2": document.getElementById(id).innerHTML = op1[mistura1[1]];
            break;
        case "2x1": document.getElementById(id).innerHTML = op1[mistura1[1]];
            break;
        case "2x2": document.getElementById(id).innerHTML = op1[mistura1[0]];
            break;
    }
	}
	if(jogo == 2){
	switch (id)
	{
		case "1x1": document.getElementById(id).innerHTML = op2[mistura2[7]];
            break;
		case "1x2": document.getElementById(id).innerHTML = op2[mistura2[6]];
            break;
		case "1x3": document.getElementById(id).innerHTML = op2[mistura2[7]];
            break;
		case "1x4": document.getElementById(id).innerHTML = op2[mistura2[6]];
            break;
		case "2x1": document.getElementById(id).innerHTML = op2[mistura2[5]];
            break;
		case "2x2": document.getElementById(id).innerHTML = op2[mistura2[4]];
            break;
		case "2x3": document.getElementById(id).innerHTML = op2[mistura2[3]];
            break;
		case "2x4": document.getElementById(id).innerHTML = op2[mistura2[2]];
            break;
		case "3x1": document.getElementById(id).innerHTML = op2[mistura2[1]];
            break;
		case "3x2": document.getElementById(id).innerHTML = op2[mistura2[0]];
            break;
		case "3x3": document.getElementById(id).innerHTML = op2[mistura2[5]];
            break;
		case "3x4": document.getElementById(id).innerHTML = op2[mistura2[4]];
            break;
		case "4x1": document.getElementById(id).innerHTML = op2[mistura2[3]];
            break;
		case "4x2": document.getElementById(id).innerHTML = op2[mistura2[2]];
            break;
		case "4x3": document.getElementById(id).innerHTML = op2[mistura2[1]];
            break;
		case "4x4": document.getElementById(id).innerHTML = op2[mistura2[0]];
            break;
	}
	}
	if(jogo == 3)
	{
		switch (id)
	{
		case "1x1": document.getElementById(id).innerHTML = op3[mistura3[0]];
            break;
		case "1x2": document.getElementById(id).innerHTML = op3[mistura3[1]];
            break;
		case "1x3": document.getElementById(id).innerHTML = op3[mistura3[2]];
            break;
		case "1x4": document.getElementById(id).innerHTML = op3[mistura3[3]];
            break;
		case "1x5": document.getElementById(id).innerHTML = op3[mistura3[4]];
            break;
		case "1x6": document.getElementById(id).innerHTML = op3[mistura3[5]];
            break;
		case "2x1": document.getElementById(id).innerHTML = op3[mistura3[6]];
            break;
		case "2x2": document.getElementById(id).innerHTML = op3[mistura3[7]];
            break;
		case "2x3": document.getElementById(id).innerHTML = op3[mistura3[8]];
            break;
		case "2x4": document.getElementById(id).innerHTML = op3[mistura3[9]];
            break;
		case "2x5": document.getElementById(id).innerHTML = op3[mistura3[10]];
            break;
		case "2x6": document.getElementById(id).innerHTML = op3[mistura3[11]];
            break;
		case "3x1": document.getElementById(id).innerHTML = op3[mistura3[12]];
            break;
		case "3x2": document.getElementById(id).innerHTML = op3[mistura3[13]];
            break;
		case "3x3": document.getElementById(id).innerHTML = op3[mistura3[14]];
            break;
		case "3x4": document.getElementById(id).innerHTML = op3[mistura3[15]];
            break;
		case "3x5": document.getElementById(id).innerHTML = op3[mistura3[16]];
            break;
		case "3x6": document.getElementById(id).innerHTML = op3[mistura3[17]];
            break;
		case "4x1": document.getElementById(id).innerHTML = op3[mistura3[0]];
            break;
		case "4x2": document.getElementById(id).innerHTML = op3[mistura3[1]];
            break;
		case "4x3": document.getElementById(id).innerHTML = op3[mistura3[2]];
            break;
		case "4x4": document.getElementById(id).innerHTML = op3[mistura3[3]];
            break;
		case "4x5": document.getElementById(id).innerHTML = op3[mistura3[4]];
            break;
		case "4x6": document.getElementById(id).innerHTML = op3[mistura3[5]];
            break;
		case "5x1": document.getElementById(id).innerHTML = op3[mistura3[6]];
            break;
		case "5x2": document.getElementById(id).innerHTML = op3[mistura3[7]];
            break;
		case "5x3": document.getElementById(id).innerHTML = op3[mistura3[8]];
            break;
		case "5x4": document.getElementById(id).innerHTML = op3[mistura3[9]];
            break;
		case "5x5": document.getElementById(id).innerHTML = op3[mistura3[10]];
            break;
		case "5x6": document.getElementById(id).innerHTML = op3[mistura3[11]];
            break;
		case "6x1": document.getElementById(id).innerHTML = op3[mistura3[12]];
            break;
		case "6x2": document.getElementById(id).innerHTML = op3[mistura3[13]];
            break;
		case "6x3": document.getElementById(id).innerHTML = op3[mistura3[14]];
            break;
		case "6x4": document.getElementById(id).innerHTML = op3[mistura3[15]];
            break;
		case "6x5": document.getElementById(id).innerHTML = op3[mistura3[16]];
            break;
		case "6x6": document.getElementById(id).innerHTML = op3[mistura3[17]];
            break;
	}
	}
    if(vez < 2)
    {
        vez++;
    }
    if(vez == 1)
    {
        peca1 = id;
    }
    if(vez == 2)
    {
        peca2 = id;
        vez = 0;
        if(peca1 == peca2){
            alert("clicou na mesma peca");
            vez = 2;
        }
	else pontuacao();
    }
}

function pontuacao(){
    if(QtdJogador == 1){
        if(document.getElementById(peca1).innerHTML == document.getElementById(peca2).innerHTML && jogador1 == true)
        {
           ptJogador1++;
        }
        if(document.getElementById(peca1).innerHTML != document.getElementById(peca2).innerHTML){
        esconde();
        }		
        if(QtdJogador == 2){
        document.getElementById("jogador1").innerHTML ="Pontuacao do jogador 1: " + ptJogador1;
        document.getElementById("jogador1").innerHTML ="Pontuacao do jogador 1: " + ptJogador1;
        }else if(QtdJogador == 1)
        {
        document.getElementById("jogador1").innerHTML ="Pontuacao do jogador 1: " + ptJogador1;
        }
    }else if(QtdJogador == 2)
    {
        if(document.getElementById(peca1).innerHTML == document.getElementById(peca2).innerHTML && jogador1 == true)
        {
           ptJogador1++;
        }
        if(document.getElementById(peca1).innerHTML == document.getElementById(peca2).innerHTML && jogador2 == true)
        {
            ptJogador2++;
        }
        if(document.getElementById(peca1).innerHTML != document.getElementById(peca2).innerHTML){
        desvira();
        }
        if(QtdJogador == 2){
        document.getElementById("jogador1").innerHTML ="Pontuacao do jogador 1: " + ptJogador1;
        document.getElementById("jogador1").innerHTML ="Pontuacao do jogador 2: " + ptJogador2;
        }else if(QtdJogador == 1)
        {
        document.getElementById("jogador1").innerHTML ="Pontuacao do jogador 1: " + ptJogador1;
        }
    }
}

function mistura(){
    if(QtdPeca == 1){
      var maximo = 2;
      var i;
      for (i = 0; i < maximo; i++) {
        mistura1[i] = i;
      }

      var p, n, tmp;
      for (p = mistura1.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = mistura1[n];
        mistura1[n] = mistura1[p];
        mistura1[p] = tmp;
      }
    }

    if(QtdPeca == 2){
      var maximo = 8;
      var i;
      for (i = 0; i < maximo; i++) {
        mistura1[i] = i;
      }

      var p, n, tmp;
      for (p = mistura2.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = mistura1[n];
        mistura1[n] = mistura2[p];
        mistura1[p] = tmp;
      }
    }

    if(QtdPeca == 3){
      var maximo = 18;
      var i;
      for (i = 0; i < maximo; i++) {
        mistura1[i] = i;
      }

      var p, n, tmp;
      for (p = mistura3.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = mistura1[n];
        mistura1[n] = mistura3[p];
        mistura1[p] = tmp;
      }
    }
}

function save_hist(){

    if(QtdJogador == 1){
        historico = historico + "<p>Partida: "+ partida + " Jogador: " + jogador1 + " pts: " + ptJogador1 + "</p>";
        document.getElementById("inf_hist").innerHTML = historico;
    }
    if(QtdJogador == 2){
        
        historico = historico + "<p>Partida: "+ partida + " Jogador: " + jogador1 + " pts: " + ptJogador1 +  " || Jogador: " + jogador2 + " pts: " + ptJogador2 + "</p>" ;
        document.getElementById("inf_hist").innerHTML = historico;
    }
    

}

function reinicia(){
          document.getElementById("1x1").innerHTML = "";
          document.getElementById("1x2").innerHTML = "";
          document.getElementById("1x3").innerHTML = "";
          document.getElementById("1x4").innerHTML = "";
          document.getElementById("1x5").innerHTML = "";
          document.getElementById("1x6").innerHTML = "";
          document.getElementById("2x1").innerHTML = "";
          document.getElementById("2x2").innerHTML = "";
          document.getElementById("2x3").innerHTML = "";
          document.getElementById("2x4").innerHTML = "";
          document.getElementById("2x5").innerHTML = "";
          document.getElementById("2x6").innerHTML = "";
          document.getElementById("3x1").innerHTML = "";
          document.getElementById("3x2").innerHTML = "";
          document.getElementById("3x3").innerHTML = "";
          document.getElementById("3x4").innerHTML = "";
          document.getElementById("3x5").innerHTML = "";
          document.getElementById("3x6").innerHTML = "";
          document.getElementById("4x1").innerHTML = "";
          document.getElementById("4x2").innerHTML = "";
          document.getElementById("4x3").innerHTML = "";
          document.getElementById("4x4").innerHTML = "";
          document.getElementById("4x5").innerHTML = "";
          document.getElementById("4x6").innerHTML = "";
          document.getElementById("5x1").innerHTML = "";
          document.getElementById("5x2").innerHTML = "";
          document.getElementById("5x3").innerHTML = "";
          document.getElementById("5x4").innerHTML = "";
          document.getElementById("5x5").innerHTML = "";
          document.getElementById("5x6").innerHTML = "";
          document.getElementById("6x1").innerHTML = "";
          document.getElementById("6x2").innerHTML = "";
          document.getElementById("6x3").innerHTML = "";
          document.getElementById("6x4").innerHTML = "";
          document.getElementById("6x5").innerHTML = "";
          document.getElementById("6x6").innerHTML = "";
		  save_hist();
		  partida++;
		  ptJogador1 = 0;
		  Opcoes();
}
function esconde(){
    document.getElementById(peca1).innerHTML = inv[0];
    document.getElementById(peca2).innerHTML = inv[0];
}