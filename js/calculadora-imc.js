const entradaPeso = prompt("Ingrese su peso en kilos:");
const entradaAltura = prompt("Ingrese su altura en metros:");

const calcularIMC = (peso, altura) => peso / altura ** 2;

const clasificarIMC = (imc) => {
  if (imc < 18.5) return "bajo peso";
  if (imc < 25) return "normal";
  if (imc < 30) return "sobrepeso";
  return "obesidad";
}

if (entradaPeso === null || entradaPeso.trim() === "" ||
  entradaAltura === null || entradaAltura.trim() === "") {
  console.error("Error: La entrada no puede estar vacia.");
} else {
  const peso = Number(entradaPeso);
  const altura = Number(entradaAltura);

  if (peso > 0 && altura > 0 && !Number.isNaN(peso) && !Number.isNaN(altura)) {
    const imc = calcularIMC(peso, altura);
    const clasificacion = clasificarIMC(imc);
    console.log(`Su IMC es ${imc} y su clasificacion es ${clasificacion}`);
  } else {
    console.error("Entradas invalidas: ingrese valores numericos mayores a 0");
  }
}