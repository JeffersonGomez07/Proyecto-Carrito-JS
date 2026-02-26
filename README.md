# Proyecto Carrito de Compras de Cursos

## Descripción

Este proyecto es una aplicación web simple que simula un carrito de compras para cursos en línea. Permite a los usuarios agregar cursos al carrito, visualizar los elementos seleccionados, aumentar la cantidad de un curso repetido, eliminar cursos individuales y vaciar completamente el carrito.

El objetivo principal del proyecto es practicar manipulación del DOM, eventos en JavaScript y estructuras de datos en el lado del cliente sin uso de frameworks.

## Tecnologías utilizadas

* HTML5
* CSS
* JavaScript
* Skeleton CSS (framework ligero de estilos)
* Normalize.css

## Funcionalidades

* Mostrar lista de cursos disponibles.
* Agregar cursos al carrito.
* Evitar duplicados aumentando la cantidad del curso existente.
* Eliminar cursos del carrito.
* Vaciar completamente el carrito.
* Renderizar dinámicamente el contenido del carrito en una tabla.

## Estructura del proyecto

```
proyecto-carrito/
│
├── index.html
├── css/
│   ├── normalize.css
│   ├── skeleton.css
│   └── custom.css
│
├── js/
│   └── app.js
│
└── img/
    └── (imágenes de cursos y recursos)
```

## Lógica principal

El sistema utiliza un arreglo llamado `articulosCarrito` para almacenar los cursos seleccionados. Cada objeto contiene:

* imagen
* titulo
* precio
* id
* cantidad

Cuando el usuario agrega un curso:

1. Se leen los datos desde el DOM.
2. Se verifica si el curso ya existe en el carrito.
3. Si existe, se incrementa la cantidad.
4. Si no existe, se agrega al arreglo.
5. Se renderiza nuevamente el HTML del carrito.

## Eventos implementados

* Click en botón agregar carrito.
* Click en botón eliminar curso.
* Click en botón vaciar carrito.
* 
## Autor

Jefferson Gomez


Este proyecto es de uso educativo y libre para modificación.
