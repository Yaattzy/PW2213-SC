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
        :error="false"
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
    };
  },
  methods: {
    guardarPersona() {
      alert("Hola");
    }
  }
};
</script>

<style></style>
