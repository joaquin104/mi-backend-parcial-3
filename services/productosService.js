let productos = [
  { id: 1, nombre: 'Notebook', precio: 500000 },
  { id: 2, nombre: 'Mouse', preico: 15000 },
  { id: 3, nombre: 'Teclado', precio: 25000 },
];

const obtenerTodos = () => productos;

const crear = (datos) => {
  const nuevo = { id: Date.now(), ...datos };
  productos.push(nuevo);
  return nuevo;
};

const actualizar = (id, cambios) => {
  productos = productos.map((p) =>
    p.id === parseInt(id) ? { ...p, ...cambios } : p
  );
  return productos.find((p) => p.id === parseInt(id));
};

const eliminar = (id) => {
  productos = productos.filter((p) => p.id !== parseInt(id));
}

module.exports = { obtenerTodos, crear, actualizar, eliminar };
