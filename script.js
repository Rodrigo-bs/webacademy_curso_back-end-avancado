console.log('Hello, Word!');

/* Variáveis */

let string = 'Pedro';
let numero = 10;
let array = [1, 2, 3, 4, 5, 6];
let arrayVariable = [1, 2, 'Rodrigo', [
    'Pedro', 'Pedro 2'
]];

let object = {
    nome: 'Pedro',
    idade: 19,
    cargo: 'adm'
};

console.table(object);
console.table(arrayVariable);

/* Tipos */

console.log(typeof true);
console.log(typeof false);
console.log(typeof 'false');
console.log(typeof '1');
console.log(typeof 10);
console.log(typeof [10]);
console.log(typeof {nome: 'Pedro'});

/* String Functions */

string = 'O Rato Morreu';

console.log('Numero de letras: ' + string.length);
console.log(`A string em uppercase e ${string.toUpperCase()}`);
console.log(string.toLocaleLowerCase());

/* Array Functions */

let listaDeFrutas = ['Uva', 'Manga', 'Banana'];

listaDeFrutas.shift();
console.log(listaDeFrutas);

listaDeFrutas.push('Melancia');
console.log(listaDeFrutas);

listaDeFrutas.pop();
console.log(listaDeFrutas);

/* JSON */

const users = [
    {
        name: 'John',
        email: 'john@example.com'
    },
    {
        name: 'Pedro',
        email: 'pedro@example.com'
    },
    {
        name: 'Rodrigo',
        email: 'rodrigo@example.com'
    }
]

const json = JSON.stringify(users);
console.log(json);
console.log(typeof json);

/* DESAFIO 1 */
const listaDeNumeros = [1, 2, 3, 4, 5];

let obj = {
    num1: listaDeNumeros[0],
    num2: listaDeNumeros[1],
    num3: listaDeNumeros[2],
    num4: listaDeNumeros[3],
    num5: listaDeNumeros[4]
};

console.log(obj);
console.table(obj);

const listaJson = JSON.stringify(obj);
console.log(listaJson);