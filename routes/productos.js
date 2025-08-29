import { Router } from "express";
import { Producto } from "../models/producto.js";

const router = Router();

//POST /productos  -> Crear producto

router.post("/", async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;
    const nuevo = await Producto.create({ nombre, precio, stock });
    res.status(201).json(nuevo);
  } catch (e) {
    res.status(400).json({ mensaje: "Error al crear producto", error: e.message });
  }
});


 // GET /productos  -> Listar todos
 
router.get("/", async (_req, res) => {
  try {
    const lista = await Producto.findAll({ order: [["id", "ASC"]] });
    res.json(lista);
  } catch (e) {
    res.status(500).json({ mensaje: "Error al listar productos", error: e.message });
  }
});


//  PUT /productos/:id  -> Editar producto
 
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) return res.status(404).json({ mensaje: "No encontrado" });

    const { nombre, precio, stock } = req.body;
    await producto.update({ nombre, precio, stock });
    res.json(producto);
  } catch (e) {
    res.status(400).json({ mensaje: "Error al editar", error: e.message });
  }
});


// DELETE /productos/:id -> Eliminar producto
 
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const borrados = await Producto.destroy({ where: { id } });
    if (!borrados) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "Producto eliminado" });
  } catch (e) {
    res.status(500).json({ mensaje: "Error al eliminar", error: e.message });
  }
});

export default router;
