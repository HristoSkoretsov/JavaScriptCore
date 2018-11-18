function wareHouseMachine(input) {

    let coffeeMap = new Map();

    for (let i = 0; i < input.length; i++) {

        let things = input[i].split(', ');
        if (things[0] === 'IN') {
            let brand = things[1];
            let name = things[2];
            let date = things[3];
            let quantity = +things[4];

            if (!coffeeMap.has(brand)) {
                coffeeMap.set(brand, new Map().set(name, date + ' ' + quantity));
            }
            else {
                if (!coffeeMap.get(brand).has(name)) {
                    coffeeMap.get(brand).set(name, date + ' ' + quantity)
                }
                else {
                    let oldDate = coffeeMap.get(brand).get(name).split(' ')[0];
                    if (oldDate < date) {
                        coffeeMap.get(brand).set(name, date + ' ' + quantity)
                    }
                    else if (oldDate === date) {
                        let oldQuantity = +coffeeMap.get(brand).get(name).split(' ')[1] + quantity;
                        coffeeMap.get(brand).set(name, date + ' ' + oldQuantity);
                    }
                }
            }

        }
        else if (things[0] === 'OUT') {
            let brand = things[1];
            let name = things[2];
            let date = things[3];
            let quantity = things[4];
            if (coffeeMap.has(brand) && coffeeMap.get(brand).has(name)) {
                let currentDate = coffeeMap.get(brand).get(name).split(' ')[0];
                let currentQuantity = +coffeeMap.get(brand).get(name).split(' ')[1];

                if (currentDate > date) {
                    let newQuantity = +coffeeMap.get(brand).get(name).split(' ')[1] - quantity;
                    coffeeMap.get(brand).set(name, currentDate + ' ' + newQuantity);
                }
            }
        }
        else if (things[0] === 'REPORT') {

            if (coffeeMap.size > 0) {
                console.log('>>>>> REPORT! <<<<<');
                for (let [brand, other] of coffeeMap) {

                    console.log(`Brand: ${brand}:`);

                    for (let [name, info] of other) {
                        let date = info.split(' ')[0];
                        let quantity = info.split(' ')[1];
                        console.log(`-> ${name} -> ${date} -> ${quantity}.`)
                    }
                }
            }
        }
        else if (things[0] === 'INSPECTION') {

            let coffeeMap1 = Array.from(coffeeMap.keys()).sort();
            let brands = coffeeMap.values();
            let finalBrand = [...brands];
            if (coffeeMap1.length > 0 && finalBrand.length > 0) {
                console.log('>>>>> INSPECTION! <<<<<');
                for (let j = 0; j < coffeeMap1.length; j++) {
                    console.log(`Brand: ${coffeeMap1[j]}:`);
                    let a = finalBrand[j];
                    let b = [...finalBrand[j]].sort((a, b) => b[1].split(' ')[1] - a[1].split(' ')[1]);
                    //console.log(b);
                    for (let [name, other] of b) {
                        let date = other.split(' ')[0];
                        let quantity = other.split(' ')[1];
                        console.log(`-> ${name} -> ${date} -> ${quantity}.`);
                    }
                }
            }
        }
    }
}

wareHouseMachine([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION"

]);