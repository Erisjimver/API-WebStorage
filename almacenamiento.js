function comenzar(){

	var boton = document.getElementById("grabar");

	boton.addEventListener("click",itemNuevo,false);


}


function itemNuevo(){

	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;

	sessionStorage.setItem(clave, valor);
	//sessionStorage[clave]=valor;



	leer_mostrar(clave);

	var clave = document.getElementById("clave").value="";//resetea campos
	var valor = document.getElementById("valor").value="";


}

function leer_mostrar(clave){

	var zonadatos = document.getElementById("zonadatos");
	zonadatos.innerHTML='<div><button onclick="eliminartodo()">Eliminar Todo</button></div>';

	//var elvalor = sessionStorage.getItem(clave);
	//var elvalor=sessionStorage[clave];
	//zonadatos.innerHTML="";

	for (i = 0;i<sessionStorage.length; i++) {

		var clave = sessionStorage.key(i);
		var elvalor=sessionStorage.getItem(clave);

		zonadatos.innerHTML+='<div>Clave: '+clave+'<br>'+' Valor: '+elvalor+'<br><button onclick="eliminarItem(\''+clave+'\')">Eliminar</button></div>';
		
	}
	//zonadatos.innerHTML="<div>Clave: "+clave+"<br>"+" Valor: "+elvalor+"</div>";

}


function eliminartodo() {

	if(confirm("Estas seguro?")){
		sessionStorage.clear();
		leer_mostrar();
	}
}

function eliminarItem(clave) {

	if(confirm("Estas seguro?")){
		sessionStorage.removeItem(clave);
		leer_mostrar();
	}

}


window.addEventListener("load",comenzar,false);