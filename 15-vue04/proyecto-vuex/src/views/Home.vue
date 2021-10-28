<template>
  <div class="home">
   <h4>{{ $store.state.total }}</h4>
   <h3 :style="colorTotal">{{total}}</h3>
  </div>
</template>

<script>
import {mapState} from "vuex" 

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      prop1: ""
    }
  },
  computed: {
    ...mapState(["total"]),
    colorTotal(){
      return this.total >= 100 ? {'color': 'green'} : {'color': 'red'};
    }
  }
}
</script>
