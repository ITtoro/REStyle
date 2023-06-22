$("#sendMail").on("click", function() {
   var name = $("#name").val().trim();
   var email = $("#email").val().trim();
   var phone = $("#phone").val().trim();
   var message = $("#message").val().trim();

   if(name == "") {
      $("#errorMess").text("Introduzca tu nombre");
      return false;
   } else if(email == "") {
      $("#errorMess").text("Introduce tu correo electrónico");
      return false;
   } else if(phone == "") {
      $("#errorMess").text("Introduce tu teléfono");
      return false;
   } else if(message.length < 5) {
      $("#errorMess").text("Introduzca un mensaje de al menos cinco caracteres");
      return false;
   }

   $("#errorMess").text("Espera una respuesta dentro de las 24 horas");

   $.ajax({
      url: 'formContact/formMail.php',
      type: 'POST',
      cache: false,
      data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
      dataType: 'html',
      beforeSend: function() {
         $("#sendMail").prop("disabled", true);
      },
         success: function(data) {
            if(!data)
               alert("Hubo errores, el mensaje no fue enviado");
            else
               $("#formContact").trigger("reset");
            $("#sendMail").prop("disabled", false);
               alert("¡Gracias! Tu mensaje ha sido enviado!");
         }
   });

});