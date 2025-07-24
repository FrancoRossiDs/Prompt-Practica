# 🧮 Calculadora Web con Tests Unitarios

**Una calculadora moderna desarrollada con Arquitectura en Capas y Testing Automatizado utilizando tecnologías web nativas**

**Tecnologías:** HTML5 | CSS3 | JavaScript Puro | Jest

---

## 📁 Estructura del Proyecto

```
01-Calculadora/
├── 📄 index.html                      # Capa de Presentación
├── 🎨 style.css                       # Estilos y diseño
├── ⚙️ script.js                       # Lógica de UI y DOM
├── 🌐 calculator-browser.js           # Módulo para navegador
├── 📦 package.json                    # Configuración de proyecto
├── 📖 README.md                       # Documentación principal
├── src/
│   └── 🧠 calculator.js               # Módulo de lógica pura (Node.js)
├── tests/
│   └── 🧪 calculator.test.js          # Suite de tests unitarios
├── coverage/                          # Reportes de cobertura
└── screenshot/                        # Capturas de pantalla
```

---

## 🏗️ Arquitectura Implementada

Este proyecto utiliza una **Arquitectura en Capas** con **separación completa de responsabilidades**:

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

---

## ⚡ Instalación y Uso

### **Instalación:**
```bash
cd proyectos/01-Calculadora
npm install
```

### **Ejecutar Tests:**
```bash
npm test
```

### **Ver Cobertura:**
```bash
npm run test:coverage
```

### **Usar la Calculadora:**
Abre `index.html` en tu navegador o visita: [Demo en GitHub Pages](https://francorossids.github.io/Prompt-Practica/proyectos/01-Calculadora/)

---

## 🧪 Testing Implementado

- ✅ **Tests Unitarios Completos** para todas las operaciones
- ✅ **Tests de Manejo de Errores** (división por cero, operadores inválidos)
- ✅ **Tests de Casos Límite** (números grandes, decimales, negativos)
- ✅ **Cobertura >95%** del código
- ✅ **Configuración Profesional** de Jest

**Ejecutar Tests:**
```bash
npm test
```

**Ver Reporte Detallado:**
```bash
npm run test:coverage
```

---

## 📋 Funcionalidades

### **Operaciones Básicas:**
- ➕ Suma
- ➖ Resta  
- ✖️ Multiplicación
- ➗ División

### **Funciones Avanzadas:**
- 🔄 Limpiar (C)
- ⬅️ Borrar último dígito
- 🎯 Manejo de decimales
- ⚠️ Validación de errores

### **Características Técnicas:**
- 🌐 Compatible con todos los navegadores modernos
- 📱 Diseño responsivo
- ⚡ Sin dependencias externas (solo Jest para testing)
- 🧪 Testing automatizado con alta cobertura

---

## 🎯 Prompts de Desarrollo Utilizados

Este proyecto fue desarrollado utilizando **Prompt Engineering** estructurado:

### **FASE 1: Calculadora Básica**
```
"Crea una calculadora web funcional con HTML, CSS y JavaScript puro.
Requisitos: operaciones básicas, diseño moderno, responsive design."
```

### **FASE 2: Refactorización para Testing**
```
"Refactoriza esta calculadora para implementar tests unitarios profesionales.
- Separar lógica matemática del DOM
- Crear compatibilidad browser/Node.js
- Preparar arquitectura para testing automatizado"
```

### **FASE 3: Implementación de Tests**
```
"Crea un suite completo de tests unitarios usando Jest.
- Tests para operaciones básicas y casos límite
- Manejo de errores y validaciones
- Configuración profesional con >95% cobertura"
```

---

## 📊 Resultados

- ✅ **Arquitectura Limpia** con separación de responsabilidades
- ✅ **Testing Profesional** con Jest y alta cobertura
- ✅ **Código Mantenible** y escalable
- ✅ **Documentación Completa** con ejemplos prácticos
- ✅ **Demo Funcional** en GitHub Pages

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Ejecuta los tests: `npm test`
4. Haz commit de tus cambios
5. Envía un Pull Request

---

**Desarrollado con ❤️ usando Prompt Engineering y buenas prácticas de desarrollo**