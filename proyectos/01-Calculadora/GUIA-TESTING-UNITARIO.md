# 🧪 Guía Completa de Testing Unitario
## *Desde Cero hasta Profesional - Aplicado a la Calculadora*

---

## 📚 **¿Qué son las Pruebas Unitarias?**

### 🤔 Concepto Básico
Las **pruebas unitarias** son pequeños programas que **validan automáticamente** que una función específica de tu código funcione como se espera. Es como tener un **robot que prueba tu código** por ti.

**Analogía Simple:**
Imagina que tienes una función que suma dos números:
```javascript
function sumar(a, b) {
    return a + b;
}
```

Una prueba unitaria sería:
```javascript
// "Espero que sumar(2, 3) me dé 5"
expect(sumar(2, 3)).toBe(5);
```

Si la función funciona bien → ✅ Test PASA
Si la función falla → ❌ Test FALLA

---

## 🎯 **¿Por Qué Son Importantes?**

### ✅ **Ventajas de las Pruebas Unitarias:**

1. **🛡️ Detectan Errores Temprano**
   - Encuentran bugs antes de que lleguen a los usuarios
   - Es más barato arreglar errores en desarrollo que en producción

2. **🔒 Confianza en el Código**
   - Sabes que tu código funciona como esperas
   - Puedes hacer cambios sin miedo a romper algo

3. **📖 Documentación Viva**
   - Los tests muestran CÓMO se debe usar tu código
   - Explican qué hace cada función con ejemplos reales

4. **🚀 Refactoring Seguro**
   - Puedes mejorar tu código sabiendo que los tests te alertarán si algo se rompe

### ❌ **¿Qué Pasa Sin Tests?**
- Tienes que probar manualmente cada vez que cambias algo
- Los errores llegan a los usuarios
- Miedo a cambiar código porque no sabes qué puede romperse
- Difícil trabajar en equipo (nadie sabe si su cambio rompió algo)

---

## 🏗️ **Arquitectura: ¿Por Qué Separamos el Código?**

### 🤯 **El Problema Original**
En nuestra calculadora inicial, TODO estaba mezclado:
```javascript
// ❌ MALO: Todo mezclado
const Calculator = {
    // Lógica matemática mezclada con lógica de UI
    add(a, b) { return a + b; },
    handleButtonClick() { /* manipula el DOM */ },
    updateDisplay() { /* manipula el DOM */ }
};
```

**¿Por qué es problemático?**
- No puedes probar las matemáticas sin el DOM
- Los tests necesitarían un navegador completo
- Difícil de mantener y entender

### ✅ **La Solución: Separación de Responsabilidades**

```javascript
// ✅ BUENO: Lógica matemática pura (TESTEABLE)
// src/calculator.js
function add(a, b) {
    return a + b;  // Solo matemáticas, sin DOM
}

// ✅ BUENO: Lógica de UI separada (NO necesita tests unitarios)
// script.js
function handleButtonClick() {
    const result = Calculator.add(5, 3);  // Usa la lógica pura
    document.getElementById('display').textContent = result;
}
```

**Resultado:**
- Las matemáticas se pueden probar sin navegador
- La lógica de UI usa las funciones matemáticas
- Cada parte tiene una responsabilidad clara

---

## 🛠️ **Jest: Nuestro Framework de Testing**

### 🤖 **¿Qué es Jest?**
Jest es una **herramienta que ejecuta nuestros tests** automáticamente. Es como un robot que:
1. Encuentra todos los archivos de test
2. Ejecuta cada prueba
3. Te dice cuáles pasaron y cuáles fallaron
4. Te muestra un reporte bonito

### 📦 **Instalación y Configuración**

#### 1. **package.json** - La configuración del proyecto
```json
{
  "name": "calculadora-tests",
  "scripts": {
    "test": "jest",                    // npm test
    "test:watch": "jest --watch",      // npm run test:watch  
    "test:coverage": "jest --coverage" // npm run test:coverage
  },
  "devDependencies": {
    "jest": "^29.0.0"                 // La herramienta de testing
  }
}
```

#### 2. **Estructura de Archivos**
```
proyecto/
├── src/
│   └── calculator.js      # ← Código a probar
├── tests/
│   └── calculator.test.js # ← Pruebas
└── package.json           # ← Configuración
```

---

## 🔬 **Anatomía de un Test**

