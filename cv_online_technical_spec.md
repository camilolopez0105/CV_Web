# Especificación Técnica — CV Online Camilo (v1.0)

> Instrucción para la IA de coding: Implementa TODO siguiendo esta especificación técnica. Prioriza claridad visual, branding personal, experiencia premium y simplicidad técnica. El proyecto debe sentirse moderno, minimalista y profesional, inspirado en portfolios de desarrolladores y diseñadores contemporáneos.

---

# 1. Visión General del Producto

## Concepto

**CV Online Camilo** es una página web personal construida como:
- CV online moderno
- portfolio minimalista
- presencia profesional digital
- hub central de proyectos y experiencia

El objetivo principal es:
- mostrar experiencia profesional
- destacar proyectos y habilidades
- reforzar marca personal
- servir como tarjeta profesional digital

---

## Filosofía del Producto

La web NO debe sentirse como:
- un CV PDF tradicional
- una plantilla corporativa genérica
- un portfolio saturado

Debe sentirse como:
- una experiencia premium
- una landing moderna
- un perfil técnico elegante
- una marca personal minimalista

---

## Público Objetivo

### Primario
- recruiters
- hiring managers
- startups
- clientes freelance
- networking profesional

### Secundario
- colaboradores
- comunidad tech
- contactos profesionales
- potenciales socios

---

# 2. Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 |
| Core UI | React 18 |
| Lenguaje | JavaScript |
| Estilos | CSS Modules |
| Hosting | GitHub Pages |
| Deploy CI/CD | GitHub Actions |

---

## Dependencias

```json
{
  "next": "14.2.3",
  "react": "^18",
  "react-dom": "^18"
}
```

---

# 3. Filosofía Técnica

## Principios

El proyecto debe priorizar:
- simplicidad
- performance
- mantenimiento mínimo
- facilidad de edición
- responsive-first
- branding personal

---

## Restricciones Técnicas

NO usar:
- backend
- base de datos
- autenticación
- CMS
- APIs complejas
- dependencias innecesarias

La plataforma debe:
- ser estática
- desplegarse gratuitamente
- funcionar sin servidor
- ser fácilmente editable

---

# 4. Arquitectura del Proyecto

## Estructura de Carpetas

```text
cv-camilo/
├── components/
│   └── CVPage.jsx
│
├── data/
│   └── cv.js
│
├── pages/
│   ├── _app.js
│   └── index.js
│
├── styles/
│   ├── cv.module.css
│   └── globals.css
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── next.config.js
├── package.json
└── README.md
```

---

# 5. Arquitectura Frontend

## pages/index.js

Responsabilidad:
- renderizar la página principal
- cargar componente raíz CVPage

```js
import CVPage from "../components/CVPage";

export default function Home() {
  return <CVPage />;
}
```

---

## components/CVPage.jsx

Responsabilidad:
- estructura principal del CV
- renderizado de secciones
- consumo de datos desde `data/cv.js`

Debe actuar como:
- contenedor principal
- orchestrator UI
- single-page layout

---

## data/cv.js

Responsabilidad:
- fuente única de contenido
- separación entre datos y presentación

Toda la información editable debe vivir aquí:
- nombre
- bio
- experiencia
- habilidades
- proyectos
- contacto

---

## styles/cv.module.css

Responsabilidad:
- estilos scoped
- design system principal
- responsive styling

---

# 6. Sistema de Diseño

## Estética General

La interfaz debe transmitir:
- elegancia
- claridad
- modernidad
- profesionalismo técnico

Inspiraciones:
- Linear
- Vercel
- Read.cv
- Raycast
- portfolios minimalistas modernos

---

## Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| `bg-primary` | `#050505` | Fondo principal |
| `bg-card` | `#111111` | Tarjetas |
| `accent-cyan` | `#22D3EE` | Highlights |
| `border-soft` | `#1F2937` | Bordes |
| `text-primary` | `#FAFAFA` | Titulares |
| `text-secondary` | `#A1A1AA` | Texto secundario |
| `text-muted` | `#52525B` | Texto terciario |

---

## Tipografía

### Headers
- font-weight: 700-800
- tracking-tight
- line-height compacta

### Body
- weight 400-500
- leading relaxed

---

## Escala Tipográfica

| Elemento | Tamaño |
|---|---|
| Hero Name | `text-6xl md:text-8xl` |
| Section Titles | `text-2xl md:text-4xl` |
| Body | `text-base md:text-lg` |
| Small | `text-sm` |

---

# 7. Estructura de la Página

---

# Sección 1 — Navbar

## Objetivo

Navegación rápida entre secciones.

---

## Elementos

### Logo
```text
CAL
```

---

## Links
- sobre mí
- experiencia
- proyectos
- contacto

---

## Comportamiento

