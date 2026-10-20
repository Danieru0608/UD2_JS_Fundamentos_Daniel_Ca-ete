nombre = prompt("Introduce tu nombre:");
apodo = prompt("Introduce tu apodo:");
edad = prompt("Introduce tu edad:");

if (nombre || apodo) {
    alert(nombre || apodo);
} else {
    alert("Anónimo");
}

if (edad >= 18 && (nombre || apodo)) {
    alert("Acceso permitido");
} else {
    alert("Acceso denegado");
}

altura = 0;
// si altura es falso muestra 170
alert(altura || 170);
// si altura es nulo o indefinido muestra 170 pero 0 es un valor válido
alert(altura ?? 170);

let tieneNombre = !!nombre;
alert("¿Tiene nombre? " + tieneNombre);