function extractFromArr(input) {

    let minNum = Number.MIN_SAFE_INTEGER;
    minNum = input[0];
    let arr1 = [];
    arr1.push(minNum)
    //console.log(minNum);
    for (let i = 1; i <input.length ; i++) {
        if(input[i]>=minNum && input[i]!==undefined){
            minNum=input[i];
            arr1.push(minNum)
        }
    }
    arr1.forEach(e => console.log(e));
}

extractFromArr([1,3,8,4,10,12, 12, 3,2,24])