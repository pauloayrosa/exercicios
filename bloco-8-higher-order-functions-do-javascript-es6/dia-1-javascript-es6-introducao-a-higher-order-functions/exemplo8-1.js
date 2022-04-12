// JavaScript

// first-class functions (first class citizens)
// as funções pode ser atribuidas à variáveis!!


// # 1 - Atribuir funções à variáveis:

function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable);
  //  [Function: sum] para 

  // # 2 - Passar funções como argumento para outras funções:

  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

  // # 3 - Retornar uma função de outra função:

  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));

  //  - HOF - (Higher Orded Functions)
  // exemplo (sem HTML!):

  const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);