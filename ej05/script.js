numero1 = prompt("Introduce el primer número:");
numero2 = prompt("Introduce el segundo número:");
resultado = numero1 + numero2;
let valores = ["123", " 45 ", "abc", "", "0", 0, null, undefined, true];
let tabla = "<table border='1'><tr><th>Valor</th><th>Number()</th><th>String()</th><th>Boolean()</th></tr>";

for (let i = 0; i < valores.length; i++) {
    tabla += "<tr>";
    tabla += "<td>" + valores[i] + "</td>";
    tabla += "<td>" + Number(valores[i]) + "</td>";
    tabla += "<td>" + String(valores[i]) + "</td>";
    tabla += "<td>" + Boolean(valores[i]) + "</td>";
    tabla += "</tr>";
}

tabla += "</table>";
document.write(tabla);
