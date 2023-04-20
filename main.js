$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault(); // evita que el formulario se envíe automáticamente

    // validación de los campos del formulario
    let nombre = $("#inombre").val();
    let email = $("#imail").val();
    let mensaje = $("#imensaje").val();

    if (nombre == '' || email == '' || mensaje == '') {
      alert('Por favor complete todos los campos.');
      return false;
    }
    //alert('Formulario enviado con éxito.');
    //return true;
  });
});

$('#formularioContacto').validate({
  submitHandler: function(form) {
    // Obtener los valores de los campos del formulario
    let nombre = $('#inombre').val();
    let email = $('#imail').val();
    let mensaje = $('#imensaje').val();

    if (nombre != '' && email != '' && mensaje != '') {
      // Hacer la petición AJAX para enviar los datos al servidor
      $.ajax({
        url: 'https://reqres.in/api/users?page=2', // URL de regres.in para la petición de contacto
        method: 'POST', // Método HTTP POST
        data: {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        },
        success: function(response) {
            // Aquí puedes manejar la respuesta del servidor si es necesario
            console.log('Éxito:', response);
            // Puedes mostrar un mensaje de éxito al usuario
            var newSvg = document.querySelector('.check');
            newSvg.innerHTML += '<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>';
            alert('¡Su mensaje se ha enviado con éxito! Pronto nos contactaremos');
        },
        error: function(xhr, status, error) {
            // Aquí puedes manejar los errores de la petición AJAX si es necesario
            console.error('Error:', error);
            // Puedes mostrar un mensaje de error al usuario
            alert('Error al enviar el mensaje. Por favor inténtelo nuevamente.');
        }
      });
    }

  }
});



