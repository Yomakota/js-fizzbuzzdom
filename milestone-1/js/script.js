// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.


// Scrivo un programma che stampa i numeri da 1 a 100.
for (let i = 1; i <= 100; i++) {

//Per i numeri che sono sia multipli di 3 che di 5 stampa FizzBuzz.
    if ( i % 5 == 0 && i % 3 == 0) {
        console.log('FizzBuzz');

// Per i multipli di 5 stampi Buzz
    } else if (i % 5 == 0) {
        console.log('Buzz');

//Per i multipli di 3 stampi Fizz
    } else if (i % 3 == 0) {
        console.log('Fizz');

//Per tutti gli altri numeri non stampo niente al di fuori del numero.
    } else {
        console.log(i);
    }
};