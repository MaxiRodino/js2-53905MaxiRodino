const opcionesFinancieras = {
  plazoFijo: {
    nombre: "Plazo Fijo",
    calculadora: calcularPlazoFijoNuevaFormula,
    parametros: ["valorAInvertir", "plazoEnDias"],
  },
  prestamoPersonal: {
    nombre: "Préstamo Personal",
    calculadora: calcularPrestamoPersonal,
    parametros: ["tasaAnual", "montoPrestamo", "plazoPrestamo"],
  },
};

function solicitarDatos(opcion) {
  const datos = {};
  for (const parametro of opcionesFinancieras[opcion].parametros) {
    datos[parametro] = parseFloat(prompt(`Ingrese ${parametro.replace(/[A-Z]/g, match => ` ${match.toLowerCase()}`)}:`));
  }
  return datos;
}

function calcular(opcion, datos) {
  return opcionesFinancieras[opcion].calculadora(...Object.values(datos));
}

console.log("Hola, bienvenid@ a tu asistente monetario. ¿En qué podemos ayudarte hoy?");

for (const key in opcionesFinancieras) {
  console.log(`${parseInt(key) + 1} - ${opcionesFinancieras[key].nombre}`);
}

const opcionPrincipal = parseInt(prompt("Seleccione una opción:")) - 1;

if (opcionesFinancieras[opcionPrincipal]) {
  const opcion = Object.keys(opcionesFinancieras)[opcionPrincipal];
  const datos = solicitarDatos(opcion);
  const resultado = calcular(opcion, datos);

  console.log(`Monto invertido: $${datos[opcionesFinancieras[opcion].parametros[0]].toFixed(2)}`);

  for (let i = 1; i < opcionesFinancieras[opcion].parametros.length; i++) {
    console.log(`${opcionesFinancieras[opcion].parametros[i]}: ${datos[opcionesFinancieras[opcion].parametros[i]].toFixed(2)}`);
  }

  console.log(`Resultado: $${resultado.toFixed(2)}`);
} else {
  console.log("Opción no válida");
}


