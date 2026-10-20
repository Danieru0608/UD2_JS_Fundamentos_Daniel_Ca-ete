eleccion = prompt("¿Qué deseas hacer?\n1\n2.\n3.\n4.\n0");

switch (eleccion) {
    case "1":
        alert("Has elegido la opción 1");
        multiplicador = prompt("Introduce un número para multiplicar");
        for (let i = 0; i < 10; i++) {
            alert(multiplicador + " x " + i + " = " + (multiplicador * i));
        }
        eleccion = prompt("¿Qué deseas hacer?\n1\n2.\n3.\n4.\n0");
    case "2":
        alert("Has elegido la opción 2");

            let suma = 0;

            while (true) {
                let numero = prompt(
                    "Introduce un número (vacío o Cancelar para terminar)"
                );

                if (numero === null || numero.trim() === "") {
                    break;
                }

                suma += Number(numero);
                alert("La suma total es: " + suma);
                eleccion = prompt("¿Qué deseas hacer?\n1\n2.\n3.\n4.\n0");
            }
    case "3":
         alert("Has elegido la opción 3");

            for (let i = 1; i <= 20; i++) {
                if (i % 2 === 0) {
                    continue;
                }

                alert(i);
            }
            eleccion = prompt("¿Qué deseas hacer?\n1\n2.\n3.\n4.\n0");

    case "4":
        alert("Has elegido la opción 4");

            let numero = Number(
                prompt("Introduce el número inicial para la cuenta atrás")
            );

            do {
                alert(numero);
                numero--;
            } while (numero >= 0);
            eleccion = prompt("¿Qué deseas hacer?\n1\n2.\n3.\n4.\n0");
    case "0":
        alert("Has elegido salir");
        break;
    default:
        alert("Opción no válida");
        eleccion = prompt("¿Qué deseas hacer?\n1\n2.\n3.\n4.\n0");
        
}