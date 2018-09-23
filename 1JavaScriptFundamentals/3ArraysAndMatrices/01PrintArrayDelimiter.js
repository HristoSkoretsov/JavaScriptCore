function delimiter(input) {
    let del = input[input.length-1];
    input.pop();
    console.log(input.join(del));
}

delimiter(['One', 'Two', 'Three', 'Four', 'Five', '-'])