function pollution(input, commands) {

    let matrix = input.map(row => row.split(" ").map(Number));
    let finalResult = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i].split(' ')[0] === 'breeze') {
            let row = +commands[i].split(' ')[1];
            for (let j = 0; j < 5; j++) {
                if (matrix[row][j] - 15 < 0) {

                }
                else {
                    matrix[row][j] -= 15;
                }
            }
        }
        else if (commands[i].split(' ')[0] === 'gale') {
            let col = +commands[i].split(' ')[1];
            for (let j = 0; j < 5; j++) {
                if (matrix[j][col] - 20 < 0) {
                } else {
                    matrix[j][col] -= 20;
                }
            }
        }
        else if (commands[i].split(' ')[0] === 'smog') {
            let val = +commands[i].split(' ')[1];
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    matrix[row][col] += val;
                }
            }
        }
    }

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col] >= 50) {
                finalResult.push('[' + row + '-' + col + ']')
            }
        }
    }
    if (finalResult.length > 0) {
        console.log(`Polluted areas: ${finalResult.join(', ')}`);
    }
    else {
        console.log('No polluted areas')
    }
}

pollution([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    ["smog 11", "gale 3", "breeze 1", "smog 2"]
);