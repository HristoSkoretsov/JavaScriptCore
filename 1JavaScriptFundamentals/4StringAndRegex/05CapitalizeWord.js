function capitalizedWord(text) {
    let arr =[];
    let replace = '';
    let word = '';

    let m = text.split(/\s+/);

    for (let i = 0; i <m.length ; i++) {
        word = m[i].split('');
        word[0]=word[0].toUpperCase();
        for (let j = 1; j <word.length ; j++) {
            word[j]=word[j].toLowerCase();
        }
        replace = word.join('');
        arr.push(replace)
    }
    console.log(arr.join(' '));
}

capitalizedWord('Was That Easy? Try This One For Size!');