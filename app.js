// Ejercicio 1:
// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// Forma 1

    /*let edad = parseInt (prompt(`ingrese su edad`));
    
    if (isNaN(edad)) {
        document.write(`el valor ingresado no es un numero`);
    } else if (edad >= 18) {
        document.write(`ya puede conducir`);
    }
     else {
        document.write(`aun no puede conducir`);
    }*/


//forma 2

    /*let edad = parseInt (prompt(`ingrese su edad`));
    let verificacion = 0;

    while (verificacion == 0) {
        verificacion = 1;

        if (isNaN(edad)) {
            alert(`el valor ingresado no corresponde a un numero`)
            edad = parseInt (prompt(`ingrese su edad de manera correcta`));
            verificacion = 0;    
        }    
    }

    if (edad >= 18) {
        document.write(`ya puede conducir`);
    } else {
        document.write(`aun no puede conducir`);
    } */






// Ejercicio 2:
// Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// let nota = parseInt (prompt(`ingrese un numero del 0 al 10:`));

// if (isNaN(nota)) {
//     console.log (`Introduce un numero valido!!!`);
// } else {
//     switch (nota) {
//         case 0:
//         case 1:
//         case 2:
//             console.log (`Muy deficiente`);
//         break;
//         case 3:
//         case 4:
//             console.log (`Insuficiente`);
//             break;
//         case 5:
//         case 6:
//             console.log (`Suficiente`);
//             break;
//         case 7:
//             console.log (`Bien`);
//             break;
//         case 8:
//         case 9:
//             console.log (`Notable`);
//             break;
//         case 10:
//             console.log (`Sobresaliente`);
//             break;
//         default:
//             console.log (`Numero erroneo`);
//             break;
//     }    
// }






// Ejercicio 3:
// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// let cadena = "";


// do {
//     let ingreso = prompt (`ingrese una cadena de texto`)
//     cadena = cadena + ingreso + " - " 
// } while (confirm("quiere continuar ingresando texto"));

// console.log(cadena);






// Ejercicio 4:
// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// let suma = 0 ;


// do {
//     let ingreso = parseInt(prompt (`ingrese un numero`));
//     if (isNaN(ingreso)) {
//         alert(`el valor ingresado no es un nuero`);
//     } else {
//         suma = suma + ingreso;
//         console.log(suma);
//     }


// } while (confirm("quiere continuar ingresando numeros para sumar"));

// console.log(suma);






// Ejercicio 5:
// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
