# Hoja de Vida Web — HTML5 Nativo

## Datos del estudiante

- **Nombre:** Valeria Christen Fernández Álvarez
- **Carrera:** Ingeniería de Sistemas — Universidad Católica Boliviana "San Pablo" (La Paz, Bolivia)

## Descripción del proyecto

Esta es una hoja de vida en formato web, desarrollada como actividad académica para demostrar el dominio de
**HTML5 nativo**: estructura semántica, formularios, tablas, listas, elementos multimedia y criterios básicos de
accesibilidad. El maquetado (`index.html`) utiliza exclusivamente etiquetas HTML5 nativas. Toda la
interactividad (menú de navegación, ventana emergente de contacto, validación de formulario) se logra
con elementos nativos de HTML5 (`<details>`, `<dialog>`, atributos de validación, anclas internas).

El contenido (perfil, formación, experiencia, certificaciones, habilidades, idiomas y proyectos) está basado en
información real de la autora, incluyendo experiencia profesional vigente (mantenimiento del sitio web del
Arzobispado de La Paz) y proyectos de desarrollo propios (Budget-Buddy, Toque-Fama y Ecoguardianes).

## Estructura del proyecto

```
hoja-vida-fernandez-valeria/
├── index.html
├── styles.css
├── README.md
└── assets/
    ├── images/
    │   ├── foto-profesional.png
    │   └── ecoguardianes.png
    ├── audio/
    │   └── presentacion.mp3
    ├── video/
    │   └── presentacion-personal.mp4
    └── documents/
        └── valeria-fernandez-resume.pdf
```

## Etiquetas HTML5 utilizadas

- **Estructura semántica:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **Texto:** `<h1>`–`<h3>`, `<p>`, `<strong>`, `<em>`, `<mark>`, `<small>`, `<time>`, `<address>`, `<code>`.
- **Listas:** `<ul>`, `<ol>`, `<li>`.
- **Tablas:** `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`.
- **Multimedia:** `<figure>`, `<figcaption>`, `<picture>`, `<source>`, `<img>`, `<audio>`, `<video>`.
- **Formularios:** `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>` (text, email, tel, date, checkbox),
  `<textarea>`, `<select>`, `<option>`, `<button>` (submit y reset).
- **Elementos interactivos nativos (sin JavaScript):** `<details>`/`<summary>` para información expandible,
  `<dialog>` con `<form method="dialog">` para el aviso de contacto rápido, `<progress>` para el avance de la
  carrera, `<meter>` para niveles de dominio técnico, `<nav>` con navegación interna por anclas, enlace de descarga
  del CV en PDF (`download`), y `<picture>` con `<source>` para imagen responsive.

## Elementos de accesibilidad implementados

- `lang="es"` en la etiqueta `<html>`.
- Texto alternativo (`alt`) descriptivo en todas las imágenes.
- `<label for="...">` asociado correctamente a cada campo del formulario mediante `id`.
- Jerarquía de encabezados coherente (`h1` único → `h2` por sección → `h3` por artículo/subsección), sin saltos de
  nivel.
- Enlace "Saltar al Contenido Principal" como uno de los primeros elementos del `<body>`, apuntando a
  `#main-content`.
- Uso de `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-required` y `role` en secciones, campos de
  formulario, el diálogo de contacto y elementos multimedia.
- Campos obligatorios marcados con `required` y `aria-required="true"`.
- Toda la página es navegable con teclado: enlaces, campos de formulario y botones son elementos nativos
  enfocables; no se depende de ningún control personalizado con JavaScript.
- Validación nativa de formularios con `required`, `minlength`, `maxlength`, `pattern`, `min`, `max` y
  `placeholder`.

## Instrucciones para visualizar el proyecto

1. Descarga o clona esta carpeta completa (`hoja-vida-fernandez-valeria/`), manteniendo `styles.css` en la misma
   carpeta que `index.html` y respetando la estructura de subcarpetas dentro de `assets/`.
2. Abre el archivo `index.html` haciendo doble clic, o arrastrándolo a la ventana de tu navegador (Chrome, Firefox,
   Edge, Safari, etc.). No requiere servidor local, instalación ni conexión a internet.
3. Usa el menú de navegación en el encabezado para saltar a cada sección, o desplázate con el teclado (Tab) para
   comprobar la accesibilidad.

