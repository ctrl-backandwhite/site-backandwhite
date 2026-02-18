/**
 * Servidor Express para servir la aplicación Angular compilada
 */
const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression());

// Servir archivos estáticos desde la carpeta de build
const distCandidates = [
  path.join(__dirname, 'browser', 'browser'),
  path.join(__dirname, 'browser'),
  path.join(__dirname, 'dist', 'skote', 'browser'),
  path.join(__dirname, 'dist', 'skote')
];

const distFolder = distCandidates.find((candidate) =>
  fs.existsSync(path.join(candidate, 'index.html'))
) || distCandidates[0];
app.use(express.static(distFolder, {
  maxAge: '1y',
  etag: false
}));

// Healthcheck endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Fallback para Angular Router - SPA (debe ser lo último)
app.use((req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Internal Server Error');
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en http://0.0.0.0:${PORT}`);
  console.log(`Sirviendo archivos desde: ${distFolder}`);
});
