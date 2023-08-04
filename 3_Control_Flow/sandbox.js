//   =>>> Comment out any other section before using


// for loops

for(let i = 0; i < 5; i++){
    console.log("in loop: ", i);
}

console.log("loop finished");


const names = ["shaun", "mario", "luigi"];

for (let i = 0; i < names.length; i++){
    // console.log(i, names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}




// while loops

const names = ["shaun", "mario", "luigi"];
let i = 0;

while(i < 5){
    console.log("in loop: ", i);
    i++;
}

while(i < names.length){
    console.log(names[i]);
    i++;
}

console.log("loop ended");

// do while loops

let i = 3;

do{
    console.log("val of i is: ", i);
    i++;
} while(i <= 5);

console.log("loop ended");



// if statements
const age = 20;5

if(age > 20) {
    console.log("You are over 20 years old");
}


const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}


const password = "password";

if(password.length >= 8){
    console.log("that password is long enough")
} 

// else is statements

const password = "password";

if(password.length >= 12){
    console.log("that password is might strong")
} else if(password.length >= 8){
    console.log("that password is long enough");
} else{
    console.log("password is not long enough");
}




// logical operators - OR || and AND &&

const password = "p@ss123";

if(password.length >= 12 && password.includes("@")){
    console.log("that password is might strong")
} else if(password.length >= 8 || password.includes("@") && password.length >= 5){
    console.log("that password is strong enough");
} else{
    console.log("password is NOT strong enough");
}


// logical NOT (!)

let user = false;

if(!user){
    console.log("you must be logged in to continue");
}

console.log(!true);
console.log(!false);




// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log("your score: ", scores[i]);

    if(scores[i] === 100){
        console.log("you got the top score!");
        break;
    }
}



// switch statements
const grade = "X";

switch(grade){
    case "A":
        console.log("you got an A!");
        break;
    case "B":
        console.log("you got a B!");
        break;
    case "C":
        console.log("you got a C!");
        break;
    case "D":
        console.log("you got a D!");
        break;
    case "E":
        console.log("you got an E!");
        break;
    default:
        console.log("not a valid grade");
}




// variables & block scope
const age = 30;

if(true){
    const age = 40;
    const name = "shaun";
    console.log("inside 1st code block: ", age, name);

    if(true){
        const age = 50;
        console.log("inside 2nd code block", age);
        var test = "hello"
    }
}

console.log("outside the code block: ", age, name, test);
