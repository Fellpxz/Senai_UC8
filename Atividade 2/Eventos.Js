var Hoje = new Date().toDateString() //Puxa a data atual
var DataEvento = new Date('12/06/2022').toDateString() //Data do Evento

if (Hoje < DataEvento) {
  console.log('Data Disponivel')
} else if (Hoje == DataEvento) {
  console.log('Não agendamos para o mesmo dia')
} else if (Hoje > DataEvento) {
  console.log('Data Inválida')
}

let Idade = 18

if (Idade >= 18) {
  console.log('Idade permitida, prosseguindo cadastro')
} else {
  console.log('O evento não permite menores de idade')
}

var ListaDeParticipantes = [
  'Maurilio',
  'Maurilio',
  'Maurilio',
  'Maurilio',
  'Maurilio',
  'Maurilio',
  'Maurilio'
]
var ListaDePalestrantes = [
  'Maurilio',
  'Maurilio',
  'Maurilio',
  'Maurilio',
  'Maurilio'
]

if ((ListaDePalestrantes, ListaDeParticipantes.length < 100)) {
  console.log('Evento com espaço, cadastro realizado')
} else {
  console.log('Evento lotado, cadastro negado')
}
