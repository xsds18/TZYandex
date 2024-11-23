let a = 100;
let i = 19;

let result = a % i;

console.log(result);

result > 0 ? console.log('s ostatkom'): console.log('bez ostatka');

console.log(Math.pow(2,i+3));

console.log(Math.sqrt(5*i).toFixed(2));

const massive = [i+4, i+2,  i+5, i+19];
let res = 0;

massive.forEach(element => {
    element = Math.pow(element,3);
    res += element;
    res = Math.sqrt(res)
});

console.log(res.toFixed(2));

// let res2 = 0;
// for (i = 0; i < massive.length; i++) {
//     massive[i] = Math.pow(massive[i],3);
//     res2 += massive[i];
//     res2 = Math.sqrt(res2)
// }

// console.log(res2.toFixed(2));

let Round = 0;
Round = Math.sqrt(i + 56);
console.log(Math.floor(Round));
console.log(Math.round(Round));

console.log(Math.max(...massive));
console.log(Math.min(...massive));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * max); // Максимум не включается, минимум включается
  }

console.log(getRandomInt(1, i+100))

let massive2 = [];
for (c = 0; c < 10; c++) {
    massive2.push(getRandomInt(1, i+100))
}

console.log(massive2)

console.log(Math.abs(i - a))

const modul = (a , b) => {
    let c = 0;
    c = a -b;
    console.log(Math.abs(c));
}

modul(6,1)