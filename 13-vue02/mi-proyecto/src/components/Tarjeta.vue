<template>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">{{titulo}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{subtitulo}}</h6>
    <p class="card-text">{{texto}}</p>
  </div>
</div>
</template>

<script>
export default {
    name: 'Tarjeta',
    props: {
        titulo: String,
        subtitulo: [String, Number],
        texto: String
    }
}
</script>

<style>

</style>