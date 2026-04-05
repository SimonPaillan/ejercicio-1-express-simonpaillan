const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( express.static('public'));
app.use( express.static('acerca'));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Hola mundo nashe!');
  
});
app.get('/acerca', (req, res) => {
  res.send('pagina en construccion');
});
app.post('/contacto', (req, res) => {
  const { nombre, email } = req.body;
  res.send(`Nombre: ${nombre}, Email: ${email}`);
  res.send(`Hola ${nombre}`);
});

// Middleware básico para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '¡Algo salió mal!' });
});


// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
}); 

