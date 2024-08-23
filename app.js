let listaDeNumerosSorteados = []; // primeiro declarar variavel antes de tudo da lista, se não dá erro
let numeroLimiteDeTentativas = 10;
let numeroSecreto = gerarNumeroaleatorio(); // somente um igual (=) atribui um valor
let tentativas = 1;

function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNatela('h1','Jogo do número Secreto');
  exibirTextoNatela('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial(); //Necessário chamar a função fora de qualquer função para que ela seja iniciada a partir da primeira leitura do app.js (Arquivo JAVA)

function verificarChute() {
    let chute = document.querySelector('input').value; // para somente pegar valor digitado pelo usuário
  
  
    if (chute == numeroSecreto){
    exibirTextoNatela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
    let mensagemTentativas = `Você descobriu o numero secerto ${tentativas} ${palavraTentativa}`;
    exibirTextoNatela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled'); // Todas as palavras com maiusculo, menos a primeira. getElementById chama o botão específico do HTML ID, que somente ele tem esse local
    //No HTML o nome da função precisa ter () para ele entender que é uma função aberta para aquelle botão
  } else {
      if (chute > numeroSecreto) {
          exibirTextoNatela('p', `Numero secreto é menor que ${chute}!`);
        
    }  else {
       exibirTextoNatela('p', `Numero secreto é maior que ${chute}!`);
        }
        tentativas++; 
        limparCampo();
      }
}
console.log(chute == numeroSecreto); // (==) usado para comparar valores --- Valor Boolean são valores verdadeiros ou falsos
function gerarNumeroaleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteDeTentativas + 1); 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimiteDeTentativas) {
      listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroaleatorio(); 
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido) //comando para incluir os numeros na lista
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
    }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroaleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true); // esse segundo parâmetro dentro do setAttribute diz se eu quero ele verdadeiro ou falso (ligado/desligado)
}


