/* //1st section

// const para = document.querySelector("body > div.error");

// console.log(para);
// console.log(para.innerHTML);

// const paras = document.querySelectorAll("p");
// const errors = document.querySelectorAll(".error");


// console.log(errors[0]);




// get an element by ID
// const title = document.getElementById("page-title");
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[0]);

// get elements by their tag name
const paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras[1]); */




/*  //2nd section

const para = document.querySelector("p");

// console.log(para.innerText);
// para.innerText = "ninjas are awesome!";

const paras = document.querySelectorAll("p");

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += " new text";
// });


const content = document.querySelector(".content");

// console.log(content.innerHTML);
// content.innerHTML += "<h2>This is a new h2</h2>";

const people = ["mario", "luigi", "yoshi"];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
}); */



// //3rd section

// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.thenetninja.co.uk");

// link.innerText = "The Net Ninja Website";

// const message = document.querySelector("p");

// console.log(message.getAttribute("class"));
// message.setAttribute("class", "success");
// message.setAttribute("style", "color:green");



/* // 4th section

const title = document.querySelector("h1");

// //! completely overwrites everything - drawback
// title.setAttribute("style", "margin: 50px;");


console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "50px";
title.style.margin = ""; */


/* // 5th section

const content = document.querySelector("p");

console.log(content.classList);
content.classList.add("error");
content.classList.remove("error");
content.classList.add("success"); */


// 6th section - challenge

const paras = document.querySelectorAll("p");

console.log(paras);

paras.forEach(para => {
    if(para.textContent.includes("error")){
        para.classList.add("error");
    } else if (para.textContent.includes("success")){
        para.classList.add("success");
    }
});

const title = document.querySelector(".title");

title.classList.toggle("test");
title.classList.toggle("test");