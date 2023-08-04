//!   =>>> Comment out any other section before using/running the snippets


// function expression
const speak = function(){
    console.log("good day!")
};


// greet();
// greet();
// greet();

speak();
speak();
speak();

// function declaration
function greet(){
    console.log("hello there");
}




// arguments & parameters

const speak = function(name = "Luigi", time = "night"){
    console.log(`Good ${time} ${name}!`);
};

speak("Dora", "morning");
speak();
speak("Gábor");





// returning values

// const speak = function(name = "Luigi", time = "night"){
//     console.log(`Good ${time} ${name}!`);
// };

const calcArea = function(radius){
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);






// regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };


// arrow function
const calcArea = radius => 3.14 * radius**2;


const area = calcArea(5);
console.log("area is:", area);


// practise arrow functions

// const greet = function(){
//     return "hello world";
// };

const greet = () => "hello world";
const result = greet();
console.log(result);


// const bill = function(products, tax){
//     let total = 0;
//     for(let i =0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([9,4,10,89], 3.15));






// const name = "shaun";

// functions
const greet = () => "hello";

let resultOne = greet();
console.log(resultOne);


// methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);;



// callbacks & foreach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    //do something
    console.log(value);
});



let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

const logPerson = (person, index) => {
    console.log(`${index} hello ${person}`);
};

people.forEach(logPerson);




// get a reference to the 'ul'
const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;