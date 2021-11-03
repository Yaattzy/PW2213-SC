<template>
  <div class="home">
   <h4>{{ $store.state.total }}</h4>
   <h3 :style="colorTotal">{{total}}</h3>
   <button @click="SET_TOTAL_AUM()">Mutación de aumentar</button>
   <br><br>
   <button @click="accionAumentar()">Accion de aumentar</button>
   <br><br>
   <button @click="accionDisminuir(3)">Acción de disminuir</button>
   <br><br>
   <BotonDisminuir :cantidad="5"/>
   <br><br>
   <BotonAccion :accion="true"/>
   <br><br>
   <BotonAccion :accion="false"/>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex" 
import BotonDisminuir from '../components/BotonDisminuir.vue'
import BotonAccion from '../components/BotonAccion.vue'

export default {
  name: 'Home',
  components: {
    BotonDisminuir,
    BotonAccion
  },
  data() {
    return {
      prop1: ""
    }
  },
  methods: {
    ...mapMutations(["SET_TOTAL_AUM"]),
    ...mapActions(["accionAumentar", "accionDisminuir"])
  },
  computed: {
    ...mapState(["total"]),
    colorTotal(){
      return this.total >= 100 ? {'color': 'green'} : {'color': 'red'};
    }
  }
}
</script>
