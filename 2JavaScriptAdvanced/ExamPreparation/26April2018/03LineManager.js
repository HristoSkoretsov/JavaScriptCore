class LineManager {

    constructor(stops) {
        //
        this.stops = [
            {
                name: String,
                timeToNext: Number
            }
        ];
        this._stops = stops;
    }


    get stops() {
        return this._stops;
    }

    set stops(value) {

        // for (let i = 0; i < value.length; i++) {
        //     if (value[i]._stops.name === '' || +value[i]._stops.timeToNext < 0) {
        //         throw 'Something gonna wrong';
        //     }
        //     this._stops = value;
        // }
    }

    // atDepot() {
    //     let totalStops = this._stops.length;
    //     let positionOnCurrentStop = this._stops.name;
    //     let stopsPos = totalStops.indexOf(positionOnCurrentStop);
    //     return totalStops === stopsPos - 1;
    // }
}

const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: '', timeToNext: 3},
    {name: 'Interpred', timeToNext: -4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

for (let i = 0; i < man.stops.length; i++) {
    console.log(man);
}