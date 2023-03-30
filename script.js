const form = document.querySelector("#form");
const buttonRegister = document.getElementById("buttonRegister");
const phrasesTextarea = document.querySelector("#phrase");

buttonRegister.addEventListener("click", function () {
  disableButton();
});

function enableButton() {
  buttonRegister.disabled = false;
  buttonRegister.style.cursor = "pointer";
}

function disableButton() {
  buttonRegister.disabled = true;
  buttonRegister.style.cursor = "not-allowed";
}

(function textAreaValidate() {
  phrasesTextarea.addEventListener("keyup", function (event) {
    if (phrasesTextarea.value === "") {
      disableButton();
    } else {
      enableButton();
    }
  });
})();

phrasesTextarea.addEventListener("input", () => {
  phrasesTextarea.value = phrasesTextarea.value
    ? phrasesTextarea.value.trimStart()
    : "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const phrasesTextarea = document.querySelector("#phrase");

  localStorage.setItem("phrase", phrasesTextarea.value);

  phrasesTextarea.value = "";
});

let arr = [];

function newPhrase() {
  if (localStorage.phraseBank) {
    arr = JSON.parse(localStorage.getItem("phraseBank"));
  }

  let newItem = document.getElementById("phrase").value.toLowerCase();

  const itemAlreadyExists = arr.find((item) => item == newItem);

  if (itemAlreadyExists) {
  } else {
    arr.push(newItem);
  }

  document.getElementById("phrase").value = "";
  localStorage.phraseBank = JSON.stringify(arr);
}