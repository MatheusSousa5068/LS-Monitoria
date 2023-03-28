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
    company.kind = "Internet company";

    console.log(`${company.name.padEnd(15, '.')}${company.founded}`)
}
