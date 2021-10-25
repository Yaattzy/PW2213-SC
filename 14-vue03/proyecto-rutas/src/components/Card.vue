<template>
  <div class="card" style="width: 18rem;">
  <img :src="imagen" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{titulo}}</h5>
    <p class="card-text">{{descripcion}}</p>
    <router-link :to="`/objeto/detalle/${id}`" class="btn btn-primary">Ver más...</router-link>
  </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        id: [String, Number],
        titulo: String,
        imagen: String,
        descripcion: String
    }
}
</script>

<style>

</style>