//Instancia de vue

const app = Vue.createApp({
    data() {
        return {
            titulo: "Mi título página con vue",
            nuevaFruta: "",
            frutas: ["Manzana", "Uva"],
            frutas2: [
                {
                    nombre: "Manzana",
                    cantidad: 4
                },
                {
                    nombre: "Uva",
                    cantidad: 10
                }
            ]
        }
    },
    methods: {
        agregarFruta() {
            this.frutas.push(this.nuevaFruta);
            this.nuevaFruta = "";
        }
    }

});