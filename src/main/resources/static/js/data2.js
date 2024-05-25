$(document).ready(function () {
	// URL de la API
	var apiUrl = "https://api.fbi.gov/@wanted-person/b166d627e11149aa82c02d1533e3b650";

	// Solicitud GET
	$.get(apiUrl, function (data) {
		var nombre = data.title;
		var sex = data.sex; 
		var detailsNTag = data.details.replace(/<\/?p>/g, "");

		// Respuestas
		$("#data-ctn1").text(nombre);
		$("#data-ctn2").text(sex);
		$("#data-ctn3").text(detailsNTag);
	});
});
