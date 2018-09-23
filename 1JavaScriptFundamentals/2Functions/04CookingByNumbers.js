function cook(input) {
    let num = Number(input[0]);

        for (let i = 1; i < input.length; i++) {
            if (input[i] === 'chop') {
                num = num / 2;
             console.log( num);
            }
            else if (input[i] === 'dice') {
                num = Math.sqrt(num);
                console.log(num);
            }
            else if (input[i] === 'bake') {
                num = num * 3;
              console.log(num)
            }
            else if (input[i] === 'fillet') {
                num = num * 0.8;
              console.log(num)
            }
            else if (input[i] === 'spice'){
                num = num+1;
                console.log(num)
            }
        }
}

cook([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
cook([32, 'chop', 'chop', 'chop', 'chop', 'chop'])