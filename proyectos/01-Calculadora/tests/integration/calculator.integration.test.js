const request = require('supertest');
const app = require('../../server');

describe('API de Calculadora - Tests de Integración', () => {
    
    describe('POST /api/calculate', () => {
        
        describe('✅ Operaciones Válidas', () => {
            
            test('Debe realizar suma correctamente', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num1: 5,
                        num2: 3
                    });

                expect(response.status).toBe(200);
                expect(response.body).toEqual({
                    success: true,
                    operation: 'add',
                    operands: { num1: 5, num2: 3 },
                    result: 8
                });
            });

            test('Debe realizar resta correctamente', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'subtract',
                        num1: 10,
                        num2: 4
                    });

                expect(response.status).toBe(200);
                expect(response.body).toEqual({
                    success: true,
                    operation: 'subtract',
                    operands: { num1: 10, num2: 4 },
                    result: 6
                });
            });

            test('Debe realizar multiplicación correctamente', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'multiply',
                        num1: 7,
                        num2: 6
                    });

                expect(response.status).toBe(200);
                expect(response.body).toEqual({
                    success: true,
                    operation: 'multiply',
                    operands: { num1: 7, num2: 6 },
                    result: 42
                });
            });

            test('Debe realizar división correctamente', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'divide',
                        num1: 15,
                        num2: 3
                    });

                expect(response.status).toBe(200);
                expect(response.body).toEqual({
                    success: true,
                    operation: 'divide',
                    operands: { num1: 15, num2: 3 },
                    result: 5
                });
            });

            test('Debe manejar números decimales', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num1: 2.5,
                        num2: 1.3
                    });

                expect(response.status).toBe(200);
                expect(response.body.success).toBe(true);
                expect(response.body.result).toBeCloseTo(3.8);
            });

            test('Debe manejar números negativos', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num1: -5,
                        num2: 3
                    });

                expect(response.status).toBe(200);
                expect(response.body).toEqual({
                    success: true,
                    operation: 'add',
                    operands: { num1: -5, num2: 3 },
                    result: -2
                });
            });

            test('Debe manejar operación con cero', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'multiply',
                        num1: 5,
                        num2: 0
                    });

                expect(response.status).toBe(200);
                expect(response.body).toEqual({
                    success: true,
                    operation: 'multiply',
                    operands: { num1: 5, num2: 0 },
                    result: 0
                });
            });
        });

        describe('❌ Manejo de Errores', () => {
            
            test('Debe rechazar división por cero', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'divide',
                        num1: 5,
                        num2: 0
                    });

                expect(response.status).toBe(400);
                expect(response.body).toEqual({
                    success: false,
                    error: 'División por cero',
                    message: 'No se puede dividir por cero'
                });
            });

            test('Debe rechazar operación inválida', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'power',
                        num1: 2,
                        num2: 3
                    });

                expect(response.status).toBe(400);
                expect(response.body).toEqual({
                    success: false,
                    error: 'Operación inválida',
                    message: 'La operación "power" no es válida. Operaciones disponibles: add, subtract, multiply, divide'
                });
            });

            test('Debe rechazar parámetros faltantes - sin operation', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        num1: 5,
                        num2: 3
                    });

                expect(response.status).toBe(400);
                expect(response.body).toEqual({
                    success: false,
                    error: 'Parámetros faltantes',
                    message: 'El parámetro operation es requerido'
                });
            });

            test('Debe rechazar parámetros faltantes - sin num1', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num2: 3
                    });

                expect(response.status).toBe(400);
                expect(response.body).toEqual({
                    success: false,
                    error: 'Parámetros faltantes',
                    message: 'El parámetro num1 es requerido'
                });
            });

            test('Debe rechazar tipos de datos incorrectos - num1 como string', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num1: '5',
                        num2: 3
                    });

                expect(response.status).toBe(400);
                expect(response.body).toEqual({
                    success: false,
                    error: 'Tipos de datos incorrectos',
                    message: 'num1 y num2 deben ser números'
                });
            });

            test('Debe rechazar números inválidos - NaN', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num1: null, // JSON serializa NaN como null
                        num2: 5
                    });

                expect(response.status).toBe(400);
                expect(response.body.error).toBe('Parámetros faltantes');
            });

            test('Debe rechazar números inválidos - Infinity', async () => {
                // Como JSON no puede serializar Infinity correctamente, 
                // usamos un número muy grande que JavaScript trata como Infinity
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num1: Number.MAX_VALUE * 2, // Esto resulta en Infinity
                        num2: 5
                    });

                expect(response.status).toBe(400);
                expect(response.body.error).toBe('Números inválidos');
            });

            test('Debe manejar JSON malformado', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .set('Content-Type', 'application/json')
                    .send('{ operation: "add", num1: 5, num2: }'); // JSON inválido

                expect(response.status).toBe(400);
            });

            test('Debe manejar cuerpo vacío', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({});

                expect(response.status).toBe(400);
                expect(response.body.error).toBe('Parámetros faltantes');
            });
        });

        describe('🔍 Casos Límite', () => {
            
            test('Debe manejar números muy grandes', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num1: 1e10,
                        num2: 1e10
                    });

                expect(response.status).toBe(200);
                expect(response.body.success).toBe(true);
                expect(response.body.result).toBe(2e10);
            });

            test('Debe manejar números muy pequeños', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num1: 1e-10,
                        num2: 1e-10
                    });

                expect(response.status).toBe(200);
                expect(response.body.success).toBe(true);
                expect(response.body.result).toBeCloseTo(2e-10);
            });

            test('Debe manejar precisión decimal', async () => {
                const response = await request(app)
                    .post('/api/calculate')
                    .send({
                        operation: 'add',
                        num1: 0.1,
                        num2: 0.2
                    });

                expect(response.status).toBe(200);
                expect(response.body.success).toBe(true);
                expect(response.body.result).toBeCloseTo(0.3);
            });
        });
    });

    describe('GET /api/health', () => {
        
        test('Debe responder con estado de salud de la API', async () => {
            const response = await request(app)
                .get('/api/health');

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('status');
            expect(response.body).toHaveProperty('message');
            expect(response.body).toHaveProperty('timestamp');
        });
    });

    describe('GET /api/operations', () => {
        
        test('Debe listar todas las operaciones disponibles', async () => {
            const response = await request(app)
                .get('/api/operations');

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('operations');
            expect(response.body).toHaveProperty('descriptions');
            expect(Array.isArray(response.body.operations)).toBe(true);
            expect(response.body.operations.length).toBe(4);
            expect(response.body.operations).toEqual(['add', 'subtract', 'multiply', 'divide']);
        });
    });

    describe('🚫 Rutas No Encontradas', () => {
        
        test('Debe devolver 404 para rutas inexistentes', async () => {
            const response = await request(app)
                .get('/api/nonexistent');

            expect(response.status).toBe(404);
        });

        test('Debe devolver 404 para métodos no soportados', async () => {
            const response = await request(app)
                .put('/api/calculate');

            expect(response.status).toBe(404);
        });
    });
});