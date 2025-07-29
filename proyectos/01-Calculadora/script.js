/* =====================================================
   CALCULADORA WEB - ARQUITECTURA EN CAPAS SIMPLIFICADA
   
   SEPARACIÓN CLARA DE RESPONSABILIDADES:
   1. CAPA DE NEGOCIO: Operaciones matemáticas puras (src/calculator.js)
   2. CAPA DE LÓGICA UI: Gestión de estado de la calculadora  
   3. CAPA DE PRESENTACIÓN: Manipulación del DOM y eventos
   ===================================================== */

"use strict";

/**
 * Calculadora Web con Integración a API RESTful
 * 
 * Esta calculadora consume una API backend para realizar los cálculos,
 * proporcionando una arquitectura completamente desacoplada entre
 * frontend y backend.
 */

// Estado de la calculadora
let currentInput = '';
let previousInput = '';
let operator = '';
let waitingForOperand = false;
let displayExpression = ''; // Nueva variable para mostrar la expresión completa

// Configuración de la API
const API_CONFIG = {
    baseURL: window.location.origin, // Usa la misma URL del servidor
    endpoints: {
        calculate: '/api/calculate',
        health: '/api/health'
    },
    timeout: 5000 // 5 segundos de timeout
};

// Elementos del DOM
const display = document.getElementById('display');
const loadingIndicator = document.getElementById('loadingIndicator');
const connectionStatus = document.getElementById('connectionStatus');
const statusIcon = document.getElementById('statusIcon');
const statusText = document.getElementById('statusText');

/**
 * Inicialización de la aplicación
 */
document.addEventListener('DOMContentLoaded', function() {
    checkAPIConnection();
    updateDisplay();
    
    // Verificar conexión cada 30 segundos
    setInterval(checkAPIConnection, 30000);
});

/**
 * Mapea operadores para mostrar en el display
 * @param {string} op - Operador interno
 * @returns {string} - Operador visual
 */
function getDisplayOperator(op) {
    const operatorDisplay = {
        '+': ' + ',
        '-': ' − ',
        '*': ' × ',
        '/': ' ÷ '
    };
    return operatorDisplay[op] || ` ${op} `;
}

/**
 * Actualiza el contenido del display
 */
function updateDisplay() {
    let displayValue = '';
    
    if (displayExpression) {
        // Mostrar la expresión completa cuando está en construcción
        displayValue = displayExpression;
    } else if (currentInput) {
        // Mostrar el número actual que se está ingresando
        displayValue = currentInput;
    } else if (previousInput) {
        // Mostrar el resultado anterior
        displayValue = previousInput;
    } else {
        // Estado inicial
        displayValue = '0';
    }
    
    display.textContent = displayValue;
    display.className = 'display'; // Remover clases de error
}

/**
 * Construye la expresión visual para el display
 */
function buildDisplayExpression() {
    if (previousInput && operator) {
        displayExpression = previousInput + getDisplayOperator(operator);
        if (currentInput && !waitingForOperand) {
            displayExpression += currentInput;
        }
    } else {
        displayExpression = '';
    }
}

/**
 * Agrega un número o punto decimal al display
 * @param {string} value - El valor a agregar
 */
function appendToDisplay(value) {
    if (waitingForOperand) {
        currentInput = value;
        waitingForOperand = false;
    } else {
        // Prevenir múltiples puntos decimales
        if (value === '.' && currentInput.includes('.')) {
            return;
        }
        currentInput = currentInput === '0' ? value : currentInput + value;
    }
    
    // Actualizar la expresión visual
    buildDisplayExpression();
    updateDisplay();
}

/**
 * Establece la operación matemática
 * @param {string} nextOperator - El operador a usar
 */
function setOperation(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (previousInput === '' && !isNaN(inputValue)) {
        previousInput = inputValue;
    } else if (operator && !waitingForOperand) {
        // Si hay una operación pendiente, ejecutarla primero
        calculate();
        return;
    }

    waitingForOperand = true;
    operator = nextOperator;
    
    // Construir y mostrar la expresión con el operador
    buildDisplayExpression();
    updateDisplay();
}

/**
 * Limpia el display y resetea el estado
 */
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    waitingForOperand = false;
    displayExpression = '';
    updateDisplay();
}

/**
 * Borra el último dígito ingresado
 */
function backspace() {
    if (!waitingForOperand && currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
        buildDisplayExpression();
        updateDisplay();
    }
}

/**
 * Muestra el indicador de carga
 */
function showLoading() {
    loadingIndicator.classList.add('show');
    // Deshabilitar botones durante la carga
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.disabled = true);
}

/**
 * Oculta el indicador de carga
 */
