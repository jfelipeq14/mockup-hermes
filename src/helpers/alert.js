// const type = ['success', 'danger', 'info']

const alertPlaceholder = document.getElementById('alerts')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('article')
  wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible fade show m-5 fixed-top" role="alert">`,
          `   <span>${message}</span>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('btnAlerts')
if (alertTrigger) {
  alertTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
    appendAlert('Mensaje de la alerta', 'success')
  })
}
