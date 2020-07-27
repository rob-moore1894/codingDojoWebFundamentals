//Using the given array:
var testArr = [6, 3, 5, 1, 2, 4]

// Print Values and Sum
// Print each array value and the sum so far
// The expected output will be: 
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

var testArr = [6, 3, 5, 1, 2, 4]

function printAndSum(arr){
var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        console.log("Num " + arr[i] + ", Sum " + sum); 
    }
}

printAndSum(testArr);

// ------------------------------------------------------------

// Value * Position
// Multiply each value in the array by its array position
// The expected output will be:
// [0,3,10,3,8,20]

function multiplyPosition(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] = arr[i] * i); 
    };
    console.log(newArr); 
}; 

multiplyPosition(testArr); 


function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
    var result1 = add(3,5);
    var result2 = add(4,7);
    console.log(result1);
    console.log(result2);
    