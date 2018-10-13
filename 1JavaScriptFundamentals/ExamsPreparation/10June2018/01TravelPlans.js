function travelPlans(input) {

    let totalGold = 0;
    let specializedProf = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let avgProf = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsyProf = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing',
        'Lecturing', 'Modeling', 'Nursing'];

    let specCounter = 0;
    let clumsyCounter = 0;

    for (let i = 0; i < input.length ; i++) {

        let profession = input[i].split(' : ')[0];
        let gold = Number(input[i].split(' : ')[1]);

        if(specializedProf.includes(profession)){
            if(gold>=200){
                specCounter++;
                totalGold+=gold * 0.8;
                if(specCounter%2===0){
                    totalGold+=200;
                }
            }
        }
        else if(avgProf.includes(profession)){
            totalGold+=gold;
        }
        else if (clumsyProf.includes(profession)){
            clumsyCounter++;
            if(clumsyCounter%2===0){
             totalGold+=gold*0.95;
            }
            else  if(clumsyCounter%3===0){
                totalGold+=gold*0.90;
            }else {
                totalGold+=gold;
            }
        }
    }
    console.log(`Final sum: ${totalGold.toFixed(2)}`);
    if (totalGold < 1000) {
        let diff = 1000 - totalGold;
        console.log(`Mariyka need to earn ${diff.toFixed(2)} gold more to continue in the next task.`);
    } else {
        let diff = totalGold - 1000;
        console.log(`Mariyka earned ${diff.toFixed(2)} gold more.`)
    }
}
travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", 'Singing : 100', 'Cooking : 199' +
'Hardware maintenance : 800', 'Gardening : 700','Programming : 500']);