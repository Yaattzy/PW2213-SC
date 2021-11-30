<template>
  <div>
    <h1>Editar</h1>
    <form @submit.prevent="guardarPersona">
      <Input
        :value="persona.id"
        id="clave"
        class="mb-2"
        titulo="Clave"
        :maxlength="50"
        disabled
        placeholder="Ingrese una Clave"
      />
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
import Vue from 'vue'
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
        id: null,
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
    ...mapActions(["obtenerPersona", "editarPersona"]),
    guardarPersona() {
      if (this.validacionNombre) {
        this.erroresValidacion = false;

        this.editarPersona({
          id: this.persona.id,
          body: this.persona,
          onComplete: (response) => {
              this.$notify({
                type: 'success',
                title: response.data.mensaje
              });
              this.$router.push({
                name: 'Home'
              });
          },
          onError: (error) => {
            this.$notify({
              type: 'error',
              title: error.response.data.mensaje
            });
          }
        })

      } else {
        this.erroresValidacion = true;
      }
    },
  },
  created() {
      this.obtenerPersona({
          id: this.$route.params.id,
          onComplete: (response) => {
            Vue.set(this, 'persona', response.data.data);
          }
      })
  }
};
</script>
