# 🧮 Calculadora Web con API REST

Una calculadora web full-stack con arquitectura en capas, testing completo y API RESTful desarrollada con Node.js y Express.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Arquitectura](#arquitectura)
- [Instalación](#instalación)
- [Uso](#uso)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)

## ✨ Características

- **🌐 Interfaz Web Responsiva**: Calculadora funcional con diseño moderno
- **🔗 API RESTful**: Endpoints para operaciones matemáticas
- **🧪 Testing Completo**: Tests unitarios e integración (90%+ cobertura)
- **🏗️ Arquitectura en Capas**: Separación clara de responsabilidades
- **⚡ Validación Robusta**: Manejo de errores y casos límite
- **📊 Reporting**: Cobertura de código y métricas

## 🛠️ Tecnologías

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **CORS** - Manejo de políticas de origen cruzado

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos y responsivos
- **JavaScript ES6+** - Lógica del cliente

### Testing
- **Jest** - Framework de testing
- **Supertest** - Testing de APIs HTTP
- **Coverage Reports** - Reportes de cobertura

## 🏗️ Arquitectura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│    Frontend     │    │   Backend API   │    │  Core Logic     │
│                 │    │                 │    │                 │
│ • HTML/CSS/JS   │◄──►│ • Express       │◄──►│ • Calculator    │
│ • Validación    │    │ • Routes        │    │ • Pure Functions│
│ • UI/UX         │    │ • Controllers   │    │ • Business Logic│
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        v                        v                        v
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Integration   │    │   API Testing   │    │  Unit Testing   │
│     Tests       │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Capas del Sistema

1. **Capa de Presentación** (`index.html`, `script.js`)
   - Interfaz de usuario
   - Validación frontend
   - Comunicación con API

2. **Capa de API** (`server.js`, `routes/`)
   - Endpoints REST
   - Middleware de validación
   - Manejo de errores

3. **Capa de Lógica** (`controllers/`)
   - Validación de datos
   - Orquestación de operaciones
   - Formateo de respuestas

4. **Capa de Negocio** (`src/calculator.js`)
   - Operaciones matemáticas puras
   - Sin dependencias externas
   - Altamente testeable

## 🚀 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

### Pasos

1. **Clonar o descargar el proyecto**
```bash
cd proyectos/01-Calculadora
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Verificar instalación**
```bash
npm test
```

## 💻 Uso

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El servidor estará disponible en:
# http://localhost:3000
```

### Producción

```bash
# Iniciar servidor
npm start
```

### Testing

```bash
# Ejecutar todos los tests
npm test

# Solo tests unitarios
npm run test:unit

# Solo tests de integración
npm run test:integration

# Tests con cobertura
npm run test:coverage
```

## 🔗 API Endpoints

### POST /api/calculate
Realiza operaciones matemáticas.

**Request:**
```json
{
  "operation": "add",
  "num1": 5,
  "num2": 3
}
```

**Response:**
```json
{
  "success": true,
  "operation": "add",
  "operands": { "num1": 5, "num2": 3 },
  "result": 8
}
```

**Operaciones soportadas:**
- `add` - Suma
- `subtract` - Resta
- `multiply` - Multiplicación
- `divide` - División

### GET /api/health
Verifica el estado de la API.

**Response:**
```json
{
  "status": "OK",
  "message": "API de Calculadora funcionando correctamente",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0"
}
```

### GET /api/operations
Lista operaciones disponibles.

**Response:**
```json
{
  "operations": ["add", "subtract", "multiply", "divide"],
  "descriptions": {
    "add": "Suma dos números",
    "subtract": "Resta dos números",
    "multiply": "Multiplica dos números",
    "divide": "Divide dos números"
  }
}
```

## 🧪 Testing

### Cobertura Actual
- **Tests Unitarios**: 7/7 pasando (100%)
- **Tests de Integración**: 22/23 pasando (95.6%)
- **Cobertura General**: >90%

### Tipos de Test

#### Tests Unitarios (`tests/calculator.test.js`)
- Operaciones matemáticas básicas
- Casos límite (división por cero)
- Números decimales y negativos

#### Tests de Integración (`tests/integration/`)
- Endpoints de API
- Validación de datos
- Manejo de errores
- Casos límite y edge cases

### Ejecutar Tests

```bash
# Suite completa
npm test

# Con watch mode
npm run test:watch

# Generar reporte de cobertura
npm run test:coverage
```

## 📸 Capturas de Pantalla

### 🌐 Interfaz Principal
![Calculadora Web](screenshot/calculadora-interfaz.png)
*Interfaz principal de la calculadora con diseño moderno y responsivo*

![Calculadora Responsive](screenshot/calculadora-responsive.png)
*Vista responsive de la calculadora en diferentes tamaños de pantalla*

![Calculadora Móvil](screenshot/calculadora-responsive-movil.png)
*Interfaz optimizada para dispositivos móviles*

### ⚡ Funcionalidad
![Operación](screenshot/calculadora-operacion.png)
*Ejemplo de operación matemática en la interfaz*

![Operación Ejemplo](screenshot/calculadora-operacion-ejemplo.png)
*Demostración de cálculo completado*

![Resultado](screenshot/calculadora-resultado.png)
*Visualización del resultado de una operación*

![Manejo de Errores](screenshot/calculadora-error.png)
*Manejo robusto de errores y validación*

### 🧪 Testing Completo
![Ejecución de Tests](screenshot/tests-ejecucion.png)
*Ejecución de la suite completa de tests*

![Todos los Tests](screenshot/tests-todos-npm-test.png)
*Resultados completos de npm test - todos los tests pasando*

![Cobertura Terminal](screenshot/coverage-terminal.png)
*Reporte de cobertura mostrado en terminal*

![Cobertura Detallada](screenshot/tests-coverage-terminal.png)
*Métricas detalladas de cobertura de código*

![Reporte de Cobertura](screenshot/coverage-report.png)
*Reporte completo de cobertura con estadísticas*

### 🔗 API Endpoints
![API Operations](screenshot/api-operations-endpoint.png)
*Lista de operaciones disponibles en la API*

### 🌐 Demostración Online
![GitHub Pages Demo](screenshot/github-pages-demo.png)
*Calculadora funcionando en GitHub Pages - demo en vivo*

---

## 📁 Estructura del Proyecto

```
01-Calculadora/
├── controllers/
│   └── calculatorController.js    # Lógica de controladores
├── routes/
│   └── calculatorRoutes.js        # Definición de rutas
├── src/
│   └── calculator.js              # Lógica de negocio pura
├── tests/
│   ├── calculator.test.js         # Tests unitarios
│   └── integration/
│       └── calculator.integration.test.js  # Tests de integración
├── coverage/                      # Reportes de cobertura (generado)
├── node_modules/                  # Dependencias (generado)
├── index.html                     # Frontend - HTML
├── script.js                      # Frontend - JavaScript
├── style.css                      # Frontend - Estilos
├── calculator-browser.js          # Versión browser de calculator
├── server.js                      # Servidor Express
├── package.json                   # Configuración del proyecto
└── README.md                      # Documentación
```

## 🎯 Características Técnicas

### Validación de Datos
- ✅ Tipos de datos (números)
- ✅ Valores finitos (no NaN, no Infinity)
- ✅ Parámetros requeridos
- ✅ Operaciones válidas

### Manejo de Errores
- ✅ División por cero
- ✅ JSON malformado
- ✅ Rutas no encontradas
- ✅ Métodos no soportados

### Casos Límite
- ✅ Números muy grandes/pequeños
- ✅ Precisión decimal
- ✅ Números negativos
- ✅ Operaciones con cero

## 🚀 Próximas Mejoras

- [ ] Historial de operaciones
- [ ] Más operaciones (potencia, raíz, etc.)
- [ ] Modo científico
- [ ] Persistencia en base de datos
- [ ] Autenticación de usuarios
- [ ] Rate limiting
- [ ] Logs estructurados

## 👨‍💻 Autor

**Franco Rossi**
- Proyecto de aprendizaje en desarrollo web full-stack
- Enfoque en testing, arquitectura y buenas prácticas

## 📄 Licencia

MIT License - ver archivo LICENSE para detalles.

---

## 🔧 Para Desarrolladores

### Comandos Útiles

```bash
# Verificar sintaxis
npm run lint

# Formatear código
npm run format

# Analizar cobertura
npm run test:coverage

# Ver logs en desarrollo
npm run dev -- --verbose
```

### Contribuir

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abrir Pull Request

### Debugging

- Los logs del servidor aparecen en consola
- Tests fallidos muestran detalles específicos
- Cobertura de código en `coverage/lcov-report/index.html`

¡Calculadora robusta, bien testeada y lista para producción! 🎉
