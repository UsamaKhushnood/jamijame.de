<template>
  <div>
    <i class="fas fa-user-circle" title="Signup" style="font-size:30px"></i>

    <div class="user_options-container" style="margin-top: 160px !important;">
      <div class="user_options-text">
        <div class="user_options-unregistered">
          <h2 class="user_unregistered-title">Don't have an account?</h2>
          <p
            class="user_unregistered-text"
          >Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
          <button class="user_unregistered-signup" id="signup-button">Sign up</button>
        </div>

        <div class="user_options-registered">
          <h2 class="user_registered-title">Have an account?</h2>
          <p
            class="user_registered-text"
          >Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
          <button class="user_registered-login" id="login-button">Login</button>
        </div>
      </div>

      <div class="user_options-forms" id="user_options-forms" style="overflow-y: auto; overflow: hidden;">
        <div class="user_forms-login">
          <h2 class="forms_title">Login</h2>
          <form class="forms_form">
            <fieldset class="forms_fieldset" style="margin-top: 70px;">
              <div class="forms_field">
                <input
                  :class="{'error' : loginErrors.email}"
                  type="Email"
                  v-model="loginInfo.email"
                  class="forms_field-input"
                  required
                  autofocus
                  placeholder="Email"
                />
              </div>
              <div class="forms_field">
                <input
                  :class="{'error' : loginErrors.password}"
                  type="password"
                  v-model="loginInfo.password"
                  class="forms_field-input"
                  required
                  placeholder="Password"
                />
              </div>
            </fieldset>
            <div class="forms_buttons">
              <button
                type="button"
                class="forms_buttons-forgot"
                style="font-size: 15px !important; background: none; border: none;"
                @click.prevent="showForgotPassword()"
              >Forgot password?</button>
              <input
                class="forms_buttons-action"
                value="Log In"
                type="submit"
                @click.prevent="login"
                :disabled="disableBtn"
              />
            </div>
            <div v-show="forgotPassword" style="margin-top: 35px;">
              <label for="forgotPassword">Password Reset</label>
              <div
                style="    border: 1px solid #d2d2d2;
                                          padding: 20px;
                                          margin-top: 15px;"
              >
                <h4
                  style="text-align: center;
                                    margin-top: 13px;
                                    margin-bottom: 0;
                                    font-size: 14px;
                                    color: #000;"
                >Type your Email here</h4>
                <input class="forms_field-input" placeholder="Email (Someone@example.com)" />
              </div>
              <button style="margin-top: 20px; width: 100%;" class="forms_buttons-action">Send</button>
            </div>
          </form>
        </div>

        <div class="user_forms-signup">
          <h2 class="forms_title">Sign Up</h2>
          <form class="forms_form" @submit.prevent="onRegister">
            <fieldset class="forms_fieldset" style="margin-top: -15px;">
              <RegisterUser :userData="userData" :errors="errors" :reg="reg"></RegisterUser>
              <div class="form-check col-sm-12 no-padding" style="margin-top: 10px !important;">
                <input type="checkbox" class="form-check-input" id="agree" v-model="isAgreed" />
                <div style="    display: -webkit-inline-box;">
                  <span class="form-check-label" style="margin-left: 5px;">Accept</span>
                  <a class href="#" style="font-size: 11px;">Policy and Terms</a>
                </div>
              </div>
              <div class="form-check col-sm-12 no-padding" style="margin-top: 10px !important;">
                <input type="checkbox" class="form-check-input" id="agree" v-model="isAgreed" />
                <div style="    display: -webkit-inline-box;">
                  <span class="form-check-label" style="margin-left: 5px;">
                    Accept
                    <a class style="font-size: 11px;" href="#">User Privacy</a>
                  </span>
                </div>
              </div>
            </fieldset>
            <div
              class="forms_buttons"
              style="margin-top: 22px !important; flex-direction: column !important;"
            >
              <button
                type="submit"
                class="forms_buttons-action"
                style="float: right;"
                @click="reg = true"
                :disabled="regDisableBtn || !isAgreed"
              >
                <i class="fa fa-spinner fa-spin" v-if="regDisableBtn"></i> Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    // import { routePath } from '@/mixins/routePath.js'
    import { mapState } from 'vuex'
    // import '../../src/styles/scss/popup.sass'    
    import { required, minLength } from 'vuelidate/lib/validators'
    import $ from 'jquery'
    import RegisterUser from './RegisterUser'

    export default {
        name: 'Login',
        // mixins: [routePath],
        components: {
          RegisterUser
        },
        validations: {
            first_name: {
                required,
                minLength: minLength(2)
            },
            last_name: {
                required,
                minLength: minLength(2)
            },
            email: {
                required,
                minLength: minLength(2)
            },

        },
        data() {
            return {
                reg: false,
                forgotPassword: false,
                userData: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    email_confirmation: '',
                    password: '',
                    password_confirmation: '',
                    phone_no: '',
                    gender: '',
                    city: '',
                    street: '',
                    house_no: '',
                    zipcode: '',
                    direction: '',
                    room_number: '',

                },
                loginInfo: {
                    email: '',
                    password: ''
                },
                errors: {},
                loginErrors: [],
                disableBtn: false,
                regDisableBtn: false,
                isAgreed: false
            }
        },
        computed: {
            ...mapState({
                isAuthenticated : state => state.IS_AUTHENTICATED,
                loggedinUSer    : state => state.USER_DATA
            })
        },
        mounted () {

            /**
             * Variables
             */
            const signupButton = document.getElementById('signup-button'),
                loginButton = document.getElementById('login-button'),
                userForms = document.getElementById('user_options-forms')

            /**
             * Add event listener to the "Sign Up" button
             */
            signupButton.addEventListener('click', () => {
                userForms.classList.remove('bounceRight')
                userForms.classList.add('bounceLeft')
            }, false)

            /**
             * Add event listener to the "Login" button
             */
            loginButton.addEventListener('click', () => {
                userForms.classList.remove('bounceLeft')
                userForms.classList.add('bounceRight')
            }, false)

        },
        //   destroyed () {
        //   $('.navCenterTextClip').css('display', 'blci')
        // },

        methods: {
            logout : function()
            {
                this.$store.commit('SET_USER_DATA',null);
                this.$store.commit('SET_AUTHENITCATION_STATUS',false);
            },
            checkForm: function ()
            {

                this.loginErrors = [];

                if (this.loginInfo.email && this.loginInfo.password) {
                    return true;
                }

                if (!this.loginInfo.email) {
                    this.loginErrors['email'] = 'Email is required.';
                }
                if (!this.loginInfo.password) {
                    this.loginErrors['password'] = 'Password is required.';
                }

                return false;
            },
            login()
            {
                if(!this.checkForm()) { return false    }

                this.disableBtn = true;

                // this.$store.dispatch('HTTP_POST_REQUEST' , {url : 'login',payload : this.loginInfo})
                //     .then(response => {
                //         this.disableBtn = false;

                //         if(response.data.error = Userlse)
                //         {
                //             this.$store.commit('SET_USER_DATA',response.data.data);
                //             this.$store.commit('SET_AUTHENITCATION_STATUS',true);
                //             document.querySelector('.modal-backdrop').remove();
                //             $.notify(response.data.message,"success");
                //         }
                //     })
                //     .catch(error => {
                //         this.disableBtn = false;
                //         $.notify(error.response.data.message,"error");
                //     })
            },
            showForgotPassword(){
              this.forgotPassword = !this.forgotPassword
            },
            onRegister()
            {
                this.regDisableBtn = true;

                this.$store.dispatch('HTTP_POST_REQUEST' , {url : 'register',payload : this.userData})
                    .then(response => {
                        this.regDisableBtn = false;

                        if(response.data.error == false)
                        {
                            $.notify(response.data.message,"success");
                            $('.login-form').modal('hide')
                            document.querySelector('.modal-backdrop').remove();
                        }
                    })
                    .catch(error => {
                        this.regDisableBtn = false;

                        if(error.response.status === 422){
                            this.errors = error.response.data.errors;
                        }

                        $.notify(error.response.data.message,"error");

                    })
            }
        }
    }
</script>
