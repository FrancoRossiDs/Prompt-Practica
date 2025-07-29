const express = require('express');
const cors = require('cors');
const path = require('path');
const calculatorRoutes = require('./routes/calculatorRoutes');

// Crear instancia de Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permitir CORS para el frontend

// Middleware personalizado para manejar JSON malformado
app.use((req, res, next) => {
    if (req.is('application/json')) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                if (body) {
                    req.body = JSON.parse(body);
                } else {
                    req.body = {};
                }
                next();
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    error: 'JSON malformado',
                    message: 'El cuerpo de la petición contiene un JSON inválido'
                });
            }
        });
    } else {
        next();
    }
});

app.use(express.static('.')); // Servir archivos estáticos (frontend)

// Rutas de la API
app.use('/api', calculatorRoutes);

// Ruta raíz para servir el frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejo de rutas 404
app.use((req, res) => {
    res.status(404).json({
        error: 'Endpoint no encontrado',
        message: `La ruta ${req.path} no existe`
    });
});

// Middleware de manejo de errores global
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({
        error: 'Error interno del servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
    });
});

// Solo iniciar el servidor si no estamos en tests
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        console.log(`📱 Calculadora Web: http://localhost:${PORT}`);
        console.log(`🔗 API Health: http://localhost:${PORT}/api/health`);
    });
}

// Exportar app para testing
module.exports = app;