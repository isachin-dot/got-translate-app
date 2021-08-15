var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/hodor.json"




function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function clickHandler() {

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
     console.log(json.contents.translated)})
     .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)