function realizarOperaciones(n1, n2, op){
    if (op === "suma"){
        return n1 + n2;
    }else if (op === "resta"){
        return n1 - n2;
    }else if (op === "multiplicacion"){
        return n1 * n2;
    }else if (op === "division"){
        if (n2 !== 0){
            return n1 / n2;
        } else {
            return "Error: Opereacion no valida, no se puede dividir entre cero"
        }
    }else {
        return "Error: Operación no válida.";
      }
}
document.write(realizarOperaciones(15, 5, "suma")+ "<br>");
document.write("<br>")
document.write(realizarOperaciones(15, 5, "resta") + "<br>");
document.write("<br>")
document.write(realizarOperaciones(15, 5, "multiplicacion")+ "<br>");
document.write("<br>")
document.write(realizarOperaciones(15, 5, "division")+ "<br>");