function solve(input) {
    let test = input;

    function averageMoreThenFive(num) {
        let sum =0;
        let counter=0;
        let gg =num.toString();
        for (let i = 0; i <gg.length; i++) {
            counter++;
            sum+=Number(gg[i]);
        }
        return sum / counter > 5;
    }

    while (!averageMoreThenFive(test)){
        test+='9';
    }
    console.log(test)
}

solve(5835)
solve(111)
solve(561)