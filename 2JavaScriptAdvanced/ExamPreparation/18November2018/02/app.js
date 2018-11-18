function realEstateAgency() {


    let roof = $('#roof');
    let building = $('#building');

    let offerManager = $('#offerManager');

    let buttonReg = $('[name="regOffer"]');


    let success = $('<p id="message">').text("Your offer was created successfully.");
    let unsuccess = $('<p id="message">').text("Your offer registration went wrong, try again.");
    let buttonOffer = $('[name="findOffer"]');


        buttonReg.on('click', function () {

            let agencyCommission = $('input[name="agencyCommission"]').val();
            let apartmentRent = $('input[name=apartmentRent]').val();
            let apartmentType = $('input[name=apartmentType]').val();
            let divNotification = $('<div id="notifications">');
            let divApartment = $('<div class="apartment">');

            if (+agencyCommission >= 0 && +agencyCommission <= 100 && apartmentType!=='' && !apartmentType.includes(':')
            && +apartmentRent>0 && +agencyCommission && +apartmentRent) {
            divNotification.append(success);
            offerManager.append(divNotification);

            let pPrice = $('<p>').text(`Rent: ${$('input[name=apartmentRent]').val()}`);
            let pType = $('<p>').text(`Type: ${$('input[name=apartmentType]').val()}`);
            let pComission = $('<p>').text(`Commission: ${$('input[name=agencyCommission]').val()}`);

            divApartment.append(pPrice);
            divApartment.append(pType);
            divApartment.append(pComission);
            building.append(divApartment);

            $('input[name=apartmentRent]').val('');
            $('input[name=apartmentType]').val('');
            $('input[name=agencyCommission]').val('');}
            else {
                divNotification.append(unsuccess);
                offerManager.append(divNotification);


                $('input[name=apartmentRent]').val('');
                $('input[name=apartmentType]').val('');
                $('input[name=agencyCommission]').val('');
            }

        });

    buttonOffer.on('click', function () {

        let familyBudget = $('input[name="familyBudget"]').val();
        let appType = $('input[name="familyApartmentType"]').val();
        let familyName = $('input[name="familyName"]').val();

        if (+familyBudget>0 && appType!=='' && familyName!==''){
            let successOffer = $('<p id="message">').text("Your offer was created successfully.");
            $('#notifications').remove();
            let divNotification = $('<div id="notifications">');
            divNotification.append(successOffer);
            offerManager.append(divNotification)

        }




    })




}