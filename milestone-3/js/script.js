// MILESTONE 3
// Per ogni numero, dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (seguendo le regole della Milestone 1, ossia,per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz,per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.).

// seleziono elemento del DOM
const container = document.querySelector('.container');

// aggiungo classe esistente nel mio style.css per dare forma al div container esistente nel DOM
container.classList.add('container');

// creo ciclo 'for' per attaccare nuovi elementi al div container esistente del DOM
for (let i = 1; i <= 100; i++) {

    // creo i nuovi elementi da aggiungere
    const square = document.createElement('div');

    // aggiungo classe box per dare forma a questi elementi
    square.classList.add('box');

    // e li aggiungo all'elemento dato nel DOM
    container.append(square);

    // aggiungo gli elementi box seguendo le regole della MIlESTONE-1 e applico uno stile differente a secondo il valore

    if (i % 5 == 0 && i % 3 == 0) {
        square.innerHTML = 'FizzBuzz';
        square.classList.add('coral');
       

    } else if (i % 5 == 0) {
        square.innerHTML = 'Buzz';
        square.classList.add('green');
        

    } else if (i % 3 == 0) {
        square.innerHTML = 'Fizz';
        square.classList.add('yellow');
       

    } else {
        square.innerHTML = i;
        square.classList.add('lightblue')
    }
};