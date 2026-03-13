let headElement = document.querySelector("#head")
let head = ("Welcome To AI")
headElement.innerHTML = head

function generateAnswer(response) {

let answerElement = document.querySelector("#answer-output")
answerElement.innerHTML = (response.data.answer)

}
function generateOutput(event) {
    event.preventDefault();

new Typewriter('#answer-output', {
  strings: ['Silent whisper, Moonlit dreams, Time drifts softly, Life gentle seams.'],
  autoStart: true,
  delay: 1,
  cursor: "",
});

}

let formElement = document.querySelector("#ask-form")
formElement.addEventListener("submit", generateOutput)

let apiKey = "203adfb889341eafafcd3o792bteb01b";
let askElement = document.querySelector("#ask-input");
let prompt = (askElement.value);
//let context = `provide shortest poems based on ${prompt} without explaining much about your reasoning behind your opinion`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl).then(generateAnswer)