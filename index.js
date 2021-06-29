console.log("JS Currency Converter");

// Grab all the items
let inr = document.getElementById('inr');
let usd = document.getElementById('usd');
let aud = document.getElementById('aud');
let amount = document.getElementById('amount');
let fromOutput = document.getElementById('fromOutput');
let selectCurrencyIn = document.getElementById('selectCurrencyIn');
let selectCurrencyOut = document.getElementById('selectCurrencyOut');

// Function to convert currencies
function convert(){
    let amt = amount.value;                   // Input amount

    // ************* Currency values are as on 16-06-2021 *************

    // INR TO USD
    if(selectCurrencyIn.value == 'inr' && selectCurrencyOut.value == 'usd'){
        // 1 INR = 0.014 USD
        let inrToUsd = ( 0.014 * amt ).toFixed(4);       // calculation to convert
        fromOutput.value = inrToUsd + ` $`;   // Output
    }
    
    // USD TO INR
    else if(selectCurrencyIn.value == 'usd' && selectCurrencyOut.value == 'inr'){
        // 1 USD = 73.33 INR
        let usdToInr = ( 73.33 * amt ).toFixed(4);
        fromOutput.value = usdToInr + ` ₹`;
    }

    // AUD TO INR
    else if(selectCurrencyIn.value == 'aud' && selectCurrencyOut.value == 'inr'){
        // 1 AUD = 56.33 INR
        let audToInr = ( 56.33 * amt ).toFixed(4);
        fromOutput.value = audToInr + ` ₹`;
    }

    // INR TO AUD
    else if(selectCurrencyIn.value == 'inr' && selectCurrencyOut.value == 'aud'){
        // 1 INR = 0.018 AUD
        let inrToAud = ( 0.018 * amt ).toFixed(4);
        fromOutput.value = inrToAud + ` AU$`;
    }

    // AUD TO USD
    else if(selectCurrencyIn.value == 'aud' && selectCurrencyOut.value == 'usd'){
        // 1 AUD = 0.77 USD
        let audToUsd = ( 0.77 * amt ).toFixed(4);
        fromOutput.value = audToUsd + ` $`;
    }

    // USD TO AUD
    else if(selectCurrencyIn.value == 'usd' && selectCurrencyOut.value == 'aud'){
        // 1 USD = 1.30 AUD
        let usdToAud = ( 1.30 * amt ).toFixed(4);
        fromOutput.value = usdToAud + `AU$`;
    }

    // INR TO INR
    else if(selectCurrencyIn.value == 'inr' && selectCurrencyOut.value == 'inr'){
        let inrToInr = amt.toFixed(4);
        fromOutput.value = inrToInr + ` ₹`;
    }

    // USD TO USD
    else if(selectCurrencyIn.value == 'usd' && selectCurrencyOut.value == 'usd'){
        let usdToUsd = amt.toFixed(4);
        fromOutput.value = usdToUsd + ` $`;
    }

    // AUD TO AUD
    else if(selectCurrencyIn.value == 'aud' && selectCurrencyOut.value == 'aud'){
        let audToAud = amt.toFixed(4);
        fromOutput.value = audToAud + ` AU$`;
    }
    
}