### 📝 **Estructura Básica**
```javascript
// tests/calculator.test.js

// 1. IMPORTAR lo que vamos a probar
const Calculator = require('../src/calculator');

// 2. DESCRIBIR qué grupo de tests es este
describe('Calculator - Operaciones Básicas', () => {
    
    // 3. DESCRIBIR un subgrupo específico
    describe('Suma (add)', () => {
        
        // 4. ESCRIBIR un test individual
        test('debe sumar dos números positivos', () => {
            // ARRANGE: Preparar los datos
            const a = 2;
            const b = 3;
            
            // ACT: Ejecutar la función
            const resultado = Calculator.add(a, b);
            
            // ASSERT: Verificar el resultado
            expect(resultado).toBe(5);
        });
    });
});
```

### 🧩 **Elementos Clave**

#### 1. **describe()** - Agrupa tests relacionados
```javascript
describe('Calculator - Operaciones Básicas', () => {
    // Aquí van todos los tests de operaciones básicas
});
```

#### 2. **test()** - Define una prueba individual
```javascript
test('debe sumar dos números positivos', () => {
    // Una sola cosa específica que probar
});
```

#### 3. **expect()** - La verificación
```javascript
expect(resultado).toBe(5);        // Debe ser exactamente 5
expect(resultado).toBeCloseTo(5.1); // Para números decimales
expect(() => divide(5,0)).toThrow(); // Debe lanzar error
```

---

## 🎯 **Tipos de Tests que Implementamos**

### 1. **🧮 Tests de Operaciones Básicas**

#### ➕ **Suma**
```javascript
describe('Suma (add)', () => {
    test('debe sumar dos números positivos', () => {
        expect(Calculator.add(2, 3)).toBe(5);
    });

    test('debe sumar números negativos', () => {
        expect(Calculator.add(-2, -3)).toBe(-5);
    });

    test('debe manejar decimales', () => {
        expect(Calculator.add(1.5, 2.5)).toBe(4);
    });

    test('debe manejar cero', () => {
        expect(Calculator.add(0, 5)).toBe(5);
        expect(Calculator.add(5, 0)).toBe(5);
    });
});
```

**¿Por qué estos casos?**
- **Números positivos:** El caso más común
- **Números negativos:** Caso que puede fallar si no se maneja bien
- **Decimales:** JavaScript tiene problemas con decimales a veces
- **Cero:** Caso límite que a menudo causa problemas

#### ➖ **Resta, ✖️ Multiplicación, ➗ División**
Similar estructura, pero cada una con sus casos especiales:
- División: **DEBE probar división por cero** (debe dar error)
- Multiplicación: **DEBE probar multiplicación por cero** (debe dar cero)

### 2. **🔧 Tests de la Función Principal `calculate()`**

```javascript
test('debe realizar suma correctamente', () => {
    const result = Calculator.calculate(5, '+', 3);
    
    // Esta función devuelve un objeto con success, result, error
    expect(result.success).toBe(true);
    expect(result.result).toBe(8);
    expect(result.error).toBe(null);
});

test('debe manejar división por cero', () => {
    const result = Calculator.calculate(10, '/', 0);
    
    expect(result.success).toBe(false);
    expect(result.result).toBe(null);
    expect(result.error).toBe('División por cero no permitida');
});
```

**¿Por qué es importante?**
- Esta función coordina todo el flujo de cálculo
- Maneja errores y devuelve resultados estructurados
- Es la que realmente usa la interfaz de usuario

### 3. **✅ Tests de Validación**

```javascript
describe('isValidNumber', () => {
    test('debe validar números enteros', () => {
        expect(Calculator.isValidNumber('123')).toBe(true);
        expect(Calculator.isValidNumber('-123')).toBe(true);
    });

    test('debe rechazar strings no numéricos', () => {
        expect(Calculator.isValidNumber('abc')).toBe(false);
        expect(Calculator.isValidNumber('')).toBe(false);
    });
});
```

---

## 📊 **Cobertura de Código**

### 🤔 **¿Qué es la Cobertura?**
La **cobertura** te dice **qué porcentaje de tu código** está siendo probado por los tests.

**Nuestro resultado: 96.29% 🎉**

### 📈 **Tipos de Cobertura**

1. **% Statements (Declaraciones):** ¿Cuántas líneas se ejecutaron?
2. **% Branches (Ramas):** ¿Cuántos if/else se probaron?
3. **% Functions (Funciones):** ¿Cuántas funciones se llamaron?
4. **% Lines (Líneas):** ¿Cuántas líneas de código se tocaron?

### 📋 **Reporte de Cobertura**
```
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |   96.29 |    93.33 |     100 |   96.29 |                  
 calculator.js |   96.29 |    93.33 |     100 |   96.29 | 82               
---------------|---------|----------|---------|---------|-------------------
```

