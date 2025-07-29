const Calculator = require('../src/calculator');

// Operaciones disponibles
const VALID_OPERATIONS = ['add', 'subtract', 'multiply', 'divide'];

/**
 * Valida los datos de entrada
 */
function validateInput(operation, num1, num2) {
    // Validar que existan todos los parámetros
    if (!operation) {
        return { isValid: false, error: 'Parámetros faltantes', message: 'El parámetro operation es requerido' };
    }
    
    if (num1 === undefined || num1 === null) {
        return { isValid: false, error: 'Parámetros faltantes', message: 'El parámetro num1 es requerido' };
    }
    
    if (num2 === undefined || num2 === null) {
        return { isValid: false, error: 'Parámetros faltantes', message: 'El parámetro num2 es requerido' };
    }

    // Validar tipos de datos
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return { isValid: false, error: 'Tipos de datos incorrectos', message: 'num1 y num2 deben ser números' };
    }

    // Validar que sean números finitos (no NaN, no Infinity)
    // JSON.parse convierte NaN a null, pero también validamos directamente
    if (Number.isNaN(num1) || Number.isNaN(num2) || !Number.isFinite(num1) || !Number.isFinite(num2)) {
        return { isValid: false, error: 'Números inválidos', message: 'num1 y num2 deben ser números finitos' };
    }

    // Validar operación
    if (!VALID_OPERATIONS.includes(operation)) {
        return { isValid: false, error: 'Operación inválida', message: `La operación "${operation}" no es válida. Operaciones disponibles: ${VALID_OPERATIONS.join(', ')}` };
    }

    return { isValid: true };
}

/**
 * Realiza un cálculo matemático
 */
const calculate = (req, res) => {
    try {
        const { operation, num1, num2 } = req.body;

        // Validar entrada
        const validation = validateInput(operation, num1, num2);
        if (!validation.isValid) {
            return res.status(400).json({
                success: false,
                error: validation.error,
                message: validation.message
            });
        }

        // Realizar operación
        let result;
        switch (operation) {
            case 'add':
                result = Calculator.add(num1, num2);
                break;
            case 'subtract':
                result = Calculator.subtract(num1, num2);
                break;
            case 'multiply':
                result = Calculator.multiply(num1, num2);
                break;
            case 'divide':
                result = Calculator.divide(num1, num2);
                if (result === "Error") {
                    return res.status(400).json({
                        success: false,
                        error: 'División por cero',
                        message: 'No se puede dividir por cero'
                    });
                }
                break;
        }

        // Respuesta exitosa
        res.json({
            success: true,
            result: result,
            operation: operation,
            operands: { num1, num2 }
        });

    } catch (error) {
        console.error('Error en calculate:', error);
        res.status(500).json({
            success: false,
            error: 'Error interno del servidor',
            message: 'Ocurrió un error al procesar la operación'
        });
    }
};

/**
 * Obtiene el estado de salud de la API
 */
