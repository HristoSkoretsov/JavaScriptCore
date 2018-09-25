function arena(input) {

    let arenaMap = new Map();

    for (let i = 0; i < input.length; i++) {

        if (input[i].startsWith('Ave Cesar')) {
            break;
        }
        let smth = input[i].split(' -> ');
        if (smth.length > 1) {
            let gladiator = smth[0];
            let technique = smth[1];
            let skill = Number(smth[2]);
            if (!arenaMap.has(gladiator)) {
                arenaMap.set(gladiator, new Map().set(technique, skill));
            }
            else {
                if (!arenaMap.get(gladiator).has(technique)) {
                    arenaMap.get(gladiator).set(technique, skill);
                }
                else {
                    if (arenaMap.get(gladiator).get(technique) < skill) {
                        arenaMap.get(gladiator).set(technique, skill);
                    }
                }
            }
        }
        else {
            let first = input[i].split(' vs ')[0];
            let second = input[i].split(' vs ')[1];
            if (arenaMap.has(first) && arenaMap.has(second)) {

                let firstG = new Map(arenaMap.get(first));
                let secondG = new Map(arenaMap.get(second));
                let firstG1 = Array.from(firstG.keys());
                let secondG2 = Array.from(secondG.keys());
                let firstV1 = Array.from(firstG.values());
                let secondV2 = Array.from(secondG.values());

                if (firstG1.length > secondG2.length) {
                    let counter = 0;
                    for (let j = 0; j < secondG2.length; j++) {
                        for (let k = 0; k < firstG1.length; k++) {
                            if (secondG2[j] === firstG1[k] && counter === 0) {
                                let totalSkillFirst = firstV1
                                    .reduce((a, b) => a + b);
                                let totalSkillSecond = secondV2
                                    .reduce((a, b) => a + b);
                                counter++;
                                if (totalSkillFirst > totalSkillSecond) {
                                    arenaMap.delete(second);
                                }
                                else if(totalSkillSecond>totalSkillFirst){
                                    arenaMap.delete(first)
                                }
                            }
                        }
                    }
                    counter = 0;
                }
                else {
                    let counter = 0;
                    for (let j = 0; j < firstG1.length; j++) {
                        for (let k = 0; k < secondG2.length; k++) {
                            if (secondG2[j] === firstG1[k] && counter === 0) {
                                let totalSkillFirst = firstV1
                                    .reduce((a, b) => a + b);
                                let totalSkillSecond = secondV2
                                    .reduce((a, b) => a + b);
                                counter++;
                                if (totalSkillFirst > totalSkillSecond) {
                                    arenaMap.delete(second);
                                }
                                else if(totalSkillSecond>totalSkillFirst) {
                                    arenaMap.delete(first)
                                }
                            }
                        }
                    }
                    counter = 0;
                }
            }
        }
    }

    let finalMap = new Map([...arenaMap]
        .sort((a, b) => {

            let firstG = new Map(a[1]);
            let secondG = new Map(b[1]);
            let firstV1 = Array.from(firstG.values());
            let secondV2 = Array.from(secondG.values());
            let totalSkillFirst = firstV1
                .reduce((r, t) => r + t);
            let totalSkillSecond = secondV2
                .reduce((g, h) => h + g);
            if (totalSkillFirst > totalSkillSecond) {
                return -1;
            }
            else if (totalSkillFirst < totalSkillSecond) {
                return 1;
            }
            else {
                if (a[0] < b[0]) {
                    return -1;
                }
                else if (a[0] > b[0]) {
                    return 1;
                }
            }
        })
    );

    for (let [gladiatorName, other] of finalMap) {
        let firstG = new Map(other);
        let points = Array.from(firstG.values()).reduce((r, t) => r + t);
        console.log(`${gladiatorName}: ${points} skill`);
        let other2 = new Map([...other].sort((a, b) => {
            if (a[1] > b[1]) { // ---descending order otherwise >
                return -1;
            }
            else if (a[1] < b[1]) {
                return 1;
            }
            else {
                if (a[0] < b[0]) { // ---ascending order otherwise >
                    return -1;
                }
                else if (a[0] > b[0]) {
                    return 1;
                }
            }
        }));
        for (let [teh, skil] of other2) {
            console.log(`- ${teh} <!> ${skil}`)
        }
    }
}

// arena(['Pesho -> BattleCry -> 400', 'Gosho -> PowerPunch -> 400', 'Stamat -> Duck -> 200',
//     'Stamat -> Tiger -> 250', 'Ave Cesar'])
arena(['Pesho -> BattleCry -> 400', 'Gosho -> PowerPunch -> 300', 'Stamat -> Duck -> 200',
    'Stamat -> Dhi -> 200',
    'Stamat -> Tiger -> 250', 'Ave Cesar'])