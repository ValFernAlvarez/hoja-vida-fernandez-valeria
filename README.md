# Hoja de Vida Web

## Estudiante

- **Nombre:** Valeria Christen Fernández Álvarez
- **Carrera:** Ingeniería de Sistemas — Universidad Católica Boliviana "San Pablo"

## Descripción

Hoja de vida personal en HTML5 semántico nativo (sin frameworks ni JavaScript) con estilos propios en CSS3.
Contenido real: perfil, formación, experiencia, certificaciones, habilidades, idiomas, proyectos y portafolio
multimedia.

## Estructura

```
hoja-vida-fernandez-valeria/
├── index.html
└── css/
    ├── styles.css/
├── README.md
└── assets/
    ├── images/
    ├── audio/
    ├── video/
    └── documents/
```

## HTML5 utilizado

`header`, `nav`, `main`, `section`, `article`, `aside`, `footer` · `h1`–`h3`, `strong`, `em`, `mark`, `small`,
`time`, `code` · `ul`, `ol` · `table` con `caption`/`thead`/`tbody`/`th`/`td` · `figure`/`figcaption`, `picture`,
`audio`, `video` · `details`/`summary`, `dialog`, `progress`, `meter` · formulario completo (`fieldset`, `legend`,
`label`, inputs validados, `select`, `textarea`, botones).

## CSS3 utilizado

- **Paleta y tipografía:** variables de color (Periwinkle, Rosy Taupe, Rosewood, Dusty Grape) y tipografía
  Montserrat vía Google Fonts.
- **Flexbox:** menú de navegación (`nav ul`), en fila y centrado.
- **CSS Grid:** sección de Proyectos Destacados (`#proyectos`), 2 columnas en escritorio.
- **Responsive:** `@media (max-width: 600px)` — grid a 1 columna, tipografía reducida, tabla deslizable.
- Bordes, sombras, radios de esquina y estados `:hover`/`:focus` en tarjetas, botones y enlaces.

## Accesibilidad

`lang="es"`, `alt` en todas las imágenes, `label` asociado a cada campo, jerarquía de encabezados sin saltos,
enlace "Saltar al Contenido Principal", atributos `aria-*`, campos `required` con validación nativa
(`pattern`, `minlength`, `maxlength`).

## Cómo verlo

Abre `index.html` en cualquier navegador (Chrome, Firefox, Edge). No requiere instalación ni servidor —
solo asegúrate de mantener `styles.css` y la carpeta `assets/` junto a `index.html`.
