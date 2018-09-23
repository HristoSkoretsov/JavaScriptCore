function endsWith(text, ends) {
    let index = text.split(/\s+/).length;
    let firstWord = text.split(/\s+/)[index-1];
    if(firstWord===ends){
        console.log('true')
    } else {
        console.log('false')
    }
}
endsWith('THis sentence ends with fun?', 'fun?');