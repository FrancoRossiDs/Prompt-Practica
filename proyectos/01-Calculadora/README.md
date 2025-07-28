# 🧮 Calculadora Web con Tests Unitarios

**Una calculadora moderna desarrollada con Arquitectura en Capas y Testing Automatizado utilizando tecnologías web nativas (HTML5, CSS3, JavaScript Puro y Jest). Este proyecto sirve como un caso de estudio completo de desarrollo frontend moderno y la aplicación de Prompt Engineering.**

---

## 📁 Estructura del Proyecto

```
01-Calculadora/
├── 📄 index.html                      # Capa de Presentación (UI)
├── 🎨 style.css                       # Estilos y diseño de la UI
├── ⚙️ script.js                       # Lógica de Interfaz de Usuario (DOM y estado)
├── 🌐 calculator-browser.js           # Adaptador para compatibilidad browser
├── 📦 package.json                    # Configuración de dependencias (Jest, etc.)
├── 📖 README.md                       # Documentación del proyecto
├── src/
│   └── 🧠 calculator.js               # Módulo de lógica pura de cálculo (Capa de Negocio)
├── tests/
│   └── 🧪 calculator.test.js          # Suite de tests unitarios para la lógica
├── coverage/                          # Reportes de cobertura de código generados por Jest
└── screenshot/                        # Capturas de pantalla del proyecto
```

## 🎯 Prompt Maestro del Proyecto

**Este proyecto fue desarrollado y refinado utilizando un proceso iterativo de Prompt Engineering, culminando en el siguiente Prompt Maestro:**

```
🎯 PROMPT MAESTRO: Calculadora Web con Testing Unitario

Desarrolla una calculadora web profesional que demuestre arquitectura limpia 
y testing unitario avanzado. 

ESPECIFICACIONES TÉCNICAS:
• Tecnologías: HTML5, CSS3, JavaScript ES6+ puro, Jest
• Arquitectura: Patrón de capas con separación completa de responsabilidades
• Testing: Suite completa de tests unitarios con >95% cobertura

ARQUITECTURA REQUERIDA:
1. CAPA DE PRESENTACIÓN: HTML/CSS responsivo y moderno
2. CAPA DE CONTROL: JavaScript para manejo del DOM y estado
3. CAPA DE LÓGICA: Módulo puro de operaciones matemáticas
4. CAPA DE TESTING: Suite completa con Jest y reportes de cobertura

FUNCIONALIDADES CORE:
• Operaciones básicas: suma, resta, multiplicación, división
• Funciones avanzadas: clear, backspace, decimales
• Validación robusta de errores y casos límite
• Interfaz intuitiva y responsive design

REQUISITOS DE TESTING:
• Tests unitarios para todas las operaciones
• Tests de manejo de errores (división por cero, etc.)
• Tests de casos límite (números grandes, decimales, negativos)
• Configuración profesional de Jest con reportes HTML
• Cobertura de código >95%

CRITERIOS DE CALIDAD:
• Código limpio y bien documentado
• Separación total entre lógica y presentación
• Compatible con navegadores modernos

ENTREGABLES:
1. Aplicación web funcional y testeada
2. Suite completa de tests automatizados
5. Código fuente organizado y comentado

El resultado debe ser un proyecto que sirva como referencia de buenas 
prácticas en desarrollo frontend, arquitectura limpia y testing unitario 
profesional.
```

## 🏗️ Arquitectura Implementada

Este proyecto utiliza una **Arquitectura en Capas** con **separación completa de responsabilidades**, diseñada para mejorar la mantenibilidad, testabilidad y escalabilidad del código frontend.

**Flujo de la Arquitectura:**
```
🎨 Capa de Presentación (HTML/CSS) → Interfaz de Usuario
    ↓
⚙️ Capa de Lógica de UI (script.js) → Gestión del DOM y Estado
    ↓
🧠 Capa de Negocio (src/calculator.js) → Lógica Matemática Pura
    ↓
🧪 Capa de Testing (tests/) → Validación Automatizada
```

