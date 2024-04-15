function calculo() {
  let num;
  let resultado = 1;
  let text = "Factorial de ";
  let element = document.createElement("p");
  try {
    num = parseInt(document.getElementById("factorial").value);
    if (isNaN(num)) throw "error";
    if (num < 0) throw "error";
    if (num === 0) throw "error";
    if (num) {
      text = text + num + ": ";
      for (let i = num; 0 < i; i--) {
        resultado = resultado * i;
        if (i !== 1) text = text + i + "x";
        else {
          text = text + i + " = " + resultado;
        }
      }
    } else {
      text = "Debe ingresar un número entero.";
    }

    element.appendChild(document.createTextNode(text));
    const respuesta = document.body.appendChild(element);
  } catch (e) {
    const respuesta = document.body.appendChild(element);
    respuesta.appendChild(
      document.createTextNode("Debe ingresar un número entero.")
    );
  }
}
