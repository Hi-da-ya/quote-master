//fetching attempt
function fetchQuotes(){
    return fetch("https://type.fit/api/quotes")
    .then(res =>res.json())
    .then(displayQuotes)
}; 

//selecting elements for the DOM
const quotes = document.getElementById('quote');
const quoteInfo = document.getElementById('quote_list');
const listOfQuotes = document.getElementById('lists')
const searchBar = document.getElementById("search_box");
const gallery = document.getElementById("images");
const videoStudio = document.getElementById("vida");
const audioBox = document.getElementById("audio");
const audioList = document.getElementById("li");

//function that renders quotes
function displayQuotes(words){
    // quoteInfo.textContent = words.text;
    words.forEach(word => {
        const lis = document.createElement('li');
        lis.innerText = word.text;
        listOfQuotes.appendChild(lis);
        
    });
};
fetchQuotes()
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');
const button = document.getElementById("qbtn")
  
button.addEventListener("click", getQuote);
function getQuote(){
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `${data.content}`;
        writer.innerHTML =`${data.author}`;
    })
}

// function getImages(){
//     fetch("jg4isq57kpRbfNisjsgeEl7GoQ69HBOoRfu3Br7tLtAgtwmqT3X49DWr")
//     .then(res => res.json())
//     .then(datas =>{
       
       
//         gallery.innerHTML  = `${datas.url}`;
//     })
// };

