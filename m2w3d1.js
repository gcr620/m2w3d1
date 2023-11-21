/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
// let x , y;
// x=2;
// y=2;

// function crazySum(n1 , n2) {
//     let res;
//     if (n1 === n2) {
//         res= (n1 + n2) * 3;
//         return res;
//     } else {
//         res = n1 + n2;
//         return res;
//     }
// }

// console.log(crazySum(x , y));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
// let z = 100;

// function boundary(n) {
//     if ((n >= 20 && n <= 100) || n == 400) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(boundary(z));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

// let str = "epicode";

// function reverseString(s) {
//     let revS = "";
//     for (let i = s.length - 1; i >= 0; i--) {
//         revS += s[i];
//     }
//     return revS;
// }
// console.log(reverseString(str));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

// let str = "hello";

// function upperFirst(s) {
//     let res = s[0].toUpperCase() + s.slice(1);
//     return res;
// }
// console.log(upperFirst(str));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

// let n = 5;

// function giveMeRandom(n) {
//     let ran = [];
//     let x;
//     for (let index = 0; index < n; index++) {
//         x = Math.floor(Math.random() * 11);
//         ran.push(x);
//     }
//     return ran;
// }

// console.log(giveMeRandom(n));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

// let l1 , l2;
// l1 = 10;
// l2 = 5;

// function area(b , h) {
//     let res = b * h;
//     return res;
// }
// console.log("Area = " + area(l1 , l2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

// let n = 20;

// function crazyDiff(n) {
//    if (n < 0) {
//     return n + 19;
//    } else if (n > 19) {
//     return (n - 19) * 3;
//    } else {
//     return (19 - n);
//    }
// }
// console.log(crazyDiff(n));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

// let str = "code";

// function codify(s) {
//     if (s.includes("code")) {
//         return s;
//     } else {
//         return "code" + s;
//     }
// }
// console.log(codify(str));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

// let n = 21;

// function check3and7(n) {
//     if ((n % 3 == 0) && (n % 7 == 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(check3and7(n));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

// let str ="hello";

// function cutString(s) {
//     return s.slice(1 , -1);
// }
// console.log(cutString(str));