function minkaTravel(input) {

    let minkaMap = new Map();

    for (let i = 0; i < input.length; i++) {

        let smth = input[i].split(' > ');
        let country = smth[0];
        let fr = smth[1].split('');
        let town ='';
        for (let j = 0; j <fr.length ; j++) {
            if(j===0){
                town+=fr[j].toUpperCase()
            }
            else {
                town+=fr[j];
            }
        }

        let cost = Number(smth[2]);

        if (!minkaMap.has(country)) {
            minkaMap.set(country, new Set([town+' -> ' + cost]));
        }
        else {
            let brandKeys = new Set(minkaMap.get(country));
            let counter = 0;
            for (let b of brandKeys){
                let g = b.split(' -> ');
                if (g[0]===town && Number(g[1])>cost){
                    counter++;
                    brandKeys.delete(b);
                    brandKeys.add(town+' -> ' + cost);
                    minkaMap.set(country, brandKeys);
                    break;
                }
            }
            if(counter===0){
                brandKeys.add(town+' -> ' + cost);
                minkaMap.set(country, brandKeys);
            }
            counter=0;
        }
    }
    let finalMap = new Map([...minkaMap].sort((a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) { // ---ascending order otherwise >
            return -1;
        }
        else if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
        }
        else {
            return 0
        }
    }));
    //console.log(finalMap)
    for (let [a,b] of finalMap){

        let sortedTowns = Array.from(b).sort((a, b) => {
            if (Number(a.split(' -> ')[1]) < Number(b.split(' -> ')[1])) { // ---descending order otherwise >
                return -1;
            }
            else if (Number(a.split(' -> ')[1]) > Number(b.split(' -> ')[1])) {
                return 1;
            }}
        );
        console.log(a +' -> '+ sortedTowns.join(' '))
    }
}