function gladiatorExpenses(a,b,c,d,f) {

    let lostFights = Number(a);
    let helmetPrice = Number(b);
    let swardPrice = Number(c);
    let shieldPrice = Number(d);
    let armorPrice = Number(f);

    let counter = 0;

    let helmetEx = Math.floor(lostFights/2)*helmetPrice;
    let swardEx = Math.floor(lostFights/3)*swardPrice;

    for (let i = 1; i < lostFights+1; i++) {
        if(i%2===0 && i%3===0){
            counter++
        }
    }
    let shieldEx = counter*shieldPrice;
    let armorEx = Math.floor(counter/2)*armorPrice;
    let totalEx = helmetEx+swardEx+shieldEx+armorEx;

    console.log(`Gladiator expenses: ${totalEx.toFixed(2)} aureus`);
}

gladiatorExpenses(7,2,3,4,5);
gladiatorExpenses(23,12.50,21.50,40,200);