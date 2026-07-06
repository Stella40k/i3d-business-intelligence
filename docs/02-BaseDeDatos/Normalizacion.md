# Normalización de la Base de Datos

## Proyecto

**JAM Studio Business Intelligence**

Versión: 1.0

---

# Objetivo

El modelo de datos fue diseñado siguiendo las reglas de normalización para reducir redundancia, evitar inconsistencias y garantizar la integridad de la información.

El objetivo principal es que la información comercial, financiera y productiva pueda ser utilizada para generar estadísticas confiables para la toma de decisiones.

---

# Primera Forma Normal (1FN)

La Primera Forma Normal establece que:

- Cada tabla posee una clave primaria.
- Cada atributo almacena un único valor.
- No existen grupos repetitivos.
- Cada fila representa un único registro.

## Aplicación en el proyecto

Todas las entidades poseen un identificador único (UUID) como clave primaria.

Ejemplos:

- clientes
- pedidos
- productos
- variantes
- compras
- financiamientos

Los datos múltiples fueron separados mediante tablas intermedias.

Ejemplo:

Producto ↔ Categoría

se resuelve mediante

producto_categoria

evitando almacenar múltiples categorías en un mismo campo.

---

# Segunda Forma Normal (2FN)

La Segunda Forma Normal establece que todos los atributos deben depender completamente de la clave primaria.

## Aplicación

Las tablas que representan relaciones muchos a muchos solamente almacenan las claves correspondientes.

Ejemplo

producto_categoria

contiene únicamente:

- producto_id
- categoria_id

No almacena información adicional que dependa únicamente de una de las claves.

Lo mismo ocurre con:

- producto_coleccion

---

# Tercera Forma Normal (3FN)

La Tercera Forma Normal establece que no deben existir dependencias transitivas.

Es decir, un atributo no debe depender de otro atributo que no sea la clave primaria.

## Aplicación

Se separaron en entidades independientes:

- estados_pago
- estados_pedido
- estados_produccion
- canales_contacto
- categorias
- colecciones

De esta forma se evita almacenar texto repetido en múltiples registros.

Ejemplo:

Incorrecto

Pedido

Estado = "Pagado"

Estado = "Pagado"

Estado = "Pagado"

Correcto

estado_pago_id

referenciando

estados_pago

---

# Relaciones Muchos a Muchos

Las relaciones N:M fueron resueltas mediante tablas intermedias.

Ejemplos

Producto ↔ Categoría

↓

producto_categoria

Producto ↔ Colección

↓

producto_coleccion

Esto evita duplicación de registros.

---

# Integridad Referencial

Todas las relaciones entre entidades utilizan claves foráneas.

Ejemplos

Pedido → Cliente

DetallePedido → Variante

OrdenProduccion → DetallePedido

Compra → DetalleCompra

Transaccion → Pedido

Esto garantiza la consistencia de los datos.

---

# Información Histórica

El modelo conserva la información histórica necesaria para Business Intelligence.

Ejemplos

precio_unitario

costo_unitario

subtotal

se almacenan en detalle_pedido.

Esto permite que futuras modificaciones de precios no alteren estadísticas históricas.

---

# Escalabilidad

El modelo fue diseñado para admitir el crecimiento de JAM Studio sin modificar la estructura principal.

Permite incorporar:

- nuevos productos
- nuevas categorías
- nuevas colecciones
- nuevos canales de contacto
- nuevos estados
- nuevos financiamientos

sin afectar la integridad de los datos existentes.

---

# Beneficios para Business Intelligence

La estructura permite calcular indicadores como:

- Balance mensual
- Balance anual
- Rentabilidad
- Ganancia por producto
- Ganancia por categoría
- Producto más vendido
- Categoría más vendida
- Tiempo promedio de producción
- Producción en proceso
- Clientes recurrentes
- Canales con mayor conversión
- Evolución de ingresos
- Evolución de egresos
- Retorno de financiamientos

---

# Conclusión

El modelo de datos cumple con las reglas de Primera, Segunda y Tercera Forma Normal.

La estructura fue diseñada para garantizar consistencia, minimizar redundancia y facilitar el desarrollo de consultas analíticas utilizadas por el sistema de Business Intelligence de JAM Studio.
