function kompot(input) {

    let peach = 0;
    let plum = 0;
    let cherry = 0;
    let rakia = 0;

    for (let i = 0; i < input.length ; i++) {

        let smth = input[i].split(/\s+/);
        let fruit = smth[0];
        let quantity = Number(smth[1]);

        if(fruit==='peach'){
            peach+=quantity;
        }else if (fruit==='plum'){
            plum+=quantity;
        }else if(fruit==='cherry'){
            cherry+=quantity;
        }else {
            rakia+=quantity;
        }

    }

    let cherryCompots = Math.floor(((cherry*1000)/9)/25);
    let peachCompots = Math.floor(((peach*1000)/140)/2.5);
    let plumCompots = Math.floor(((plum*1000)/20)/10);
    let rakiaCompots = rakia*0.200;


    console.log(`Cherry kompots: ${cherryCompots}`);
    console.log(`Peach kompots: ${peachCompots}`);
    console.log(`Plum kompots: ${plumCompots}`);
    if(rakiaCompots>1) {
        console.log(`Rakiya liters: ${rakiaCompots.toFixed(2)}`);
    }
}
 kompot([ 'cherry 1.2',
     'peach 2.2',
     'plum 5.2',
     'peach 0.1',
     'cherry 0.2',
     'cherry 5.0',
     'plum 10',
     'cherry 20.0' ,
     'papaya 20' ]
);

kompot([   'apple 6',
        'peach 25.158',
        'strawberry 0.200',
        'peach 0.1',
        'banana 1.55',
        'cherry 20.5',
        'banana 16.8',
        'grapes 205.65'
        ,'watermelon 20.54'
    ]
);