**Justificación:**
La elección de esta arquitectura en capas fue fundamental para el desarrollo del proyecto. Al dividir la aplicación en responsabilidades claras, logramos que la **lógica de negocio (cálculos)** fuera completamente independiente de la **interfaz de usuario**. Esto no solo facilita la lectura y el mantenimiento del código, sino que también permite realizar **pruebas unitarias exhaustivas** sobre la lógica matemática sin depender del navegador o de la interacción con el DOM, lo que resulta en un código más robusto y fiable.

---

## 🤖 Proceso y Reflexión sobre Prompt Engineering

Este proyecto es una demostración de mi capacidad para aplicar el Prompt Engineering de manera estratégica, guiando a la IA a través de un proceso de desarrollo estructurado e iterativo.

### 🎯 Técnicas de Prompt Engineering Aplicadas

Para lograr los resultados deseados, se emplearon varias técnicas de Prompt Engineering de forma consciente:

1. **Role-Based Prompting:** El prompt comenzó estableciendo un rol claro ("desarrollador web front-end profesional"). Esto activó el conocimiento específico del dominio de la IA y estableció expectativas de un alto estándar de calidad en el código y las prácticas.

2. **Task Decomposition:** La tarea compleja (desarrollar una calculadora con arquitectura y tests) se descompuso en subtareas explícitas (arquitectura, testing, funcionalidades, criterios de calidad, entregables). Cada sección del prompt maestro delineaba responsabilidades claras, facilitando que la IA abordara cada aspecto de forma sistemática.

3. **Constraint Setting:** Se establecieron restricciones precisas, como "JavaScript ES6+ puro", "sin frameworks externos" y "cobertura de tests >95%". Estas restricciones fueron cruciales para guiar a la IA hacia la solución deseada, evitando complejidades innecesarias y asegurando que el entregable cumpliera con los requisitos de un "caso de estudio completo".

4. **Especificidad sin Rigidez:** Si bien se detallaron funcionalidades core y requisitos de testing específicos, el prompt evitó dictar la implementación exacta del código. Esto permitió a la IA flexibilidad para generar un código limpio y eficiente que cumpliera con las especificaciones sin ser excesivamente prescriptivo.

5. **Criterios de Calidad y Entregables Explícitos:** Definir "Código limpio y bien documentado", "Separación total entre lógica y presentación" y listar los "Entregables" finales ayudó a la IA a comprender la meta global y a priorizar la calidad y la organización del resultado.

### 📈 Lecciones Aprendidas y Reflexión

El desarrollo de este proyecto no solo resultó en una calculadora funcional y bien testeada, sino que también proporcionó valiosas lecciones en el arte del Prompt Engineering:

* **El Poder de la Iteración:** Aunque se presenta un "Prompt Maestro", el proyecto fue el resultado de un proceso iterativo (como se ve en las fases), donde cada prompt sucesivo se construyó sobre el aprendizaje del anterior. Esta iteración es clave para refinar la comprensión de la IA y acercarse al objetivo final.

* **Claridad en la Separación de Preocupaciones:** Especificar la arquitectura en capas y la necesidad de aislar la lógica fue fundamental. La IA respondió de manera efectiva, demostrando que una estructura de prompt bien definida se traduce directamente en una estructura de código más limpia y testeable.

* **La Importancia de las Restricciones Positivas:** En lugar de solo decir lo que no queríamos, definir qué *sí* queríamos (ej. "cobertura >95%") guió a la IA a generar soluciones de alta calidad en áreas específicas.

* **Preparación para el Testing:** Entender y comunicar a la IA la necesidad de un código "testeable" desde el inicio (moviendo la lógica a `src/calculator.js`) es una habilidad crucial.

Este ejercicio refuerza mi convicción de que un Prompt Engineering metódico y detallado es esencial para aprovechar al máximo las capacidades de las IAs generativas en el desarrollo de software.

---

## ⚡ Instalación y Uso

### **Instalación de Dependencias:**

```bash
# Navega a la carpeta principal del proyecto
cd proyectos/01-Calculadora
# Instala las dependencias (principalmente Jest)
npm install
```

### **Ejecutar Tests:**
Para correr la suite completa de pruebas unitarias y verificar la lógica de cálculo:

