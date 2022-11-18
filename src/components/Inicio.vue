<template>
  <div id="main-container">
    <div class="encabezado">
      <div>
        <v-btn icon>
          <label for="file" class="nav-link"><v-icon>mdi-file-excel</v-icon></label>
          <input type="file" hidden name="file" id="file" @change="importarExcel()"/>
        </v-btn>
        
      </div>
      <v-btn icon @:click="addEmpresa()">
        <v-icon >mdi-database-plus</v-icon>
      </v-btn>
    </div>
    

    <table>
      <thead>
        <tr>
        <td v-for=" item in headers" :key="item" >{{ item.text }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" item in getEntriesByTerm" :key="item">
        <td>{{ item[0] }}</td>
        <td class="text-xs-right">{{ item[1] }}</td>
        <td class="text-xs-right">{{ item[2] }}</td>
        <td class="text-xs-right">{{ item[3]}}</td>
        <td class="text-xs-right"><button @:click="editarEmpresa(item.id)">Editar </button>| <button @:click="deleteEmpresa(item.id)"> Borrar</button></td>
        </tr>
      </tbody>
    </table>

    <v-dialog
      v-model="dialogEditar"
      width="500"
    >
    <v-card><EditarComponents :editarEmpresa= "id"/></v-card>
    </v-dialog>

    <v-dialog
      v-model="addDialog"
      width="500"
    >
    <v-card><AddComponents :addEmpresa= "id"/></v-card>
    </v-dialog>
  </div>

  
  
    
</template>

<script>
import app from "@/firebase/firebase"
import readExcel from "read-excel-file"
import { mapGetters } from 'vuex'
import { mapActions } from "vuex"
import AddComponents from "@/components/AddDialog.vue"
import EditarComponents from "@/components/Editar.vue"



let db = app.database();
let websitesRef = db.ref('websites');

export default {
name: "InicioComponents",
firebase: {
  websites: websitesRef
},
components:{
  EditarComponents,
  AddComponents,
},
computed: {
  ...mapGetters('journal', ['getEntriesByTerm']),
  ...mapGetters('journal', ['getEntryById']),
  entriesByTerm() {
    const term = this.getEntriesByTerm( this.term )
    return term,
    console.log(term)
  }
},
data () {
  return {
    entry: null,
    id : '',
    addDialog: false,
    dialogEditar: false,
    headers: [
      {text: 'Ruc',value: 'ruc'},
      { text: 'Nombre', value: 'nombre' },
      { text: 'Fecha', value: 'fecha' },
      { text: 'Resolucion', value: 'resolucion' },
      { text: 'Opciones', value: 'opciones' },
    ],
  }
},
methods: {
  ...mapActions('journal',['loadEntries','deleteEntry']),
  importarExcel(){
    const input = document.getElementById("file");
    readExcel(input.files[0]).then((rows) => {
      for (var i = 0; i < rows.length; i++){
        var row = rows[i];
        websitesRef.push(row);
      }
      
      //websitesRef.push(rows);
      
    })
  },

  editarEmpresa(id){
    this.dialogEditar = true;
    this.id = id;
    console.log(this.id);
  },
  async deleteEmpresa(id){
        this.id = id;
        const entry = this.getEntryById(this.id)
        this.entry = entry
        await this.deleteEntry(this.entry.id)
  },
  addEmpresa(){
    this.addDialog = true;
    this.id = "-NH8tHvJ0o41h6itBeGs";
    console.log(this.id);
  }
  


},
created () {
    this.loadEntries();
},
}
</script>

<style scoped>
.encabezado {
  margin: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
body{
	background-color: #632432;
	font-family: Arial;
}

#main-container{
	margin: 10px auto;
	width: 1100px;
}
table{
  margin-top: 40px;
	background-color: white;
	text-align: left;
	border-collapse: collapse;
	width: 100%;
}
th, td{
	padding: 20px;
}
thead{
	background-color: #246355;
	border-bottom: solid 5px #0F362D;
	color: white;
}

tr:nth-child(even){
	background-color: #ddd;
}

tr:hover td{
	background-color: #369681;
	color: white;
}
</style>