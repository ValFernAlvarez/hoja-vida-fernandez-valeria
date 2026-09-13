'use strict';

/* 1. MODO OSCURO / MODO CLARO (light/dark toggle + localStorage) */
(function themeToggle() {
    const STORAGE_KEY = 'hoja_vida_theme';
    const root = document.documentElement;
    const boton = document.getElementById('theme_toggle');
    const icono = document.getElementById('theme_toggle_icon');

    if (!boton) return;

    function aplicarTema(tema) {
        if (tema === 'dark') {
            root.setAttribute('data-theme', 'dark');
            boton.setAttribute('aria-pressed', 'true');
            boton.setAttribute('aria-label', 'Cambiar a modo claro');
            if (icono) icono.src = 'assets/images/icons/sun.svg';
        } else {
            root.removeAttribute('data-theme');
            boton.setAttribute('aria-pressed', 'false');
            boton.setAttribute('aria-label', 'Cambiar a modo oscuro');
            if (icono) icono.src = 'assets/images/icons/moon.svg';
        }
    }

    let temaGuardado = null;
    try {
        temaGuardado = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
        temaGuardado = null;
    }

    if (temaGuardado) {
        aplicarTema(temaGuardado);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        aplicarTema('dark');
    }

    boton.addEventListener('click', function () {
        const esOscuroActualmente = root.getAttribute('data-theme') === 'dark';
        const nuevoTema = esOscuroActualmente ? 'light' : 'dark';
        aplicarTema(nuevoTema);
        try {
            localStorage.setItem(STORAGE_KEY, nuevoTema);
        } catch (error) {
        }
    });
})();


/* 2. VALIDACIÓN DEL FORMULARIO DE CONTACTO (JS + manipulación DOM) */
(function validacionFormulario() {
    const formulario = document.getElementById('form_contacto');
    if (!formulario) return;

    const estadoFormulario = document.getElementById('form_status');

    const mensajesError = {
        nombre: 'Escribe tu nombre completo (mínimo 3 caracteres).',
        correo: 'Ingresa un correo electrónico válido (ej. nombre@dominio.com).',
        telefono: 'Ingresa un número celular boliviano válido de 8 dígitos (ej. 70000000).',
        motivo: 'Selecciona un motivo de contacto.',
        mensaje: 'Escribe un mensaje de al menos 10 caracteres.',
        aceptacion: 'Debes aceptar el uso de tus datos para poder enviar el formulario.'
    };

    function mostrarError(campo) {
        const contenedorError = document.getElementById(campo.id + '_error');
        if (contenedorError) {
            contenedorError.textContent = mensajesError[campo.id] || 'Este campo no es válido.';
        }
        campo.classList.add('invalid');
        campo.setAttribute('aria-invalid', 'true');
    }

    function limpiarError(campo) {
        const contenedorError = document.getElementById(campo.id + '_error');
        if (contenedorError) {
            contenedorError.textContent = '';
        }
        campo.classList.remove('invalid');
        campo.removeAttribute('aria-invalid');
    }

    function validarCampo(campo) {
        const esValido = campo.checkValidity();
        if (esValido) {
            limpiarError(campo);
        } else {
            mostrarError(campo);
        }
        return esValido;
    }

    const camposObligatorios = formulario.querySelectorAll('#nombre, #correo, #telefono, #motivo, #mensaje, #aceptacion');

    camposObligatorios.forEach(function (campo) {
        campo.addEventListener('blur', function () {
            validarCampo(campo);
        });
        campo.addEventListener('input', function () {
            if (campo.classList.contains('invalid')) {
                validarCampo(campo);
            }
        });
        campo.addEventListener('change', function () {
            if (campo.classList.contains('invalid')) {
                validarCampo(campo);
            }
        });
    });

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        let formularioValido = true;
        let primerCampoInvalido = null;

        camposObligatorios.forEach(function (campo) {
            const campoValido = validarCampo(campo);
            if (!campoValido) {
                formularioValido = false;
                if (!primerCampoInvalido) {
                    primerCampoInvalido = campo;
                }
            }
        });

        if (!formularioValido) {
            if (estadoFormulario) {
                estadoFormulario.textContent = 'Por favor corrige los campos marcados antes de enviar.';
                estadoFormulario.classList.remove('success');
                estadoFormulario.classList.add('error');
            }
            if (primerCampoInvalido) {
                primerCampoInvalido.focus();
            }
            return;
        }

        if (estadoFormulario) {
            estadoFormulario.textContent = '¡Gracias! Tu mensaje fue validado correctamente y quedaría listo para enviarse.';
            estadoFormulario.classList.remove('error');
            estadoFormulario.classList.add('success');
        }

        camposObligatorios.forEach(limpiarError);
        formulario.reset();
    });
})();
