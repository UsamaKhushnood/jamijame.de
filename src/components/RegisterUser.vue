<template>
    <div class="row">
          <div class="col-sm-12 no-padding row">
              <div class="col-sm-6">
                  <div class="forms_field" :class=" errors.gender ? 'has-error has-feedback' : '' ">
                      <select class="dropdown_styling" v-model="userData.gender">
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                      </select>
                      <template v-if="errors.gender">
                          <span class="form-control-feedback">&times;</span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.gender" :key="index">{{ errorMsg }}</div>
                      </template>
                  </div>
              </div>
          </div>
          <div class="col-sm-12 no-padding row">
            <div class="col-sm-6">
              <div class="forms_field" :class=" errors.first_name ? 'has-error has-feedback' : '' ">
                <input type="text" v-model="userData.first_name" class="forms_field-input" required placeholder="First Name">
                <template v-if="errors.first_name">
                  <span class="form-control-feedback">&times;</span>
                  <div class="text-danger" v-for="(errorMsg, index) in errors.first_name" :key="index">{{ errorMsg }}</div>
                </template>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="forms_field" :class=" errors.last_name ? 'has-error has-feedback' : '' ">
                <input type="text" v-model="userData.last_name" class="forms_field-input" required placeholder="Last Name">
                <template v-if="errors.last_name">
                  <span class="form-control-feedback">&times;</span>
                  <div class="text-danger" v-for="(errorMsg, index) in errors.last_name" :key="index">{{ errorMsg }}</div>
                </template>
              </div>
            </div>
          </div>
        <div class="col-sm-12 no-padding row">
          <div class="col-sm-6">
            <div class="forms_field" :class=" errors.email ? 'has-error has-feedback' : '' ">
              <input type="email" v-model="userData.email" class="forms_field-input" required placeholder="Email" />
              <template v-if="errors.email">
                <span class="form-control-feedback">&times;</span>
                <div class="text-danger" v-for="(errorMsg, index) in errors.email" :key="index">{{ errorMsg }}</div>
              </template>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="forms_field" :class=" userData.email_confirmation != userData.email ? 'has-error has-feedback' : '' ">
              <input type="email" v-model="userData.email_confirmation" class="forms_field-input" required placeholder="Confirm Email"/>
              <template v-if="userData.email_confirmation != userData.email">
                <span class="form-control-feedback">&times;</span>
                <div class="text-danger">Email must match</div>
              </template>
            </div>
          </div>
        </div>
        <div class="col-sm-12 no-padding row">
          <div class="col-sm-6">
            <div class="forms_field" :class=" errors.password ? 'has-error has-feedback' : '' ">
              <input type="password" v-model="userData.password" class="forms_field-input" required placeholder="Password"/>
              <template v-if="errors.password">
                <span class="form-control-feedback">&times;</span>
                <div class="text-danger" v-for="(errorMsg, index) in errors.password" :key="index">{{ errorMsg }}</div>
              </template>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="forms_field" :class="userData.password_confirmation != userData.password ? 'has-error has-feedback' : '' ">
              <input type="password" v-model="userData.password_confirmation" class="forms_field-input" required placeholder="Confirm Password"/>
              <template v-if="reg && userData.password_confirmation != userData.password">
                <span class="form-control-feedback">&times;</span>
                <div class="text-danger">Passwords must match</div>
              </template>
            </div>
          </div>
        </div>
        <div class="col-sm-12 no-padding row">
          <div class="col-sm-6">
            <div class="forms_field" :class=" errors.phone_no ? 'has-error has-feedback' : '' ">
              <input type="text" v-model="userData.phone_no" class="forms_field-input" required placeholder="Phone Number"/>
              <template v-if="errors.phone_no">
                <span class="form-control-feedback">&times;</span>
                <div class="text-danger" v-for="(errorMsg, index) in errors.phone_no" :key="index">{{ errorMsg }}</div>
              </template>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="forms_field" :class=" errors.zipcode ? 'has-error has-feedback' : '' ">
              <input type="text" v-model="userData.zipcode" class="forms_field-input" required placeholder="Zip code"/>
              <template v-if="errors.zipcode">
                <span class="form-control-feedback">&times;</span>
                <div class="text-danger" v-for="(errorMsg, index) in errors.zipcode" :key="index">{{ errorMsg }}</div>
              </template>
            </div>
          </div>
        </div>
        <div class="col-sm-12 no-padding row">
          <div class="col-sm-6">
            <div class="forms_field" :class=" errors.street ? 'has-error has-feedback' : '' ">
              <input type="text" v-model="userData.street" class="forms_field-input" placeholder="Address" />
              <template v-if="errors.street">
                <span class="form-control-feedback">&times;</span>
                <div class="text-danger" v-for="(errorMsg, index) in errors.street" :key="index">{{ errorMsg }}</div>
              </template>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="forms_field" :class=" errors.house_no ? 'has-error has-feedback' : '' ">
              <input type="text" v-model="userData.house_no" class="forms_field-input" placeholder="House No" />
              <template v-if="errors.house_no">
                <span class="form-control-feedback">&times;</span>
                <div class="text-danger" v-for="(errorMsg, index) in errors.house_no" :key="index">{{ errorMsg }}</div>
              </template>
            </div>
          </div>
        </div>
          <div class="col-sm-12 no-padding row">
              <div class="col-sm-4">
                <div class="form-group" :class=" errors.direction ? 'has-error has-feedback' : '' ">
                  <input type="text" v-model="userData.direction" class="forms_field-input" placeholder="Floor Number" />
                  <template v-if="errors.direction">
                    <span class="form-control-feedback">&times;</span>
                    <div class="text-danger" v-for="(errorMsg, index) in errors.direction" :key="index">{{ errorMsg }}</div>
                  </template>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="forms-field" :class=" errors.direction ? 'has-error has-feedback' : '' ">
                  <select class="dropdown_styling" v-model="userData.direction">
                    <option value="">Apartment</option>
                    <option value="Left">Left</option>
                    <option value="Middle">Middle</option>
                    <option value="Right">Right</option>
                  </select>
                  <template v-if="errors.direction">
                    <span class="form-control-feedback">&times;</span>
                    <div class="text-danger" v-for="(errorMsg, index) in errors.direction" :key="index">{{ errorMsg }}</div>
                  </template>
                </div>
              </div>
              <div class="col-sm-4">
                  <div class="form-group" :class=" errors.apartment_number ? 'has-error has-feedback' : '' ">
                      <input type="text" v-model="userData.apartment_number" class="forms_field-input" placeholder="Room Number" />
                      <template v-if="errors.apartment_number">
                          <span class="form-control-feedback">&times;</span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.room_number" :key="index">{{ errorMsg }}</div>
                      </template>
                  </div>
              </div>
          </div>
         </div>
</template>
<script>
export default {
    name: 'RegisterUser',
    props: {
        userData: Object,
        errors: Object,
        reg: Boolean
    },
}
</script>
