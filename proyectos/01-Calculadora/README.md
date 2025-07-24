# 🧮 Calculadora Web con Tests Unitarios

**Una calculadora moderna desarrollada con Arquitectura en## 📁 Estructura del Proyecto

```
01-Calculadora/
├── 📄 index.html                      # Capa de Presentación
├── 🎨 style.css                       # Estilos y diseño
├── ⚙️ script.js                       # Lógica de UI y DOM
├── 🌐 calculator-browser.js           # Módulo para navegador
├── 📦 package.json                    # Configuración de proyecto
├── 📖 README.md                       # Documentación principal
├── 📚 GUIA-TESTING-UNITARIO.md        # Guía completa de testing
├── src/
│   └── 🧠 calculator.js               # Módulo de lógica pura (Node.js)
├── tests/
│   └── 🧪 calculator.test.js          # Suite de tests unitarios
├── node_modules/                      # Dependencias
├── coverage/                          # Reportes de cobertura
└── screenshot/                        # Capturas de pantalla
    ├── Captura [...] 221153.png
    ├── Captura [...] 221212.png
    └── Captura [...] 221221.png
```omatizado utilizando tecnologías web nativas**

**Tecnologías:** HTML5 | CSS3 | JavaScript Puro | Jest

---
## 🏗️ Arquitectura Implementada

Este proyecto utiliza una **Arquitectura en Capas** a nivel frontend con **separación completa de responsabilidades**:

**Flujo de la Arquitectura:**
🎨 Capa de Presentación (HTML/CSS) → **Interfaz de Usuario**
    ↓
⚙️ Capa de Lógica de UI (script.js) → **Gestión del DOM y Estado**
    ↓
🧠 Capa de Negocio (src/calculator.js) → **Lógica Matemática Pura**
    ↓
🧪 Capa de Testing (tests/) → **Validación Automatizada**

**Justificación y Beneficios:**

La **Arquitectura en Capas** con **separación de módulos** permite:
- **Testabilidad:** La lógica matemática está completamente separada del DOM, facilitando las pruebas unitarias
- **Mantenibilidad:** Cada capa tiene responsabilidades claras y bien definidas
- **Reutilización:** Los módulos pueden reutilizarse en diferentes contextos (browser/Node.js)
- **Escalabilidad:** Fácil agregar nuevas funcionalidades sin afectar el código existente

---

## 🧪 Testing y Calidad de Código

El proyecto incluye un **suite completo de tests unitarios** con **96.29% de cobertura**:

- **33 Tests Unitarios** que validan todas las operaciones matemáticas
- **Cobertura del 96.29%** de líneas de código  
- **Framework Jest** para testing profesional
- **Separación de entornos:** Módulos compatibles con browser y Node.js

### 📊 Ejecutar Tests

```bash
# Instalar dependencias
npm install

# Ejecutar tests
npm test

# Tests en modo watch (desarrollo)
npm run test:watch

# Generar reporte de cobertura
npm run test:coverage
```

> 📖 **¿Nuevo en Testing?** Lee nuestra [**Guía Completa de Testing Unitario**](GUIA-TESTING-UNITARIO.md) - Explicación desde cero de todo lo implementado en este proyecto.

---

## 🤖 Proceso de Prompt Engineering

Para generar este proyecto, empleé un **prompt estratégico evolutivo**, guiando a la IA a través de múltiples iteraciones de desarrollo. Mi enfoque fue crear un prompt **multifacético** que asegurara tanto los requisitos funcionales como la **arquitectura testeable**.

### 📝 Evolución del Prompt Utilizado

**FASE 1: Desarrollo Inicial**
```
PLANTILLA DE PROMPT MAESTRO (Calculadora Web Mejorada)

1. Rol:
Actúa como un desarrollador web front-end experimentado.

2. Tarea:
Desarrolla una aplicación de calculadora web capaz de realizar las cuatro 
operaciones aritméticas fundamentales (suma, resta, multiplicación y división).

3. Contexto Detallado / Requisitos:

a. Arquitectura:
Implementa una Arquitectura en Capas a nivel de frontend, separando claramente 
las responsabilidades:
- Capa de Presentación (HTML/CSS): Estructura y apariencia de la interfaz
- Capa de Lógica de UI (JavaScript): Gestión de interacción del usuario con DOM
- Capa de Negocio/Cálculo (JavaScript): Lógica pura de operaciones matemáticas

b. Tecnologías:
- HTML5, CSS3, JavaScript puro
- No se permite el uso de frameworks o librerías externas

c. Funcionalidades Específicas:
- Display que muestre entrada actual y resultados
- Botones numéricos (0-9, .) que añadan números al display
- Botones de operación (+, -, *, /) que guarden operación y primer número
- Botón igual (=) que realice el cálculo final
- Botón limpiar (C) que resetee display y estado
- Manejo robusto de división por cero

4. Restricciones:
- Código legible, modular y bien comentado
- Aplicación completamente front-end
- Diseño responsive básico
- Evitar complejidad innecesaria
```

**FASE 2: Refactorización para Testing**
```
PROMPT DE REFACTORIZACIÓN:
"Necesito refactorizar esta calculadora para implementar tests unitarios profesionales.

Objetivos:
1. Separar completamente la lógica matemática del DOM en módulos independientes
2. Crear compatibilidad tanto para browser como para Node.js  
3. Mantener toda la funcionalidad existente de la interfaz
4. Preparar arquitectura para testing automatizado

Requisitos técnicos:
- Módulo src/calculator.js con funciones puras (CommonJS para Node.js)
- Módulo calculator-browser.js con las mismas funciones (Window object para browser)
- Actualizar script.js para usar importación condicional según el entorno
- Mantener separación clara: UI logic vs Business logic

El resultado debe permitir testing unitario sin dependencias del DOM."
```

