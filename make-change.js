function generateCoinChange(money) {
    var i = money,
        amount = 25,
        penny = 0,
        nickel = 0,
        dime = 0,
        quarter = 0;
    for (i; i > 0; i - amount) {
        if (i >= 25) {
            amount = 25;
            i -= amount;
            quarter++;
        } else if (i >= 10) {
            amount = 10;
            i -= amount;
            dime++;
        } else if (i >= 5) {
            amount = 5;
            i -= amount;
            nickel++;
        } else if (i >= 1) {
            amount = 1;
            i -= amount;
            penny++;
        }
    }

    console.log(quarter, dime, nickel, penny);
}

var cash = 94;
change = generateCoinChange(cash);