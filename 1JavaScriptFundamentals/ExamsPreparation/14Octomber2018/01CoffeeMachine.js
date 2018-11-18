function coffeeMachine(input) {

    let totalEarnedMoney = 0;

    for (let i = 0; i < input.length; i++) {

        let order = input[i].split(', ');

        let moneyCome = +order[0];
        let typeOfDrink = order[1];
        let sum = 0;

        if (typeOfDrink === 'coffee') {

            let typeOfCoffee = order[2];

            if (typeOfCoffee === 'caffeine') {


                if (order[3] === 'milk') {
                    sum += 0.9;
                    let quantityOfSugar = +order[4];
                    if (quantityOfSugar !== 0) {
                        sum += 0.1;
                    }
                }
                else {
                    sum += 0.8;
                    let quantityOfSugar = +order[3];
                    if (quantityOfSugar !== 0) {
                        sum += 0.1;
                    }
                }
            }
            else {
                if (order[3] === 'milk') {
                    sum += 1;
                    let quantityOfSugar = +order[4];
                    if (quantityOfSugar !== 0) {
                        sum += 0.1;
                    }
                }
                else {
                    sum += 0.9;
                    let quantityOfSugar = +order[3];
                    if (quantityOfSugar !== 0) {
                        sum += 0.1;
                    }
                }
            }

        }
        else {
            if (order[2] === 'milk') {
                sum += 0.9;
                let quantityOfSugar = +order[3];
                if (quantityOfSugar !== 0) {
                    sum += 0.1;
                }
            }
            else {
                sum += 0.8;
                let quantityOfSugar = +order[2];
                if (quantityOfSugar !== 0) {
                    sum += 0.1;
                }
            }
        }

        if (moneyCome - sum >= 0) {
            totalEarnedMoney += sum;
            console.log(`You ordered ${typeOfDrink}. Price: ${sum.toFixed(2)}$ Change: ${(moneyCome - sum).toFixed(2)}$`)
        } else {
            console.log(`Not enough money for ${typeOfDrink}. Need ${(sum - moneyCome).toFixed(2)}$ more.`)
        }
    }
    console.log(`Income Report: ${totalEarnedMoney.toFixed(2)}$`)
}
coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);