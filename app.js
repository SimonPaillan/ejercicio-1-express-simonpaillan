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
app.get('/contacto', (req, res) => {
  res.send('no se debe ver');
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

