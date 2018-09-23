function uniqueSequences(input) {

    let result = [];

    for (let i = 0; i < input.length ; i++) {

        let currentRow = JSON.parse(input[i])
            .map(Number)
            .sort((a,b) => b-a);

        let currentSum = currentRow.reduce((a,b)=>a+b);

        if(!result.find(arr=>arr.reduce((a,b) => a+b) === currentSum)){
            result.push(currentRow);
        }
    }
    result.sort((a,b) => a.length - b.length).forEach(a=>console.log(`[${a.join(', ')}]`));
}