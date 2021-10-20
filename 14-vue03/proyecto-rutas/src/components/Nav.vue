<template>
   <div id="nav" :style="`background: ${colors}`">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <input v-model="color" type="color"/>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            color: ""
        }
    },
    props: {
        colors: String
    }
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>