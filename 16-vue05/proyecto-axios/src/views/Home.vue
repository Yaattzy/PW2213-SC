<template>
  <div class="home"> 
    <h1>Mis Posts</h1>
    <div v-if="loading">Cargando...</div>
    <div v-else v-for="p in posts" :key="p.id" class="alert alert-secondary" role="alert">
      <h6>{{p.title}}</h6>
      <router-link :to="`/post/${p.id}`">Ver más...</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["getPosts"]),
  },
  computed: {
    ...mapState(["posts", "loading"]),
  },
  created() {
  },
  mounted() {
    this.getPosts();
  }
};
</script>
