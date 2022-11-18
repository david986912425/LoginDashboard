<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>

  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
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
      </v-list>
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
        drawer: false,
        selectedItem : 0,
        indice : 0,
        items: [
            { icon: "mdi-home-outline",title: "Inicio"},
            { icon: "mdi-cart-outline",title: "Inicio"},
            { icon: "mdi-store-outline",title: "Inicio"},
            { icon: "mdi-logout" },
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

