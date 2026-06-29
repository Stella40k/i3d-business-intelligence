# Arquitectura del Sistema

| Proyecto | I3D Business Intelligence |
|----------|----------------------------|
| Versión | 1.0 |
| Sprint | Sprint 0 |
| Estado | En desarrollo |
| Última actualización | 28/06/2026 |
| Responsable | Stella M. Bernard |

---

# Objetivo

Definir la arquitectura de alto nivel del sistema y las responsabilidades de cada componente.

---

# Arquitectura General

El sistema seguirá una arquitectura de tres capas.

```text
Usuario
      │
      ▼
Frontend (React + Vite)
      │
      │ HTTP / JSON
      ▼
Backend (Node.js + Express)
      │
      │ ORM (Sequelize)
      ▼
Base de Datos (PostgreSQL - Supabase)
```

---

# Responsabilidades

## Frontend

Responsable de:

- Mostrar la información al usuario.
- Gestionar formularios.
- Visualizar indicadores.
- Consumir la API REST.
- Gestionar navegación.

---

## Backend

Responsable de:

- Implementar la lógica de negocio.
- Validar información.
- Gestionar autenticación.
- Exponer la API REST.
- Comunicarse con la base de datos.

---

## Base de datos

Responsable de:

- Persistir la información.
- Garantizar integridad.
- Mantener relaciones entre entidades.
- Almacenar el historial del negocio.

---

# Comunicación

La comunicación entre frontend y backend se realizará mediante HTTP utilizando JSON como formato de intercambio de datos.

El backend será el único componente autorizado para acceder directamente a la base de datos.

---

# Principios arquitectónicos

- Separación de responsabilidades.
- Escalabilidad.
- Mantenibilidad.
- Seguridad.
- Modularidad.
- Reutilización de componentes.