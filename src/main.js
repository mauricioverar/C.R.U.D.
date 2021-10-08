// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/es'
Vue.use(Vuex)
Vue.use(Element, { locale })
/* eslint-disable */
// Vue.use(axios)
const store = new Vuex.Store({
  state: {
    user: {
      nombre: 'karen',
      correo: 'karen@gmail.com',
      id: ''
    },
      edit: false, // para el boton editar us
      users: [], // users
      loading: false // para cargar una tabla
  },
  mutations: {
    getusers(state, users) { // getUsers var
        state.users = users; // state.users = users
        state.loading = false; // apagar circulo
      },
      loadingTable(state) {
        state.loading = true;
      }
  },
  actions: {
    getusers (context) { // getUsers llama a mutacion
      context.commit('loadingTable')
      // axios peticion asyncrona consultas
      axios.get('https://us-central1-crud-f43c9.cloudfunctions.net/test/users')// reemplazar con url-base del deploy
        .then((accept) => { // exito
          let data = accept.data
          context.commit('getusers', data)
        })
    }
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})