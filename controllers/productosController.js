const service = require('../services/productosService');

const obtener = (req, res) => {
  const productos = service.obtenerTodos();
  res.json(productos);
};

const crear = (req, res) => {
  const nuevo = service.crear(req.body);
  res.status(201).json(nuevo);
};

const actualizar = (req, res) => {
  const { id } = req.params;
  const actualizado = service.actualizar(id, req.body);
  res.json(actualizado);
};

const eliminar = (req, res) => {
  const { id } = req.params;
  service.eliminar(id);
  res.json({mensaje: "Eliminador correctamente"});
}

module.exports = { obtener, crear, actualizar, eliminar };
