function f1Cham(input) {

    let f1Map = new Map();

    for (let i = 0; i < input.length; i++) {

        let team = input[i].split(' -> ')[0];
        let pilot = input[i].split(' -> ')[1];
        let points = Number(input[i].split(' -> ')[2]);

        if (!f1Map.has(team)) {
            f1Map.set(team, new Map().set(pilot, points));
        }
        else {
            if (!f1Map.get(team).has(pilot)) {
                f1Map.get(team).set(pilot, points)
            }
            else {
                let p = f1Map.get(team).get(pilot);
                f1Map.get(team).set(pilot, points + p)
            }
        }
    }

    let finalMap = [...f1Map].sort((a, b) => {

            if ([...a[1].values()].reduce((z, f) => z + f) > [...b[1].values()].reduce((z, f) => z + f)) { // ---ascending order otherwise >
                return -1;
            }
            else if ([...a[1].values()].reduce((z, f) => z + f) < [...b[1].values()].reduce((z, f) => z + f)) {
                return 1;
            }
            else {
                return 0;
                // if ([...a[1].values()].sort() < b[0].toString().toLowerCase()) { // ---ascending order otherwise >
                //     return -1;
                // } else if (a[0].toString().toLowerCase() > b[0].toString().toLowerCase()) {
                //     return 1;
                // } else {
                //     return 0;
                // }
            }
        }
    );
    let counter = 0;

    for (let [teamName, other] of finalMap) {
        let totalPoints = [...other.values()].reduce((z, f) => z + f);
        console.log(`${teamName}: ${totalPoints}`);
        let smth = [...other].sort((a,b) => b[1]-a[1]);
        for (let [pilotName, points] of smth) {
            console.log(`-- ${pilotName} -> ${points}`)
        }
        counter++;
        if (counter === 3) {
            return
        }
    }
}

f1Cham(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]
);