const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palab = text.split(' ');
    let wordCount = 0;
    
    for(let i=0; i<palab.length; i++){
      if(palab[i]!==''){
        wordCount++;
      }
    }
    return wordCount;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    const charact = text.length;
    return charact;
  },
  
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let noSpaces = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (!/[.,#!$%&;:{}=\-_`~()\s]/.test(char)){
        noSpaces++;
      }
    }
    return noSpaces;
  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palab = text.split(' ');
    let wordCount = 0;
    let longitudPromedio = 0;
    const noSpaces = text.replaceAll(' ','');
    
    if(text !==""){
      for(let i = 0; i < palab.length; i++){
        if(palab[i]!==''){
          wordCount++;
        }
      }
      
      longitudPromedio = (noSpaces.length/wordCount).toFixed(2);
    }

    return parseFloat(longitudPromedio); 
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    if(/[.,#!$%&;:{}=\-_`~()\s]/.test(text[text.length-1])){
      text = text.substring(0,text.length-1);
    }
    const palab = text.split(' ');
    let countNumber = 0;

    for(let i = 0; i < palab.length; i++) {
      if (!isNaN(palab[i]) && palab[i] !== '') {
        countNumber ++;
      }
    }
    return countNumber;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    if(/[.,#!$%&;:{}=\-_`~()\s]/.test(text[text.length-1])){
      text = text.substring(0,text.length-1);
    }
    const palab = text.split(' ');
    let countNumber = 0;

    for(let i = 0; i < palab.length; i++) {
      if (!isNaN(palab[i]) && palab[i] !== '') {
        countNumber += parseFloat(palab[i]);
      }
    }
    return countNumber;
  },
};

export default analyzer;
