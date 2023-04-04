/*Código original fornecido pelo professor, link abaixo.
Alguns comentários e exemplos adicionados, com base em dúvidas que 
surgiram na monitoria do dia 29/03/2023 :)
Por: Amanda Cruz de Araújo

https://github.com/lucachaves/ls-2023-1/tree/main/exercises/object-company

*/
const companies = [
  {
    name: 'Amazon',
    founded: 1994,
    industry: ['E-Commerce', 'Cloud'],
  },
  {
    name: 'Facebook',
    founded: 2004,
    industry: ['Social'],
  },
  {
    name: 'Alphabet Inc.',
    founded: 2015,
    industry: ['Search', 'Cloud', 'Advertising'],
  },
];

// sorting array of string
companies.sort((a, b) => a.name.localeCompare(b.name));

companies.forEach((company) => {
  company.kind = 'Internet company';
});


/*
A função Math.max() retorna o maior número de um ou mais números. 
O método map cria um novo array.
Logo, o código a seguir cria um array(usando o map) que contém o
tamanho de todos os nomes do objeto company. 
Usando o método max, o tamanho do maior nome (nesse caso, 'Alphabet Inc.', 
tamano 13) foi armazenado na variável const MAX_NAME_LENGHT.

*/

const MAX_NAME_LENGHT = Math.max(
  ...companies.map((company) => company.name.length)
);

/*
O método padEnd() é usado pra ajustar o tamanho de strings, 
assim a string resultado fica com um tamanho determinado. 
Dessa forma é possível deixar todas as string com o mesmo tamanho,
fica tudo "alinhado".
*/

function show(companies) {
  return companies
    .map((company) => {
      return [
        company.name.padEnd(MAX_NAME_LENGHT + 3, '.'),
        company.founded,
      ].join('');
    })
    .join('\n');
}

// console.table(companies);
console.log(show(companies));

//Exemplos simples de padEnd

console.log("------Exemplos simples de padEnd------")
let y = ("Dia".padEnd(10,'.'));
console.log(y);
console.log("Tamanho:" + y.length);

let z = ("Madrugada".padEnd(10,'.'));
console.log(z);
console.log("Tamanho:" + z.length);
