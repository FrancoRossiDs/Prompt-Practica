const Calculator = require('../src/calculator');

describe('Calculator - Operaciones Básicas', () => {
    
    describe('Suma (add)', () => {
        test('debe sumar dos números positivos', () => {
            expect(Calculator.add(2, 3)).toBe(5);
        });

        test('debe sumar números negativos', () => {
            expect(Calculator.add(-2, -3)).toBe(-5);
        });

        test('debe sumar número positivo y negativo', () => {
            expect(Calculator.add(5, -3)).toBe(2);
        });

        test('debe manejar decimales', () => {
            expect(Calculator.add(1.5, 2.5)).toBe(4);
        });

        test('debe manejar cero', () => {
            expect(Calculator.add(0, 5)).toBe(5);
            expect(Calculator.add(5, 0)).toBe(5);
        });
    });

    describe('Resta (subtract)', () => {
        test('debe restar dos números positivos', () => {
            expect(Calculator.subtract(5, 3)).toBe(2);
        });

        test('debe restar números negativos', () => {
            expect(Calculator.subtract(-2, -3)).toBe(1);
        });

        test('debe manejar decimales', () => {
            expect(Calculator.subtract(5.5, 2.5)).toBe(3);
        });

        test('debe manejar cero', () => {
            expect(Calculator.subtract(5, 0)).toBe(5);
            expect(Calculator.subtract(0, 5)).toBe(-5);
        });
    });

    describe('Multiplicación (multiply)', () => {
        test('debe multiplicar dos números positivos', () => {
            expect(Calculator.multiply(3, 4)).toBe(12);
        });

        test('debe multiplicar por cero', () => {
            expect(Calculator.multiply(5, 0)).toBe(0);
            expect(Calculator.multiply(0, 5)).toBe(0);
        });

        test('debe multiplicar números negativos', () => {
            expect(Calculator.multiply(-3, 4)).toBe(-12);
            expect(Calculator.multiply(-3, -4)).toBe(12);
        });

        test('debe manejar decimales', () => {
            expect(Calculator.multiply(2.5, 4)).toBe(10);
        });
    });

    describe('División (divide)', () => {
        test('debe dividir dos números positivos', () => {
            expect(Calculator.divide(12, 3)).toBe(4);
        });

        test('debe manejar decimales', () => {
            expect(Calculator.divide(7.5, 2.5)).toBe(3);
        });

        test('debe dividir números negativos', () => {
            expect(Calculator.divide(-12, 3)).toBe(-4);
            expect(Calculator.divide(-12, -3)).toBe(4);
        });

        test('debe lanzar error al dividir por cero', () => {
            expect(() => Calculator.divide(5, 0)).toThrow('División por cero no permitida');
        });

        test('debe manejar división por cero negativo', () => {
            expect(() => Calculator.divide(5, -0)).toThrow('División por cero no permitida');
        });
    });
});

describe('Calculator - Función calculate', () => {
    
    test('debe realizar suma correctamente', () => {
        const result = Calculator.calculate(5, '+', 3);
        expect(result.success).toBe(true);
        expect(result.result).toBe(8);
        expect(result.error).toBe(null);
    });

    test('debe realizar resta correctamente', () => {
        const result = Calculator.calculate(10, '-', 4);
        expect(result.success).toBe(true);
        expect(result.result).toBe(6);
        expect(result.error).toBe(null);
    });

    test('debe realizar multiplicación correctamente', () => {
        const result = Calculator.calculate(6, '*', 7);
        expect(result.success).toBe(true);
        expect(result.result).toBe(42);
        expect(result.error).toBe(null);
    });

    test('debe realizar división correctamente', () => {
        const result = Calculator.calculate(15, '/', 3);
        expect(result.success).toBe(true);
        expect(result.result).toBe(5);
        expect(result.error).toBe(null);
    });

    test('debe manejar división por cero', () => {
        const result = Calculator.calculate(10, '/', 0);
        expect(result.success).toBe(false);
        expect(result.result).toBe(null);
        expect(result.error).toBe('División por cero no permitida');
    });

    test('debe manejar operador inválido', () => {
        const result = Calculator.calculate(5, '%', 3);
        expect(result.success).toBe(false);
        expect(result.result).toBe(null);
        expect(result.error).toBe('Operador no válido');
    });

    test('debe formatear resultados con muchos decimales', () => {
        const result = Calculator.calculate(1, '/', 3);
        expect(result.success).toBe(true);
        expect(typeof result.result).toBe('number');
        expect(result.result.toString().length).toBeLessThanOrEqual(12);
    });
});

describe('Calculator - Funciones de validación', () => {
    
    describe('isValidNumber', () => {
        test('debe validar números enteros', () => {
            expect(Calculator.isValidNumber('123')).toBe(true);
            expect(Calculator.isValidNumber('-123')).toBe(true);
            expect(Calculator.isValidNumber('0')).toBe(true);
        });

        test('debe validar números decimales', () => {
            expect(Calculator.isValidNumber('123.45')).toBe(true);
            expect(Calculator.isValidNumber('-123.45')).toBe(true);
            expect(Calculator.isValidNumber('0.123')).toBe(true);
        });

        test('debe rechazar strings no numéricos', () => {
            expect(Calculator.isValidNumber('abc')).toBe(false);
            expect(Calculator.isValidNumber('')).toBe(false);
            expect(Calculator.isValidNumber('12.34.56')).toBe(false);
        });

        test('debe rechazar valores infinitos', () => {
            expect(Calculator.isValidNumber('Infinity')).toBe(false);
            expect(Calculator.isValidNumber('-Infinity')).toBe(false);
        });
    });

    describe('formatResult', () => {
        test('debe formatear números normales sin cambios', () => {
            expect(Calculator.formatResult(123)).toBe('123');
            expect(Calculator.formatResult(123.45)).toBe('123.45');
        });

        test('debe usar notación científica para números largos', () => {
            const largeNumber = 12345678901234567890;
            const result = Calculator.formatResult(largeNumber);
            expect(result).toContain('e+');
        });

        test('debe manejar números negativos', () => {
            expect(Calculator.formatResult(-123)).toBe('-123');
        });

        test('debe manejar cero', () => {
            expect(Calculator.formatResult(0)).toBe('0');
        });
    });
});
