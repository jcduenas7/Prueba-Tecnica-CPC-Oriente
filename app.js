import express from "express";
import cors from "cors";
import { sequelize } from "./database/sequelize.js";
import productosRouter from "./routes/productos.js";

const app = express();


app.use(cors());
app.use(express.json());



(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a SQLite OK");
  } catch (e) {
    console.error("❌ Error conectando a la BD:", e.message);
  }
})();


app.use("/productos", productosRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 API escuchando en http://localhost:${PORT}`));
