function startsWith(text, start) {
    let firstWord = text.split(/\s+/)[0];
    if(firstWord===start){
        console.log('true')
    } else {
        console.log('false')
    }
}
startsWith('How have you been?', 'how');