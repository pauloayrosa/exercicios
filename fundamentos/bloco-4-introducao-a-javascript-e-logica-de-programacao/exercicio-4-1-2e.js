let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';


console.log("Linha 10 ",typeof patientId);
console.log("Linha 11 ",typeof isEnrolled);
console.log("Linha 12 ",typeof patientInfo);
console.log("Linha 13 ",typeof firstName);
console.log("Linha 14 ",typeof lastName);
console.log("Linha 15 ",typeof patientEmail);


let patientAge;
patientId = '50';
console.log("Linha 20 ",typeof patientAge);
console.log("Linha 21 ",typeof patientId);

//operadores matemáticos: + Addition(+=); - Subtration(-=); * Multiplication(*=);
// ** Exponentiation(**=); / Division(/=); ++ Increment(+=y) e -- Decrement(-=y).
// % Modulus(%=y).

//operadores de comparação: == equal to; === equal value and type; != not equal;
// !== not equal value and type; > greater than; < less then; >= greater thanor equal to;
// <= less than or equal to e ? ternary operator.

//operadores lógicos: && logical and; || logical or e ! logical not.

//operador de tipo: typeof Returms the type of variable e...
// instanceof Returne true if an object is an instance of an object type.

//exemplo 1.Crie uma costante chamada base e uma variável chamada height e
// atribua os seus respectivos valores: 5 e 8.

const base = 5;
let height = 8;

//exemplo 2. Crie uma constante chamada area e atribua a ela o resultado da
// multiplicação da base pela altura. Dica: lembre-se de usar sempre o 
// console.log() para imprimir as variáveis e checar os resultados das operações!

const area = base*height;
console.log(area);

//exemplo 3. Crie uma constante chamada perimeter e atribua a ela a soma de todos os
// lados do retângulo.

const perimeter = 2*base + 2* height;
console.log(perimeter);

// if else

//EX-1.Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico,
// e atribua a ela um valor entre 1 e 100;

const nota = 97;

//EX-2.Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou
// se ela está na lista de espera. Para isso, considere as seguintes informações:
// #Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// #Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// #Se a nota for menor que 60, imprima "Você foi reprovada(o)"

if (nota>=80){
  console.log("Parabéns, você foi aprovada/o!");
} else if (nota<80 && nota>=60){
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada/o");
}



