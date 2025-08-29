# Prueba Técnica CPC Oriente – Gestión de Productos

Este proyecto corresponde a la prueba técnica solicitada por **CPC Oriente**.  
Consiste en una aplicación **Fullstack básica** que permite **gestionar productos** de una tienda.

---

## 🚀 Tecnologías utilizadas

### Backend
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) → Servidor web y API REST
- [SQLite](https://www.sqlite.org/) + [Sequelize](https://sequelize.org/) → Base de datos ligera y ORM
- [CORS](https://www.npmjs.com/package/cors) → Comunicación segura entre frontend y backend
- [Nodemon](https://nodemon.io/) (dev) → Reinicio automático del servidor

### Frontend
- [HTML5](https://developer.mozilla.org/es/docs/Web/HTML)   
- [JavaScript (ES6+)](https://developer.mozilla.org/es/docs/Web/JavaScript)  
- [Bootstrap 5](https://getbootstrap.com/) → Estilos y componentes (tablas, formularios, modal)

---

## 📂 Estructura del proyecto

├── app.js # Punto de entrada del backend
├── database/
│ └── sequelize.js # Configuración de la conexión a SQLite
├── models/
│ └── producto.js # Definición del modelo de producto
├── routes/
│ └── productos.js # Endpoints de la API para CRUD
├── frontend/
│ ├── index.html # Interfaz principal (tabla + formulario + modal)
│ |── script.js # Lógica JS para consumir la API
└── package.json
