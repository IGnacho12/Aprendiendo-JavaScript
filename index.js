// Mostrar mas consignas

const BTN_MOSTRAR_CONSIGNAS = document.getElementById("btnMostrarConsignas");
const LISTA_DE_CONSIGNAS = document.getElementById("listaDeConsignas");

BTN_MOSTRAR_CONSIGNAS.addEventListener("click", () => {
  if (LISTA_DE_CONSIGNAS.classList.contains("show")) {
    LISTA_DE_CONSIGNAS.classList.remove("show")
    LISTA_DE_CONSIGNAS.classList.add("hidden")
    BTN_MOSTRAR_CONSIGNAS.innerHTML = "Mostrar lista de consignas"
  } else {
    BTN_MOSTRAR_CONSIGNAS.innerHTML = "Ocultar lista de consignas"
    LISTA_DE_CONSIGNAS.classList.remove("hidden")
    LISTA_DE_CONSIGNAS.classList.add("show")
  }
});

// Punto 1
const BTN_PUNTO_1 = document.getElementById("btnPunto1");
const RESULTADO_1 = document.getElementById("resultado_1");

BTN_PUNTO_1.addEventListener("click", () => {
  let num1 = parseInt(document.getElementById("P1num1").value);
  let num2 = parseInt(document.getElementById("P1num2").value);
  let num3 = parseInt(document.getElementById("P1num3").value);

  RESULTADO_1.innerHTML =
    "Los numeros ingresados son: <strong> " +
    num1 +
    ", " +
    num2 +
    " y " +
    num3 +
    "</strong>";
});

// Punto 2
const BTN_PUNTO_2 = document.getElementById("btnPunto2");
const RESULTADO_2 = document.getElementById("resultado_2");

BTN_PUNTO_2.addEventListener("click", () => {
  let num1 = parseInt(document.getElementById("P2num1").value);
  let num2 = parseInt(document.getElementById("P2num2").value);

  let suma = parseInt(num1 + num2);

  RESULTADO_2.innerHTML =
    "El resultado de la suma de los valores ingresados es: <strong>" +
    suma +
    "</strong>";
});

// Punto 3

const BTN_PUNTO_3 = document.getElementById("btnPunto3");
const RESULTADO_3 = document.getElementById("resultado_3");
const RESULTADO_3_B = document.getElementById("resultado_3_b");

BTN_PUNTO_3.addEventListener("click", () => {
  let num1 = parseInt(document.getElementById("P3num1").value);
  let num2 = parseInt(document.getElementById("P3num2").value);

  producto = parseInt(num1 * num2);

  cuadrado = Math.pow(num1, 2);

  RESULTADO_3.innerHTML =
    "El producto entre los 2 numeros ingresados es: <strong>" +
    producto +
    "</strong>";
  RESULTADO_3_B.innerHTML =
    "El cuadrado del numero 1 es: <strong>" + cuadrado + "</strong>";
});

// Punto 4
const BTN_PUNTO_4 = document.getElementById("btnPunto4");
const RESULTADO_4 = document.getElementById("resultado_4");
const RESULTADO_4_B = document.getElementById("resultado_4_b");

BTN_PUNTO_4.addEventListener("click", () => {
  let radio = parseInt(document.getElementById("P4radio").value);

  const pi = Math.PI;

  let circunferencia = 2 * pi + radio;
  let area = pi * Math.pow(radio, 2);

  RESULTADO_4.innerHTML =
    "La circunferencia del circulo es: <strong>" +
    circunferencia.toFixed(3) +
    "</strong>";
  RESULTADO_4_B.innerHTML =
    "El área del circulo es: <strong>" + area.toFixed(3) + "</strong>";
});

// Punto 5
const BTN_PUNTO_5 = document.getElementById("btnPunto5");
const P5_UL = document.querySelector(".P5_ul");
let yaClickeo = false;
const RESULTADO_5 = document.getElementById("resultado_5");

