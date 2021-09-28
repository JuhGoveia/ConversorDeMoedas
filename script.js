// Conversão dolar

function Converter() {
  var valorElemento = document.getElementById("valor"); // pega o codigo do html
  var valor = valorElemento.value; // pega o valor que sera informado para aquela linha do codigo
  var real = parseFloat(valor); // converte de String para float

  var dolar = real * 5;
  var elementoValorConvertido = document.getElementById("valorConvertido"); // referencia o comando do html que ira mostrar
  var convertido = "O resultado em dolar é U$ " + dolar; // a mensagem que ira aparecer na tela após a conversão
  elementoValorConvertido.innerHTML = convertido; // pega esse elemento e insere a mensagem salva nessa variavel
}

//Conversão para Euro

function ConversaoEu() {
  var elemento = document.getElementById("valor");
  var entrada = elemento.value;
  var real = parseFloat(entrada);

  var Euro = real * 0.16;
  var eu = Euro.toFixed(2);

  var valorConvertido = document.getElementById("Convertido");
  var resultado = "O resultado em euro é EUR " + eu;
  valorConvertido.innerHTML = resultado;
}

//Conversao bitcoin

function ConversorBitcoin() {
  var elemento = document.getElementById("valor");
  var valorInserido = elemento.value;
  var real = parseFloat(valorInserido);

  var bitcoin = real * 250800.7;
  var bit = bitcoin.toFixed(2);

  var convertido = document.getElementById("Conversao");
  var resposta = "O valor em bitcoins é ฿ " + bit;
  convertido.innerHTML = resposta;
}