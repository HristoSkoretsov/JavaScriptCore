function splitByDelimiter(text, delimiter) {
   let finalText =  text.split(delimiter);
    for (let b of finalText){
        console.log(b);
    }
}
splitByDelimiter('One-Two-Three-Four-Five',  '-'
);