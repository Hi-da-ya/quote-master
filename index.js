document.addEventListener("DOMContentLoaded", () => {


//selecting elements for the DOM
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');
const button = document.getElementById("qbtn");
const darkmode = document.getElementById("toggle");
const commentSection = document.querySelectorAll("#comments")
let comment = document.querySelector(".comment");
let commentTwo = document.querySelector(".commentTwo");
const form = document.getElementById("form1");
const formTwo = document.getElementById("form2");
const formThree = document.getElementById("form3");
const formFour = document.getElementById("form4");
const formFive = document.getElementById("form5");
const formSix = document.getElementById("form6");
const formSeven = document.getElementById("form7");
const formEight = document.getElementById("form8");
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
    const changeMode = document.body;
    changeMode.classList.toggle("dark-mode");
};
   darkmode.addEventListener("click",darkMode)

//    function that enables user to post comments
  
   form.addEventListener("submit", (e) => {
    e.preventDefault()
    let newComment = document.querySelector(".new-comment");
    
    if(newComment.value == ""){
        alert("enter comment")
    } else{
        const commentList = document.createElement('li');
        commentList.textContent = newComment.value
        comment.appendChild(commentList) 

    }

    form.reset()
   });
   formTwo.addEventListener("submit", (e) => {
    e.preventDefault()
    let newCommentTwo = document.querySelector(".new-comment2");
    
    if(newCommentTwo.value == ""){
        alert("enter comment")
    } else{
        const commentListTwo = document.createElement('li');
        commentListTwo.textContent = newCommentTwo.value
        commentTwo.appendChild(commentListTwo) 

    }
    formTwo.reset()
   });

   let commentThree = document.querySelector(".commentThree");
   formThree.addEventListener("submit", (e) => {
    e.preventDefault()
    let newCommentThree = document.querySelectorAll(".new-comment3");
    
    if(newCommentThree.value == ""){
        alert("enter comment")
    } else{
        const commentListThree = document.createElement('li');
        commentListThree.textContent = newCommentThree.value
        commentThree.appendChild(commentListThree) 

    }
    formThree.reset()
   });

   let commentFour = document.querySelector(".commentFour");
   formFour.addEventListener("submit", (e) => {
    e.preventDefault()
    let newCommentFour = document.querySelectorAll(".new-comment4");
    
    if(newCommentFour.value == ""){
        alert("enter comment")
    } else{
        const commentListFour = document.createElement('li');
        commentListFour.textContent = newCommentFour.value
        commentFour.appendChild(commentListFour) 

    }
    formFour.reset()
   });

   let commentFive = document.querySelector(".commentFive");
   formFive.addEventListener("submit", (e) => {
    e.preventDefault()
    let newCommentFive = document.querySelectorAll(".new-comment5");
    
    if(newCommentFive.value == ""){
        alert("enter comment")
    } else{
        const commentListFive = document.createElement('li');
        commentListFive.textContent = newCommentFive.value
        commentFive.appendChild(commentListFive) 

    }
    formFive.reset()
   });

   let commentSix = document.querySelector(".commentSix");
   formSix.addEventListener("submit", (e) => {
    e.preventDefault()
    let newCommentSix = document.querySelectorAll(".new-comment6");
    
    if(newCommentSix.value == ""){
        alert("enter comment")
    } else{
        const commentListSix = document.createElement('li');
        commentListSix.textContent = newCommentSix.value
        commentSix.appendChild(commentListSix) 

    }
    formSix.reset()
   });

   let commentSeven = document.querySelector(".commentSeven");
   formSeven.addEventListener("submit", (e) => {
    e.preventDefault()
    let newCommentSeven = document.querySelectorAll(".new-comment7");
    
    if(newCommentSeven.value == ""){
        alert("enter comment")
    } else{
        const commentListSeven = document.createElement('li');
        commentListSeven.textContent = newCommentSeven.value
        commentSeven.appendChild(commentListSeven) 

    }
    formSeven.reset()
   });

   let commentEight = document.querySelector(".commentEight");
   formEight.addEventListener("submit", (e) => {
    e.preventDefault()
    let newCommentEight = document.querySelectorAll(".new-comment8");
    
    if(newCommentEight.value == ""){
        alert("enter comment")
    } else{
        const commentListEight = document.createElement('li');
        commentListEight.textContent = newCommentEight.value
        commentEight.appendChild(commentListEight) 

    }
    formEight.reset()
   });

});
