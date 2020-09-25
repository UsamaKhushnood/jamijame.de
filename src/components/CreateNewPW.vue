<template>
  <div>
    <div class="container-fluid" :style="{ height: windowHeight }">
      <div class="row">
        <div class="col-md-6 col-md-offset-3" style="margin-top: 100px">
          <div class="create-pass">
            <center>
              <img
                src="@/assets/images/logo/create-pass-logo.png"
                alt=""
                class="create-pass-logo"
                width="250px"
              />
            </center>
            <form style="margin-top:50px;">
              <password
                placeholder="New Password"
                v-model="password"
                :toggle="true"
              />
              <div class="form-group"></div>
              <div class="form-group">
                <password
                  placeholder="Confirm Password"
                  v-model="password"
                  :toggle="true"
                />
              </div>
              <div class="form-group">
                <a href="#" class="btn btn-create-pass">Create Password</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Password from "vue-password-strength-meter";
export default {
  name: "CreateNewPW",
  components: { Password },
  data() {
    return {
      password: "",
    };
  },
  computed: {
    windowHeight: function () {
      return `${window.innerHeight}px  !important`;
    },
  },
};
</script>
<style scoped>
.container-fluid {
  background: url("../assets/images/create-pass-bg.jpg");
}
.row {
  justify-content: center;
}

.Password {
  max-width: 100%;
}

.Password__strength-meter::after, .Password__strength-meter::before {
  border-color: red !important;
}
a.btn.btn-create-pass {
    text-align: center;
    color: #fff;
    width: 100%;
    border: 2px solid #fff;
    height: 50px;
}

</style>