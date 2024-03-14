import { serviceContent } from '../components/customers/services/services.js'
import { aboutContent } from '../components/layout/index.js'

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
        <button class="btn btn-primary btn-sm text-center">RESERVAR AHORA</button>
      </article>
      <footer class="card-footer">${service.precio}</footer>
    </article>
    `
    })
  }

  // $btnAbout.addEventListener('click', () => {
  // })
}
