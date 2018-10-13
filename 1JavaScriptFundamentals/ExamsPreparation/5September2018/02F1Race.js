function f1Race(input) {

    let pilots = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {

        let pilot = input[i].split(' ')[1];
        let action = input[i].split(' ')[0];

        if (action === 'Join' && !pilots.includes(pilot)) {
            pilots.push(pilot)
        }
        else if (action === 'Crash' && pilots.includes(pilot)) {
            let num = pilots.indexOf(pilot);
            pilots.splice(num, 1);
        }
        else if (action === 'Pit' && pilots.includes(pilot)) {
            let num = pilots.indexOf(pilot);
            let becomeFirstPilot = pilots[num+1];
            pilots.splice(num, 2, becomeFirstPilot, pilot);
            //pilots.splice(num, 1);
            //pilots.splice(num + 1, 0, pilot); // at index position j+1, remove 0 elements, then add "upgradedElement" to that position


        }
        else if (action === 'Overtake' && pilots.includes(pilot)) {
            let num = pilots.indexOf(pilot);
            let becomeSecondPilot = pilots[num-1];
            pilots.splice(num-1, 2, pilot, becomeSecondPilot);
            //pilots.splice(num, 1); // на позиция num изтрива един елемент
            //pilots.splice(num - 1, 0, pilot); // at index position j+1, remove 0 elements, then add "upgradedElement" to that position


        }
    }

    if (pilots.length > 0) {
        console.log(pilots.join(' ~ '))
    }
}

f1Race(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"]
);

f1Race(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]
);