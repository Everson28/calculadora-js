function realizarOperacion() {
    while (true) {
      let op = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:");
      if (!op) continue; // Evitar null o vacío
      op = op.trim().toLowerCase();
      if (op === "salir") {
        alert("Gracias por usar el programa. ¡Hasta luego!");
        break;
      }
      let n1 = parseFloat(prompt("Ingrese el primer número:"));
      let n2 = parseFloat(prompt("Ingrese el segundo número:"));
      if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, ingrese números válidos.");
        continue;
      }
      let resul;
      if (op === "suma") {
        resul = n1 + n2;
      } else if (op === "resta") {
        resul = n1 - n2;
      } else if (op === "multiplicacion") {
        resultado = n1 * n2;
      } else if (op === "division") {
        if (n2 !== 0) {
          resul = n1 / n2;
        } else {
          alert("Error: División por cero no permitida.");
          continue;
        }
      } else {
        alert("Error: Operación no válida. Solo se permiten suma, resta, multiplicación y división.");
        continue;
      }
      alert("El resultado de la " + op + " es: " + resul);
    }
  }
  realizarOperacion();
  