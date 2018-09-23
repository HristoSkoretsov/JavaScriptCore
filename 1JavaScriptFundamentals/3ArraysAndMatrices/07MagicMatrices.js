function magicMatrices(matrix) {

    let test = 0;
    let test2 = 0;
    let test3=0;

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {
            if (row === 0) {
                test += matrix[row][col];
                test2=test;
            }
            else {
                test2 += matrix[row][col];
            }
        }

        if (test !== test2) {
            return console.log('false');
        }
        test2 = 0;
    }
    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {
            test3+=matrix[col][row];
        }
        if (test !== test3) {
            return console.log('false');
        }
        test3=0;
    }
    return console.log('true');
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);