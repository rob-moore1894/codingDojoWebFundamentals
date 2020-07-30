//  Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns
// integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row.
// Display number of rolls, min, max, and average.
function rollTwenty() {
    var rand = Math.random() * 20;
    rand = Math.ceil(rand);
    return rand;
}

//continue to roll until arr[arr.length - 1] == arr[arr.length - 2]
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

    console.log(`Rolled ${count} times, \nwith these numbers: [${arr}],\nHighest number = ${high}, \nLowest number = ${low}, \nAverage = ${avg}`);
}

rollCount();