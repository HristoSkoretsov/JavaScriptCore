function uniqueSequences0(input) {

    let result = [];

    for (let i = 0; i < input.length ; i++) {

        let currentRow = JSON.parse(input[i])
            .map(Number)
            .sort((a,b) => b-a)
            .toString();

        if(result.length===0){
            result.push(currentRow);
            continue;
        }
        let counter = 0;
        for(let a of result){
            if(a.localeCompare(currentRow)===0){
                counter++;
            }
        }
        if(counter===0){
            result.push(currentRow)
        }
        counter=0;

    }
    let finalResult = [];
    for(let g of result){
        let srr = g.split(',');
        finalResult.push(srr);
    }
    finalResult.sort((a,b) => a.length - b.length).forEach(a=>console.log(`[${a.join(', ')}]`));
}

uniqueSequences0(['[-3, -2, -1, 0, 1, 2, 3, 4]', '[10, 1, -17, 0, 2, 13]', '[4, -3, 3, -2, 2, -1, 1, 0]'])
