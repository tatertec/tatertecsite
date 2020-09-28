<template>
  <div>
    <div
      class="modal bg-dark fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Account settings
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-between py-2">
              Text notifications
              <div class="d-inline" v-if="profile.textEnabled">
                <i @click="toggleTextAlert" class="fas fa-bell action px-2"></i>
              </div>
              <div class="d-inline" v-else>
                <i
                  @click="toggleTextAlert"
                  class="fas fa-bell-slash action px-2"
                ></i>
              </div>
            </div>
            <hr />
            <div class="py-2">
              <div class="d-flex justify-content-between">
                <label for="textAlertNumber p-0 m-0">Text Alert</label>
                <input
                  class="m-0 mx-2"
                  type="text"
                  v-model="textAlertValue"
                  :placeholder="profile.textAlertNumber"
                />
              </div>

              <small class="text-center"
                >Recive a text when you are almost out of texts</small
              >
              <hr />
            </div>
            <button
              @click="saveAll"
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountSettingsModal",

  created() {},

  data() {
    return {
      textAlertValue: "",
    };
  },
  computed: {
    profile() {
      return this.$store.state.ProfileStore.profile;
    },
  },
  methods: {
    toggleTextAlert() {
      this.profile.textEnabled = !this.profile.textEnabled;
      this.$store.dispatch("updateProfile", this.profile);
    },
    updateProfileTextAlert() {
      this.profile.textAlertNumber = this.textAlertValue;
      this.$store.dispatch("updateProfile", this.profile);
    },
    saveAll() {
      this.updateProfileTextAlert();
      this.textAlertValue = "";
    },
  },
};
</script>

<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #52f321;
}

input:focus + .slider {
  box-shadow: 0 0 1px #52f321;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>