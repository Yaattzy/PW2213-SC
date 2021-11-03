<template>
  <button @click="accionDisminuir(cantidad)">Botón disminuir</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'BotonDisminuir',
    props: {
        cantidad: {
            type: Number,
            default: 2
        }
    },
    methods: {
        ...mapActions(["accionDisminuir"])
    }

}
</script>

<style>

</style>