<template>
    <div>
        <div class="modal-mask" @click="$emit('close')" >
          <div class="modal-wrapper">
            <div class="modal-container" :style="{width: cstmWidth, backgroundColor: background}" @click.stop>
              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BsModal',
    props:{
      cstmWidth: String,
      background: String
    },
    data(){
        return {
            // showModal: false
        }
    }
}
</script>
<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  border-radius: 2px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
      font-family: "Montserrat", sans-serif;
    font-size: 12px;
    line-height: 1em;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
  background: red;
}

.modal-leave-active {
  opacity: 0;
  background: green;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container-active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>