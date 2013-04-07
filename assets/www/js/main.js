function jQuery17108034754109103233_1365020145246(args){
	alert(args);
}

function test(){
	$.ajax({
		type: "GET",
		url: "https://200.35.164.113/jmobile/AGM_DIA_PS/JSONP-EndPoint.asmx/Libros?callback=jQuery17108034754109103233_1365020145246&_Empresa=220&_Vendedor=112&_Canal=%22DET%22&_=1365020146812",
		data: {},
		dataType: "text",
		async: true,
		beforeSend: function(xhr){
			xhr.setRequestHeader("Authorization", "Basic " + btoa("746HHYTB04:UYh%74#svrti&dj@"));
		},
		success: function(response){
			alert(response);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert(xhr.status);
			console.log(thrownError);
			alert(thrownError);
		}
	});
}