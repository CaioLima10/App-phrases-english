function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateRandomPhrase(list = []) {
  const max = list.length - 1;
  const index = randomIntFromInterval(0, max);
  return index;
}

const phrasesStayHere = document.getElementById("phrasesStayHere");
function addNewPhrase(newPhrase) {
  const primeiraLetra = newPhrase.charAt(0).toUpperCase();
  const restoDaFrase = newPhrase.substring(1)

  const item = document.createElement("li");
  item.classList.add("paragraph");
  item.innerHTML = `${primeiraLetra}${restoDaFrase}`
  phrasesStayHere.append(item);
}

function sortearFrases(listPhrases = []) {
  // lista de frases sorteadas
  // essa list serve para guardar as frases que vou mostrar na tela
  const listaSorteados = [];
  for (let index = 0; index < 3; index++) {
    const indexSorteado = generateRandomPhrase(listPhrases)
    const fraseSorteada = listPhrases.splice(indexSorteado, 1);
    listaSorteados.push(fraseSorteada[0]);
    console.log({fraseSorteada, size: listPhrases.length })
  }
  return listaSorteados
}

function showPhrases() {
  phrasesStayHere.innerHTML = "";

  const listPhrases = localStorage.getItem("phraseBank");

  const listPhrasesParsed = [];
  if (listPhrases) {
    // ... espalha o conteudo do array (spread)
    listPhrasesParsed.push(...JSON.parse(listPhrases));

    if (listPhrasesParsed.length > 3) {
      // Mostrar aleatório
      const sorteados = sortearFrases(listPhrasesParsed)
      for (let index = 0; index < 3; index++) {
        
        addNewPhrase(sorteados[index])
      }     
      
    } else {
      for (const frase of listPhrasesParsed) {
        addNewPhrase(frase);
      }
    }
  }
}

showPhrases();