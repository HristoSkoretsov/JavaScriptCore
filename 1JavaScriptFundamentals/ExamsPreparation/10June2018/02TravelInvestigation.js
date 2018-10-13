function travelInvestigation(input) {

    let valid = [];
    let invalid = [];
    let numCom = 0;

    for (let i = 2; i < input.length ; i++) {

        let separator = input[1];
        let companies = input[0].split(separator);
        let sentence1 = input[i];
        let sentence = input[i].split(/\s/).map(a=>a.toLowerCase());

        for (let j = 0; j <companies.length ; j++) {
            if(sentence.includes(companies[j].trim())){
                numCom++
            }
        }

        if (numCom===companies.length){
            valid.push(sentence.join(' '));
        } else {
            invalid.push(sentence.join(' '));
        }
        numCom=0;
    }
    let k = 0;
    if(valid.length>0){
        k++;
        console.log('ValidSentences');
        for (let i = 0; i <valid.length ; i++) {
            console.log(i+1 +'. ' + valid[i]);

        }
    }
    if(invalid.length>0){
        if(k>0){
            console.log('='.repeat(30));
            console.log('InvalidSentences');
            for (let i = 0; i <invalid.length ; i++) {
                console.log(i+1 +'. ' + invalid[i]);
            }
        }
    }
}