function cappyJuice(input) {

    let firstMap = new Map();
    let finalMap = new Map();

    for (let i = 0; i < input.length ; i++) {

        let smth = input[i].split(' => ');
        let fruit = smth[0];
        let quantity = Number(smth[1]);

        if(!firstMap.has(fruit)){
            firstMap.set(fruit,quantity);
            if(quantity>=1000){
                finalMap.set(fruit,quantity)
            }
        }
        else {
            firstMap.set(fruit,firstMap.get(fruit)+quantity)
            if(firstMap.get(fruit)>=1000){
                finalMap.set(fruit,firstMap.get(fruit))
            }
        }
    }

    for(let[fruit, quantity] of finalMap){
        let bottles = Math.floor(quantity/1000);
        console.log(fruit + ' => ' + bottles)
    }
}
cappyJuice(['Kiwi => 234','Pear => 2345','Watermelon => 3456',
    'Kiwi => 4567','Pear => 5678','Watermelon => 6789']);