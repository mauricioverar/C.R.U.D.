<template>
  <el-container>
    <el-main>
      <AddUser></AddUser>
      <Users></Users>
    </el-main>
  </el-container>
</template>

<script>
/* eslint-disable */
import AddUser from "./AddUser";
import Users from "./Users";

export default {
  name: "Home",
  components: {
    AddUser,
    Users,
  },
};
</script>