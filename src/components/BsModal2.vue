<template>
<div class="Modal" style="display: inline-block;">
  <a href="#" class="Modal__Button" @click.prevent="showModel=!showModel">
    <slot name="button"></slot>
  </a>
  <div :class="'modal Modal__Content fade modal__'+uniqNumber" >
    <div :class="modalLg?'modal-dialog modal-lg':'modal-dialog'" data-dismiss="modal" :style="{width: windowWidth}">
      <div class="modalContent" 
            style="width: 80%; 
                margin:0 auto !important;   
                box-shadow: -2px 2px 10px 0px rgba(68, 68, 68, 0.4);" 
            :style="{width: cstmWidth, marginTop: cstmMT}"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script> 
// import $ from 'jquery'
export default {
  name: 'BsModal',
  props: {
    closeId: String,
    // modalClass: String,
    passEvent: String,
    modalLg: Boolean,
    cstmWidth: String,
    cstmMT: String
  },
  data: function () {
    return {
      uniqNumber: 0,
      showModel: false
    }
  },
  computed: {
    windowWidth: function() {
      return `${window.innerWidth}px  !important`;
    }
  },
  watch: {
    // showModel: function () {
    //   $(document).ready(function () {
    //     if (this.showModel) {
    //       $('.modal__' + this.uniqNumber).modal('show')
    //     } else {
    //       $('.modal__' + this.uniqNumber).modal('hide')
    //     }
    //   })
    // }
  },
  mounted: function () {
    this.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    // if (this.$parent) {
    //   this.$parent.$on('closeModal__' + this.closeId, function () {
    //     this.showModel = false
    //   })
    //   this.$parent.$on(this.passEvent, function () {
    //     this.$emit(this.passEvent)
    //   })
    // }
    // $(document).ready(function () {
    //   $('.modal__' + this.uniqNumber).on('show.bs.modal', function () {
    //     if (!this.showModel) this.showModel = true
    //   })
    //   $('.modal__' + this.uniqNumber).on('hide.bs.modal', function () {
    //     if (this.showModel) this.showModel = false
    //   })
    // })
  }
}
</script>
<style scoped>
  .modalContent {
    background: #fff;
  }
</style>
