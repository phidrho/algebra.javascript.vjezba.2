function sum(a, b) {
  return a + b;
}

function brojSlova(recenica, slovo){
  let returnValue = 0;

  let popisSlova = recenica.split('');
  for(let i = 0; i < popisSlova.length; i++){
    if (popisSlova[i] === slovo){
      returnValue++;
    };
  }

  return returnValue;
}

module.exports = { sum, brojSlova };
