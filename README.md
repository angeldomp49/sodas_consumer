
const state = {
    sodas: [
        {
            id: 1,
            marca: "fanta",
            sabor: "mandariona",
            descripcion: "adsjkldf"
        },
        {
            id: 1,
            marca: "fanta",
            sabor: "mandariona",
            descripcion: "adsjkldf"
        },
        {
            id: 1,
            marca: "fanta",
            sabor: "mandariona",
            descripcion: "adsjkldf"
        }
    ]
};

vamos a crear una intefaz gráfica para una tabla que consume el api de sodas.

Para esto hacemos un estado global de prueba ya que así evitamos tener que resolver los 
errores del back-end y del front-end al mismo tiempo.

Después vamos a crear las vistas

    tabla (index)
    ficha (show)
    formulario (edit)
    formulario (create)
    boton de borrar (delete)

creamos las rutas correspondientes.