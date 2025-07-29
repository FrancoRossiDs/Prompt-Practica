/* =====================================================
   CALCULADORA WEB - CAPA DE NEGOCIO
   Funciones matemáticas puras sin dependencia del DOM
   ===================================================== */

"use strict";

/**
 * Calculadora - Lógica de Negocio Pura
 */

class Calculator {
    /**
     * Suma dos números
     * @param {number} a - Primer número
     * @param {number} b - Segundo número
     * @returns {number} - Resultado de la suma
     */
    static add(a, b) {
        return a + b;
    }

    /**
     * Resta dos números
     * @param {number} a - Primer número
     * @param {number} b - Segundo número
     * @returns {number} - Resultado de la resta
     */
    static subtract(a, b) {
        return a - b;
    }

    /**
     * Multiplica dos números
     * @param {number} a - Primer número
     * @param {number} b - Segundo número
     * @returns {number} - Resultado de la multiplicación
     */
    static multiply(a, b) {
        return a * b;
    }

    /**
     * Divide dos números
     * @param {number} a - Dividendo
     * @param {number} b - Divisor
     * @returns {number|string} - Resultado de la división o "Error" si b es 0
     */
    static divide(a, b) {
        if (b === 0) {
            return "Error";
        }
        return a / b;
    }
}

module.exports = Calculator;
