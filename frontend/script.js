const API_URL = "http://localhost:3000/productos";

const tbody = document.getElementById("tbody-productos");
const formAgregar = document.getElementById("form-agregar");
const formEditar = document.getElementById("form-editar");

// Cargar productos
async function cargarProductos() {
  const res = await fetch(API_URL);
  const productos = await res.json();

  tbody.innerHTML = "";
  productos.forEach(p => {
    tbody.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.nombre}</td>
        <td>${p.precio}</td>
        <td>${p.stock}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="abrirModal(${p.id}, '${p.nombre}', ${p.precio}, ${p.stock})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${p.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

// Agregar producto
formAgregar.onsubmit = async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const stock = document.getElementById("stock").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, precio, stock })
  });

  formAgregar.reset();
  cargarProductos();
};

// Eliminar producto
async function eliminarProducto(id) {
  if (confirm("¿Estás seguro de eliminar este producto?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    cargarProductos();
  }
}

// Modal para editar
function abrirModal(id, nombre, precio, stock) {
  document.getElementById("editar-id").value = id;
  document.getElementById("editar-nombre").value = nombre;
  document.getElementById("editar-precio").value = precio;
  document.getElementById("editar-stock").value = stock;

  const modal = new bootstrap.Modal(document.getElementById("modal-editar"));
  modal.show();
}

// Guardar cambios
formEditar.onsubmit = async (e) => {
  e.preventDefault();
  const id = document.getElementById("editar-id").value;
  const nombre = document.getElementById("editar-nombre").value;
  const precio = document.getElementById("editar-precio").value;
  const stock = document.getElementById("editar-stock").value;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, precio, stock })
  });

  const modal = bootstrap.Modal.getInstance(document.getElementById("modal-editar"));
  modal.hide();
  cargarProductos();
};

cargarProductos();
