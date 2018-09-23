function figureOfFourSquares(input) {

    let n = Number(input);
    if(n===3 || n ===4){
        console.log('+--+--+\n' +
            '+--+--+\n' +
            '+--+--+\n');
        return
    }

    console.log('+' + '-'.repeat(n-2) + '+' + '-'.repeat(n-2) + '+' );

            for (let i = 0; i < (n-4)/2; i++) {
            console.log('|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|');
        }

    console.log('+' + '-'.repeat(n-2) + '+' + '-'.repeat(n-2) + '+' );

        for (let i = 0; i < (n-4)/2; i++) {
            console.log('|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|');
        }

    console.log('+' + '-'.repeat(n-2) + '+' + '-'.repeat(n-2) + '+' );
}
    figureOfFourSquares(10);

// Second one

// function drawFourSquares(n) {
//     let square = '';
//     let linesCount = n % 2 == 0 ? n - 1 : n;
//     let middle = Math.ceil(linesCount * 1.0 / 2);
//     let innerCharsCount = n - 2;
//
//     for(let i = 1; i <= linesCount; i++) {
//         let isBorder = i === 1 || i == =linesCount || i === middle;
//         let divisor = isBorder ? '+' : '|';
//         let fillingChars = isBorder ? '-' : ' ';
//
//         square += divisor + fillingChars.repeat(innerCharsCount) + divisor + fillingChars.repeat(innerCharsCount) + divisor + '\n';
//     }
//
//     console.log(square);
// }