function atmMachine(input) {

    let banknotesInATM = [];
    //console.log(banknotesInATM.length);
    //let y = banknotesInATM.reduce((a, b) => a + b);

    if (input.length > 0) {

        for (let i = 0; i < input.length; i++) {

            if (input[i].length > 2) {
                let currentBalance = 0;
                let banknotes = input[i];
                for (let j = 0; j < banknotes.length; j++) {
                    currentBalance += +banknotes[j];
                    if (+banknotes[j] !== 0) {
                        banknotesInATM.push(+banknotes[j])
                    }
                }
                if (banknotesInATM.length !== 0) {
                    console.log(`Service Report: ${currentBalance}$ inserted. Current balance: ${banknotesInATM.reduce((a, b) => a + b)}$.`)
                    banknotesInATM.sort((a, b) => b - a);
                }
                else {
                    console.log(`Service Report: ${currentBalance}$ inserted. Current balance: 0$.`);
                    banknotesInATM.sort((a, b) => b - a);
                }

            }
            else if (input[i].length === 2) {
                let currentBalance = +input[i][0];
                let moneyToDraw = +input[i][1];
                if (banknotesInATM.length !== 0) {
                    let g = +banknotesInATM.reduce((a, b) => a + b);
                    if (currentBalance < moneyToDraw) {
                        console.log(`Not enough money in your account. Account balance: ${currentBalance}$.`);
                    } else if (moneyToDraw > g ) {
                        console.log('ATM machine is out of order!');
                    }
                    else {
                        //banknotesInATM.sort((a, b) => b - a);
                        let currentDraw = moneyToDraw;
                        let proba = 0;
                        if (banknotesInATM.length > 0) {
                            for (let j = 0; j < banknotesInATM.length; j++) {


                                    if (currentDraw - banknotesInATM[j] >= 0) {
                                        currentDraw -= banknotesInATM[j];
                                        if (j >= 0) {
                                            banknotesInATM.splice(j, 1);
                                        }
                                        if (banknotesInATM.length > 0) {
                                            j -= 1;
                                        }
                                    }

                                if (currentDraw === 0) {
                                    proba++;
                                    break;
                                }
                            }
                            if (proba > 0) {
                                console.log(`You get ${moneyToDraw}$. Account balance: ${currentBalance - moneyToDraw}$. Thank you!`);
                            }
                        }
                        else {
                            console.log(`You get ${moneyToDraw-currentDraw}$. Account balance: ${currentBalance - (moneyToDraw-currentDraw)}$. Thank you!`);

                        }
                        proba = 0;
                    }
                }
            }
            else if (input[i].length === 1) {
                let value = +input[i];
                let counter = 0;

                if (banknotesInATM.length > 0) {
                    for (let j = 0; j < banknotesInATM.length; j++) {
                        if (banknotesInATM[j] === value) {
                            counter++
                        }
                    }
                }
                console.log(`Service Report: Banknotes from ${value}$: ${counter}.`)
            }
            else {

            }

        }
    }
}
atmMachine([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],

    ]
);