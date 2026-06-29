# Módulo Finanzas

| Proyecto | I3D Business Intelligence |
| -------- | ------------------------- |
| Módulo   | Finanzas                  |
| Sprint   | 2                         |
| Estado   | En desarrollo             |

# Objetivo

Administrar todos los movimientos económicos de JAM Studio para obtener información financiera precisa y alimentar el Dashboard de Business Intelligence.

---

# Entidad: MovimientoFinanciero

Representa cualquier ingreso o egreso registrado por la empresa.

Tipos:

* Venta
* Pago parcial
* Pago total
* Egreso
* Compra de insumos
* Financiamiento
* Reintegro

---

# Entidad: Financiamiento

Permite registrar inversiones recibidas.

Deberá almacenar:

* monto;
* origen;
* destino;
* fecha;
* reintegros realizados;
* saldo pendiente.

---

# Entidad: CompraInsumo

Representa una compra realizada para abastecer producción.

---

# Objetivos del módulo

Permitir conocer:

* flujo de caja;
* ingresos;
* egresos;
* ganancias;
* costos;
* margen de rentabilidad;
* evolución mensual.

Toda la información será utilizada por el Dashboard Ejecutivo.
