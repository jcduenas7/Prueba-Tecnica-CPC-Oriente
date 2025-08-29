import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize.js";

export const Producto = sequelize.define(
  "Producto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: { notEmpty: true }
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: { isDecimal: true, min: 0 }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isInt: true, min: 0 }
    }
  },
  {
    tableName: "productos",
    timestamps: true
  }
);

await Producto.sync();
