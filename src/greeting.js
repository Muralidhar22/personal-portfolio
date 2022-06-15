const greetings = ["Hello","你好","Bonjour","Hola","नमस्ते"]
const greetingEl = document.querySelector(".greeting")
let counter = 0
// greetings display function
setInterval(greeting, 1000)
function greeting(){
    greetingEl.innerHTML = greetings[counter]
    counter++;
    if(counter > greetings.length-1){
        counter = 0;
    }
}