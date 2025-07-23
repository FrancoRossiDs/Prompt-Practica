# 🧮 Calculadora Web Básica

**Una calculadora moderna desarrollada con Arquitectura en Capas utilizando tecnologías web nativas**

**Tecnologías:** HTML5 | CSS3 | JavaScript Puro

---
## 🏗️ Arquitectura Implementada

Este proyecto utiliza una **Arquitectura en Capas** a nivel frontend, demostrando una clara **separación de responsabilidades**:

**Flujo de la Arquitectura:**
🎨 Capa de Presentación (HTML/CSS)
    ↓
⚙️ Capa de Lógica de UI (JavaScript DOM)
    ↓
🧠 Capa de Negocio/Cálculo (JavaScript Puro)


**Justificación y Beneficios:**

La **Arquitectura en Capas** fue fundamental para este proyecto, ya que fomenta una clara **separación de preocupaciones** dentro del frontend. La **Capa de Presentación** (HTML/CSS) maneja lo visual; la **Capa de Lógica de UI** (JavaScript) gestiona las interacciones y el estado; y la **Capa de Negocio/Cálculo** (JavaScript puro) contiene la lógica matemática central, aislada de la interfaz. Esta división hace el código más **legible, organizado y fácil de mantener**, permitiendo que los cambios en una capa no afecten las demás y facilitando la **testabilidad** de la lógica clave.

---

## 🤖 Proceso de Prompt Engineering

Para generar este proyecto, empleé un prompt estratégico y detallado, guiando a la IA a través de un proceso de desarrollo estructurado. Mi enfoque fue crear un prompt **multifacético** que asegurara un código que cumpliera tanto con los requisitos funcionales como con la arquitectura deseada.

### 📝 Estructura del Prompt Utilizado

PLANTILLA DE PROMPT MAESTRO (Calculadora Web Mejorada)
1. Rol:
Actúa como un desarrollador web front-end experimentado.

2. Tarea:
Desarrolla una aplicación de calculadora web capaz de realizar las cuatro operaciones aritméticas fundamentales (suma, resta, multiplicación y división).

3. Contexto Detallado / Requisitos:

**a. Arquitectura:**
Implementa una **Arquitectura en Capas a nivel de frontend**, separando claramente las responsabilidades:
-   **Capa de Presentación (HTML/CSS):** Encargada de la estructura y apariencia de la interfaz de usuario.
-   **Capa de Lógica de UI (JavaScript):** Gestionará la interacción del usuario con el DOM (eventos de clic) y coordinará las llamadas a la Capa de Negocio.
-   **Capa de Negocio/Cálculo (JavaScript):** Contendrá la lógica pura de las operaciones matemáticas, completamente aislada de la UI y los eventos del DOM.

**b. Tecnologías:**
-   HTML5, CSS3, JavaScript puro.
-   **No se permite el uso de frameworks o librerías externas** (ej., React, Vue, jQuery, etc.).

**c. Archivos y Estructura:**
El proyecto debe organizarse en los siguientes archivos dentro de la carpeta raíz del proyecto:
-   `index.html`: Estructura HTML de la calculadora (Capa de Presentación). Debe incluir un display y un grid de botones (0-9, +, -, *, /, C, =, .). Cada botón debe tener identificadores claros o atributos `data-` para la lógica JS.
-   `style.css`: Estilos CSS para la calculadora (Capa de Presentación). Debe tener un aspecto moderno y amigable, con énfasis en la claridad visual y un diseño de grid para los botones.
-   `script.js`: Lógica JavaScript (implementando Capa de Lógica de UI y Capa de Negocio/Cálculo). Debe aplicar buenas prácticas y un manejo robusto de errores y excepciones.

**d. Funcionalidades Específicas:**
-   **Display:** Debe mostrar la entrada actual y los resultados.
-   **Botones Numéricos (0-9, .):** Al ser presionados, añaden el número o punto al display.
-   **Botones de Operación (+, -, *, /):** Al ser presionados, guardan la operación y el primer número.
-   **Botón Igual (=):** Realiza el cálculo final.
-   **Botón Limpiar (C):** Resetea el display y el estado de la calculadora.
-   **Manejo de División por Cero:** Si se intenta dividir por cero, el display debe mostrar "Error" y resetear el estado.
4. Restricciones / Consideraciones Adicionales:

El código debe ser legible, modular y estar bien comentado.

La aplicación debe ser completamente front-end; no se requiere backend.

Evitar cualquier exceso de complejidad o patrones de diseño que no sean estrictamente necesarios para una calculadora básica.

El diseño debe ser responsive básico para adaptarse a diferentes tamaños de pantalla.

5. Formato de Salida / Instrucciones Finales:
Genera el código completo para todos los archivos especificados (index.html, style.css, script.js), asegurando que la aplicación sea funcional y directamente ejecutable en un navegador. Incluye comentarios explicativos donde sea necesario.


### 🎯 Técnicas de Prompt Engineering Aplicadas

Este prompt demuestra el uso efectivo de varias técnicas clave de Prompt Engineering:

1.  **Role-Based Prompting:** `Actúa como un desarrollador web front-end experimentado.` Esto activó el conocimiento específico del dominio y estableció expectativas de calidad profesional.
2.  **Task Decomposition:** La tarea compleja se dividió en subtareas claras (UI, lógica, estilos, funciones específicas) con responsabilidades bien definidas para cada capa de la arquitectura.
3.  **Constraint Setting:** Restricciones explícitas como "JavaScript puro, sin frameworks" y "manejo robusto de errores" guiaron a la IA para evitar soluciones innecesariamente complejas y mantener el foco en los objetivos principales del proyecto didáctico.
4.  **Especificidad sin Rigidez:** Se detalló QUÉ se quería (comportamientos exactos de botones, manejo de división por cero), sin dictar CÓMO implementarlo, dando a la IA libertad creativa dentro de los parámetros.

### ✅ Lecciones Aprendidas

El éxito en la generación de este proyecto valida que un **diseño de prompt metódico y detallado** es crucial para obtener resultados precisos y alineados con objetivos arquitectónicos y funcionales específicos. Demuestra mi capacidad para:

* Diseñar prompts complejos y multifacéticos.
* Aplicar Prompt Engineering de manera efectiva.
* Obtener código estructurado, organizado y funcional.

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

**Prerrequisitos:**
- 🌐 Navegador web moderno (Chrome, Firefox, Safari, Edge)
- 📁 Archivos del proyecto descargados

**Pasos de Instalación:**

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
