import { pageOfertas } from '../screens/ofertas/ofertas.js'
import { pageBooking } from '../screens/reserva/reserva.js'
import { pageCredits } from '../screens/credits/credits.js'

const content = document.getElementById('content')
const btnOfertas = document.getElementById('btnOfertas')
const btnReservas = document.getElementById('btnReservas')
const btnCreditos = document.getElementById('btnCreditos')

btnOfertas.addEventListener('click', () => {
  content.innerHTML = pageOfertas
})

btnReservas.addEventListener('click', () => {
  content.innerHTML = pageBooking
})

btnCreditos.addEventListener('click', () => {
  content.innerHTML = pageCredits
})