- sticky opcional
- minimalista
- responsive

---

# Sección 2 — Hero

## Objetivo

Impacto inmediato y branding personal.

---

## Elementos

### Tagline
```text
Data Analyst · Developer
```

---

### Nombre Principal

Separar nombre y apellido usando:
- highlight cyan
- tipografía grande
- layout dramático

---

### Bio

Descripción breve:
- quién eres
- qué haces
- qué problema resuelves

---

## Layout

- centrado verticalmente
- spacing amplio
- responsive

---

# Sección 3 — Habilidades

## Objetivo

Mostrar stack y capacidades.

---

## Diseño

Grid flexible de skill tags.

---

## Skill Tags

Estilo:
- rounded-full
- border soft
- hover cyan glow

---

## Contenido

Ejemplos:
- Python
- SQL
- Power BI
- Streamlit
- Next.js
- APIs
- Data Analysis

---

# Sección 4 — Experiencia

## Objetivo

Mostrar trayectoria profesional.

---

## Layout

Timeline minimalista vertical.

---

## Elementos

Cada experiencia debe incluir:
- role
- company
- date
- description

---

## UX

Hover:
- accent glow
- subtle lift
- smooth transition

---

# Sección 5 — Proyectos

## Objetivo

Demostrar capacidad práctica.

---

## Layout

Cards grid responsive.

---

## Cada proyecto debe incluir

- nombre
- descripción
- stack
- link opcional
- screenshot opcional

---

## Estilo

Cards oscuras:
- border soft
- hover cyan
- rounded-xl

---

# Sección 6 — Contacto

## Objetivo

Conversión profesional.

---

## Elementos

- email
- LinkedIn
- GitHub
- WhatsApp opcional

---

## CTA

```text
Disponible para oportunidades y proyectos.
```

---

# 8. Responsive Strategy

## Filosofía

Mobile-first.

La experiencia mobile debe sentirse:
- limpia
- rápida
- premium

---

## Reglas

### Mobile
- stack vertical
- spacing reducido
- typography adaptativa

### Desktop
- grids
- layouts horizontales
- más espacio negativo

---

# 9. Performance

## Objetivos Lighthouse

| Métrica | Target |
|---|---|
| Performance | 95+ |
| Accessibility | 90+ |
| SEO | 95+ |
| Best Practices | 95+ |

---

## Reglas Técnicas

- minimizar JS
- optimizar imágenes
- evitar librerías pesadas
- usar componentes simples

---

# 10. Deployment

## Hosting

GitHub Pages.

---

## CI/CD

GitHub Actions automático.

---

## Workflow

```text
Git Push
↓
GitHub Actions
↓
Build Next.js
↓
Deploy GitHub Pages
```

---

# 11. SEO

## Metadata Base

```js
export const metadata = {
  title: "Camilo A. Lopez Restrepo — Portfolio & CV",
  description:
    "CV online moderno enfocado en desarrollo, análisis de datos y proyectos digitales.",
};
```

---

## Keywords

- data analyst
- developer portfolio
- camilo lopez
- portfolio nextjs
- online cv

---

# 12. Accesibilidad

## Requisitos

- semantic HTML
- keyboard navigation
- contrast ratio correcto
- focus states visibles

---

# 13. Roadmap

---

## Phase 1 — MVP

### Objetivo
Presencia profesional online.

### Features
- Hero
- Skills
- Experience
- Projects
- Contact

---

## Phase 2 — Branding

### Objetivo
Mejorar percepción profesional.

### Features
- animaciones
- dark/light mode
- microinteracciones
- screenshots proyectos

---

## Phase 3 — Content

### Objetivo
Generar autoridad.

### Features
- blog
- case studies
- writing section
- learning notes

---

## Phase 4 — Advanced Portfolio

### Objetivo
Convertir portfolio en hub profesional.

### Features
- analytics
- multilingual
- downloadable CV
- project filtering

---

# 14. Criterios de Aceptación

- [ ] La web renderiza correctamente en Next.js 14.
- [ ] El deploy automático funciona en GitHub Pages.
- [ ] La navegación entre secciones funciona.
- [ ] El layout es totalmente responsive.
- [ ] Lighthouse score ≥ 90.
- [ ] Los hover states son consistentes.
- [ ] La experiencia mobile se siente premium.
- [ ] No existen layout shifts visibles.
- [ ] La información puede editarse solo desde `data/cv.js`.
- [ ] La web transmite profesionalismo y claridad.
- [ ] El diseño no parece una plantilla genérica.
- [ ] El tiempo de carga inicial es < 3s.

---

# 15. Filosofía Final

El proyecto debe sentirse como:

```text
una identidad profesional digital moderna
```

La prioridad máxima es:

```text
claridad + branding personal + simplicidad
```

NO complejidad técnica.
