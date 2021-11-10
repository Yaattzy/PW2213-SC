<template>
  <div id="agregar">
    <h1>Agregar</h1>

    <form @submit.prevent="guardar">
      <div class="mb-3">
        <label for="Nombre" class="form-label">Nombre :c</label>
        <input
          v-model.trim="todo.nombre"
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
          v-model="todo.tipo"
          type="checkbox"
          id="inlineCheckbox1"
          value="Hogar"
        />
        <label class="form-check-label" for="inlineCheckbox1">Hogar</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="todo.tipo"
          type="checkbox"
          id="inlineCheckbox2"
          value="Oficina"
        />
        <label class="form-check-label" for="inlineCheckbox2">Oficina</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="todo.tipo"
          type="checkbox"
          id="inlineCheckbox3"
          value="Escuela"
        />
        <label class="form-check-label" for="inlineCheckbox3">Escuela</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="todo.tipo"
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
          v-model="todo.prioridad"
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
          v-model="todo.prioridad"
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
          v-model="todo.prioridad"
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
          v-model.number="todo.horas"
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
import { nanoid } from 'nanoid'
import {mapActions} from 'vuex'
export default {
  name: "Agregar",
  data() {
    return {
      todo: {
        id: "",
        nombre: "",
        tipo: [],
        prioridad: "",
        horas: 0
      },
    };
  },
  methods: {
    ...mapActions(['agregarTodo']),
    guardar() {
      console.log("Guardar todo", this.todo);

      if(this.todo.nombre.trim() === ""){
        console.log("Campo vacío");
        // Escribe tu validación aquí
        return;
      }

      this.todo.id = nanoid(4);
      this.agregarTodo(this.todo);

      this.$router.push({name: "Home"});
     
    },
  },
  computed: {
      estadoBoton(){
        return this.todo.nombre === "" ? true : false;
      }
  }
};
</script>

<style>
#agregar {
  text-align: left;
}
</style>
