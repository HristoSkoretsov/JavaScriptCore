function ancientMemory(input) {
    let smth = input.join(' ').split(' ');
    let names = [];
    let name = '';

    for (let i = 0; i < smth.length; i++) {
        if (smth[i] === '32656' && smth[i + 1] === '19759' && smth[i + 2] === '32763'
            && smth [i + 3] === '0' && smth[i + 5] === '0') {
            let stringLength = Number(smth[i + 4]);
                for (let j = 1; j < stringLength + 1; j++) {
                    name += String.fromCharCode(smth[i + 5 + j]);
                }
                names.push(name);
                name = '';
                i += 5 + stringLength;
            }
        }
    console.log(names.join('\n'));
}

ancientMemory(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0']);