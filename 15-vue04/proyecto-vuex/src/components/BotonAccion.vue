<template>
  <button @click="accionBoton({accion: accion, numero: 4})">{{textoBoton}}</button>
</template>

<script>
import { mapActions} from 'vuex'
export default {
    name: 'BotonAccion',
    props: {
        accion: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        ...mapActions(["accionBoton"])
    },
    computed: {
        textoBoton() {
            return this.accion ? "Aumentar" : "Disminuir"
        }
    }
}
</script>

<style>

</style>