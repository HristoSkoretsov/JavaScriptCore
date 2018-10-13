function minkeDecode(input) {

    let first = Number(input[0]);
    let second = Number(input[1]);
    let replacement = input[2];

    let regexNum = /[0-9]{3}\.?[0-9]*/g;
    let regexCountry = /[A-Z]{1}[a-z]+[A-Z]{1}/g;
    let nums = input[3].match(regexNum).map(a=>Math.ceil(Number(a)));
    let city='';
    let country = input[3].match(regexCountry);
    for (let i = 0; i <nums.length ; i++) {
        if(i===0){
            city+=String.fromCharCode(nums[i]).toUpperCase();
        }
        else if (i===nums.length-1)
            city+=String.fromCharCode(nums[i]).toLowerCase();
        else {
            city+=String.fromCharCode(nums[i]);
        }
    }
    let f =country[0].split('').splice(first,second-first+1).join('').toString();

    let country1 = country[0].replace(f, replacement).split('');
    let finalCountry = '';

    for (let i = 0; i <country1.length ; i++) {
        if(i===0){
            finalCountry+=country1[i].toUpperCase();
            continue;
        }
        finalCountry+=country1[i].toLowerCase();
    }
    console.log(finalCountry + ' => ' + city);
}