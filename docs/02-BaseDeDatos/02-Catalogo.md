# Módulo Catálogo

| Proyecto | I3D Business Intelligence |
| -------- | ------------------------- |
| Módulo   | Catálogo                  |
| Sprint   | 2                         |
| Estado   | En desarrollo             |

# Objetivo

Administrar todos los productos comercializados por JAM Studio, sus categorías, colecciones y variantes.

---

# Entidad: Categoría

Agrupa productos según la línea de negocio.

Ejemplos:

* Diseño de Soluciones
* Deco e Iluminación
* Cultura y Ferias
* Funcionales
* Arte y Escultura
* Productos Masivos
* Distribución de Insumos
* Ingresos Internos

Una categoría podrá contener muchos productos.

---

# Entidad: Colección

Agrupa productos relacionados por una temática.

Ejemplos:

* Pokémon
* Marvel
* Navidad
* Empresas
* Anime

Una colección podrá contener muchos productos.

Un producto podrá pertenecer a varias colecciones.

---

# Entidad: Producto

Representa un producto base.

Ejemplos:

* Lámpara
* Llavero
* Soporte Notebook
* Chop Cervecero

No almacena personalizaciones del cliente.

---

# Entidad: Variante

Representa una versión específica del producto.

Podrá modificar:

* costo;
* precio;
* tiempo estimado;
* materiales.

Ejemplo:

Producto:

Lámpara

Variantes:

* Hexagonal
* Circular
* Rectangular
* Modelo A
* Modelo B

---

# Relaciones

Categoría ←→ Producto

Colección ←→ Producto

Producto ←→ Variante
