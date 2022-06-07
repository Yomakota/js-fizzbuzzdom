// MILESTONE 2
// Per ogni numero, data una ul nel DOM, aggiungete un elemento html li con il numero o la stringa corretta 
// seguendo le regole della Milestone 1 (Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz).


// seleziono elemento del DOM
const numList = document.querySelector('.list');

// creo ciclo per attaccare nuovi elementi all'elemento esistente del DOM
for (let i = 1; i <= 100; i++) {

    // creo i nuovi elementi da aggiungere
    const listItem = document.createElement('li');

    // e li aggiungo all'elemento dato nel DOM
    numList.append(listItem);

    // aggiungo gli elementi <li> seguendo le regole della MIlESTONE-1
    if (i % 5 == 0 && i % 3 == 0) {

        listItem.innerHTML = 'FizzBuzz';
        // console.log(listItem);

    } else if (i % 5 == 0) {

        listItem.innerHTML = 'Buzz';
        // console.log(listItem);

    } else if (i % 3 == 0) {

        listItem.innerHTML = 'Fizz';
        // console.log(listItem);

    } else {
        
        listItem.innerHTML = i;
        // console.log(i);
    }
};