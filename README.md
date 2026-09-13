# Hoja de Vida Web — HTML5 + CSS3 + JavaScript

## Datos de la estudiante

- **Nombre:** Valeria Christen Fernández Álvarez
- **Carrera:** Ingeniería de Sistemas — Universidad Católica Boliviana "San Pablo" (La Paz, Bolivia)
- **Materia:** Tecnologías Web I (SIS-214) — Primera Evaluación Práctica Parcial, Unidad I

## Descripción del proyecto

Hoja de vida personal desarrollada como proyecto académico, con contenido real de la autora (perfil,
formación, experiencia profesional, certificaciones, habilidades, idiomas y proyectos propios). El sitio
usa HTML5 semántico, una hoja de estilos CSS3 propia (sin frameworks) y JavaScript nativo (sin librerías)
para la interactividad.

## Estructura del proyecto

```
hoja-vida-fernandez-valeria/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── README.md
└── assets/
    ├── images/
    │   ├── foto-profesional.png
    │   ├── ecoguardianes.png
    │   └── icons/
    │       ├── sun.svg
    │       └── moon.svg
    ├── audio/
    │   └── presentacion.mp3
    ├── video/
    │   └── presentacion-personal.mp4
    └── documents/
        └── valeria-fernandez-resume.pdf
```

## HTML5

Estructura semántica completa (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`), jerarquía
de encabezados sin saltos (`h1` único → `h2` por sección → `h3` por artículo), tablas con
`caption`/`thead`/`tbody`, elementos multimedia (`figure`/`figcaption`, `picture`, `audio`, `video`),
elementos interactivos nativos (`details`/`summary`, `dialog`, `progress`, `meter`) y un formulario de
contacto completo con validación nativa (`required`, `pattern`, `minlength`, `maxlength`, `type="email"`,
`type="tel"`). Todos los `id` y `class` usan **snake_case** (ej. `main_content`, `perfil_heading`). No se
usan etiquetas genéricas `div` ni `span`: todo el maquetado se logra con elementos semánticos (`header`,
`nav`, `main`, `section`, `article`, `aside`, `figure`, `address`, `p`, etc.) apoyados en CSS.

## CSS3

- **Variables (`:root`):** paleta púrpura profundo + vino (rosewood) + rosado sobre fondo crema, radios,
  sombras y fuente, reutilizadas en todo el sitio, incluyendo el modo oscuro. Todas las combinaciones de
  texto/fondo fueron verificadas para cumplir el contraste mínimo WCAG AA.
- Fondo de página con un patrón sutil de puntos y manchas de color difuminadas (rosado, vino, lavanda) para
  dar sensación de profundidad en vez de un color plano.
- **Tipografía:** Montserrat vía Google Fonts.
- **Flexbox:** menú de navegación (`nav ul`) y botones de acción del encabezado.
- **CSS Grid:** encabezado (foto + datos en dos columnas, aplicado directamente sobre `<header>` sin
  contenedores adicionales), Proyectos Destacados (2 tarjetas por fila sobre un panel oscuro) y Portafolio
  Multimedia (`#proyectos`, `#multimedia`).
- **Responsive:** `@media (max-width: 700px)` y `@media (max-width: 1000px)` — grids a 1-2 columnas,
  encabezado apilado, tipografía reducida, tabla deslizable.
- Botones unificados (clase `.btn`, radio de esquina reducido) para el CV, GitHub, "Ver repositorio" y el
  formulario.
- Habilidades Técnicas presentadas como "chips" de esquinas poco redondeadas.
- Certificaciones, Cursos y Talleres como línea de tiempo vertical sobre un panel rosado.
- Foto de perfil en círculo (encabezado y Portafolio Multimedia).
- Botón de modo oscuro/claro solo con ícono; su nombre accesible para lectores de pantalla se define con
  `aria-label`, que se actualiza dinámicamente en cada cambio de tema.
- Iconos propios de sol/luna en SVG (`assets/images/icons/`) para el botón de modo oscuro/claro.
- Bordes, sombras, radios de esquina y estados `:hover`/`:focus` en botones y enlaces.

## JavaScript (`js/script.js`)

1. **Modo oscuro / claro:** botón `#theme_toggle` que alterna un atributo `data-theme="dark"` en `<html>`,
   redefiniendo las variables CSS del modo oscuro. La preferencia se guarda en `localStorage` y, si no hay
   ninguna guardada, respeta `prefers-color-scheme` del sistema operativo.
2. **Validación del formulario de contacto:** el formulario usa `novalidate` para desactivar la validación
   automática del navegador, y JavaScript valida cada campo (en cada entrada, al salir del campo y al
   enviar) con la Constraint Validation API (`checkValidity()`), mostrando mensajes de error dinámicos
   junto a cada campo (manipulación del DOM) y un mensaje final de éxito o error al enviar.

## Accesibilidad

`lang="es"`, `alt` descriptivo en todas las imágenes, `label` asociado a cada campo, enlace "Saltar al
Contenido Principal", atributos `aria-*` (`aria-label`, `aria-describedby`, `aria-live`, `aria-pressed`,
`aria-invalid`), mensajes de error de formulario anunciados por lectores de pantalla (`aria-live="polite"`),
y respeto por `prefers-reduced-motion` en las animaciones.


## Enlaces

- **GitHub:** [github.com/ValFernAlvarez](https://github.com/ValFernAlvarez)
