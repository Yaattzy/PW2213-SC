<template>
  <div class="home">
    <h1>Personas</h1>
    <b-button to="/agregar" variant="outline-primary">Agregar</b-button>
    <Table :items="personas" :fields="campos" :busy="loading">
      <template slot="actions" slot-scope="{ item }">
        <b-button
          @click="onEditar(item)"
          variant="primary"
          size="sm"
          class="me-2"
          >Editar</b-button
        >
        <b-button @click="onEliminar(item)" variant="danger" size="sm"
          >Eliminar</b-button
        >
      </template>
    </Table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Table from "../components/Table.vue";
export default {
  name: "Home",
  components: {
    Table,
  },
  data() {
    return {
      campos: [
        { key: "id", label: "Clave" },
        "nombre",
        {
          key: "direccion",
          label: "Dirección",
          formatter: (value) => {
            return value || "Sin datos";
          },
        },
        {
          key: "telefono",
          label: "Teléfono",
          formatter: (value) => {
            return value || "Sin datos";
          },
        },
        { key: "actions", label: "Acciones" },
      ],
    };
  },
  computed: {
    ...mapState(["personas", "loading"]),
  },
  methods: {
    ...mapActions(["setPersonas", "eliminarPersona"]),
    onEliminar(data) {
      
      this.$bvModal.msgBoxConfirm('Esta opción no se puede deshacer.', {
          title: 'Eliminar persona',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Eliminar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value) {
              this.eliminarPersona({
                id: data.item.id,
                onComplete: (response) => {
                  this.$notify({
                    type: 'success',
                    title: response.data.mensaje
                  });
                  setTimeout(() => this.setPersonas(), 1000);
                }
              })
            }
          })
          .catch(err => {
            // An error occurred
          })

    },
    onEditar(data) {
      this.$router.push({
        name: 'Editar',
        params: {
          id: data.item.id
        }
      });
    },
  },
  mounted() {
    this.setPersonas();
  },
};
</script>
