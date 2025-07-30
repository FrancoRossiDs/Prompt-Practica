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
![Calculadora Web](screenshots/calculadora-interfaz-principal.png)
*Interfaz principal de la calculadora con diseño moderno y responsivo*

### 🧪 Testing Completo
![Tests Unitarios](screenshots/tests-unitarios-completos.png)
*Ejecución de tests unitarios - 7/7 pasando (100%)*

![Tests de Integración](screenshots/tests-integracion-resultado.png)
*Tests de integración de API - 22/23 pasando (95.6%)*

![Cobertura de Tests](screenshots/tests-coverage-terminal.png)
*Reporte de cobertura completo con métricas detalladas*

![Todos los Tests](screenshots/tests-todos-npm-test.png)
*Ejecución completa de toda la suite de tests*

![Reporte HTML](screenshots/coverage-html-report.png)
*Reporte HTML interactivo de cobertura de código*

### 🔗 API Endpoints
![API Health Check](screenshots/api-health-check.png)
*Endpoint de verificación de estado de la API*

![API Calculate](screenshots/api-calculate-example.png)
*Ejemplo de operación matemática via API*

![API Operations](screenshots/api-operations-endpoint.png)
*Lista de operaciones disponibles en la API*

### 🛠️ Desarrollo
![Servidor Corriendo](screenshots/npm-start-servidor.png)
*Servidor Express iniciado y listo para recibir peticiones*

![Estructura del Proyecto](screenshots/estructura-proyecto-vscode.png)
*Organización de archivos y carpetas en Visual Studio Code*

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
