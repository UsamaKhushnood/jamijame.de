<template>
  <div style="box-shadow: -6px -4px 17px #908989">
    <div class="themeNav">
      <router-link class="logo" to="/">
        <img href="#dsfasdf" src="@/assets/logo.png" alt="Logo" width="40px" />
      </router-link>
      <div class="userLogin">
        <button id="show-modal" @click="LoginModal = true">
          <img src="@/assets/images/user.png" alt="Login" />
        </button>
        <bs-modal
          v-if="LoginModal"
          cstmWidth="800px"
          @close="LoginModal = false"
        >
          <div slot="body">
            <Login></Login>
          </div>
        </bs-modal>
      </div>
    </div>
  </div>
</template>

<script>
import BsModal from "./BsModal";
import Login from "./Login";
export default {
  name: "ThemeNavigation",
  components: {
    BsModal,
    Login,
  },
  data() {
    return {
      LoginModal: false,
    };
  },
};
</script>
<style scoped>
.themeNav {
  display: flex;
  min-height: 60px;
  background: #fff;
  padding: 5px 30px;
  align-items: center;
}
.userLogin {
  margin-left: auto;
}
.userLogin button {
  background: none;
  border: 0;
}
</style>