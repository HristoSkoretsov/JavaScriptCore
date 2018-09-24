function gladiatorInventory(input) {

    let peshoInventory = [];

    for (let i = 0; i < input.length; i++) {

        let command = input[i].split(' ');
        if (command[0] === 'Fight!') {
            break;
        }
        if (i === 0) {
            for (let j = 0; j < command.length; j++) {
                peshoInventory.push(command[j]);
            }
            continue;
        }
        if (command[0] === 'Buy') {
            let counter = 0;
            for (let j = 0; j < peshoInventory.length; j++) {
                if (peshoInventory[j] === command[1]) {
                    counter++
                }
            }
            if (counter === 0) {
                peshoInventory.push(command[1]);
            }
            counter = 0;
        }
        else if (command[0] === 'Trash') {
            let counter = 0;
            for (let j = 0; j < peshoInventory.length; j++) {
                if (counter === 0) {
                    if (peshoInventory[j] === command[1]) {
                        peshoInventory.splice(j, 1);
                        // peshoInventory[j].pop(); ---- маха последен елемент
                        counter++
                    }
                }
            }
            counter = 0;
        }
        else if (command[0] === 'Repair') {
            let counter = 0;
            for (let j = 0; j < peshoInventory.length; j++) {
                if (counter === 0) {
                    if (peshoInventory[j] === command[1]) {
                        peshoInventory.splice(j, 1); // - маха на j - позиция, 1 - елемент
                        peshoInventory.push(command[1]);
                        counter++
                    }
                }
            }
            counter = 0;
        }
        else {
            let el = command[1].split('-');
            let equipment = el[0];
            let upgrade = el[1];

            let counter = 0;
            for (let j = 0; j < peshoInventory.length; j++) {
                if (counter === 0) {
                    if (peshoInventory[j] === equipment) {

                        let upgradedElement = equipment + ':' + upgrade;
                        peshoInventory.splice(j + 1, 0, upgradedElement); // at index position j+1, remove 0 elements, then add "upgradedElement" to that position
                        counter++
                    }
                }
            }
            counter = 0;
        }
    }
    console.log(peshoInventory.join(' '))
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield',
    'Repair Spear', 'Upgrade SWORD-Steel', 'Fight!']);