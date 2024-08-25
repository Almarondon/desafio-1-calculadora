const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
const btnsumar = document.getElementById("sumar");
const btnrestar = document.getElementById("restar");
const valorTotalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;

btnsumar.addEventListener("click", () => {
  const cantidadElement = document.querySelector(".cantidad");
  const cantidad = Number(cantidadElement.innerHTML) + 1;
  cantidadElement.innerHTML = cantidad;
  valorTotalSpan.innerHTML = cantidad * precio;
});

btnrestar.addEventListener("click", () => {
  const cantidadElement = document.querySelector(".cantidad");
  const cantidad = Number(cantidadElement.innerHTML) - 1;
  cantidadElement.innerHTML = cantidad;
  valorTotalSpan.innerHTML = cantidad * precio;
});
