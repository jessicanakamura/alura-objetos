const clientes = [{
    nome:"Andre",
    idade:36,
    dependentes: [
        {
            nome:"Sara",
            parentesco:"Filha",
            dataNasc:"20/03/2011"},
        {
            nome: "Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014",
        }],
    },
{
    nome: "Juliana",
    cpf: "56767867867",
    dependentes: [{
        nome:"Sophia",
        parentesco:"Filha",
        dataNasc: "30/08/2020"
    }]
}
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes ];

console.table(listaDependentes);