BTN_PUNTO_5.addEventListener("click", () => {
  if (yaClickeo === true) {
    return;
  }
  yaClickeo = true;

  const CANTIDAD_DE_EXAMENES = parseInt(
    document.getElementById("P5CantidadDeExamenes").value
  );
  if (CANTIDAD_DE_EXAMENES >= 50) {
    console.log("Demasiadas cantidad de examenes");
    return;
  }
  for (let i = 1; i <= CANTIDAD_DE_EXAMENES; i++) {
    const INPUT = document.createElement("input");
    INPUT.type = "number";
    INPUT.placeholder = "examen N°" + i;
    INPUT.id = "P5InputNumber" + i;
    P5_UL.appendChild(INPUT);
  }
  const BUTTON = document.createElement("button");
  BUTTON.textContent = "Calcular promedio";
  BUTTON.id = "P5botonCalcularPromedio";
  P5_UL.appendChild(BUTTON);

  // --- --- --- --- seccion calcular promedio --- --- --- ---
  const P5CALCULAR_PROMEDIO = document.getElementById(
    "P5botonCalcularPromedio"
  );

  let suma = 0;
  let promedio = 0;

  P5CALCULAR_PROMEDIO.addEventListener("click", () => {
    for (let i = 1; i <= CANTIDAD_DE_EXAMENES; i++) {
      const P5NUM = document.getElementById("P5InputNumber" + i).value;
      suma += P5NUM;

      promedio = suma / CANTIDAD_DE_EXAMENES;
    }
    console.log(promedio);
    RESULTADO_5.innerHTML =
      "El promedio de las notas de cada examen es : <strong>" +
      promedio +
      " </strong>";
  });

  // --- --- --- --- Fin de la seccion calcular promedio

  return yaClickeo; // variable de impedimiento para volver a crear inputs
});

// Punto 6
const BTN_PUNTO_6 = document.getElementById("btnPunto6");
const RESULTADO_6 = document.getElementById("resultado_6");

BTN_PUNTO_6.addEventListener("click", () => {
  const EDAD = parseInt(document.getElementById("P6edad").value);

  let NumeroDePulsaciones = parseInt((220 - EDAD) / 10);

  RESULTADO_6.innerHTML =
    "Su número de pulsaciones es de: <strong>" +
    NumeroDePulsaciones +
    "</strong>";
});

// Punto 7
const BTN_PUNTO_7 = document.getElementById("btnPunto7");
const RESULTADO_7 = document.getElementById("resultado_7");

BTN_PUNTO_7.addEventListener("click", () => {
  const PRESUPUESTO = parseInt(document.getElementById("P7Presupuesto").value);

  let cardiologia = (traumatologia = pediatria = 0);

  cardiologia = PRESUPUESTO * 0.4;
  traumatologia = PRESUPUESTO * 0.3;
  pediatria = PRESUPUESTO * 0.3;

  RESULTADO_7.innerHTML =
    "EL presupuesto para cardiología es: <strong>" +
    cardiologia +
    "</strong> <br> El presupuesto para traumatología es: <strong>" +
    traumatologia +
    "</strong> <br> El presupuesto para pediatría es: <strong>" +
    pediatria +
    "</strong>";
});

const BTN_PUNTO_8 = document.getElementById("btnPunto8");
const RESULTADO_8 = document.getElementById("resultado_8");

let num1 = 0;
let num2 = 0;
let num3 = 0;

BTN_PUNTO_8.addEventListener("click", () => {
  num1 = parseInt(document.getElementById("P8num1").value);
  num2 = parseInt(document.getElementById("P8num2").value);

  num3 = num1;

  num1 = num2;
  num2 = num3;

  RESULTADO_8.innerHTML =
    "El valor de la variable 1 es: " +
    "<strong>" +
    num1 +
    "</strong>" +
    "<br>" +
    "El valor de la variable 2 es: " +
    "<strong>" +
    num2 +
    "</strong>";
});
