<template>
  <div>
      <h1>Detalle</h1>
     <h4>{{post.title}}</h4>
     <p>{{post.body}}</p>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'DetallePost',
    computed: {
      ...mapState(['post'])
    },
    methods: {
      ...mapActions(['getPost'])
    },
    created() {
      this.getPost(this.$route.params.id)
    }
}
</script>

<style>

</style>