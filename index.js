precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const btnsumar = document.getElementById("sumar");

btnsumar.addEventListener("click", () => {
  const cantidadElement = document.querySelector(".cantidad");
  const cantidad = Number(cantidadElement.innerHTML) + 1;
  cantidadElement.innerHTML = cantidad;
});
