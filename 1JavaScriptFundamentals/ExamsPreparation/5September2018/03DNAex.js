function dnaEX(input) {

    let regex = /([a-z!@#$?]+)=([0-9]+)--([0-9]+)<<([a-z]+)/gm;
    let text1 = input.join(' ');
    let text = text1.match(regex);
    let map = new Map();
    for (let element of text) {
        let name1 = element.split('=')[0];
        let length = +element.split('=')[1].split('--')[0];
        let count = +element.split('--')[1].split('<<')[0];
        let organism = element.split('<<')[1];
        let name = name1.split(/[!@#$?]/)
            .filter(a => a !== '!')
            .filter(a => a !== '@')
            .filter(a => a !== '#')
            .filter(a => a !== '$')
            .filter(a => a !== '?')
            .join('');

        if (name.length === length) {
            if (map.has(organism)) {
                map.set(organism, map.get(organism) + count)
            }
            else {
                map.set(organism, count)
            }
        }
    }
    let finalMap = [...map].sort((a, b) => b[1] - a[1]);
    for (let [a, b] of finalMap) {
        console.log(`${a} has genome size of ${b}`)
    }
}

// dnaEX(['!@ab?si?di!a@=7--152<<human',
//     'b!etu?la@=6--321<<dog',
//     '!curtob@acter##ium$=14--230<<dog',
//     '!some@thin@g##=9<<human',
//     'Stop!']
// );

dnaEX(['=12<<cat', '!vi@rus?=2--142', '?!cur##viba@cter!!=11--800<<cat', '!fre?esia#=7--450<<mouse',
    '@pa!rcuba@cteria$=13--351<<mouse', '!richel#ia??=8--900<<human']);