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
        Guardar
      </v-btn>
      
    </v-card-actions>
  </template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "AddComponents",
    data(){
        return {
            entry: [],
        }

    },
    computed:{
      ...mapGetters('journal', ['getEntryById']),
    },
    methods: {
    ...mapActions('journal',['createEntry']),
    loadEntry(){
        //let message = this.editarEmpresa;
        let entry = this.entry
        console.log(entry)
        
      },
    async saveEntry(){
        console.log(this.entry)
        this.createEntry(this.entry)
    }
    },
    created() {
      this.loadEntry()
    }
    
}

</script>

<style>

</style>