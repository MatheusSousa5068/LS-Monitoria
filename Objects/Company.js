/* 
    Feito em: 27/03/23
    Por: Matheus Sousa e Amanda Cruz

    link do exercício:
    https://ifpb.github.io/exercises/problems/object-company/

*/

const companies = [
    {
        "name": "Amazon",
        "founded": 1984,
        "industry": "E-commerce, Cloud"
    },
    {
        "name": "Alphabet Inc",
        "founded": 2015,
        "industry": "Search, Cloud, Advertising"
    },
    {
        "name": "Facebook",
        "founded": 2004,
        "industry": "Social"
    },
];

for(let company of companies) {
    // adiciona o atributo kind a cada compania
    company.kind = "Internet company";

    // printa formatado
    console.log(`${company.name.padEnd(15, '.')}${company.founded}`)
}
