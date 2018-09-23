function rotateArr(input) {
    let numRotation =  Number(input[input.length-1]);

    let finalArr  = input.slice(0,input.length-1);

    for (let i = 0; i < numRotation%finalArr.length ; i++) {
        let firstNum = finalArr[finalArr.length-1];
        finalArr.unshift(firstNum);
        finalArr.pop(firstNum);
    }
    console.log(finalArr.join(' '));

    // Не минава за време така, последният тест !
    // for (let i = 0; i < numRotation ; i++) {
    //     let firstNum = finalArr[finalArr.length-1];
    //     finalArr.unshift(firstNum);
    //     finalArr.pop(firstNum);
    // }
    // console.log(finalArr.join(' '));

}

rotateArr(['Banana','Orange','Coconut', 'Apple',15])