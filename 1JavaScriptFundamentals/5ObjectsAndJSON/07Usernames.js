function userName(input) {

    let names = new Set();

    for (let i = 0; i < input.length; i++) {
        names.add(input[i]);
    }
    Array.from(names).sort((a, b) => {

            if (a.length < b.length) { // ---ascending order otherwise >
                return -1;
            }
            else if (a.length > b.length) {
                return 1;
            }
            else { // a == b
                if (a < b) { // ---ascending order otherwise >
                    return -1;
                } else if (a > b) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    ).forEach(a => console.log(a));
}

userName(['Ashton', 'Kutcher', 'Ariel', 'Lilly', 'Keyden', 'Aizen', 'Billy', 'Braston', 'Ariel']);