class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this._kids = [];
    }

    registerChild(name, grade, budget) {
        let counter = 0;
        let kidsOnVacation = {};
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        kidsOnVacation.name = name;
        kidsOnVacation.grade = grade;
        for (let i = 0; i < this._kids.length; i++) {
            if (this._kids[i].grade === grade && this._kids[i].name === name) {
                return `${name} is already in the list for this ${this.destination}.`;
            }
        }
        this._kids.push(kidsOnVacation);
        return this._kids;
    }

    removeChild(name, grade) {

        for (let i = 0; i < this._kids.length; i++) {

            if (this._kids[i].name === name && this._kids[i].grade === grade) {
                let grade = this._kids[i].grade;
                this._kids.splice(i, 1);
                return grade;
            }

        }
        return `We couldn't find ${name} in ${grade} grade.`


    }

    numberOfChildren() {
        return this._kids.length;
    }

    get kids() {
        return this._kids;
    }

    toString(){
        if (this._kids.length===0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }
        this._kids.sort((a, b)=> a.grade-b.grade);

        let kidsMap = new Map();

        for (let i = 0; i < this._kids.length; i++) {

            if(kidsMap.has(this._kids[i].grade)){
                kidsMap.set(this._kids[i].grade, `${this._kids[i].name-this._kids[i].budget}` )}
            else {}
        }

    }

}