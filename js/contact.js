// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() {   // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' || document.form.email.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "PHP/contact.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn(500);
			$(this).find('input').val('');
			$('html').addClass('no-scroll');
			$('#form').trigger('reset');
			
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function(e) { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut(500);
});

$(document).mouseup(function (e) { // по клику вне попапа
   var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-thank-you').fadeOut();
   }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+34(999) 99-99-99");
});

