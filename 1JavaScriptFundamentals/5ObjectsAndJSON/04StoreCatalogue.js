function storeCatalogue(input) {
    let productMap = new Map();

    for (let i = 0; i < input.length; i++) {

        let smth = input[i].split(' : ');
        let name = smth[0];
        let price = Number(smth[1]);
        productMap.set(name, price)
    }
    let finalMap = new Map([...productMap].sort((a, b) => a > b ? 1 : -1));

    let otherMap = new Map();

    for ([key, value] of finalMap) {
        let char = key.substr(0, 1).toLocaleUpperCase();

        if (!otherMap.has(char)) {
            otherMap.set(char, `  ${key}: ${value}`);
        }
        else {
            otherMap.set(char, otherMap.get(char) + `\n  ${key}: ${value}`)
        }
    }
    for ([key, value] of otherMap) {
        console.log(key);
        console.log(value)
    }
}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
    'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);