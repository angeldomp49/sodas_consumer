
export const proxy = {
    soda: {
        all: () => {
            return [
                {
                    id: 1,
                    marca: "fanta",
                    sabor: "mandarina",
                    descripcion: "rica fanta",
                    familia: {
                        id: 1,
                        nombre: "coca-cola"
                    }
                },
                {
                    id: 2,
                    marca: "mirinda",
                    sabor: "mandarina",
                    descripcion: "rica mirinda",
                    familia: {
                        id: 2,
                        nombre: "pepsi"
                    }
                }
            ];
        },
        show: (id: any) => {
            return {
                id: id,
                marca: "custom delaware punch",
                sabor: "uva",
                descripcion: "moradita",
                familia: {
                    id: 2,
                    nombre: "pepsi"
                }
            };
        }
    },
    familia: {
        all: () => {
            return [
                {
                    id: 1,
                    nombre: "coca-cola"
                },
                {
                    id: 2,
                    nombre: "pepsi"
                }
            ];
        },
        show: (id: any) => {

        }
    }
};

export default proxy;