// 1 - Acesse o elemento elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta');
// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';
// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos
// vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerText = 'Parabnes Primeiro Filho do Primeiro Filho!';
// 4 - Acesse o primeiroFilho a partir de pai .
document.getElementById('primeiroFilho').parentElement;
// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').parentElement.firstElementChild;
// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').nextSibling;
// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling;
// 8 - Agora acesse o terceiroFilho a partir de pai .
document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling;

// ## parte 2 - Criar elementos!!!

// 1 - Crie um irmão para elementoOndeVoceEsta.
//devemos definir o PAI!
let definirPai = document.getElementById('elementoOndeVoceEsta').parentElement;
// vamos criar um conteudo para visualizar o novo irmão;
let texto21 = 'conteúdo do novo elemento irmão de OndeVoceEsta.';
// vamos criar um novo elemeto HTML;
let novoIrmao = document.createElement('section');
//colocar o coteudo cno novo elemento;
novoIrmao.innerText = texto21;
// vamos fixar o novo irmão ao PAI;
definirPai.appendChild(novoIrmao);

// 2- Crie um filho para elementoOndeVoceEsta.

let novoUltimoFilhoDoFilho = document.createElement('section');
novoUltimoFilhoDoFilho.classList.add('terceiroFilhoDoFilho');
novoUltimoFilhoDoFilho.innerText = 'Novo ultimo filho de OndeVoceEsta.';
document.getElementById('elementoOndeVoceEsta').appendChild(novoUltimoFilhoDoFilho);

// 3 - Crie um filho para primeiroFilhoDoFilho.

// var novoFilho = element.id;
let filhoDoPrimeiroFilhoDoFilho = document.createElement('div');
filhoDoPrimeiroFilhoDoFilho.classList = 'novoFilhoDoFilho';
filhoDoPrimeiroFilhoDoFilho.innerText = 'O primeiro filho do primeiro filho do filho.';
document.getElementById('primeiroFilhoDoFilho').appendChild(filhoDoPrimeiroFilhoDoFilho);
 
// 4 - A partir desse filho criado, acesse terceiroFilho.
document.querySelector('.novoFilhoDoFilho').parentNode.parentElement.nextElementSibling;

// ## parte 3 - Remover elementos!!!

// TREINO - Remova todos os elementos filhos de paiDoPai exceto:
// pai;
// elementoOndeVoceEsta e
// primeiroFilhoDoFilho.

// remover primeiroFilho;
document.getElementById('pai').removeChild(document.getElementById('primeiroFilho'));
// remover texto " Atenção! ";
document.getElementById('pai').removeChild(document.getElementById('elementoOndeVoceEsta').nextSibling);
// remover terceiroFilho;
document.getElementById('pai').removeChild(document.getElementById('terceiroFilho'));
// remover quartoFilho;
document.getElementById('pai').removeChild(document.getElementById('quartoEUltimoFilho'));
// remover novoIrmao crido no exercico 1 da parte 2;
document.getElementById('pai').removeChild(novoIrmao);
// remover segundoEUltimoFilhoDoFilho;
document.getElementById('elementoOndeVoceEsta').removeChild(document.getElementById('segundoEUltimoFilhoDoFilho'));
// remover terceiroFilhoDoFilho, crido no exercicio 2 do bloco 2;
document.getElementById('elementoOndeVoceEsta').removeChild(novoUltimoFilhoDoFilho);