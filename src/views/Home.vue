<template>
  <div class="home">
    <!-- *********************** Start Services-area *********************** -->
    <section class="services-area sticky" id="showOnScroll">
      <div class="container-fluid">
        <div class="services-wrap d-flex justify-content-between">
          <div class="services-content">
            <input type="radio" name="navBtn" id="delivery0" checked/>
            <div @click="data = 'Delivery'">
              <label for="delivery0">
                <div class="d-flex align-items-center">
                  <div class="services-thumb">
                    <img src="@/assets/images/services/01.png" alt="services" />
                  </div>
                  <div class="service-items">
                    <h5 >Delivery</h5>
                    <p>Food Delivery</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="services-content">
            <input type="radio" name="navBtn" id="resturant0" />
            <div @click="data = 'Resturant'">
              <label for="resturant0">
                <div class="d-flex align-items-center">
                  <div class="services-thumb">
                    <img src="@/assets/images/services/02.png" alt="services" />
                  </div>
                  <div class="service-items">
                    <h5>Restaurants</h5>
                    <p>Book a Table</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="services-content">
            <input type="radio" name="navBtn" id="Dinner0" />
            <div @click="data = 'Dinner'">
              <label for="Dinner0">
                <div class="d-flex align-items-center">
                  <div class="services-thumb">
                    <img src="@/assets/images/services/03.png" alt="services" />
                  </div>
                  <div class="service-items">
                    <h5>Diners</h5>
                    <p>Food To Go</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="services-content">
            <input type="radio" name="navBtn" id="Party0" />
            <div @click="data = 'Party'">
              <label for="Party0">
                <div class="d-flex align-items-center">
                  <div class="services-thumb">
                    <img src="@/assets/images/services/04.png" alt="services" />
                  </div>
                  <div class="service-items">
                    <h5>Partyservice</h5>
                    <p>Plan a Event</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="services-content">
            <input type="radio" name="navBtn" id="Discount0" />
            <div @click="data = 'Discount'">
              <label for="Discount0">
                <div class="d-flex align-items-center">
                  <div class="services-thumb">
                    <img src="@/assets/images/services/05.png" alt="services" />
                  </div>
                  <div class="service-items">
                    <h5>Discount</h5>
                    <p>Save Money</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="services-content d-flex align-items-center" id="services">
            <div class="service-items">
              <form action="#" class="zipForm d-flex">
                <input
                  type="text"
                  class="border-0 zipCode"
                  placeholder="Type your zipcode"
                  id="zipCode"
                />
                <button type="submit" class="section-bg">
                  <img src="@/assets/images/services/06.png" alt="services" />
                </button>
              </form>
              <img src="@/assets/images/banner/02.png" alt class="search-l-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- *********************** Start Banner-area *********************** -->
    <section class="banner-area">
      <div class="our-video">
        <video autoplay loop muted>
          <source src="@/assets/video/01.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-section-heading">
              <small>Fast, Fresh & Tasty</small>
              <h3>
                Discover the best
                <span>food & drinks !</span>
              </h3>
            </div>
            <div class="service-selected-area">
              <p class="select-services">Select the Service You Look for and Press Search</p>
              <div class="wrapp-services-area">
                <div
                  class="services-wrap d-flex justify-content-between bg-white"
                  id="inner-services-select"
                >
                  <input type="radio" name="navBtn" id="delivery" checked/>
                  <div @click="data = 'Delivery'">
                    <label for="delivery">
                      <div class="services-content d-flex align-items-center">
                        <div class="services-thumb">
                          <img src="@/assets/images/services/01.png" alt="services" />
                        </div>
                        <div class="service-items">
                          <h5>Delivery</h5>
                          <p>Food Delivery</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <input type="radio" name="navBtn" id="resturant" />
                  <div @click="data = 'Resturant'">
                    <label for="resturant">
                      <div class="services-content d-flex align-items-center">
                        <div class="services-thumb">
                          <img src="@/assets/images/services/02.png" alt="services" />
                        </div>
                        <div class="service-items">
                          <h5>Restaurants</h5>
                          <p>Book a Table</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <input type="radio" name="navBtn" id="Dinner" />
                  <div @click="data = 'Dinner'">
                    <label for="Dinner">
                      <div class="services-content d-flex align-items-center">
                        <div class="services-thumb">
                          <img src="@/assets/images/services/03.png" alt="services" />
                        </div>
                        <div class="service-items">
                          <h5>Diners</h5>
                          <p>Food To Go</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <input type="radio" name="navBtn" id="Party" />
                  <div @click="data = 'Party'">
                    <label for="Party">
                      <div class="services-content d-flex align-items-center">
                        <div class="services-thumb">
                          <img src="@/assets/images/services/04.png" alt="services" />
                        </div>
                        <div class="service-items">
                          <h5>Partyservice</h5>
                          <p>Plan a Event</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <input type="radio" name="navBtn" id="Discount" />
                  <div @click="data = 'Discount'">
                    <label for="Discount">
                      <div class="services-content d-flex align-items-center">
                        <div class="services-thumb">
                          <img src="@/assets/images/services/05.png" alt="services" />
                        </div>
                        <div class="service-items">
                          <h5>Discount</h5>
                          <p>Save Money</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-address-area">
                <form id="Form_submit">
                  <div class="form-row align-items-center">
                    <div class="col-auto w-80">
                      <div class="input-group mb-2" id="placecolor">
                        <div class="input-group-prepend user-location">
                          <div class="input-group-text">
                            <img src="@/assets/images/banner/02.png" alt />
                          </div>
                        </div>
                        <input
                          type="text"
                          class="form-control InputField"
                          id="inlineFormInputGroup"
                          placeholder="Address,Sent peter 38009"
                        />
                      </div>
                    </div>

                    <div class="col-auto user-submit">
                      <button type="submit" class="btn btn-primary mb-2">
                        <img src="@/assets/images/services/06.png" alt="services" />
                      </button>
                    </div>
                  </div>
                </form>
                <!--Show location default situation hiden-->
                <div class="show-location"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- *********************** Start our-work-area Delivery Section*********************** -->
    <Home-Delivery-Section v-show="data == 'Delivery'"></Home-Delivery-Section>
    <!-- *********************** Start our-work-area Resturant Section *********************** -->
    <Home-Resturants-Section v-show="data== 'Resturant'"></Home-Resturants-Section>
    <!-- *********************** Start our-work-area Dinner Section *********************** -->
    <Home-Dinner-Section v-show="data== 'Dinner'"></Home-Dinner-Section>
    <!-- *********************** Start our-work-area Party Service Section *********************** -->
    <Home-Party-Service-Section v-show="data== 'Party'"></Home-Party-Service-Section>
    <!-- *********************** Start our-work-area Discount Section *********************** -->
    <Home-Discount-Section v-show="data== 'Discount'"></Home-Discount-Section>

    <!-- *********************** Start Delivery-area *********************** -->
    <section class="our-delivery section-bg1">
      <div class="delivery-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="all-delivery-wrapp">
                <div class="section-heading text-center">
                  <h3>Food Delivery</h3>
                  <article>
                    <p>Our Passion for Delicious Food</p>
                  </article>
                </div>
                <div class="delivery-wrapp d-flex">
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/01.jpg" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/02.jpg" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/03.jpg" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/04.jpg" alt />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- *********************** Start Menu-area *********************** -->
    <section class="our-delivery section-bg2">
      <div class="delivery-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-9">
              <div class="all-delivery-wrapp">
                <div class="section-heading text-center">
                  <h3>Restaurant Menus</h3>
                  <article>
                    <p>lorem ion for Delicious Food</p>
                  </article>
                </div>
                <div class="delivery-wrapp d-flex">
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/05.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/06.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/07.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/08.png" alt />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- *********************** Start Delivery-area *********************** -->
    <section class="our-delivery section-bg4">
      <div class="delivery-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="all-delivery-wrapp">
                <div class="section-heading text-center">
                  <h3>Party Services</h3>
                  <article>
                    <p>Our Passion for Delicious Food</p>
                  </article>
                </div>
                <div class="delivery-wrapp d-flex">
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/13.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/14.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/15.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/16.png" alt />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- *********************** Start Delivery-area *********************** -->
    <section class="our-delivery section-bg3">
      <div class="delivery-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="all-delivery-wrapp">
                <div class="section-heading text-center">
                  <h3>Dinner Menu</h3>
                  <article>
                    <p>Our Passion for Delicious Food</p>
                  </article>
                </div>
                <div class="delivery-wrapp d-flex">
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/09.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/10.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/11.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/12.png" alt />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- *********************** Start Menu-area *********************** -->
    <section class="our-delivery section-bg6">
      <div class="delivery-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="all-delivery-wrapp">
                <div class="section-heading text-center">
                  <h3>Food offers</h3>
                  <article>
                    <p>lorem ion for Delicious Food</p>
                  </article>
                </div>
                <div class="delivery-wrapp d-flex">
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/21.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/22.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/23.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/24.png" alt />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- *********************** Start our-apps-area *********************** -->
    <section class="apps-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="apps-thumb text-center">
              <figure>
                <img src="@/assets/images/apps/01.png" alt />
              </figure>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="apps-section-heading">
              <h3>Get Your Favourite Food Fast with the app</h3>
              <div class="app-store-wrap d-flex">
                <div class="myApps">
                  <a href="#" class="d-flex align-items-center">
                    <div class="app-icon">
                      <img src="@/assets/images/apps/apple.png" alt />
                    </div>
                    <div class="apps-content">
                      <small>Download on the</small>
                      <p>App store</p>
                    </div>
                  </a>
                </div>
                <div class="myApps">
                  <a href="#" class="d-flex align-items-center">
                    <div class="app-icon">
                      <img src="@/assets/images/apps/play.png" alt />
                    </div>
                    <div class="apps-content">
                      <small>Get it on</small>
                      <p>Google play</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="apps-logo-thumb d-flex">
              <div class="single-apps-thumb w-100">
                <figure>
                  <img src="@/assets/images/apps/02.png" alt />
                </figure>
                <h4>Driver App</h4>
              </div>
              <div class="single-apps-thumb w-100">
                <figure>
                  <img src="@/assets/images/apps/02.png" alt />
                </figure>
                <h4>Table App</h4>
              </div>
              <div class="single-apps-thumb w-100">
                <figure>
                  <img src="@/assets/images/apps/02.png" alt />
                </figure>
                <h4>Waiter App</h4>
              </div>
              <div class="single-apps-thumb w-100">
                <figure>
                  <img src="@/assets/images/apps/02.png" alt />
                </figure>
                <h4>Ceo App</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- *********************** Start Delivery-area *********************** -->
    <section class="our-delivery section-bg5">
      <div class="delivery-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="all-delivery-wrapp">
                <div class="section-heading text-center">
                  <a
                    href="https://anfragen.yamiyami.de/"
                    target="blank"
                    style="
                        font-size: 35px;
                        font-family: -apple-system, BlinkMacSystemFont;
                        font-weight: 700;
                        background: green;
                        color: #fff;
                        padding: 12px;
                        border-radius: 15px;
                        "
                  >Join to YamiYami</a>
                  <!-- <article>
                                    <p>Our Passion for Delicious Food</p>
                  </article>-->
                </div>
                <div class="delivery-wrapp d-flex">
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/17.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/18.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/19.png" alt />
                    </figure>
                  </div>
                  <div class="single-item-delivery">
                    <figure>
                      <img src="@/assets/images/delivery-img/20.png" alt />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeDeliverySection from "@/Sections/HomeDeliverySection";
import HomeResturantsSection from "@/Sections/HomeResturantsSection";
import HomeDinnerSection from "@/Sections/HomeDinnerSection";
import HomePartyServiceSection from "@/Sections/HomePartyServiceSection";
import HomeDiscountSection from "@/Sections/HomeDiscountSection";
export default {
  name: "Home",
  data() {
    return {
      data: "Delivery",
    };
  },
  components: {
    HomeDeliverySection,
    HomeResturantsSection,
    HomeDinnerSection,
    HomePartyServiceSection,
    HomeDiscountSection,
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHeader);
  },
  methods: {
    scrollHeader() {
      if (
        document.body.scrollTop > 580 ||
        document.documentElement.scrollTop > 580
      ) {
        document.querySelector("#showOnScroll").classList.add("scroll-banner");
      } else {
        document
          .querySelector("#showOnScroll")
          .classList.remove("scroll-banner");
      }
    },
  },
};
</script>
