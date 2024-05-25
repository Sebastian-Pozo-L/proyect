$(document).ready(function () {
	// Credenciales del usuario
	var username = "admin";
	var password = "1234";

	// URL de la API
	var apiUrl = "https://e58w3.wiremockapi.cloud/json/1";

	// Configurar las credenciales para cada solicitud AJAX
	$.ajaxSetup({
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
		},
	});

	// Realizar una solicitud GET a la API y mostrar los datos en la página
	$.get(apiUrl, function (data) {
		// Manejar la respuesta de la API aquí
		$("#data-container").text(JSON.stringify(data));
	});
});
