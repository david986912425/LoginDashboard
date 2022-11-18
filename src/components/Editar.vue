<template>
  <v-card-title class="text-h5 grey lighten-2">Editar</v-card-title>
  <v-card-text>
    <label>RUC</label>
    <input type="text" class="input"
    v-model="entry[0]"
    />
    <label>NOMBRE</label>
    <input type="text" class="input"
    v-model="entry[1]"
    />
    <label>FECHA</label>
    <input type="text" class="input"
    v-model="entry[2]"
    />
    <label>RESOLUCION</label>
    <input type="text" class="input"
    v-model="entry[3]"
    />

  </v-card-text>

  <v-divider></v-divider>

  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn
      color="primary"
      text
      @click="saveEntry"
    >
      Editar
    </v-btn>
    
  </v-card-actions>
</template>

<script>
//import { createDOMCompilerError } from '@vue/compiler-dom';
import { mapGetters , mapActions } from 'vuex';
export default {
    name: 'EditarComponents',
    props: ['editarEmpresa'],
    computed:{
      ...mapGetters('journal', ['getEntryById']),
    },
    data(){
      return {
        entry: null
      }
    },
    methods: {
      ...mapActions('journal', ['updateEntry']),
      loadEntry(){
        //let message = this.editarEmpresa;
        const entry = this.getEntryById(this.editarEmpresa)
        this.entry = entry
        console.log(this.entry)
        
      },
      async saveEntry(){
        
        this.updateEntry(this.entry)
      }
    },
    created() {
      this.loadEntry()
    }
}

</script>

<style>
.input{
  width: 100%;
}
</style>