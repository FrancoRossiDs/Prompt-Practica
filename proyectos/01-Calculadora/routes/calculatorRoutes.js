const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

/**
 * @route POST /api/calculate
 * @description Realiza operaciones matemáticas básicas
 * @body {string} operation - Tipo de operación: "add", "subtract", "multiply", "divide"
 * @body {number} num1 - Primer número
 * @body {number} num2 - Segundo número
 * @returns {object} JSON con result o error
 */
router.post('/calculate', calculatorController.calculate);

/**
 * @route GET /api/health
 * @description Endpoint de health check para verificar que la API está funcionando
 * @returns {object} Estado de la API
 */
router.get('/health', calculatorController.getHealth);

/**
 * @route GET /api/operations
 * @description Lista las operaciones disponibles
 * @returns {object} Operaciones soportadas
 */
router.get('/operations', calculatorController.getOperations);

module.exports = router;