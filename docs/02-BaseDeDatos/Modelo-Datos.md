               DOCUMENTACIÓN

                      │

                      ▼

            Modelo de Datos

                      │

                      ▼

                 MER Completo

                      │

                      ▼

            Diccionario de Datos

                      │

                      ▼

             PostgreSQL (Supabase)

                      │

                      ▼

            Sequelize (Backend)

                      │

                      ▼

              API REST (Express)

                      │

                      ▼

            Dashboard React

                      │

                      ▼

          Business Intelligence

# Modelo de Datos

| Proyecto | I3D Business Intelligence |
|-----------|---------------------------|
| Documento | Modelo de Datos |
| Versión | 1.0 |
| Sprint | Sprint 2 |
| Estado | En desarrollo |

---

# Objetivo

Definir la estructura lógica de la información utilizada por el sistema de Business Intelligence de JAM Studio.

Este documento establece las entidades principales, su organización por módulos, las relaciones generales entre ellas y las decisiones de diseño que permitirán construir una base de datos escalable, consistente y preparada para el crecimiento del negocio.

---

# Filosofía del Modelo

El sistema fue diseñado siguiendo una arquitectura modular.

Cada módulo representa un área funcional de la empresa y posee entidades propias, aunque todas se encuentran relacionadas entre sí mediante el módulo Comercial.

La información registrada no solo permitirá administrar la empresa, sino también generar indicadores para la toma de decisiones mediante Business Intelligence.

---

# Arquitectura General

El sistema se divide en cinco grandes módulos:

- Comercial
- Catálogo
- Producción
- Finanzas
- Business Intelligence

Todos los módulos comparten información a través del Pedido, que constituye la entidad principal del sistema.

---

# Flujo General de la Información

Cliente
↓
Pedido
↓
Detalle del Pedido
↓
Producción
↓
Entrega
↓
Transacciones
↓
Dashboard

Cada pedido puede contener uno o varios productos.

Cada producto puede requerir una producción independiente y generar uno o varios movimientos financieros.

---

# Módulos del Sistema

## Comercial

Responsable de registrar:

- clientes;
- pedidos;
- canales de contacto;
- estados del pedido;
- seguimiento comercial.

---

## Catálogo

Administra:

- productos;
- variantes;
- categorías;
- colecciones.

Permite que un producto pertenezca a varias categorías y colecciones.

---

## Producción

Gestiona el proceso de fabricación.

Cada producto vendido genera una orden de producción independiente.

También administra:

- personalizaciones;
- estados de producción;
- tiempos estimados.

---

## Finanzas

Registra:

- ingresos;
- egresos;
- compras;
- financiamientos;
- reintegros;
- métodos de pago.

Toda la información financiera alimentará las estadísticas del Dashboard.

---

## Business Intelligence

No almacena información propia.

Obtiene los datos desde los módulos anteriores mediante consultas agregadas y vistas SQL.

Los principales indicadores serán:

- Balance mensual.
- Balance anual.
- Producto más rentable.
- Categoría más vendida.
- Canal con mayor cantidad de ventas.
- Evolución de ingresos.
- Evolución de egresos.
- Estado actual de producción.
- Rentabilidad por categoría.
- Flujo de caja estimado.

---

# Principios de Diseño

El modelo sigue las siguientes reglas:

- No duplicar información.
- Utilizar relaciones normalizadas.
- Separar entidades maestras de entidades operacionales.
- Utilizar tablas puente para relaciones N:M.
- Mantener la integridad referencial.
- Permitir futuras ampliaciones sin modificar la estructura principal.

---

# Identificación de Registros

Todas las entidades utilizarán identificadores UUID.

Ventajas:

- Mayor seguridad.
- Escalabilidad.
- Compatibilidad con PostgreSQL.
- Compatibilidad con Supabase.
- Facilidad para sincronización futura.

---

# Futuras Ampliaciones

El modelo fue preparado para incorporar:

- gestión de usuarios;
- control de stock;
- proveedores;
- inventario;
- notificaciones;
- agenda de producción;
- calendario;
- proyectos complejos;
- cotizaciones;
- inteligencia artificial para predicción de ventas.

Estas funcionalidades podrán agregarse sin modificar la estructura principal de la base de datos.