```bash
npm test
```

### **Ver Cobertura de Código:**
Para generar y ver un reporte detallado de la cobertura de código (se abrirá en tu navegador):

```bash
npm run test:coverage
```

### **Usar la Calculadora (App Web):**
Puedes acceder a la calculadora de dos formas:

- **Directamente en el navegador:** Abre `index.html` en tu navegador web.
- **Desde la Demo en GitHub Pages:** Visita el [enlace en vivo](https://francorossids.github.io/Prompt-Practica/proyectos/01-Calculadora/).

---

## 🧪 Testing Implementado

Este proyecto se distingue por la robustez de sus pruebas unitarias, que garantizan la fiabilidad de la lógica de negocio.

- ✅ **Tests Unitarios Completos** para todas las operaciones (suma, resta, multiplicación, división).
- ✅ **Tests de Manejo de Errores** específicos para casos como la división por cero y entradas inválidas.
- ✅ **Tests de Casos Límite** cubriendo escenarios con números grandes, decimales y valores negativos.
- ✅ **Cobertura >95%** del código de la lógica de cálculo (`src/calculator.js`), asegurando que casi todo el código crítico está cubierto por tests.
- ✅ **Configuración Profesional** de Jest para reportes claros y automatización.

Las pruebas unitarias son ejecutadas por Jest en un entorno de Node.js, aislando la lógica de cálculo de la interfaz de usuario. No son visibles para el usuario final, pero son fundamentales para garantizar la calidad y estabilidad del código.

---

## 📋 Funcionalidades

### **Operaciones Básicas:**
- ➕ **Suma**
- ➖ **Resta**  
- ✖️ **Multiplicación**
- ➗ **División**

### **Funciones Avanzadas:**
- 🔄 **Limpiar (C):** Resetea el display y el estado de la calculadora.
- ⬅️ **Borrar último dígito:** Permite corregir entradas.
- 🎯 **Manejo de decimales:** Soporte para cálculos con números decimales.
- ⚠️ **Validación de errores:** Manejo de escenarios inválidos, como la división por cero, mostrando un mensaje claro.

### **Características Técnicas Adicionales:**
- 🌐 Compatible con todos los navegadores modernos.
- 📱 Diseño responsivo básico para adaptarse a diferentes tamaños de pantalla.
- ⚡ Sin dependencias externas para la lógica de la aplicación (solo Jest para testing).
- 🧪 Testing automatizado con alta cobertura.

---

## 📸 Capturas de Pantalla

### 🖥️ Interfaz Principal
Vista principal de la calculadora con diseño moderno y botones interactivos.

![Interfaz Principal](screenshot/calculadora-interfaz.png)

### ⚡ Operación en Proceso
Muestra una operación matemática en curso, con el número actual y la operación pendiente.

![Operación en Proceso](screenshot/calculadora-operacion.png)

### ⚠️ Manejo de Errores
Demostración del manejo robusto de errores, mostrando "Error" en el display ante una división por cero.

![Manejo de Errores](screenshot/calculadora-error.png)

### 🧪 Ejecución de Tests
Suite completa de tests unitarios ejecutándose con Jest, mostrando todos los casos de prueba pasando exitosamente.

![Tests Ejecutándose](screenshot/tests-ejecucion.png)

### 📊 Reporte de Cobertura
Reporte detallado de cobertura de código generado por Jest, mostrando **96.29%** de cobertura en statements y **100%** en funciones.

![Reporte de Cobertura](screenshot/coverage-report.png)

### 🌐 Demo en GitHub Pages
La calculadora funcionando en vivo en GitHub Pages, demostrando la compatibilidad cross-browser y el deploy automatizado.

![Demo GitHub Pages](screenshot/github-pages-demo.png)

---

## 📊 Métricas de Calidad Alcanzadas

Basado en el reporte de cobertura generado:

- ✅ **96.29% Cobertura de Statements** (26/27)
- ✅ **93.33% Cobertura de Branches** (14/15) 
- ✅ **100% Cobertura de Functions** (7/7)
- ✅ **96.29% Cobertura de Lines** (26/27)