const getHealth = (req, res) => {
    res.json({
        status: 'OK',
        message: 'API de Calculadora funcionando correctamente',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
};

/**
 * Lista todas las operaciones disponibles
 */
const getOperations = (req, res) => {
    res.json({
        operations: VALID_OPERATIONS,
        descriptions: {
            add: 'Suma dos números',
            subtract: 'Resta dos números',
            multiply: 'Multiplica dos números',
            divide: 'Divide dos números'
        }
    });
};

module.exports = {
    calculate,
    getHealth,
    getOperations
};

/**
 * 🌐 API RESTful
 *
 * **Descripción**
 * Además de la interfaz web, este proyecto incluye una **API RESTful completa** desarrollada con Express.js que proporciona endpoints para realizar operaciones matemáticas programáticamente.
 *
 * **Arquitectura de la API**
 * ```
 * API Structure:
 * ├── 🚀 server.js                       # Punto de entrada del servidor Express
 * ├── 🛣️ routes/
 * │   └── calculatorRoutes.js            # Definición de rutas RESTful
 * ├── 🎮 controllers/
 * │   └── calculatorController.js        # Lógica de manejo de peticiones
 * └── 🧠 src/calculator.js               # Reutilización de la lógica existente
 * ```
 *
 * **Endpoints Disponibles**
 *
 * #### **POST /api/calculate**
 * Realiza operaciones matemáticas básicas.
 *
 * **Request Body:**
 * ```json
 * {
 *   "operation": "add|subtract|multiply|divide",
 *   "num1": number,
 *   "num2": number
 * }
 * ```
 *
 * **Response (Éxito):**
 * ```json
 * {
 *   "success": true,
 *   "operation": "add",
 *   "operands": { "num1": 5, "num2": 3 },
 *   "result": 8,
 *   "timestamp": "2024-01-15T10:30:00.000Z"
 * }
 * ```
 *
 * **Response (Error):**
 * ```json
 * {
 *   "error": "División por cero no permitida",
 *   "message": "El divisor no puede ser cero",
 *   "operation": "divide",
 *   "operands": { "num1": 5, "num2": 0 }
 * }
 * ```
 *
 * #### **GET /api/health**
 * Verifica el estado de la API.
 *
 * **Response:**
 * ```json
 * {
 *   "status": "OK",
 *   "message": "API de Calculadora funcionando correctamente",
 *   "timestamp": "2024-01-15T10:30:00.000Z",
 *   "endpoints": {
 *     "calculate": "POST /api/calculate"
 *   }
 * }
 * ```
 *
 * #### **GET /api/operations**
 * Lista todas las operaciones disponibles con ejemplos.
 *
 * **Ejecutar la API**
 *
 * ```bash
 * # Instalar dependencias
 * npm install
 *
 * # Ejecutar en modo desarrollo (con nodemon)
 * npm run dev
 *
 * # Ejecutar en modo producción
 * npm start
 * ```
 *
 * La API estará disponible en: `http://localhost:3000/api`
 *
 * **Características de la API**
 *
 * - ✅ **RESTful Design:** Siguiendo las mejores prácticas REST
 * - ✅ **Validación Robusta:** Validación completa de tipos y valores
 * - ✅ **Manejo de Errores:** Códigos HTTP apropiados y mensajes descriptivos
 * - ✅ **CORS Habilitado:** Compatible con cualquier frontend
 * - ✅ **Logging:** Registro de todas las peticiones
 * - ✅ **Health Check:** Endpoint para monitoreo
 * - ✅ **Documentación:** Endpoints auto-documentados
 * - ✅ **Código Limpio:** Separación clara de responsabilidades
 *
 * **Validaciones Implementadas**
 *
 * 1. **Parámetros Requeridos:** Verifica que operation, num1 y num2 estén presentes
 * 2. **Tipos de Datos:** Valida que num1 y num2 sean números
 * 3. **Números Válidos:** Rechaza NaN e Infinity
 * 4. **Operaciones Soportadas:** Solo permite operaciones válidas
 * 5. **División por Cero:** Manejo específico con mensaje claro
 * 6. **Casos Límite:** Validación de todos los casos edge
 *
 * ---
 *
 * ## ⚡ Instalación y Uso Actualizado
 *
 * ### **Instalación de Dependencias:**
 * ```bash
 * cd proyectos/01-Calculadora
 * npm install
 * ```
 *
 * ### **Ejecutar la Aplicación Completa:**
 * ```bash
 * # Modo desarrollo (con auto-reload)
 * npm run dev
 *
 * # Modo producción
 * npm start
 * ```
 *
 * ### **Usar la Calculadora:**
 * - **🌐 Frontend Web:** `http://localhost:3000`
 * - **🔗 API REST:** `http://localhost:3000/api`
 * - **📊 Health Check:** `http://localhost:3000/api/health`
 *
 * ### **Ejecutar Tests:**
 * ```bash
 * npm test
 * npm run test:coverage
 * ```
 */