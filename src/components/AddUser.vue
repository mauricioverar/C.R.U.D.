<template>
  <el-form inline :model="user" class="demo-form-inline" :style="[{background: '#E1C13D'},{paddingTop: '20px'}]">
    <el-form-item label="Nombre">
      <el-input v-model="user.nombre" placeholder="Nombre"></el-input>
    </el-form-item>
    <el-form-item label="Correo">
      <el-input v-model="user.correo" placeholder="Correo"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        v-if="edit"
        :loading="loading"
        @click="edituser"
        >Editar</el-button
      >
      <el-button type="primary" v-else :loading="loading" @click="adduser"
        >Agregar</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
/* eslint-disable */
//import Firebase from "firebase";
import { mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    adduser() {
      let user = {
        nombre: this.user.nombre,
        correo: this.user.correo,
      };
      this.loading = true;
      axios
        .post(
          "https://us-central1-crud-f43c9.cloudfunctions.net/test/user",
          this.user
        )
        .then((accept) => {
            console.log('accept' ,accept)//
          this.loading = false;
          this.$store.dispatch("getusers");
        });
    },
    edituser() {
      let user = {
        nombre: this.user.nombre,
        correo: this.user.correo,
      };

      this.loading = true;
      axios
        .put(
          `https://us-central1-crud-f43c9.cloudfunctions.net/test/user/${this.user.id}`,
          user
        )
        .then((accept) => {
            console.log('accept' ,accept)
            console.log('this.loading' ,this.loading)
          this.loading = false;
          this.$store.dispatch("getusers");
        });
    },
  },
  computed: {
    ...mapState(["user", "edit"]),
  },
};
</script>
