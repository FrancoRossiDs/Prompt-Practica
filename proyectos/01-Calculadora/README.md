# 📦 Nombre del Proyecto

Calculadora Web Básica con Arquitectura en Capas

## 🧱 Arquitectura aplicada

Este proyecto implementa una Arquitectura en Capas a nivel de frontend. Se eligió este patrón para demostrar una clara separación de responsabilidades entre los distintos componentes de la aplicación cliente.
La Capa de Presentación (HTML/CSS) se encarga de lo visual; la Capa de Lógica de UI (JavaScript) gestiona las interacciones y el estado del display; y la Capa de Negocio/Cálculo (también en JavaScript) contiene la lógica matemática pura, aislada de la interfaz. Esta división no solo hace el código más legible y organizado, sino que también mejora la mantenibilidad al permitir cambios en una capa sin afectar las demás, facilita la testabilidad al aislar la lógica clave, y proporciona una base sólida para una futura escalabilidad.

## 🤖 Prompt usado

    **1. Rol:**
    Actúa como un **desarrollador web front-end experimentado**.

    **2. Tarea:**
    Desarrolla una **aplicación de calculadora web** capaz de realizar las cuatro operaciones aritméticas fundamentales (suma, resta, multiplicación y división).

    **3. Contexto Detallado / Requisitos:**

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

    **4. Restricciones / Consideraciones Adicionales:**
    -   El código debe ser **legible, modular y estar bien comentado**.
    -   La aplicación debe ser **completamente front-end; no se requiere backend**.
    -   Evitar cualquier **exceso de complejidad** o patrones de diseño que no sean estrictamente necesarios para una calculadora básica.
    -   El diseño debe ser **responsive básico** para adaptarse a diferentes tamaños de pantalla.
    - Tener en cuenta adaptabilidad para distintas resoluciones

    **5. Formato de Salida / Instrucciones Finales:**
    Genera el **código completo para todos los archivos especificados** (`index.html`, `style.css`, `script.js`), asegurando que la aplicación sea **funcional y directamente ejecutable** en un navegador. Incluye comentarios explicativos donde sea necesario.

## 💭 Justificación
Elegí diseñar el prompt de esta manera porque buscaba guiar a la IA a través de un proceso de desarrollo estructurado y deliberado. La inclusión de secciones claramente definidas y el detalle específico en cada una fueron cruciales para asegurar que el resultado se alineara con mis objetivos de diseño y arquitectura.

Cada parte del prompt tuvo un propósito estratégico:

Rol Específico (desarrollador web front-end experimentado): Esto fue clave para que la IA enfocara su conocimiento en las tecnologías y patrones relevantes para el desarrollo web del lado del cliente, garantizando soluciones adecuadas para una interfaz de usuario.

Tarea Clara: Establecí el objetivo principal de la aplicación de manera concisa para darle a la IA una dirección inequívoca.

Arquitectura en Capas Detallada: Instruí a la IA sobre cómo organizar la lógica interna del código JavaScript. Esto era fundamental para mí, ya que buscaba una separación de responsabilidades que mejorara la mantenibilidad y testabilidad, evitando un código desorganizado.

Tecnologías Explícitas: Al especificar "JavaScript puro" y "sin frameworks", me aseguré de que la solución fuera simple y didáctica, sin introducir complejidades o dependencias innecesarias que no quería explorar en este proyecto.

Archivos y Estructura: Esta parte fue vital para que la IA generara múltiples archivos (index.html, style.css, script.js) con su contenido y nombres correctos, reflejando una estructura de proyecto realista.

Funcionalidades Específicas: Detallé el comportamiento esperado para cada interacción de la calculadora, incluyendo el manejo de casos borde como la división por cero. Esto garantizó una aplicación funcional y robusta.

Restricciones Claras: Definieron los límites y las expectativas de calidad (legibilidad, modularidad, no complejidad excesiva), lo que me ayudó a obtener un código limpio y eficiente para el alcance del proyecto.

Formato de Salida: Solicitó directamente el código completo y ejecutable, optimizando la interacción y reduciendo el trabajo manual posterior.

El éxito en la generación de este proyecto demuestra mi capacidad para diseñar prompts complejos y multifacéticos, y resalta la importancia de un enfoque metódico y detallado en el Prompt Engineering para obtener resultados precisos y alineados con objetivos arquitectónicos y funcionales específicos.

## 🖼️ Capturas

![Captura 1 - Interfaz Principal](../01-Calculadora/screenshot/Captura%20de%20pantalla%202025-07-22%20221153.png)
*Vista principal de la calculadora*

![Captura 2 - Ejemplo de Operación](../01-Calculadora/screenshot/Captura%20de%20pantalla%202025-07-22%20221212.png)
*Ejemplo de operación matemática en proceso*

![Captura 3 - Error division entre 0](../01-Calculadora/screenshot/Captura%20de%20pantalla%202025-07-22%20221221.png)
*Demostración de las funcionalidades implementadas*


## ▶️ Cómo ejecutarlo

1. Asegúrate de tener la carpeta del proyecto 01-calculadora en tu sistema.

2. Navega a la subcarpeta codebase/ (o la carpeta donde hayas colocado index.html, style.css, script.js).

3. Abre el archivo index.html directamente en tu navegador web preferido. Puedes hacerlo arrastrando el archivo a la ventana del navegador o haciendo doble clic sobre él.