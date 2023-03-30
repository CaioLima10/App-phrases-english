(() => {
  const phrasesList = document.getElementById("phrasesStayHere");
  phrasesList.innerHTML = "";
  const minhasFrases = localStorage.getItem("phraseBank")
  if (minhasFrases) {
    const frases = JSON.parse(minhasFrases);

    for (const frase of frases) {
      const item = document.createElement("li");
      item.classList.add("paragraph");
      item.innerHTML = frase;
      phrasesList.append(item);
    }
  }
})()
