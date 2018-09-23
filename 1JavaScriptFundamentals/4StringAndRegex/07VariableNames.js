function variableNames(input) {
    let numRegex = /_[a-zA-Z0-9]+/g;
    let nums = input.match(numRegex);
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i].substr(1))
    }
    console.log(arr.join(','));
}

variableNames('The _id and _age variables are both integers.');