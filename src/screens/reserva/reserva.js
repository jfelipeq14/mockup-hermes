export const pageBooking = [
  '<form class="col-sm-8 mx-auto" id="formBooking">',
  '<fieldset class="row p-2">',
  '<legend>Información Personal</legend>',
  '<label class="form-label col-sm-12 col-md-6 col-md-6">',
  '<input type="text" id="fullname" class="form-control" placeholder="Nombre completo" minlength="2" required />',
  '</label>',
  '<label class="form-label col-sm-12 col-md-6">',
  '<input type="text" id="lastname" class="form-control" placeholder="Apellidos" minlength="2" required />',
  '</label>',
  '<label class="form-label col-sm-12 col-md-6">',
  '<select class="form-control" id="documentType" required>',
  '<option selected>Tipo de de documento</option>',
  '<option value="cc">Cedula</option>',
  '</select>',
  '</label>',
  '<label class="form-label col-sm-12 col-md-6">',
  '<input type="text" id="documentNumber" class="form-control" placeholder="Numero de documento" minlength="10"',
  'maxlength="12" required />',
  '</label>',
  '<label class="form-label col-sm-12 col-md-6">',
  '<input type="date" id="birthdate" class="input form-control" placeholder="Fecha de nacimiento"',
  'max="2006-01-31" required />',
  '</label>',
  '<div class="col-sm-12 col-md-6">',
  '<label class="form-label">',
  '<input type="radio" class="switch" name="sex" value="hombre" checked />',
  '<span class="switch slider" /> Hombre',
  '</label>',
  '<label class="form-label">',
  '<input type="radio" class="switch" name="sex" value="mujer" />',
  '<span class="switch slider" /> Mujer',
  '</label>',
  '</div>',
  '</fieldset>',
  '<fieldset class="row p-2">',
  '<legend>Información de contacto</legend>',
  '<label class="form-label col-sm-12 col-md-6">',
  '<input type="tel" id="phoneNumber" class="form-control" placeholder="Número de teléfono" minlength="10"',
  'required />',
  '</label>',
  '<label class="form-label col-sm-12 col-md-6">',
  '<input type="email" id="email" class="form-control" placeholder="Correo electrónico" minlength="11"',
  'maxlength="50" required />',
  '</label>',
  '<label class="form-label col-sm-12 col-md-6">',
  '<input type="text" id="address" class="form-control" placeholder="Dirección" minlength="6" required />',
  '</label>',
  '<label class="form-label col-sm-12 col-md-6">',
  '<select class="form-control" id="city" required>',
  '<option selected>Ciudad</option>',
  '<option value="Medellín">Medellín</option>',
  '</select>',
  '</label>',
  '</fieldset>',
  '<div class="row">',
  '<button type="submit" id="btnBooking" class="btn btn-primary w-25 mx-auto">',
  'CONTINUAR',
  '</button>',
  '</div>',
  '</form>'
].join('')
