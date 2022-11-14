<template>
    <v-navigation-drawer
    color="#000000"
    >
      <v-card color="#151515" class="card">
          <v-list  flat dark>
              <v-list-item-group v-model="selectedItem">
                  <v-list-item
                  v-for="({ icon }, i) in items"
                  :key="i"
                  active-class="border"
                  v-slot="{ active }"
                  :ripple="false"
                  link
                  v-on:click="ChangeView(i)"
                  >
                      <v-list-item-content >
                      <v-icon :color="active ? 'white' : 'grey lighten-1'">{{ icon }}</v-icon>
                      </v-list-item-content>
                  </v-list-item>
              </v-list-item-group>
          </v-list>
      </v-card>
        
      </v-navigation-drawer>
      <InicioComponents v-show ="indice==0"/>
      <ShopeComponents v-show="indice==1"/>
      <ConfigurationComponents v-show="indice==2"/>

</template>

<script>
import InicioComponents from '@/components/Inicio.vue';
import ShopeComponents from '@/components/Shope.vue';
import ConfigurationComponents from '@/components/Configuration.vue';
export default {
name: "NavigatorComponents",
data () {
      return {
        selectedItem : 0,
        indice : 0,
        items: [
            { icon: "mdi-home-outline"},
            { icon: "mdi-cart-outline"},
            { icon: "mdi-store-outline"},
            { icon: "mdi-logout" },
            { icon: "mdi-apps"},
        ],
      }
    },
components:{
  InicioComponents,
  ShopeComponents,
  ConfigurationComponents,
},
methods:{
  ChangeView(indice) {
      this.indice = indice;
      console.log(indice);
    }
}
}
</script>

<style>
.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
}
.border {
  margin: 0px 8px;
  background: #6f0dff;
  border-radius: 15px;
  text-decoration: none;
  width: 60px;
  height: 60px;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.v-list-item__content {
  padding: 20px 0 !important;
}
.image {
  border: 1px solid white;
}
</style>