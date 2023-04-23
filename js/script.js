var textInput = document.querySelector('#input-text');
var outPut = document.querySelector('#output')



function criptografar(){
  var texto = textInput.value;

  let resultCripto = texto
  .replace(/e/g,' enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat');

  document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultCripto + '</textarea>' + '<button class="btn-copy" id="copy" onclick="copy()">Copiar</button>'
}


function descriptografar(){
  var texto = textInput.value;

  let resultDescripto = texto
  .replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');


  document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultDescripto + '</textarea>' + '<button class="btn-copy" id="copy" onclick="copy()">Copiar</button>'
}

function btnCopy(){
  var textCopy = document.querySelector('input-text');

  textCopy.select();
  document.execCommand('#copy');
  alert('texto copiado')
}
