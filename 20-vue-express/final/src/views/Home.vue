<template>
  <div class="home">
    <Table :items="personas" :fields="campos" />
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
      ],
    };
  },
  computed: {
    ...mapState(["personas"]),
  },
  methods: {
    ...mapActions(["setPersonas"]),
  },
  created() {
    this.setPersonas();
  },
};
</script>
