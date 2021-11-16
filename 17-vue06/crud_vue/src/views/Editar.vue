<template>
  <div>
      <h1>Editar</h1>
      <form @submit.prevent="guardar">
      <div class="mb-3">
        <label for="Nombre" class="form-label">Nombre :c</label>
        <input
          v-model.trim="t.nombre"
          type="text"
          class="form-control"
          id="Nombre"
          placeholder="Ingrese un nombre"
        />
      </div>
      <hr />
      <div>Tipo</div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="t.tipo"
          type="checkbox"
          id="inlineCheckbox1"
          value="Hogar"
        />
        <label class="form-check-label" for="inlineCheckbox1">Hogar</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="t.tipo"
          type="checkbox"
          id="inlineCheckbox2"
          value="Oficina"
        />
        <label class="form-check-label" for="inlineCheckbox2">Oficina</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="t.tipo"
          type="checkbox"
          id="inlineCheckbox3"
          value="Escuela"
        />
        <label class="form-check-label" for="inlineCheckbox3">Escuela</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="t.tipo"
          type="checkbox"
          id="inlineCheckbox4"
          value="Otro"
        />
        <label class="form-check-label" for="inlineCheckbox4">Otro</label>
      </div>
      <hr />
      <div>Prioridad</div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="t.prioridad"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="Baja"
        />
        <label class="form-check-label" for="inlineRadio1">Baja</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="t.prioridad"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="Media"
        />
        <label class="form-check-label" for="inlineRadio2">Media</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="t.prioridad"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="Alta"
        />
        <label class="form-check-label" for="inlineRadio3">Alta</label>
      </div>
      <hr>
       <div class="mb-3">
        <label for="horas" class="form-label">Horas requeridas :c</label>
        <input
          v-model.number="t.horas"
          type="number"
          class="form-control"
          id="horas"
          placeholder="Ingrese las horas requeridas"
        />
      </div>
      <input class="btn btn-success" type="submit" value="Guardar" :disabled="estadoBoton">
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from "vuex";
export default {
    name: 'Editar',
     data() {
        return {
        t: {
            id: "",
            nombre: "",
            tipo: [],
            prioridad: "",
            horas: 0
        },
    };
  },
  methods: {
    ...mapActions(['setTodo', 'updateTodo']),
    guardar() {
      this.updateTodo(this.t);
      this.$router.push({name: "Home"});
    },
  },
  computed: {
      ...mapState(['todo']),
      estadoBoton(){
        return this.t.nombre === "" ? true : false;
      }
  },
  created() {
      this.setTodo(this.$route.params.id);
  },
  beforeMount() {
      Vue.set(this, 't', this.todo);
  }
}
</script>

<style>

</style>