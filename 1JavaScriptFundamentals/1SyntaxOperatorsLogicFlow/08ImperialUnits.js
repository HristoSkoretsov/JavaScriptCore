function feetToInches(input) {
    let inch = Number.parseInt(input/12);
    let feet = input%12;
    console.log(inch+ "'-"+feet + "\"")
}
feetToInches(55)