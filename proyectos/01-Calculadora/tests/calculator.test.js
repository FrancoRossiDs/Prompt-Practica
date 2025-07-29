const Calculator = require('../src/calculator');

describe('Calculadora - Tests Unitarios', () => {
    
    describe('Operaciones Básicas', () => {
        test('Debe sumar dos números correctamente', () => {
            expect(Calculator.add(2, 3)).toBe(5);
            expect(Calculator.add(-1, 1)).toBe(0);
            expect(Calculator.add(0, 0)).toBe(0);
        });

        test('Debe restar dos números correctamente', () => {
            expect(Calculator.subtract(5, 3)).toBe(2);
            expect(Calculator.subtract(0, 5)).toBe(-5);
            expect(Calculator.subtract(-2, -1)).toBe(-1);
        });

        test('Debe multiplicar dos números correctamente', () => {
            expect(Calculator.multiply(4, 3)).toBe(12);
            expect(Calculator.multiply(-2, 3)).toBe(-6);
            expect(Calculator.multiply(0, 5)).toBe(0);
        });

        test('Debe dividir dos números correctamente', () => {
            expect(Calculator.divide(6, 2)).toBe(3);
            expect(Calculator.divide(7, 2)).toBe(3.5);
            expect(Calculator.divide(-6, 2)).toBe(-3);
        });
    });

    describe('Casos Límite', () => {
        test('Debe manejar división por cero', () => {
            expect(Calculator.divide(5, 0)).toBe("Error");
            expect(Calculator.divide(0, 0)).toBe("Error");
            expect(Calculator.divide(-5, 0)).toBe("Error");
        });

        test('Debe manejar números decimales', () => {
            expect(Calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
            expect(Calculator.multiply(2.5, 4)).toBe(10);
        });

        test('Debe manejar números negativos', () => {
            expect(Calculator.add(-5, -3)).toBe(-8);
            expect(Calculator.subtract(-5, -3)).toBe(-2);
            expect(Calculator.multiply(-2, -3)).toBe(6);
            expect(Calculator.divide(-6, -2)).toBe(3);
        });
    });
});
