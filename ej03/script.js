let numberVar = 42;
let bigintVar = 1234567890123456789012345678901234567890n;
let stringVar = "Hola, mundo!";
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let symbolVar = Symbol("descripcion");
let objectVar = { clave: "valor" };

/*
typeof null devuelve "object" porque es un comportamiento de JavaScript.
porque los valores nulos se representan como objetos,
y este comportamiento se mantuvo por compatibilidad. Aunque null es un tipo primitivo,
typeof lo identifica incorrectamente como un objeto.
*/