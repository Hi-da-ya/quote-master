//fetching attempt
// function fetchQuotes(){
//     return fetch("https://type.fit/api/quotes")
//     .then(res =>res.json())
//     .then(displayQuotes)
// }; 

//selecting elements for the DOM
const quotes = document.getElementById('quote');
const quoteInfo = document.getElementById('quote_list');
const listOfQuotes = document.getElementById('lists')
const searchBar = document.getElementById("search_box");
const gallery = document.getElementById("images");
const videoStudio = document.getElementById("vida");
const audioBox = document.getElementById("audio");
const audioList = document.getElementById("li");
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');
const button = document.getElementById("qbtn");
const darkmode = document.getElementById("toggle")

//function that renders quotes
// function displayQuotes(words){
//     // quoteInfo.textContent = words.text;
//     words.forEach(word => {
//         const lis = document.createElement('li');
//         lis.innerText = word.text;
//         listOfQuotes.appendChild(lis);
        
//     });
// // };
// fetchQuotes()
 //function that allows user to generate random quotes  
button.addEventListener("click", getQuote);
function getQuote(){
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `${data.content}`;
        writer.innerHTML =`${data.author}`;
    })
}
 //function that enables user to toggle between dark and light mode
function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
};
   darkmode.addEventListener("click",darkMode)

