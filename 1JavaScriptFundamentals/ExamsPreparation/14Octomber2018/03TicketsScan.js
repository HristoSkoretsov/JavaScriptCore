function ticketsScan(input, command) {

    let nameTwoFinal = '';
    let nameThreeFinal = '';
    //console.log(nameTwoFinal.length);
    let nameTwoPattern =/\s[A-Z]+[a-z]*-[A-Z]+[a-z]*\s/gm;
    let nameTwo = input.match(nameTwoPattern);
    if(nameTwo!==null){
    nameTwoFinal = nameTwo.toString().trim().split('-').join(' ');}
    //console.log(nameTwo);
    let nameThreePattern = /\s[A-Z]+[a-z]*-[A-Z]+[a-z]*\.-[A-Z]+[a-z]*\s/gm;

    let nameThree = input.match(nameThreePattern);
    if(nameThree!==null){
    nameThreeFinal = nameThree.toString().trim().split('-').join(' ');}
    //console.log(nameThreeFinal);
    let airportPattern = /\s[A-Z]{3}\/[A-Z]{3}\s/gm;
    let airport = input.match(airportPattern);
    let finalAirport = airport.toString().trim().split('/');
    let firstAir = finalAirport[0];
    let secondAir = finalAirport[1];
    //console.log(firstAir);
    //console.log(secondAir);
    let flightPattern = /\s[A-Z]{1,3}[0-9]{1,5}\s/gm;
    let flight = input.match(flightPattern);
    let flightFinal = flight.toString().trim();
    //console.log(flightFinal);
    let companyPattern = /-\s[A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]*\s/gm;
    let company = input.match(companyPattern);
    let companyFinal = company.toString().substr(2).trim().split('*').join(' ');
    //console.log(companyFinal);

    if (command ==='name'){
        if(nameThreeFinal.length!==0){

            console.log(`Mr/Ms, ${nameThreeFinal}, have a nice flight!`);
        }
        else {
          console.log(`Mr/Ms, ${nameTwoFinal}, have a nice flight!`);
        }

    }
    else if (command === 'flight'){
        console.log(`Your flight number ${flightFinal} is from ${firstAir} to ${secondAir}.`)
    }
    else if (command ==='company'){
      console.log(`Have a nice flight with ${companyFinal}.`);
    }
    else if(command ==='all'){
        if(nameThreeFinal.length!==0){

    console.log(`Mr/Ms, ${nameThreeFinal}, your flight number ${flightFinal} is from ${firstAir} to ${secondAir}. Have a nice flight with ${companyFinal}.`);
        }
        else {
            console.log(`Mr/Ms, ${nameTwoFinal}, your flight number ${flightFinal} is from ${firstAir} to ${secondAir}. Have a nice flight with ${companyFinal}.`);
        }

    }
}

// ticketsScan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973' +
// //     ' - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ');
ticketsScan(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ',
'all');