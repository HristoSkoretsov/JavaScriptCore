function questionAnswer(input) {

    let finalText = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n';

    for (let i = 0; i <input.length ; i+=2) {
        finalText+='  <question>\n' + '    ' + input[i] + '\n'+ '  </question>\n'
        finalText+='  <answer>\n'+ '    ' + input[i+1] + '\n'+ '  </answer>\n'
    }

    finalText+='</quiz>'
    console.log(finalText)
}

questionAnswer(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]

)