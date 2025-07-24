/* =====================================================
   CALCULADORA WEB - CAPA DE NEGOCIO (Versión Browser)
   Funciones matemáticas puras sin dependencia del DOM
   ===================================================== */

"use strict";

/**
 * Suma dos números
 * @param {number} a - Primer sumando
 * @param {number} b - Segundo sumando  
 * @returns {number} Resultado de la suma
 */
function add(a, b) {
    return a + b;
}

/**
 * Resta dos números
 * @param {number} a - Minuendo
 * @param {number} b - Sustraendo
 * @returns {number} Resultado de la resta
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a - Primer factor
 * @param {number} b - Segundo factor
 * @returns {number} Resultado de la multiplicación
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide dos números
 * @param {number} a - Dividendo
 * @param {number} b - Divisor
 * @returns {number} Resultado de la división
 * @throws {Error} Si el divisor es cero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('División por cero no permitida');
    }
    return a / b;
}

/**
 * Ejecuta una operación matemática
 * @param {number} operand1 - Primer operando
 * @param {string} operator - Operador (+, -, *, /)
 * @param {number} operand2 - Segundo operando
 * @returns {Object} {success: boolean, result: number|null, error: string|null}
 */
function calculate(operand1, operator, operand2) {
    try {
        let result;

        switch (operator) {
            case '+':
                result = add(operand1, operand2);
                break;
            case '-':
                result = subtract(operand1, operand2);
                break;
            case '*':
                result = multiply(operand1, operand2);
                break;
            case '/':
                result = divide(operand1, operand2);
                break;
            default:
                throw new Error('Operador no válido');
        }

        // Validar resultado
        if (!isFinite(result) || isNaN(result)) {
            throw new Error('Resultado matemático inválido');
        }

        // Formatear resultado para evitar problemas de precisión
        result = Math.round(result * 1000000000) / 1000000000;

        return {
            success: true,
            result: result,
            error: null
        };
    } catch (error) {
        return {
            success: false,
            result: null,
            error: error.message
        };
    }
}

/**
 * Valida si un string puede convertirse a número
 * @param {string} value - Valor a validar
 * @returns {boolean} true si es un número válido
 */
function isValidNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * Formatea un número para mostrar máximo 10 dígitos
 * @param {number} num - Número a formatear
 * @returns {string} Número formateado
 */
function formatResult(num) {
    if (num.toString().length > 10) {
        return num.toExponential(5);
    }
    return num.toString();
}

// Exponer funciones como objeto global para el navegador
window.Calculator = {
    add,
    subtract,
    multiply,
    divide,
    calculate,
    isValidNumber,
    formatResult
};
