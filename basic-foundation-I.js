function divider(){
    console.log("--------------------------------------------------------------")
}; 

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function range(){
    var arr = []; 
    for(var i=1; i <= 255; i++) {
        arr.push(i); 
    }
    console.log(arr); 
}; 

console.log("range() = ");
range(); 
divider(); 

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function evenThousand(){
    var sum = 0;
    for(var i=1; i<= 1000; i++){
        if(i%2 == 0) {
            sum += i; 
        }
    }
    console.log(sum);
}

console.log("evenThousand() = ");
evenThousand(); // 250500
divider(); 

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function oddFiveThousand(){
    var sum = 0; 
    for(var i = 1; i <= 5000; i++){
        if(i%2 != 0){
            sum += i;
        }
    }
    console.log(sum); 
}

console.log("oddFiveThousand() = ");
oddFiveThousand(); // 6250000
divider(); 

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function iterate(arr){
    var sum = 0; 
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum); 
}

console.log("iterate() = ");
iterate([1, 2, 5]); // 8
iterate([-5,2,5,12]); // 14
divider(); 

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(arr){
    console.log(Math.max(...arr)); 
}

console.log("findMax() = ");
findMax([-3,3,5,7]); // 7
divider(); 


// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAvg(arr){
    var sum = arr.reduce(function(total, amount){
        return total + amount
    }); 
    console.log(sum / arr.length);
}

console.log("findAvg() = ");
findAvg([1,3,5,7,20]); // 7.2
divider(); 

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function odd(){
    var newArr = [];
    for(var i = 1; i < 50; i+=2){
        newArr.push(i);
    } 
    console.log(newArr); 
} 

console.log("odd() = ");
odd(); 
divider(); 

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr, y){
    var tempArr = [];
    if (arr.length != 0 && (isNaN(y) == false)){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > y){
                tempArr.push(i)
            }
        }
        console.log(tempArr.length); 
    } else {
        console.log("You entered an invalid input")
    }
}

console.log("greaterThanY() = ");
greaterThanY([1,3,5,7], 3); // 2
greaterThanY([1,2,3,4], "Alfie"); // You entered an invalid input
divider(); 

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squared(arr){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        arr[i] = arr[i] * arr[i];
        newArr.push(arr[i]);
    }
    console.log(newArr); 
}

console.log("squared() = ");
squared([1,5,10,-2]);
divider();


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr); 
}

console.log("negatives() =");
negatives([1,5,10,-2]);
divider();


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr){
    var newArr = [];
    var sum = 0;
    var avg = 0; 
    newArr[0] = Math.max.apply(Math, arr);
    newArr[1] = Math.min.apply(Math, arr);
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        avg = sum / arr.length; 
        newArr[2] = avg;
    }
    console.log(newArr);
}

console.log("maxMinAvg() = ");
maxMinAvg([1,5,10,-2]); 
divider();

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(arr){
    [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
    console.log(arr);
}

console.log("swap() = "); 
swap([1,5,10,-2]);
divider();

function swapValue(arr) {
	var temp = arr[arr.length - 1];
	arr[arr.length - 1] = arr[0];
	arr[0] = temp;
	console.log(arr);
}
console.log("swapValue() = ");
swapValue([1, 2, 3, 4, 5]);
divider();


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToString(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}

console.log("numToString() = ");
numToString([-1,-3,2]); 
divider();