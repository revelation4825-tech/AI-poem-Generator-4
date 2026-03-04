let headElement = document.querySelector("#head")
let head = ("Welcome To AI")
headElement.innerHTML = head

let button = document.querySelector("#send-button")

function showAnswer(response) {
    console.log(response.data.answer)
}
let apiKey = "203adfb889341eafafcd3o792bteb01b";
let prompt = "Who was the first female president";
let context = "be precise and provide short response without explaining much about your reasoning behind your opinion";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer)