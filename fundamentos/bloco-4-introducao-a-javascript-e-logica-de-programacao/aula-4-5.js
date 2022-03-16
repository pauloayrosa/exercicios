//Objetos e Funções
//OBJETO: os objetos são copostos por propriedades, chamdos de chaves, que por padrão 'predefinicão' são strings (default)

let singer = {
    name: 'Milton',
    //kebab-case é uma nomeclatrura de propriedade que separa as palavras compostas 
    // por '-' ifem. O JS não intende este tipo de declaração de forma direta, por
    // isso devemos colocar este nome dentro de aspas ''.
    'last-name': 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da esquina', 'Minas']
}

//Para acessar uma chave/propriedade podemos utilizar ponto '.' ou colchetes com aspas , para chamar a string [''].

console.log('O cantor '+singer.name+' '+singer['last-name']+' possui '+singer.age+' anos')

//para criar uma nova propriedade ao nosso OBJETO 'singer'...
//OBS.: quando eu fui inserir a propriedade sobrenome "que foi criaada no tipo kebab-case"
// o auto completar do VSC sugeriu com colchetes+aspas duplas!!!

singer['fullName'] = singer.name + ' ' + singer["last-name"];

console.table(singer);

//Um Objeto pode ter como caracterisca outro objeto. Por exemplo: endereço. 
// O endereço é composto por vários elementos: Rua, número, bairro, cidade, estado,
// CEP, complemento, ect...

singer['address'] = {
    rua: 'Paraiso',
    number: '007',
    district: 'Barro Grande',
    city: 'Belo Horizonte',
    state: 'MG',
    postalCode: '30.882-023',
    complete: '',
}

console.table(singer);

//Para acessar um elemto detro um array utilizamo seu índice:

console.log(singer.bestAlbuns[1]);

//Para acessar uma informação especifica do objeto dentro do objeto fazemos:

console.log('O cantor '+singer.fullName+' mora em '+singer.address.city);

//Pode-se utilizar uma variavel para chamar uma chave (propriedades ou
// conjunto de propriedades) de um objeto.

let endereco = 'address';

console.log(singer[endereco]);

//OBS neste caso de chamada por variavel externa do Objeto no momento de
// declarar a variavel endereco NÃO posso usar aspas duplas, com risco de
// retornar Undefine. Então ao declarar uma variável usar aspas simples ''.
// Observe, também, que a variavel endereco esta dentro do colchetes sem
// aspas. a variavel declarada fora do objeto não é uma string.

//## Um objeto dentro de um array....

let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey


  //$$$ FOR IN

  let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index, cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }