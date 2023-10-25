var carrito = [];

function agregarProductoAlCarrito(producto, precio) {
  var item = {
    producto: producto,
    precio: precio
  };
  carrito.push(item);
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    console.log("El carrito está vacío.");
  } else {
    console.log("Productos en el carrito:");
    for (var i = 0; i < carrito.length; i++) {
      console.log(carrito[i].producto + " - $" + carrito[i].precio);
    }
    console.log("Total de la compra: $" + calcularTotal());
  }
}

function calcularTotal() {
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  return total;
}

function interactivoCarrito() {
  while (true) {
    var opcion = prompt("¿Qué deseas hacer?\n1. Agregar producto al carrito\n2. Mostrar carrito\n3. Salir");
    
    if (opcion === "1") {
      var producto = prompt("Ingresa el nombre del producto:");
      var precio = parseFloat(prompt("Ingresa el precio del producto:"));
      agregarProductoAlCarrito(producto, precio);
    } else if (opcion === "2") {
      mostrarCarrito();
    } else if (opcion === "3") {
      break;
    } else {
      alert("Opción no válida. Por favor, elige una opción válida.");
    }
  }
}

interactivoCarrito();