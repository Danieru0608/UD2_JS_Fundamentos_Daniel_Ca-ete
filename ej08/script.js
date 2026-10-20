nota=prompt("Introduce una nota (0-10):");
if (nota >= 0 && nota < 5) {
    alert("Suspenso");
} else if (nota >= 5 && nota < 7) {
    alert("Aprobado");
} else if (nota >= 7 && nota < 9) {
    alert("Notable");
} else if (nota >= 9 && nota <= 10) {
    alert("Sobresaliente");
} else {
    alert("Error: La nota debe estar entre 0 y 10.");
}