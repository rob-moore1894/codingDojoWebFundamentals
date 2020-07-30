// Joshua England
// Beau
// Carver
// Daniel Martinez Pascual
// Ty Carson
// Rob Moore

// 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

// Math.random() makes a number between 0 and 1, but it never gets to 1
// Math.ceil(x) rounds up a number
// Math.floor(x) rounds down a number
// Math.trunc(x) cuts off the decimal

function rollOne(){
    var rand = Math.random() * 6;
    rand = Math.ceil(rand);
    return rand;
}

// 2) Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”

function playFives(num) {
    for(var i = 1 ; i <= num ; i++) {
        var roll = rollOne();
        console.log(roll);
        if(roll == 5) {
            roll = "That's good luck!";
        }
    }
}

playFives(3);

// 3) Third, create a new function named playStatistics(), which should call rollOne() eight
// times (but not print anything after each call). After the last of these eight calls, it should print out
// the lowest and highest values that it received from rollOne, among those eight calls.
function playStatistics(){
    var high = 0;
    var low = 6;
    var arr =[];
    for(var i = 1; i <= 8; i++){
        arr.push(rollOne());    
    }
    for(var i = 0; i < arr.length; i++){
        if (high < arr[i]){
            high = arr[i];
        }
        if (low > arr[i]){
            low = arr[i];
        }
    }
    console.log(arr);
    console.log(high, low);
}

playStatistics();


// 4) Fourth, make a copy of playStatistics and add code to make playStatistics2(), so
// that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.
function playStatistics2(){
    var high = 0;
    var low = 6;
    var sum = 0;
    var arr =[];
    for(var i = 1; i <= 8; i++){
        arr.push(rollOne());    
    }
    for(var i = 0; i < arr.length; i++){
        
        if (high < arr[i]){
            high = arr[i];
        }
        if (low > arr[i]){
            low = arr[i];
        }
        sum += arr[i];
    }
    
    console.log(arr);
    console.log(high, low, sum);
}

playStatistics2();


// 5) Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that
// it will roll as many times as you want, instead of always doing this eight times.
function playStatistics3(num){
    var high = 0;
    var low = 6;
    var sum = 0;
    var arr =[];
    for(var i = 1; i <= num; i++){
        arr.push(rollOne());    
    }
    for(var i = 0; i < arr.length; i++){
        
        if (high < arr[i]){
            high = arr[i];
        }
        if (low > arr[i]){
            low = arr[i];
        }
        sum += arr[i];
    }
    
    console.log(arr);
    console.log(high, low, sum);
}

playStatistics3(5);

// 6) Finally, make a copy of playStatistics3 and change it to create playStatistics4(num),
// so that at the end instead of the total sum, it prints the average roll.
function playStatistics4(num){
    var high = 0;
    var low = 6;
    var sum = 0;
    var avg = 0; 
    var arr =[];
    for(var i = 1; i <= num; i++){
        arr.push(rollOne());    
    }
    for(var i = 0; i < arr.length; i++){
        
        if (high < arr[i]){
            high = arr[i];
        }
        if (low > arr[i]){
            low = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    
    console.log(arr);
    console.log(high, low, avg);
}

playStatistics4(5);

//  Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns
// integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row.
// Display number of rolls, min, max, and average.
function rollTwenty() {
    var rand = Math.random() * 20;
    rand = Math.ceil(rand);
    return rand;
}

function rollCount() {
    var count = 0;
    var arr = [];
    var high = 0;
    var low = 20;
    var sum = 0;
    var avg = 0;

    do {
        arr.push(rollTwenty());
        count++;
    }
    while (arr[arr.length - 1] != arr[arr.length - 2])

    for (var i = 0; i < arr.length; i++) {
        if (high < arr[i]) {
            high = arr[i];
        }
        if (low > arr[i]) {
            low = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / arr.length;

    console.log(arr, count, high, low, avg);
}

rollCount();