**FASE 3: Implementación de Tests**
```
PROMPT DE TESTING:
"Crea un suite completo de tests unitarios usando Jest.

Incluye:
- Tests para todas las operaciones matemáticas básicas
- Tests de manejo de errores (división por cero, operadores inválidos)
- Tests de validación de entrada y formateo de resultados
- Tests de casos límite (números grandes, decimales, negativos)
- Configuración completa de Jest con scripts npm

Objetivo: Alcanzar >95% de cobertura de código con tests profesionales 
que validen tanto casos normales como edge cases."
```

### 🎯 Técnicas de Prompt Engineering Aplicadas

Este proyecto demuestra un **proceso evolutivo de Prompt Engineering** con múltiples técnicas:

1. **Role-Based Prompting:** `Actúa como un desarrollador web full-stack experimentado` - Activó conocimiento específico del dominio
2. **Task Decomposition:** División de la tarea compleja en fases: desarrollo inicial → refactorización → testing
3. **Constraint Setting:** Restricciones explícitas como "JavaScript puro, sin frameworks" y "compatibilidad browser/Node.js"
4. **Quality Gates:** Especificación de métricas concretas como "cobertura >95%" y "arquitectura testeable"
5. **Iterative Refinement:** Refinamiento iterativo del prompt basado en resultados obtenidos

### ✅ Resultados Obtenidos

El éxito del proyecto valida la efectividad del **diseño iterativo de prompts**:

* **33 Tests Unitarios** con **96.29% de cobertura**
* **Arquitectura modular** completamente separada
* **Código limpio y documentado** con estándares profesionales
* **Compatibilidad multi-entorno** (browser/Node.js)

---

## 📁 Estructura del Proyecto

```
01-Calculadora/
├── 📄 index.html              # Capa de Presentación
├── 🎨 style.css               # Estilos y diseño
├── ⚙️ script.js               # Lógica de UI y DOM
├── � calculator-browser.js   # Módulo para navegador
├── 📦 package.json            # Configuración de proyecto
├── src/
│   └── 🧠 calculator.js       # Módulo de lógica pura (Node.js)
├── tests/
│   └── 🧪 calculator.test.js  # Suite de tests unitarios
├── node_modules/              # Dependencias
├── coverage/                  # Reportes de cobertura
└── screenshot/                # Capturas de pantalla
    ├── Captura [...] 221153.png
    ├── Captura [...] 221212.png
    └── Captura [...] 221221.png
```

### 🔧 Tecnologías y Herramientas

- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **Testing:** Jest Framework
- **Arquitectura:** Modular con separación de responsabilidades
- **Compatibilidad:** Cross-environment (Browser/Node.js)

---

## 📸 Capturas de Pantalla

### 🖥️ Interfaz Principal
![Interfaz Principal](screenshot/Captura%20de%20pantalla%202025-07-22%20221153.png)

*Vista principal de la calculadora con diseño moderno*

### ⚡ Operación en Proceso
![Ejemplo de Operación](screenshot/Captura%20de%20pantalla%202025-07-22%20221212.png)

*Ejemplo de operación matemática siendo procesada*

### ⚠️ Manejo de Errores
![Error división por cero](screenshot/Captura%20de%20pantalla%202025-07-22%20221221.png)

*Demostración del manejo robusto de errores (división por cero)*

---

## 🚀 Cómo Ejecutar el Proyecto

### 🌐 **Ejecutar la Calculadora**

**Prerrequisitos:**
- 🌐 Navegador web moderno (Chrome, Firefox, Safari, Edge)
- 📁 Archivos del proyecto descargados

**Pasos:**

1.  **📂 Ubicar el proyecto**
    ```
    📁 01-Calculadora/
    ├── 📄 index.html
    ├── 🎨 style.css  
    └── ⚙️ script.js
    ```

2.  **▶️ Ejecutar la aplicación**
    * **Opción 1:** Doble clic en `index.html`
    * **Opción 2:** Arrastrar `index.html` al navegador
    * **Opción 3:** Abrir con "Abrir con..." → Navegador

3.  **🎉 ¡Listo para usar!**
    * La calculadora se abrirá en tu navegador
    * Todas las funcionalidades están disponibles inmediatamente

### 🧪 **Ejecutar los Tests Unitarios**

**Prerrequisitos:**
- 🟢 Node.js instalado en tu sistema
- 📁 Todos los archivos del proyecto

**Pasos:**

1.  **📂 Abrir terminal en el directorio del proyecto**
    ```bash
    cd ruta/hacia/01-Calculadora
    ```

2.  **📦 Instalar dependencias (solo la primera vez)**
    ```bash
    npm install
    ```

3.  **🧪 Ejecutar tests**
    ```bash
    # Tests básicos
    npm test
    
    # Tests con modo watch (se ejecutan automáticamente al cambiar código)
    npm run test:watch
    
    # Tests con reporte de cobertura detallado
    npm run test:coverage
    ```

4.  **📊 Ver resultados**
    * ✅ 33 tests unitarios
    * 📈 96.29% de cobertura de código
    * ⚡ Ejecución en menos de 1 segundo

> 💡 **¿Primera vez con Testing?** Lee nuestra [**Guía Completa de Testing Unitario**](GUIA-TESTING-UNITARIO.md) que explica paso a paso todo lo implementado.