import { serviceContent } from '../components/users/services/services.js'
import { bookingContent } from '../components/users/reserva/reserva.js'
import { aboutContent } from '../components/layout/index.js'
import { appendAlert } from '../helpers/alert.js'
import { creditsContent } from '../components/layout/credits/credits.js'

const services = [
  {
    nombre: 'baru',
    descripcion: 'playa de x cosa',
    precio: 2000000,
    url: 'img'
  },
  {
    nombre: 'rincon',
    descripcion: 'playa de y cosa',
    precio: 1200000,
    url: 'img'
  },
  {
    nombre: 'coveñas',
    descripcion: 'playa de z cosa',
    precio: 800000,
    url: 'img'
  }
]

const $content = document.getElementById('content')

if ($content) {
  const $signInForm = document.getElementById('signInForm')
  if ($signInForm) {
    $signInForm.addEventListener('submit', (e) => {
      location.href = '#'
      location.reload()
    })
  }

  $content.innerHTML += serviceContent
  $content.innerHTML += aboutContent

  const $cardsServices = document.getElementById('cards-services')
  if ($cardsServices) {
    services.forEach((service) => {
      $cardsServices.innerHTML += `
      <article class="card col-sm-7 col-md-3 m-2 shadow">
      <header class="card-header">
        <h3 class="card-title">${service.nombre}</h3>
      </header>
      <article class="card-body">
        <picture>
          <img src="${service.url}" alt="${service.descripcion}" class="card-img">
        </picture>
        <p class="card-title">${service.descripcion}</p>
        <button class="btn btn-primary btn-sm text-center" id="btnReserva">RESERVAR AHORA</button>
      </article>
      <footer class="card-footer">${service.precio}</footer>
    </article>
    `
    })
  }

  const $btnsReserva = document.querySelectorAll('#btnReserva')

  $btnsReserva.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log(e.target)
      $content.innerHTML = bookingContent

      const $formBooking = document.getElementById('formBooking')
      if ($formBooking) {
        $formBooking.addEventListener('submit', (e) => {
          e.preventDefault()
          appendAlert('Reserva exitosa', 'success')
        })
      }
    })
  })

  const $btnCredits = document.getElementById('btnCredits')
  $btnCredits.addEventListener('click', () => {
    $content.innerHTML = creditsContent
  })

  // $btnAbout.addEventListener('click', () => {
  // })
}
