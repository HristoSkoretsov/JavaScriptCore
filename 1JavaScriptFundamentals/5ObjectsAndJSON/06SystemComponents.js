function systemComponents(input) {

    let systemMap = new Map();

    for (let i = 0; i < input.length; i++) {

        let smth = input[i].split(' | ');
        let systemName = smth[0];
        let componentName = smth[1];
        let subComponentName = smth[2];

        if (!systemMap.has(systemName)) {
            systemMap.set(systemName, new Map().set(componentName, new Set().add(subComponentName)));
        }
        else {
            if (!systemMap.get(systemName).has(componentName))
                systemMap.get(systemName).set(componentName, new Set().add(subComponentName));
            else {
                systemMap.get(systemName).get(componentName).add(subComponentName);
            }
        }
    }
    let finalMap = new Map([...systemMap].sort((a, b) => {
            if (a[1].size > b[1].size) { // ---ascending order otherwise >
                return -1;
            }
            else if (a[1].size < b[1].size) {
                return 1;
            }
            else {
                if (a[0].toString().toLowerCase() < b[0].toString().toLowerCase()) { // ---ascending order otherwise >
                    return -1;
                } else if (a[0].toString().toLowerCase() > b[0].toString().toLowerCase()) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    ));

    for (let [system, components] of finalMap) {
        console.log(`${system}`);
        let someMap = new Map(
            [...components].sort((a, b) => {
                if (a[1].size > b[1].size) { // ---descending order otherwise >
                    return -1;
                }
                else if (a[1].size < b[1].size) {
                    return 1;
                }
            }));
        for (let [component, subComponent] of someMap) {
            console.log(`|||${component}`);
            subComponent.forEach(a => console.log(`||||||${a}`))
        }
    }
}

systemComponents(['SULS | Main Site | Home Page', 'SULS | Main Site | Login Page', 'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page', 'SULS | Judge Site | Submittion Page',
    'Lambda | CoreB | B24', 'SULS | Digital Site | Login Page', 'Lambda | CoreA | A23',
    'Lambda | CoreA | A24', 'Lambda | CoreA | A25', 'Lambda | CoreC | C4',
    'Indice | Session | Default Storage', 'Indice | Session | Default Security']);