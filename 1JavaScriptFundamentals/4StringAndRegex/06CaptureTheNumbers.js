function captureTheNumbers(input){

    let numRegex = /[0-9]+/g;
    let text = input.join(' ');
    let nums = text.match(numRegex);
    console.log(nums.join(' '));

}

captureTheNumbers(['312lsad sada', 'dada 76 89 llols76'])