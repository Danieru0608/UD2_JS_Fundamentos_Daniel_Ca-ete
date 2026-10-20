"use strict";

//2 y 1 son números; 2 es mayor que 1.
document.write("2 > 1: " + (2 > 1) + "<br>");

//la cadena "2" se convierte en el número 2 para comparar.
document.write('"2" > 1: ' + ("2" > 1) + "<br>");

//convierte "01" en el número 1 antes de comparar.
document.write('"01" == 1: ' + ("01" == 1) + "<br>");

//convierte false en 0; ambos valores son equivalentes.
document.write("0 == false: " + (0 == false) + "<br>");

//la cadena vacía "" se convierte en 0 y false también equivale a 0.
document.write('"" == false: ' + ("" == false) + "<br>");

//=== compara valor y tipo; 0 es number y false es boolean.
document.write("0 === false: " + (0 === false) + "<br>");

//con ==, null y undefined se consideran iguales entre sí.
document.write("null == undefined: " + (null == undefined) + "<br>");

//=== exige el mismo tipo; null y undefined son distintos.
document.write("null === undefined: " + (null === undefined) + "<br>");

//al comparar null > 0, null se convierte en 0;
// como 0 no es mayor que 0, el resultado es false.
document.write("null > 0: " + (null > 0) + "<br>");

//en esta comparación relacional, null se convierte en 0;
// 0 es mayor o igual que 0.
document.write("null >= 0: " + (null >= 0) + "<br>");

//undefined se convierte en NaN en una comparación numérica;
// las comparaciones con NaN mediante == no son verdaderas.
document.write("undefined == 0: " + (undefined == 0) + "<br>");

// las cadenas se comparan por orden lexicográfico;
// en la primera posición diferente, 'o' tiene un código mayor que 'l'.
document.write('"Glow" > "Glee": ' + ("Glow" > "Glee") + "<br>");


