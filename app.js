let headElement = document.querySelector("#head")
let head = ("Welcome To AI")
headElement.innerHTML = head

function displayAnswer(response) {
    
new Typewriter('#answer-output', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});

}
function generateOutput(event) {
    event.preventDefault();

let apiKey = "203adfb889341eafafcd3o792bteb01b";
let askElement = document.querySelector("#ask-input");
let prompt = (askElement.value);
let context = `generate shortest Korean poems each time based on ${prompt} only in a 5 line and do not forget to seperate each line with a <br/>. sign the poem at the end with '다나 AI' inside a <strong> element.`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let answerElement = document.querySelector("#answer-output");
answerElement.classList.remove("hidden");
answerElement.innerHTML = `<div class="blink">⏳ Generating a Korean poem about ${prompt}</div>`

axios.get(apiUrl).then(displayAnswer);
}

let formElement = document.querySelector("#ask-form");
formElement.addEventListener("submit", generateOutput);