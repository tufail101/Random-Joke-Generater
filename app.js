let joke = document.getElementById("joke");
let btn = document.getElementById("btn");
let url = "https://official-joke-api.appspot.com/jokes/random";


let gate_joke = async() => {
let a=await fetch(url)
let b=await a.json()
console.log(b);
console.log(b.punchline);
console.log(b.setup);
joke.innerHTML=`<h1> ${b.setup}`+`<h1> ${b.punchline}`

};
btn.addEventListener("click",gate_joke);

// gate_joke()