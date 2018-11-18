class Cat {
    name;
    age;


    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say(): string{
        return 'Misho'
    }
}

let cat = new Cat(1223, 12);
cat.say();