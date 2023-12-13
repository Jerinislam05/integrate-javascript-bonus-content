const number = 23;
// string, number, boolean
if (typeof number === 'number') {
    console.log('number');
} else {
    console.log('not a number');
}

const numbers = [3, 12, 78, 90];
const student = {name: 'rafsan', age: 23, job: 'khaowa'}
console.log(Array.isArray(number));
console.log(typeof student);

// NaN holo not a number. mot kotha isNaN diye check korte hoy eta number na kina. jodi number hoy tahole ans ashbe false r jodi number na hoy tahole true ashbe. string er moddhe number thakleo false ashbe