**¿Qué significa?**
- ✅ **100% Functions:** Todas las funciones fueron probadas
- ✅ **96.29% Statements:** Casi todas las líneas fueron ejecutadas
- ⚠️ **93.33% Branches:** Algunos if/else no se probaron
- 📍 **Línea 82 sin cubrir:** Una línea específica no se ejecutó en los tests

---

## 🏃‍♂️ **Comandos para Ejecutar Tests**

### 🔨 **Comandos Básicos**

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Ejecutar todos los tests
npm test

# 3. Ejecutar tests en modo "watch" (se ejecutan automáticamente al cambiar código)
npm run test:watch

# 4. Ejecutar tests con reporte de cobertura
npm run test:coverage
```

### 📺 **¿Qué ves cuando ejecutas `npm test`?**

```
 PASS  tests/calculator.test.js
  Calculator - Operaciones Básicas
    Suma (add)
      ✓ debe sumar dos números positivos (2 ms)
      ✓ debe sumar números negativos
      ✓ debe manejar decimales
    División (divide)
      ✓ debe lanzar error al dividir por cero (12 ms)

Test Suites: 1 passed, 1 total
Tests:       33 passed, 33 total
Snapshots:   0 total
Time:        0.375 s
```

**Interpretación:**
- ✅ **PASS:** Todos los tests pasaron
- **33 passed:** 33 pruebas individuales funcionaron
- **Time: 0.375s:** Tardó menos de medio segundo

---

## 🚨 **¿Qué Pasa Cuando un Test Falla?**

### ❌ **Ejemplo de Fallo**
Supongamos que nuestra función `add` tuviera un bug:

```javascript
// Bug en el código
function add(a, b) {
    return a * b;  // ❌ Multiplica en vez de sumar
}
```

**Resultado del test:**
```
 FAIL  tests/calculator.test.js
  Calculator - Operaciones Básicas
    Suma (add)
      ✗ debe sumar dos números positivos (5 ms)

    Expected: 5
    Received: 6

      at Object.<anonymous> (tests/calculator.test.js:12:34)
```

**¿Qué te dice esto?**
- ❌ **FAIL:** El test falló
- **Expected: 5** → Lo que esperábamos
- **Received: 6** → Lo que obtuvimos
- **Línea 12:34** → Dónde está el problema

---

## 🛡️ **Casos Límite (Edge Cases)**

### 🤔 **¿Qué son los Casos Límite?**
Son situaciones **extremas** o **inusuales** que pueden romper tu código:

#### 🔍 **Ejemplos en nuestra Calculadora:**

1. **División por Cero**
```javascript
test('debe lanzar error al dividir por cero', () => {
    expect(() => Calculator.divide(5, 0)).toThrow('División por cero no permitida');
});
```

2. **Números Muy Grandes**
```javascript
test('debe usar notación científica para números largos', () => {
    const largeNumber = 12345678901234567890;
    const result = Calculator.formatResult(largeNumber);
    expect(result).toContain('e+');  // Notación científica
});
```

3. **Operadores Inválidos**
```javascript
test('debe manejar operador inválido', () => {
    const result = Calculator.calculate(5, '%', 3);  // % no existe
    expect(result.success).toBe(false);
    expect(result.error).toBe('Operador no válido');
});
```

### 💡 **¿Por Qué son Importantes?**
- Los usuarios siempre hacen cosas inesperadas
- Los bugs más difíciles aparecen en casos límite
- Es mejor controlarlos que dejar que rompan la aplicación

---

## 🔄 **TDD: Test-Driven Development (Concepto Avanzado)**

### 🤓 **¿Qué es TDD?**
Es escribir **primero los tests** y **después el código**. Parece raro, ¡pero funciona!

#### 🔄 **Ciclo TDD:**
1. 🔴 **Red:** Escribir un test que falle
2. 🟢 **Green:** Escribir el código mínimo para que pase
3. 🔵 **Refactor:** Mejorar el código sin romper los tests

#### 📝 **Ejemplo Práctico:**

**Paso 1: Escribir el test primero**
```javascript
test('debe sumar dos números', () => {
    expect(add(2, 3)).toBe(5);  // ❌ La función add() no existe aún
});
```

**Paso 2: Escribir código mínimo**
```javascript
function add(a, b) {
    return 5;  // ✅ Pasa el test, pero solo funciona para 2+3
}
```

**Paso 3: Hacer más tests**
```javascript
test('debe sumar otros números', () => {
    expect(add(1, 1)).toBe(2);  // ❌ Falla porque siempre devuelve 5
});
```

**Paso 4: Mejorar el código**
```javascript
function add(a, b) {
    return a + b;  // ✅ Ahora funciona para cualquier número
}
```

---

## 🌍 **Compatibilidad: Browser vs Node.js**

### 🤔 **El Problema**
JavaScript funciona diferente en el navegador y en Node.js:

- **Browser:** Usa `window` y DOM
- **Node.js:** Usa `require()` y `module.exports`

### ✅ **Nuestra Solución: Dos Versiones**

#### 1. **Para Node.js (Tests)** - `src/calculator.js`
```javascript
function add(a, b) {
    return a + b;  
}

