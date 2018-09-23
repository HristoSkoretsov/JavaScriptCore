function solve(input) {

    let arr = [];
    let counter = 1;

    for (let i = 0; i <input.length ; i++) {

        if(input[i] ==='add'){
            arr.push(counter);
            counter++
        }
        if(input[i]==='remove'){
            arr.pop();
            counter++
        }
    }
    if(arr.length===0){
        console.log('Empty')
    }
    else {
        for (let i = 0; i <arr.length ; i++) {
            console.log(arr[i]);

        }
    }
}

solve(['remove', 'remove', 'remove'])