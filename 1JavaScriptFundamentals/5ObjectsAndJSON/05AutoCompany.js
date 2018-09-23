function autoCompany(input) {

    let carMap = new Map();

    for (let i = 0; i < input.length; i++) {

        let smth = input[i].split(' | ');
        let brand = smth[0];
        let model = smth[1];
        let quantity = Number(smth[2]);

        if (!carMap.has(brand)) {
            carMap.set(brand, new Map().set(model, quantity));
        }
        else {
            if (!carMap.get(brand).has(model))
                carMap.get(brand).set(model, quantity);
            else {
                carMap.get(brand).set(model, carMap.get(brand).get(model) + quantity);
            }
        }
    }
    for (let [key, value] of carMap) {
        console.log(key);
        for (let [model, quantity] of value) {
            console.log(`###${model} -> ${quantity}`)
        }
    }
}

autoCompany(['Audi | Q7 | 1000', 'Audi | Q6 | 100', 'BMW | X5 | 1000', 'BMW | X6 | 100',
    'Citroen | C4 | 123', 'Volga | GAZ-24 | 1000000', 'Lada | Niva | 1000000', 'Lada | Jigula | 1000000',
    'Citroen | C4 | 22', 'Citroen | C5 | 10'])