// Arthur Solis
// Daniel Martinez Pascual
// Nathaniel Lopez

// Imagine that you are given an array of objects.  For example,

// var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

var array_users = [
    {"name" : "Michael", "age" : 37},
    {"name" : "John", "age" : 30},
    {"name" : "David", "age" : 27}
]


// How would you print/log John's age?
console.log(array_users[1].age);

// How would you print/log the name of the first object?
console.log(array_users[0].name);

// How would you print/log the name and age of each user using a for loop?  Your output should look something like this:
for (var i = 0; i < array_users.length; i++) {
    console.log(array_users[i]);
}

// Michael - 37
// John - 30
// David - 27
