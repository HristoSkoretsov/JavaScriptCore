function moviePrices(input) {
    let name =input[0].toLowerCase();
    let day = input[1].toLowerCase();

    if (name === "casablanca" && (day === "monday" || day ==="tuesday" || day === "wednesday"
        || day ==="thursday" || day ==="friday")) {
        console.log(8)
    }
    else if (name === "casablanca" && (day === "sunday" || day === "saturday")) {
        console.log(10)
    }

    else if (name === "schindler's list" && (day === "monday" || day ==="tuesday" || day === "wednesday"
        || day ==="thursday" || day ==="friday")) {
        console.log(8.5)
    }
    else if (name === "schindler's list" && (day === "sunday" || day === "saturday")) {
        console.log(15)
    }

    else if (name === "the wizard of oz" && (day === "monday" || day === "tuesday" || day === "wednesday"
        || day === "thursday" || day === "friday")) {
        console.log(10)
    }
    else if (name === "the wizard of oz" && (day === "sunday" || day === "saturday")) {
        console.log(15)
    }

    else if (name === "the godfather" && (day === "wednesday" || day === "friday")) {
        console.log(15)
    }
    else if (name === "the godfather" && day === "monday") {
        console.log(12)
    }
    else if (name === "the godfather" && day === "tuesday") {
        console.log(10)
    }
    else if (name === "the godfather" && day === "thursday") {
        console.log(12.50)
    }
    else if (name === "the godfather" && day === "saturday") {
        console.log(25)
    }
    else if (name === "the godfather" && (day === "sunday")) {
        console.log(30)
    }
    else {
        console.log('error')
    }
}
moviePrices(['Schindler\'s List', 'Thursday'])

