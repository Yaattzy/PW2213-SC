<template>
  <div>
    <h1>Agregar</h1>
    <form @submit.prevent="guardarPersona">
      <Input
        v-model="persona.nombre"
        id="nombre"
        class="mb-2"
        titulo="Nombre"
        :maxlength="50"
        placeholder="Ingrese un nombre"
        :error="erroresValidacion && !validacionNombre"
        mensajeError="El nombre es obligatorio"
      />
      <Input
        v-model="persona.direccion"
        id="direccion"
        class="mb-2"
        titulo="Dirección"
        :maxlength="50"
        placeholder="Ingrese una dirección"
      />
      <Input
        v-model="persona.telefono"
        id="telefono"
        class="mb-2"
        titulo="Teléfono"
        :maxlength="50"
        placeholder="Ingrese un teléfono"
      />
      <b-button type="submit" variant="success">Guardar</b-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../components/Input.vue";
export default {
  name: "Agregar",
  components: {
    Input,
  },
  data() {
    return {
      persona: {
        nombre: "",
        direccion: "",
        telefono: "",
      },
      erroresValidacion: false,
    };
  },
  computed: {
    validacionNombre() {
      return (
        this.persona.nombre !== undefined && this.persona.nombre.trim() !== ""
      );
    },
  },
  methods: {
    ...mapActions(["crearPersona"]),
    guardarPersona() {
      if (this.validacionNombre) {
        this.erroresValidacion = false;
        this.crearPersona({
          params: this.persona,
          onComplete: (response) => {
            // Si todo salio bien
            this.$notify({
              title: response.data.mensaje,
              type: 'success'
            });
            this.$router.push({
              name: "Home",
            });
          },
          onError: (error) => {
            this.$notify({
              title: error.response.data.mensaje,
              type: 'error'
            });
          },
        });
      } else {
        this.erroresValidacion = true;
      }
    },
  },
};
</script>

<style></style>
