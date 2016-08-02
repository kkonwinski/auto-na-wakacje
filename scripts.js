$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		var name= $("#name").val();
		var email= $("#email").val();
		var phone= $("#phone").val();
		alert("Dziękujemy "+name+ " za przełanie danych skontaktujemy sie z Tobą telefonicznie na numer "+phone+" lub na email "+email);
	})
});