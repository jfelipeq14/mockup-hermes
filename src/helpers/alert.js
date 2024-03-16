// const type = ['success', 'danger', 'info']
// const message = ['Registro agregado', 'Registro actualizado', 'Registro deshabilitado', 'Inicio de sesion', 'Cierre de sesion', 'Error']

const alertPlaceholder = document.getElementById('alerts')
export const appendAlert = (message, type) => {
  const wrapper = document.createElement('article')
  wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible fade show m-2" role="alert">`,
          `   <span>${message}</span>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
  setTimeout(() => {
    location.reload()
  }, 2000)
}
