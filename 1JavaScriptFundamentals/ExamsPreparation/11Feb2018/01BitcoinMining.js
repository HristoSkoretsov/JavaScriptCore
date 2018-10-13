function bitCoin(input) {

    let totalAmountOfMoney = 0;
    let counter = 0;
    let dayOfFirstBitcoinBought = 0;
    let try1 = 0;

    for (let i = 0; i < input.length; i++) {

        counter++;
        let moneyEarnDaily = +input[i] * 67.51;
        if (counter % 3 === 0) {
            moneyEarnDaily *= 0.7;
        }
        totalAmountOfMoney += moneyEarnDaily;
        if (try1 === 0 && totalAmountOfMoney >= 11949.16) {
            dayOfFirstBitcoinBought = counter;
            try1++;
        }
    }
    let boughtBitcoins = Math.floor(totalAmountOfMoney/11949.16);
    let moneyLeft = totalAmountOfMoney-(boughtBitcoins*11949.16);
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if(dayOfFirstBitcoinBought!==0){
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoinBought}`);}
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`)
}

bitCoin(['100', '200', '300']);
bitCoin(['50', '100']);