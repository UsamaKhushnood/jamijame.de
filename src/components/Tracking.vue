<template>
  <div>
    <div class="container-fluid" style="margin-top: 10px;">
      <div
        class="row mt15"
        style="border-bottom: 1px solid #ccc; padding-bottom: 15px"
      >
        <div class="col-md-3 pr0">
          <input
            type="text"
            class="form-control input-rightbar"
            placeholder="Order Id"
          />
        </div>
        <div class="col-md-3 pr0">
          <input
            type="text"
            class="form-control input-rightbar"
            placeholder="Last Name"
          />
        </div>
        <div class="col-md-3 pr0">
          <input
            type="text"
            class="form-control input-rightbar"
            placeholder="Phone Number"
          />
        </div>
        <div class="col-md-3">
          <a
            href="#"
            class="btn btn-default btn-block"
            data-toggle="modal"
            data-target="#search-popup"
            style="border-radius: 0px; border: 1px solid #ced4da;"
            >
                <img src="@/assets/images/icons/loupe.png" width="18px">
            </a>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 text-center">
          <ul class="list-inline nav-justified start-cooking">
            <li>Start Cooking &nbsp; <b>19:30 h</b></li>
            <li>Start Cooking &nbsp; <b>19:30 h</b></li>
          </ul>
          <ul class="list-inline nav-justified tracking-time">
            <li class="border-btm-red">Order Time : <b>19:30 h</b></li>
            <li class="border-btm-yellow">Start To Deliver : <b>19:30 h</b></li>
            <li class="border-btm-green">Start Cooking : <b>19:30 h</b></li>
          </ul>
          <ul class="list-inline nav-justified order-status">
            <li>
              <img src="@/assets/images/tracking/order-recieved.png" alt="" />
              <p class="border-top-green">Order Recieved</p>
            </li>
            <li>
              <img src="@/assets/images/tracking/is-prepared.png" alt="" />
              <p class="border-top-yellow">is Prepared</p>
            </li>
            <li>
              <img src="@/assets/images/tracking/at-way.png" alt="" />
              <p class="border-top-yellow">At Way</p>
            </li>
            <li>
              <img src="@/assets/images/tracking/alert.png" alt="" />
              <p class="border-top-yellow">Alert</p>
            </li>
            <li>
              <img src="@/assets/images/tracking/delivered.png" alt="" />
              <p class="border-top-red">Delivered</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tracking",
};
</script>

<style scoped>
ul.list-inline.nav-justified.start-cooking {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #e4e4e4;
    border-left: 0;
    border-right: 0;
    height: 60px;
    color: #8a8a8a;
    margin-bottom: 0;
}

ul.list-inline.nav-justified.tracking-time {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #e4e4e4;
    height: 60px;
    color: #8a8a8a;
    margin-bottom: 0;
}

ul.list-inline.nav-justified.tracking-time li {
    width: 100%;
    padding: 17px;
    border-right: 1px solid #e4e4e4;
}

ul.list-inline.nav-justified.tracking-time li:nth-child(1) {
    border-bottom: 2px solid #ff0000;
}
ul.list-inline.nav-justified.tracking-time li:nth-child(2) {
    border-bottom: 2px solid #ffb900;
}
ul.list-inline.nav-justified.tracking-time li:nth-child(3) {
    border-bottom: 2px solid green;
}

ul.list-inline.nav-justified.order-status {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;    
}

ul.list-inline.nav-justified.order-status li {
    width: 100%;
}

ul.list-inline.nav-justified.order-status li img {
    padding: 10px;
}

ul.list-inline.nav-justified.order-status li p {
    background: #f2f2f2;
    padding: 7px;
    color: #8a8a98;
    margin-right: 3px;
}

ul.list-inline.nav-justified.order-status li:nth-child(1) p {
    border-top: 2px solid #ff0f17;
}
ul.list-inline.nav-justified.order-status li:nth-child(2) p, ul.list-inline.nav-justified.order-status li:nth-child(3) p, ul.list-inline.nav-justified.order-status li:nth-child(4) p {
    border-top: 2px solid #ffb92a;
}
ul.list-inline.nav-justified.order-status li:nth-child(5) p {
    border-top: 2px solid green;
}
</style>