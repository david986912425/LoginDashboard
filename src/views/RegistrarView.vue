<template>
    <div>
      <div class="background">
          <div class="shape"></div>
          <div class="shape"></div>
      </div>
      <form method="#" @submit.prevent="registrar">
          <h3>Login Here</h3>
  
          <input type="text" placeholder="Usuario" id="username" v-model="email">
  
          <input type="password" placeholder="Contraseña" id="password" v-model="password">

          <input type="password" placeholder="Repita Contraseña" id="repeat-password" v-model="repeatpassword">

          <label class="error">{{ errors }}</label>
          <button>Registrar</button>
          <button type="submit" class="registar">
            <router-link to="/" class="log-in" >Iniciar Sesion</router-link>
            <router-view/>
          </button>
      </form>
      
    </div>
    
  </template>
  
  <script>
  import firebase from '../firebase/firebase';
  //import { onMounted } from 'vue';
  //import {auth} from '../firebase/firebase';
  import { validateEmail } from '../firebase/validations';
  export default {
    name: 'RegistrarView',
    
    data(){
        return{

            email:'',
            password:'',
            repeatpassword:'',
            errors:'',
        }
    },
    
    methods:{

        registrar(){
            this.errors = ''
            if (!this.email && !this.password && !this.repeatpassword) {
            this.errors ="Ingrese todos los caracteres"
            } else if (!validateEmail(this.email)) {
            this.errors ="Ingrese un email correcto"
            } else if (this.password !== this.repeatpassword) {
            this.errors ="No coinciden las contraseñas" 
            } else if (this.password.length < 6) {
            this.errors ="La contraseña muy corta"
            }else{
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .catch(e => {
                    this.errors = console.log(e)
                })
            
           }
        }
        
    }
  }
  </script>
  
  <style>
  *:before,
  *:after{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  body{
      background-color: #080710;
  }
  .background{
      width: 430px;
      height: 520px;
      position: absolute;
      transform: translate(-50%,-50%);
      left: 50%;
      top: 50%;
  }
  .background .shape{
      height: 200px;
      width: 200px;
      position: absolute;
      border-radius: 50%;
  }
  .shape:first-child{
      background: linear-gradient(
          #1845ad,
          #23a2f6
      );
      left: -80px;
      top: -80px;
  }
  .shape:last-child{
      background: linear-gradient(
          to right,
          #ff512f,
          #f09819
      );
      right: -30px;
      bottom: -80px;
  }
  form{
      height: 520px;
      width: 400px;
      background-color: rgba(255,255,255,0.13);
      position: absolute;
      transform: translate(-50%,-50%);
      top: 50%;
      left: 50%;
      border-radius: 10px;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255,255,255,0.1);
      box-shadow: 0 0 40px rgba(8,7,16,0.6);
      padding: 50px 35px;
  }
  form *{
      font-family: 'Poppins',sans-serif;
      color: #ffffff;
      letter-spacing: 0.5px;
      outline: none;
      border: none;
  }
  form h3{
      font-size: 32px;
      font-weight: 500;
      line-height: 42px;
      text-align: center;
  }
  label{
      display: block;
      margin-top: 30px;
      font-size: 16px;
      font-weight: 500;
  }
  input{
      display: block;
      height: 50px;
      width: 100%;
      background-color: rgba(255,255,255,0.07);
      border-radius: 3px;
      padding: 0 10px;
      margin-top: 8px;
      font-size: 14px;
      font-weight: 300;
  }
  ::placeholder{
      color: #e5e5e5;
  }
  button{

      margin-top: 20px;
      color: #080710;
      width: 100%;
      background-color: #ffffff;
      padding: 15px 0;
      font-size: 18px;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
  }
  .registar{
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .registar div{
    background: red;
    width: 150px;
    border-radius: 3px;
    padding: 5px 10px 10px 5px;
    background-color: rgba(255,255,255,0.27);
    color: #eaf0fb;
    text-align: center;
  }
  .registar div:hover{
    background-color: rgba(255,255,255,0.47);
  }
  .registar .fb{
    margin-left: 25px;
  }
  .registar i{
    margin-right: 4px;
  }
  .log-in {
    color: #080710;
    text-decoration:none;
}
.error{
    color: red;
}
  </style>
  