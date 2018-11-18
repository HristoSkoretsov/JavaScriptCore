function acceptance() {

    let shippingCompany = $('input[name=shippingCompany]').val();
    let productName = $('input[name=productName]').val();
    let productQuantity = $('input[name=productQuantity]').val();
    let productScrape = $('input[name=productScrape]').val();
    let warehouse = $('#warehouse');
    if(shippingCompany!=='' && productName!=='' &&  +productQuantity  && +productScrape
    && productQuantity-productScrape>0){
        let div = $('<div>');
        let paragraph = $('<p>');
        let newLine = $('<br />');
        let button = $('<button type="button">').text('Out of stock');

        paragraph.append(`[${shippingCompany}] ${productName} - ${productQuantity-productScrape} pieces`);
        div.append(paragraph)
        div.append(button)
        warehouse.append(div);

        //warehouse.append(newLine);
        $('input[name=shippingCompany]').val('');
        $('input[name=productName]').val('');
        $('input[name=productQuantity]').val('');
        $('input[name=productScrape]').val('');

        button.on('click', function () {
            div.remove();

        }  )
    }
}