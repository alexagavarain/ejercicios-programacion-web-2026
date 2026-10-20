const entrada = prompt("Ingrese n:");

if (entrada === null || entrada.trim() === "") {
  console.error("Error: La entrada no puede estar vacia.");
} else {
  const n = Number(entrada);

  if (n > 0 && !Number.isNaN(n) && Number.isInteger(n)) {
    fizzbuzz(n);
  } else {
    console.error("Error: ingrese un numero entero mayor a 0")
  }
}

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i);
    }
  }
}