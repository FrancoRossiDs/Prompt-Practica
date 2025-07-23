/* =====================================================
   CALCULADORA WEB - ARQUITECTURA EN CAPAS SIMPLIFICADA
   
   SEPARACIÓN CLARA DE RESPONSABILIDADES:
   1. CAPA DE NEGOCIO: Operaciones matemáticas puras
   2. CAPA DE LÓGICA UI: Gestión de estado de la calculadora  
   3. CAPA DE PRESENTACIÓN: Manipulación del DOM y eventos
   ===================================================== */

"use strict";

/* =====================================================
   CAPA 1: LÓGICA DE NEGOCIO - OPERACIONES MATEMÁTICAS
   Funciones puras sin dependencia del DOM
   ===================================================== */

const Calculator = {
    /**
     * Suma dos números
     * @param {number} a - Primer sumando
     * @param {number} b - Segundo sumando  
     * @returns {number} Resultado de la suma
     */
    add(a, b) {
        return a + b;
    },

    /**
     * Resta dos números
     * @param {number} a - Minuendo
     * @param {number} b - Sustraendo
     * @returns {number} Resultado de la resta
     */
    subtract(a, b) {
        return a - b;
    },

    /**
     * Multiplica dos números
     * @param {number} a - Primer factor
     * @param {number} b - Segundo factor
     * @returns {number} Resultado de la multiplicación
     */
    multiply(a, b) {
        return a * b;
    },

    /**
     * Divide dos números
     * @param {number} a - Dividendo
     * @param {number} b - Divisor
     * @returns {number} Resultado de la división
     * @throws {Error} Si el divisor es cero
     */
    divide(a, b) {
        if (b === 0) {
            throw new Error('División por cero no permitida');
        }
        return a / b;
    },

    /**
     * Ejecuta una operación matemática
     * @param {number} operand1 - Primer operando
     * @param {string} operator - Operador (+, -, *, /)
     * @param {number} operand2 - Segundo operando
     * @returns {Object} {success: boolean, result: number|null, error: string|null}
     */
    calculate(operand1, operator, operand2) {
        try {
            let result;

            switch (operator) {
                case '+':
                    result = this.add(operand1, operand2);
                    break;
                case '-':
                    result = this.subtract(operand1, operand2);
                    break;
                case '*':
                    result = this.multiply(operand1, operand2);
                    break;
                case '/':
                    result = this.divide(operand1, operand2);
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
};

/* =====================================================
   CAPA 2: LÓGICA DE UI - GESTIÓN DE ESTADO
   Coordina entre la lógica de negocio y la presentación
   ===================================================== */

const CalculatorState = {
    // Estado interno de la calculadora
    currentValue: '0',
    previousValue: '',
    operator: '',
    waitingForNewValue: false,
    hasError: false,

    /**
     * Reinicia completamente el estado de la calculadora
     */
    clear() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operator = '';
        this.waitingForNewValue = false;
        this.hasError = false;
    },

    /**
     * Limpia solo el valor actual (Clear Entry)
     */
    clearEntry() {
        this.currentValue = '0';
        this.hasError = false;
    },

    /**
     * Maneja la entrada de números
     * @param {string} digit - Dígito del 0 al 9
     */
    inputNumber(digit) {
        // Si hay error, limpiar primero
        if (this.hasError) {
            this.clear();
        }

        if (this.waitingForNewValue) {
            this.currentValue = digit;
            this.waitingForNewValue = false;
        } else {
            this.currentValue = this.currentValue === '0' ? digit : this.currentValue + digit;
        }
    },

    /**
     * Maneja la entrada del punto decimal
     */
    inputDecimal() {
        // Si hay error, limpiar primero
        if (this.hasError) {
            this.clear();
        }

        if (this.waitingForNewValue) {
            this.currentValue = '0.';
            this.waitingForNewValue = false;
        } else if (this.currentValue.indexOf('.') === -1) {
            this.currentValue += '.';
        }
    },

    /**
     * Maneja la entrada de operadores
     * @param {string} newOperator - Operador matemático
     */
    inputOperator(newOperator) {
        // No procesar operadores si hay error
        if (this.hasError) {
            return;
        }

        const inputValue = parseFloat(this.currentValue);

        // Si no hay valor anterior, guardar el actual
        if (this.previousValue === '') {
            this.previousValue = inputValue;
        } 
        // Si ya hay un operador pendiente, calcular primero
        else if (this.operator && !this.waitingForNewValue) {
            const result = Calculator.calculate(this.previousValue, this.operator, inputValue);
            
            if (result.success) {
                this.currentValue = this.formatDisplayValue(result.result);
                this.previousValue = result.result;
            } else {
                this.setError();
                return;
            }
        }

        this.operator = newOperator;
        this.waitingForNewValue = true;
    },

    /**
     * Ejecuta el cálculo final
     */
    calculate() {
        // No calcular si hay error o no hay operador
        if (this.hasError || !this.operator || this.waitingForNewValue) {
            return;
        }

        const result = Calculator.calculate(
            this.previousValue,
            this.operator,
            parseFloat(this.currentValue)
        );

        if (result.success) {
            this.currentValue = this.formatDisplayValue(result.result);
            this.previousValue = '';
            this.operator = '';
            this.waitingForNewValue = true;
        } else {
            this.setError();
        }
    },

    /**
     * Elimina el último carácter ingresado
     */
    backspace() {
        // Si hay error, limpiar en lugar de hacer backspace
        if (this.hasError) {
            this.clear();
            return;
        }

        if (this.currentValue.length > 1) {
            this.currentValue = this.currentValue.slice(0, -1);
        } else {
            this.currentValue = '0';
        }
    },

    /**
     * Establece el estado de error
     */
    setError() {
        this.hasError = true;
        this.currentValue = 'Error';
        this.operator = '';
        this.previousValue = '';
        this.waitingForNewValue = false;
    },

    /**
     * Formatea un valor para mostrarlo en el display
     * @param {number} value - Valor a formatear
     * @returns {string} Valor formateado
     */
    formatDisplayValue(value) {
        // Limitar la longitud del display
        const stringValue = value.toString();
        
        if (stringValue.length > 12) {
            // Para números muy grandes o muy pequeños, usar notación científica
            if (Math.abs(value) > 999999999999 || (Math.abs(value) < 0.000001 && value !== 0)) {
                return value.toExponential(6);
            }
            // Para otros casos, truncar decimales
            return value.toPrecision(12);
        }
        
        return stringValue;
    },

    /**
     * Obtiene el valor actual para mostrar en el display
     * @returns {string} Valor para el display
     */
    getDisplayValue() {
        return this.currentValue;
    }
};

/* =====================================================
   CAPA 3: PRESENTACIÓN - INTERFAZ DE USUARIO
   Maneja el DOM y los eventos del usuario
   ===================================================== */

const CalculatorUI = {
    // Elementos del DOM
    displayElement: null,
    buttonsContainer: null,

    /**
     * Inicializa la interfaz de usuario
     */
    init() {
        // Obtener referencias a elementos del DOM
        this.displayElement = document.getElementById('display');
        this.buttonsContainer = document.querySelector('.buttons-grid');

        // Verificar que los elementos existan
        if (!this.displayElement || !this.buttonsContainer) {
            console.error('Error: No se pudieron encontrar los elementos necesarios del DOM');
            return;
        }

        // Configurar event listeners
        this.bindEvents();
        
        // Mostrar el estado inicial
        this.updateDisplay();

        console.log('Calculadora inicializada correctamente');
    },

    /**
     * Configura todos los event listeners
     */
    bindEvents() {
        // Event delegation para todos los botones
        this.buttonsContainer.addEventListener('click', (event) => {
            if (event.target.matches('button[data-action]')) {
                this.handleButtonClick(event.target);
            }
        });

        // Soporte para teclado
        document.addEventListener('keydown', (event) => {
            this.handleKeyboardInput(event);
        });
    },

    /**
     * Maneja los clics en botones
     * @param {HTMLElement} button - Botón clickeado
     */
    handleButtonClick(button) {
        const action = button.dataset.action;
        const value = button.dataset.value;

        // Agregar efecto visual
        this.addButtonFeedback(button);

        // Procesar la acción
        this.processAction(action, value);
    },

    /**
     * Maneja la entrada por teclado
     * @param {KeyboardEvent} event - Evento del teclado
     */
    handleKeyboardInput(event) {
        const key = event.key;

        // Mapeo de teclas a acciones
        const keyActions = {
            '0': () => this.processAction('number', '0'),
            '1': () => this.processAction('number', '1'),
            '2': () => this.processAction('number', '2'),
            '3': () => this.processAction('number', '3'),
            '4': () => this.processAction('number', '4'),
            '5': () => this.processAction('number', '5'),
            '6': () => this.processAction('number', '6'),
            '7': () => this.processAction('number', '7'),
            '8': () => this.processAction('number', '8'),
            '9': () => this.processAction('number', '9'),
            '.': () => this.processAction('decimal'),
            '+': () => this.processAction('operator', '+'),
            '-': () => this.processAction('operator', '-'),
            '*': () => this.processAction('operator', '*'),
            '/': () => this.processAction('operator', '/'),
            'Enter': () => this.processAction('calculate'),
            '=': () => this.processAction('calculate'),
            'Escape': () => this.processAction('clear'),
            'Backspace': () => this.processAction('backspace'),
            'Delete': () => this.processAction('clear-entry')
        };

        if (keyActions[key]) {
            event.preventDefault();
            keyActions[key]();
        }
    },

    /**
     * Procesa una acción y actualiza el display
     * @param {string} action - Tipo de acción
     * @param {string} value - Valor asociado a la acción
     */
    processAction(action, value) {
        try {
            switch (action) {
                case 'number':
                    CalculatorState.inputNumber(value);
                    break;
                case 'decimal':
                    CalculatorState.inputDecimal();
                    break;
                case 'operator':
                    CalculatorState.inputOperator(value);
                    break;
                case 'calculate':
                    CalculatorState.calculate();
                    break;
                case 'clear':
                    CalculatorState.clear();
                    break;
                case 'clear-entry':
                    CalculatorState.clearEntry();
                    break;
                case 'backspace':
                    CalculatorState.backspace();
                    break;
                default:
                    console.warn(`Acción no reconocida: ${action}`);
                    return;
            }

            // Actualizar el display después de procesar la acción
            this.updateDisplay();

        } catch (error) {
            console.error('Error procesando acción:', error);
            CalculatorState.setError();
            this.updateDisplay();
        }
    },

    /**
     * Actualiza el contenido del display
     */
    updateDisplay() {
        if (this.displayElement) {
            this.displayElement.textContent = CalculatorState.getDisplayValue();
            
            // Manejar estado de error visual
            const displayContainer = this.displayElement.parentElement;
            if (CalculatorState.hasError) {
                displayContainer.classList.add('error');
                // Quitar la clase de error después de la animación
                setTimeout(() => {
                    displayContainer.classList.remove('error');
                }, 500);
            }
        }
    },

    /**
     * Agrega feedback visual al presionar un botón
     * @param {HTMLElement} button - Botón presionado
     */
    addButtonFeedback(button) {
        button.classList.add('btn-pressed');
        setTimeout(() => {
            button.classList.remove('btn-pressed');
        }, 150);
    }
};

/* =====================================================
   INICIALIZACIÓN DE LA APLICACIÓN
   ===================================================== */

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    try {
        CalculatorUI.init();
    } catch (error) {
        console.error('Error crítico inicializando la calculadora:', error);
        
        // Mostrar mensaje de error al usuario
        document.body.innerHTML = `
            <div style="
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                font-family: Arial, sans-serif;
                text-align: center;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            ">
                <div>
                    <h2>Error</h2>
                    <p>No se pudo cargar la calculadora.</p>
                    <p>Por favor, recarga la página.</p>
                </div>
            </div>
        `;
    }
});

// Exponer objetos para debugging en desarrollo
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.CalculatorDebug = {
        Calculator,
        CalculatorState,
        CalculatorUI
    };
}
