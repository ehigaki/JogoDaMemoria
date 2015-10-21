var jogador1 = false;
var jogador2 = true;
var QtdPeca;
var ptJogador1 = 0;
var ptJogador2;
var pecaMisturada;
var click = 1;
var vez = 0;
var pontuacao;
var peca1;
var peca2;
var QtdJogador=0;
var mistura1 = new Array; // Vetores com valores embaralhados
var mistura2 = new Array;
var mistura3 = new Array;

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
			jogo1();
		}
		if(QtdPeca == 2)
		{
			jogo2();
		}
		if(QtdPeca == 3)
		{
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
        inv[1] = "<img src='imagens/virado.png'>";
        document.getElementById("1x1").innerHTML = inv[0];
        document.getElementById("1x2").innerHTML = inv[1];
        document.getElementById("2x1").innerHTML = inv[1];
        document.getElementById("2x2").innerHTML = inv[0];
	}

function jogo2(){
    inv = new Array();
    inv[0] = "<img src='imagens/virado.png'>";
    inv[1] = "<img src='imagens/virado.png'>";
    inv[2] = "<img src='imagens/virado.png'>";
    inv[3] = "<img src='imagens/virado.png'>";
    inv[4] = "<img src='imagens/virado.png'>";
    inv[5] = "<img src='imagens/virado.png'>";
    inv[6] = "<img src='imagens/virado.png'>";
    inv[7] = "<img src='imagens/virado.png'>";
    inv[8] = "<img src='imagens/virado.png'>";
    inv[9] = "<img src='imagens/virado.png'>";
    inv[10] = "<img src='imagens/virado.png'>";
    inv[11] = "<img src='imagens/virado.png'>";
    inv[12] = "<img src='imagens/virado.png'>";
    inv[13] = "<img src='imagens/virado.png'>";
    inv[14] = "<img src='imagens/virado.png'>";
    inv[15] = "<img src='imagens/virado.png'>";
    op2 = new Array();
    op2[0] = "<img src='imagens/peca1.png'>";
    op2[1] = "<img src='imagens/peca2.png'>";
    op2[2] = "<img src='imagens/peca3.png'>";
    op2[3] = "<img src='imagens/peca4.png'>";
    op2[4] = "<img src='imagens/peca5.png'>";
    op2[5] = "<img src='imagens/peca6.png'>";
    op2[6] = "<img src='imagens/peca7.png'>";
    op2[7] = "<img src='imagens/peca8.png'>";
    document.getElementById("1x1").innerHTML = inv[0];
    document.getElementById("1x2").innerHTML = inv[1];
    document.getElementById("1x3").innerHTML = inv[2];
    document.getElementById("1x4").innerHTML = inv[3];
    document.getElementById("2x1").innerHTML = inv[4];
    document.getElementById("2x2").innerHTML = inv[5];
    document.getElementById("2x3").innerHTML = inv[6];
    document.getElementById("2x4").innerHTML = inv[7];
    document.getElementById("3x1").innerHTML = inv[8];
    document.getElementById("3x2").innerHTML = inv[9];
    document.getElementById("3x3").innerHTML = inv[10];
    document.getElementById("3x4").innerHTML = inv[11];
    document.getElementById("4x1").innerHTML = inv[12];
    document.getElementById("4x2").innerHTML = inv[13];
    document.getElementById("4x3").innerHTML = inv[14];
    document.getElementById("4x4").innerHTML = inv[15];
}
function jogo3(){
    inv = new Array();
    inv[0] = "<img src='imagens/virado.png'>";
    inv[1] = "<img src='imagens/virado.png'>";
    inv[2] = "<img src='imagens/virado.png'>";
    inv[3] = "<img src='imagens/virado.png'>";
    inv[4] = "<img src='imagens/virado.png'>";
    inv[5] = "<img src='imagens/virado.png'>";
    inv[6] = "<img src='imagens/virado.png'>";
    inv[7] = "<img src='imagens/virado.png'>";
    inv[8] = "<img src='imagens/virado.png'>";
    inv[9] = "<img src='imagens/virado.png'>";
    inv[10] = "<img src='imagens/virado.png'>";
    inv[11] = "<img src='imagens/virado.png'>";
    inv[12] = "<img src='imagens/virado.png'>";
    inv[13] = "<img src='imagens/virado.png'>";
    inv[14] = "<img src='imagens/virado.png'>";
    op3 = new Array();
    op3[0] = "<img src='imagens/peca1.png'>";
    op3[1] = "<img src='imagens/peca2.png'>";
    op3[2] = "<img src='imagens/peca3.png'>";
    op3[3] = "<img src='imagens/peca4.png'>";
    op3[4] = "<img src='imagens/peca5.png'>";
    op3[5] = "<img src='imagens/peca6.png'>";
    op3[6] = "<img src='imagens/peca7.png'>";
    op3[7] = "<img src='imagens/peca8.png'>";
    op3[8] = "<img src='imagens/peca9.png'>";
    op3[9] = "<img src='imagens/peca10.png'>";
    op3[10] = "<img src='imagens/peca11.png'>";
    op3[11] = "<img src='imagens/peca12.png'>";
    op3[12] = "<img src='imagens/peca13.png'>";
    op3[13] = "<img src='imagens/peca14.png'>";
    op3[14] = "<img src='imagens/peca15.png'>";
    op3[15] = "<img src='imagens/peca16.png'>";
    op3[16] = "<img src='imagens/peca17.png'>";
    op3[17] = "<img src='imagens/peca18.png'>";
    document.getElementById("1x1").innerHTML = op3[0] + op3[1] + op3[2] + op3[3] + op3[4] + op3[5];
    document.getElementById("2x1").innerHTML = op3[6] + op3[7] + op3[8] + op3[9] + op3[10] + op3[11];
    document.getElementById("3x1").innerHTML = op3[12] + op3[13] + op3[14] + op3[15]+ op3[16] + op3[17];
    document.getElementById("4x1").innerHTML = op3[0] + op3[1] + op3[5] + op3[6]+ op3[7] + op3[8];
    document.getElementById("5x1").innerHTML = op3[8] + op3[9] + op3[10] + op3[11] + op3[12]+ op3[13];
    document.getElementById("6x1").innerHTML = op3[14] + op3[0] + op3[1] + op3[2]+ op3[3] + op[4];
}

function desvirar(id){
    switch(id)
    {
        case "1x1": document.getElementById(id).innerHTML = op1[0];
            break;
        case "1x2": document.getElementById(id).innerHTML = op1[1];
            break;
        case "2x1": document.getElementById(id).innerHTML = op1[1];
            break;
        case "2x2": document.getElementById(id).innerHTML = op1[0];
            break;
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
            alert("clicou na mesma peça");
            vez = 2;
        }else pontuacao();
    }
}

function pontuacao(){
    if(QtdJogador == 1){
        if(document.getElementById(peca1).innerHTML == document.getElementById(peca2).innerHTML && jogador1 == true)
        {
           ptJogador1++;
        }
        if(document.getElementById(peca1).innerHTML != document.getElementById(peca2).innerHTML){
        desvira();
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
        document.getElementById("jogador1").innerHTML ="Pontuacao do jogador 1: " + ptJogador1;
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
      for (p = mistura1.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = mistura1[n];
        mistura1[n] = mistura1[p];
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
      for (p = mistura1.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = mistura1[n];
        mistura1[n] = mistura1[p];
        mistura1[p] = tmp;
      }
    }
}

function historico(){
    
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
	Opcoes();
}
function desvira(){
    document.getElementById(peca1).innerHTML = inv[0];
    document.getElementById(peca2).innerHTML = inv[1];
}