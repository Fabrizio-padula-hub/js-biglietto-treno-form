// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio,
// secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// CHIEDERE ALL'UTENTE
// quando l'utente clicca sul bottone 'genera biglietto' dobbiamo leggere i valori
const generateButton = document.querySelector('.generate');
generateButton.addEventListener('click', function() {
    console.log(generateButton);

    // prendere i valori dei Km e dell'età
    const userKm = parseInt(document.querySelector('#user-km').value);
    const userAge = parseInt(document.querySelector('#user-age').value);
    console.log('km', userKm);
    console.log('età', userAge);

    // calcolare il prezzo totale
    const priceTicket = parseFloat(userKm * 0.21);
    console.log('prezzo biglietto', priceTicket);

    // calcolare il prezzo con lo sconto del 20% per i minorenni
    // calcolare il prezzo con lo sconto del 40% per gli over 65
    let discount = 0;
    if (userAge < 18){
        discount = priceTicket * 20 / 100;
    }else if(userAge > 65){
        discount = priceTicket * 40 / 100;
    }
    console.log('prezzo < 18', discount);
    console.log('prezzo > 65', discount);

    // calcolare il prezzo finale con lo sconto (se è presente)
    const finalPrice = priceTicket - discount;
    console.log('prezzo finale', finalPrice);


    // stampare per l'user
    const userMessage = document.querySelector('.message');
    userMessage.innerHTML = `Il prezzo del tuo biglietto è di: ${finalPrice.toFixed(2)} euro`;
    console.log(userMessage);
});

// quando l'utente clicca sul bottone 'resetta' dobbiamo togliere i valori
const resetButton = document.querySelector('.clear');
resetButton.addEventListener('click', function() {
    const userKm = parseInt(document.querySelector('#user-km').value = '');
    const userAge = parseInt(document.querySelector('#user-age').value = '');
    const userMessage = document.querySelector('.message');
    userMessage.innerHTML = '';

});




// calcolare il prezzo con lo sconto del 20% per i minorenni
// calcolare il prezzo con lo sconto del 40% per gli over 65



// calcolare il prezzo totale scontato e non


