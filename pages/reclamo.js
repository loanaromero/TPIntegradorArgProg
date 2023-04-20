jQuery.extend(jQuery.validator.messages, {
  required: "Este campo es obligatorio.",
  remote: "Por favor, rellena este campo.",
  email: "Por favor, escribe una dirección de correo válida",
  url: "Por favor, escribe una URL válida.",
  date: "Por favor, escribe una fecha válida.",
  dateISO: "Por favor, escribe una fecha (ISO) válida.",
  number: "Por favor, escribe un número entero válido.",
  digits: "Por favor, escribe sólo dígitos.",
  creditcard: "Por favor, escribe un número de tarjeta válido.",
  equalTo: "Por favor, escribe el mismo valor de nuevo.",
  accept: "Por favor, escribe un valor con una extensión aceptada.",
  maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
  minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
  rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
  range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
  max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
  min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
});

$("#formulario").validate({
  rules: {
    fecha: {
      required: true
    },
    nombre: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    telefono: {
      required: true
    }
    ,
    reclamo: {
      required: true
    }
  },
  submitHandler: function(form) {
    
    // Obtener los valores del formulario
    var fecha = document.getElementById('ifecha').value;
    var nombre = document.getElementById('inombre').value;
    var email = document.getElementById('iemail').value;
    var telefono = document.getElementById('itelefono').value;
    var reclamo = document.getElementById('ireclamo').value;

    // Generar el resumen del reclamo
    var reclamo = 'Reclamo:\n' +
      'Fecha del incidente: ' + fecha + '\n' +
      'Nombre y apellido: ' + nombre + '\n' +
      'Email: ' + email + '\n' +
      'Teléfono: ' + telefono + '\n' +
      'Motivo del reclamo: ' + reclamo;

    // Mostrar el reclamo en un cuadro de diálogo
    alert(reclamo);
  }
})

$("#guardar").click(function(){
  if($("#formulario").valid()==false){
    return;
  }
  let fecha=$("#ifecha").val();
  let nombre=$("#inombre").val();
  let email=$("#iemail").val();
  let telefono=$("#itelefono").val();
  let reclamo=$("#ireclamo").val();
})

function generarPDF() {
  // Obtener los valores del formulario
  var fecha = document.getElementById('ifecha').value;
  var nombre = document.getElementById('inombre').value;
  var email = document.getElementById('iemail').value;
  var telefono = document.getElementById('itelefono').value;
  var reclamo = document.getElementById('ireclamo').value;

  // Crear un nuevo documento PDF
  var pdf = new jsPDF();

  // Agregar el resumen al documento PDF
  var imgData = new Image();
  imgData.src = '/assets/logofinal.png';

  pdf.addImage(imgData, 'PNG', 75, 10, 45, 45);
  pdf.setFontSize(25);
  pdf.text(60, 65, 'OASIS INN HOTEL');  
  pdf.text(80, 75, 'Reclamo');
  pdf.setFontSize(20);
  pdf.text(20, 90, 'Fecha del incidente: ' + fecha);
  pdf.text(20, 100, 'Nombre y apellido: ' + nombre);
  pdf.text(20, 110, 'Email: ' + email);
  pdf.text(20, 120, 'Teléfono: ' + telefono);
  pdf.text(20, 130, 'Motivo del reclamo: ' + reclamo);

  // Generar el archivo PDF como Blob
  var pdfBlob = pdf.output('blob');

  // Crear un enlace de descarga
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(pdfBlob);
  downloadLink.download = 'comprobante_reclamo.pdf';
  downloadLink.click();
  
  // Liberar el objeto Blob
  URL.revokeObjectURL(pdfBlob);
}