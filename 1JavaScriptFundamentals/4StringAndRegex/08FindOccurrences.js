function findOccurrences(string, word) {

    let r1 =  "\\b(" +word+")\\b";
    let regex = new RegExp(r1,'ig');
    let nums = string.match(regex);
    if(nums!==null){
    console.log(nums.length);}
    else {console.log(0)}
}

findOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'they');