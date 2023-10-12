import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//document.addEventListener("DOMContentLoaded", function (){

//Función limpiar métricas
const boton = document.getElementById ('reset-button');
const textarea = document.querySelector('textarea[name="user-input"]');
textarea.value='';

boton.addEventListener('click', function() {
  if (textarea.value ===''){
    alert ("Cuadro de texto vacío")
  }else {
    textarea.value = '';
    met();
  }
})

//Evento de escritura de texto
textarea.addEventListener('input', function(){
  met();
});

//Declaración de variables
const wordCountElement = document.querySelector('li[data-testid="word-count"]');
const characterCountElement = document.querySelector('li[data-testid="character-count"]');
const characterTrimElement = document.querySelector('li[data-testid="character-no-spaces-count"]');
const numberCountElement = document.querySelector('li[data-testid="number-count"]');
const longitudPromedioElement = document.querySelector('li[data-testid="word-length-average"]');
const sumaNumerosElement = document.querySelector('li[data-testid="number-sum"]');

function met() {
  //Valor de cuadro de texto
  const text = textarea.value;

  //Función wordCount
  const wordCount = analyzer.getWordCount(text);
  wordCountElement.textContent = `Palabras: ${wordCount}`;

  //Función characterCount
  const characterCount = analyzer.getCharacterCount(text);
  characterCountElement.textContent = `Caracteres: ${characterCount}`;

  //Función caracteres sin espacio
  const characterTrimCount = analyzer.getCharacterCountExcludingSpaces(text);
  characterTrimElement.textContent = `Caracteres sin espacios: ${characterTrimCount}`;

  //Función conteo de números
  const countNumber = analyzer.getNumberCount(text);
  numberCountElement.textContent = `Números: ${countNumber}`;

  //Función longitud promedio
  const promedioLongi = analyzer.getAverageWordLength(text);
  longitudPromedioElement.textContent = `Promedio Longitud: ${promedioLongi}`;

  //Función suma de números:
  const sumaNum = analyzer.getNumberSum(text);
  sumaNumerosElement.textContent = `Suma de números: ${sumaNum}`;
}
