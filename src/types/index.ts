export type Soda = Readonly<{
    id: number,
    marca: string,
    sabor: string,
    descripcion: string,
    familia: Familia,
    tiendas?: Tienda[]
}>;

export type Familia = Readonly<{
    id: number,
    nombre: string
}>;

export type Tienda = Readonly <{
    id: number,
    nombre: string,
    sodas?: Soda[]
}>;

export type RestButtons = Readonly <{
    show: boolean,
    edit: boolean,
    delete: boolean
}>