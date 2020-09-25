<template>
  <div>
    <div class="fixedFooter">
      <div class="row">
        <div class="col-md-8">
          <p>
            All rights reserved for
            <a href="https://yamiyami.de/home">YamiYami.de</a>
          </p>
        </div>
        <div class="col-md-4">
          <div>
            <router-link to="/privacy-policy">Privacy Policy</router-link>
            <router-link to="/terms-of-use">Terms of Use</router-link>
            <button id="show-modal" @click="LanguageModal = true">
              <img src="@/assets/images/flags/german.png" />
            </button>
            <bs-modal
              v-if="LanguageModal"
              cstmWidth="450px"
              background="#fff"
              @close="LanguageModal = false"
            >
              <div slot="body">
                <div class="modal-header">
                  <h3>Select Your Favorite Language</h3>
                  <p @click="LanguageModal = false" class="cancelMdl">x</p>
                </div>
                <div class="modal-body">
                    <div class="row langPopup">
                        <div class="col-md-6">
                            <img src="@/assets/images/flags/german.png">
                            <h3>German</h3>
                        </div>
                        <div class="col-md-6">
                            <img src="@/assets/images/flags/english.png">
                            <h3>English</h3>
                        </div>
                    </div>
                </div>
              </div>
            </bs-modal>
          </div>
        </div>
      </div>
    </div>
    <!-- *********************** Start our-footer-area *********************** -->
    <div>
      <div class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer-items-header d-flex justify-content-between">
                <h3>Lieferdienste</h3>
                <h3>Restaurants</h3>
                <h3>Imbisse</h3>
                <h3>Partservice</h3>
              </div>
              <div class="footer-aside d-flex justify-content-between">
                <div class="footer-aside-wrapp w-100">
                  <div class="single-items-ft">
                    <ul>
                      <li>
                        <a href="#">Hamburg</a>
                      </li>
                      <li>
                        <a href="#">Gelesenkirchen</a>
                      </li>
                      <li>
                        <a href="#">Dresden</a>
                      </li>
                      <li>
                        <a href="#">Freiburg</a>
                      </li>
                      <li>
                        <a href="#">Augsburg</a>
                      </li>
                      <li>
                        <a href="#">Rostock</a>
                      </li>
                      <li>
                        <a href="#">Bremen</a>
                      </li>
                      <li>
                        <a href="#">Herne</a>
                      </li>
                      <li>
                        <a href="#">Potsdam</a>
                      </li>
                      <li>
                        <a href="#">GieBen</a>
                      </li>
                      <li>
                        <a href="#">Krefeld</a>
                      </li>
                      <li>
                        <a href="#">Bonn</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="footer-aside-wrapp w-100">
                  <div class="single-items-ft">
                    <ul>
                      <li>
                        <a href="#">Frankfurt</a>
                      </li>
                      <li>
                        <a href="#">Berlin</a>
                      </li>
                      <li>
                        <a href="#">Futh</a>
                      </li>
                      <li>
                        <a href="#">Erlangen</a>
                      </li>
                      <li>
                        <a href="#">Halle</a>
                      </li>
                      <li>
                        <a href="#">Duisburg</a>
                      </li>
                      <li>
                        <a href="#">Dortmund</a>
                      </li>
                      <li>
                        <a href="#">Leipzig</a>
                      </li>
                      <li>
                        <a href="#">Hamm</a>
                      </li>
                      <li>
                        <a href="#">Mulheim</a>
                      </li>
                      <li>
                        <a href="#">Offenbach</a>
                      </li>
                      <li>
                        <a href="#">Darmstadt</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="footer-aside-wrapp w-100">
                  <div class="single-items-ft">
                    <ul>
                      <li>
                        <a href="#">Bielefeld</a>
                      </li>
                      <li>
                        <a href="#">Munster</a>
                      </li>
                      <li>
                        <a href="#">Munchen</a>
                      </li>
                      <li>
                        <a href="#">Neuss</a>
                      </li>
                      <li>
                        <a href="#">Mainz</a>
                      </li>
                      <li>
                        <a href="#">Wiesbaden</a>
                      </li>
                      <li>
                        <a href="#">Madgeburg</a>
                      </li>
                      <li>
                        <a href="#">Kassel</a>
                      </li>
                      <li>
                        <a href="#">Braunschweig</a>
                      </li>
                      <li>
                        <a href="#">Dusseldorf</a>
                      </li>
                      <li>
                        <a href="#">Bottrop</a>
                      </li>
                      <li>
                        <a href="#">Heidelberg</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="footer-aside-wrapp w-100">
                  <div class="single-items-ft">
                    <ul>
                      <li>
                        <a href="#">Mannheim</a>
                      </li>
                      <li>
                        <a href="#">Osnabruck</a>
                      </li>
                      <li>
                        <a href="#">Essen</a>
                      </li>
                      <li>
                        <a href="#">Koln</a>
                      </li>
                      <li>
                        <a href="#">Lundwigshafen</a>
                      </li>
                      <li>
                        <a href="#">Saarbrucken</a>
                      </li>
                      <li>
                        <a href="#">Monchengladbach</a>
                      </li>
                      <li>
                        <a href="#">Aachen</a>
                      </li>
                      <li>
                        <a href="#">Numberg</a>
                      </li>
                      <li>
                        <a href="#">Oldenburg</a>
                      </li>
                      <li>
                        <a href="#">Kiel</a>
                      </li>
                      <li>
                        <a href="#">Chemnitz</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="footer-aside-wrapp w-100">
                  <div class="single-items-ft">
                    <ul>
                      <li>
                        <a href="#">Erfurt</a>
                      </li>
                      <li>
                        <a href="#">Karlsruhe</a>
                      </li>
                      <li>
                        <a href="#">Lubeck</a>
                      </li>
                      <li>
                        <a href="#">Stuttgart</a>
                      </li>
                      <li>
                        <a href="#">Hannover</a>
                      </li>
                      <li>
                        <a href="#">Leverkusen</a>
                      </li>
                      <li>
                        <a href="#">Paderborn</a>
                      </li>
                      <li>
                        <a href="#">Herne</a>
                      </li>
                      <li>
                        <a href="#">Oberhausen</a>
                      </li>
                      <li>
                        <a href="#">Wuppertal</a>
                      </li>
                      <li>
                        <a href="#">Bochum</a>
                      </li>
                      <li>
                        <a href="#">Gottingen</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- *********************** copyright *********************** -->
    <section class="section-alert-area">
      <div class="copyrights-area alert alert-dismissible fade show single-copyright" role="alert">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="restaurant-alert">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio impedit commodi, suscipit aut deleniti facere totam mollitia expedita quod.aut deleniti facere
                  <strong>
                    <a href="#">expedita quod aliquid</a>
                  </strong>
                </p>
                <button type="button" class="close Ok-btn" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true" class="btn btn-info">ok</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BsModal from "@/components/BsModal";
export default {
  name: "ThemeFooter",
  components: {
    BsModal,
  },
  data() {
    return {
      LanguageModal: false,
    };
  },
};
</script>
<style scoped>
p {
  margin-bottom: 0px !important;
}
</style>