// Exportar para Node.js
module.exports = {
    add,
    subtract,
    // ... más funciones
};
```

#### 2. **Para Browser** - `calculator-browser.js`
```javascript
function add(a, b) {
    return a + b;  
}

// Exportar para Browser
window.Calculator = {
    add,
    subtract,
    // ... más funciones
};
```

#### 3. **UI que detecta el entorno** - `script.js`
```javascript
// Detectar si estamos en Node.js o Browser
let Calculator;
if (typeof require !== 'undefined') {
    // Estamos en Node.js (para tests)
    Calculator = require('./src/calculator');
} else {
    // Estamos en el navegador
    Calculator = window.Calculator;
}
```

---

## 📈 **Beneficios Reales del Testing**

### 🎯 **En Nuestro Proyecto**

#### ✅ **Antes del Testing:**
- Había que probar manualmente cada operación
- Si cambiabas algo, tenías que probar todo de nuevo
- No sabías si tu código funcionaba en casos extremos

#### 🚀 **Después del Testing:**
- **33 tests automáticos** prueban todo en menos de 1 segundo
- **96.29% de cobertura** garantiza que casi todo está probado
- Puedes refactorizar sin miedo
- Documentación automática de cómo funciona cada función

### 💼 **En el Mundo Real**
- **Startups:** Testing evita que bugs lleguen a usuarios
- **Empresas grandes:** Obligatorio para código de producción
- **Equipos:** Permite que múltiples personas trabajen sin romper código
- **Mantenimiento:** Código legacy con tests es mantenible

---

## 🎓 **Próximos Pasos para Aprender Más**

### 📚 **Conceptos para Explorar**

1. **🧪 Tipos de Testing:**
   - **Unit Tests:** Lo que hicimos (funciones individuales)
   - **Integration Tests:** Probar que las partes trabajen juntas
   - **E2E Tests:** Probar toda la aplicación como usuario

2. **🔧 Herramientas Avanzadas:**
   - **Mocking:** Simular dependencias externas
   - **Snapshots:** Probar que la UI no cambie inesperadamente
   - **Test Coverage:** Análisis más profundo de cobertura

3. **🏗️ Patrones de Testing:**
   - **AAA Pattern:** Arrange, Act, Assert
   - **Given-When-Then:** Formato más descriptivo
   - **Factory Pattern:** Crear datos de prueba reutilizables

### 🛠️ **Ejercicios Sugeridos**

1. **Agregar más operaciones:**
   - Implementar potencia (`power(base, exponent)`)
   - Escribir tests primero (TDD)

2. **Mejorar manejo de errores:**
   - ¿Qué pasa con números muy grandes?
   - ¿Cómo manejar `null` o `undefined`?

3. **Explorar casos límite:**
   - ¿Qué pasa con `Infinity`?
   - ¿Números negativos en todas las operaciones?

---

## 🎉 **Conclusión**

### 🏆 **Lo que Aprendiste**

1. **💡 Conceptos Básicos:**
   - Qué son las pruebas unitarias y por qué importan
   - Cómo separar código para hacerlo testeable

2. **🛠️ Herramientas Prácticas:**
   - Configurar Jest
   - Escribir diferentes tipos de tests
   - Interpretar reportes de cobertura

3. **🏗️ Arquitectura:**
   - Separación de responsabilidades
   - Compatibilidad multi-entorno
   - Casos límite y manejo de errores

### 🚀 **El Valor Real**
Las pruebas unitarias no son solo una "buena práctica" - son una **herramienta de productividad**. Te permiten:
- Desarrollar más rápido (no pruebas manual)
- Cambiar código con confianza
- Encontrar bugs antes que los usuarios
- Trabajar en equipo sin romper el código de otros

### 💪 **Tu Próximo Nivel**
Ahora que entiendes los fundamentos, puedes:
- Aplicar testing a tus propios proyectos
- Explorar frameworks más avanzados
- Implementar TDD en tu flujo de desarrollo
- Construir aplicaciones más robustas y confiables

**¡Felicidades! 🎊 Ya tienes las bases sólidas del testing unitario profesional.**

---

*📝 Esta guía fue creada específicamente para explicar el testing implementado en la Calculadora Web. Guárdala como referencia para futuros proyectos.*
