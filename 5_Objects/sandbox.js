//!   =>>> Comment out any other section before using/running the snippets


// object literals

const blogs = [
    { title: "why mac and cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 }
];

console.log(blogs);




let user = {
    name: "crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "Berlin",
    blogs: [
        { title: "why mac and cheese rules", likes: 30 },
        { title: "10 things to make with marmite", likes: 50 }
    ],
    login: function(){
        console.log("The user logged in");
    },
    logout: function(){
        console.log("The user logged out");
    },
    logBlogs(){
        // console.log(this.blogs);
        console.log("this user has written the following blogs:");
        this.blogs.forEach(blog => {
            console.log(`- ${blog.title}, ${blog.likes} likes`);
        });
    }
};

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

console.log(user["location"]);
user["name"] = "chun-li";
console.log(user["name"]);

console.log(typeof user);


user.login();
user.logout();

const name = "luigi";
// name.toUpperCase();


user.logBlogs();
console.log(this);





// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));


// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));





// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: "ryu", age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userTwo.name = "chun-li";
console.log(userOne, userTwo);