function hideLoading() {
    loadingIndicator.classList.remove('show');
    // Rehabilitar botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.disabled = false);
}

/**
 * Actualiza el estado de conexión en la UI
 * @param {boolean} isConnected - Estado de la conexión
 * @param {string} message - Mensaje de estado
 */
function updateConnectionStatus(isConnected, message) {
    if (isConnected) {
        statusIcon.textContent = '🟢';
        statusText.textContent = message || 'API Conectada';
        connectionStatus.className = 'connection-status success';
    } else {
        statusIcon.textContent = '🔴';
        statusText.textContent = message || 'API Desconectada';
        connectionStatus.className = 'connection-status error';
    }
}

/**
 * Verifica la conexión con la API
 */
async function checkAPIConnection() {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.health}`, {
            method: 'GET',
            timeout: 3000
        });
        
        if (response.ok) {
            updateConnectionStatus(true, 'API Conectada');
        } else {
            updateConnectionStatus(false, 'API con errores');
        }
    } catch (error) {
        updateConnectionStatus(false, 'API Desconectada');
        console.warn('API no disponible:', error.message);
    }
}

/**
 * Mapea los operadores del frontend a los de la API
 * @param {string} op - Operador del frontend
 * @returns {string} - Operador para la API
 */
function mapOperatorToAPI(op) {
    const operatorMap = {
        '+': 'add',
        '-': 'subtract',
        '*': 'multiply',
        '/': 'divide'
    };
    return operatorMap[op];
}

/**
 * Muestra un error en el display
 * @param {string} message - Mensaje de error
 */
function showError(message) {
    display.textContent = message;
    display.classList.add('error');
    
    // Remover clase de error después de 3 segundos
    setTimeout(() => {
        display.classList.remove('error');
        clearDisplay();
    }, 3000);
}

/**
 * Realiza la operación matemática usando la API
 */
async function calculate() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    const operation = mapOperatorToAPI(operator);

    // Validaciones básicas del frontend
    if (isNaN(num1) || isNaN(num2) || !operation) {
        showError('Error: Datos inválidos');
        return;
    }

    // Preparar payload para la API
    const payload = {
        operation: operation,
        num1: num1,
        num2: num2
    };

    try {
        // Mostrar indicador de carga
        showLoading();

        // Crear timeout manual más compatible
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

        // Realizar petición a la API
        const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.calculate}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        const data = await response.json();

        if (response.ok && data.success) {
            // Operación exitosa - mostrar resultado inmediatamente
            const result = data.result;
            
            // Actualizar estado de la calculadora con el resultado
            currentInput = result.toString();
            previousInput = '';
            operator = '';
            waitingForOperand = true;
            displayExpression = '';
            
            // Mostrar solo el resultado
            updateDisplay();
            updateConnectionStatus(true, 'Cálculo completado');
            
        } else {
            // Error de la API
            const errorMessage = data.message || data.error || 'Error desconocido';
            showError(`Error: ${errorMessage}`);
            updateConnectionStatus(false, 'Error en cálculo');
        }

    } catch (error) {
        // Error de red o timeout
        let errorMessage = 'Error de conexión';
        
        if (error.name === 'AbortError') {
            errorMessage = 'Timeout: Cálculo tardó mucho';
        } else if (error.name === 'TypeError') {
            errorMessage = 'Error: API no disponible';
        }
        
        showError(errorMessage);
        updateConnectionStatus(false, 'Sin conexión');
        console.error('Error en calculate():', error);
        
    } finally {
        // Ocultar indicador de carga
        hideLoading();
    }
}

/**
 * Manejo de eventos de teclado para mejor UX
 */
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Números y punto decimal
    if (/[0-9\.]/.test(key)) {
        appendToDisplay(key);
    }
    // Operadores
    else if (['+', '-', '*', '/'].includes(key)) {
        setOperation(key);
    }
    // Enter o = para calcular
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    }
    // Escape o c para limpiar
    else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    }
    // Backspace para borrar
    else if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    }
});

/**
 * Manejo de errores globales de la aplicación
 */
window.addEventListener('error', function(event) {
    console.error('Error global capturado:', event.error);
    showError('Error: Algo salió mal');
});

/**
 * Manejo de errores de promesas no capturadas
 */
window.addEventListener('unhandledrejection', function(event) {
    console.error('Promesa rechazada no manejada:', event.reason);
    showError('Error: Operación falló');
    event.preventDefault(); // Prevenir que aparezca en la consola
});

console.log('🧮 Calculadora Web con API cargada correctamente');
console.log(`📡 API configurada en: ${API_CONFIG.baseURL}`);

