<template>
  <div class="col-12 p-0">
    <div v-if="!$auth.isAuthenticated" class="row">
      <div class="col-12 p-0 text-center py-5">
        <h1 class="text-primary">Login to continue</h1>
      </div>
      <div class="col-12 p-0">
        <div class="text-center py-5">
          <button class="btn btn-primary text-light px-5" @click="login">
            Login
          </button>
        </div>
      </div>
    </div>
    <div v-else class="row bg-secondary">
      <div class="col-12 p-0 text-center bg-light">
        <h1 class="text-primary h1-anim py-5">Dashboard</h1>
      </div>

      <div class="col-12 bg-secondary p-1">
        <div class="p-2">
          <div class="dropdown mr-1">
            <button
              type="button"
              class="btn btn-dark text-light dropdown-toggle"
              id="dropdownMenuOffset"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-offset="0,0"
            >
              {{ this.activeTool || "MENU" }}
            </button>
            <div
              class="dropdown-menu p-0 m-0"
              aria-labelledby="dropdownMenuOffset"
            >
              <span class="action dropdown-item">...</span>
              <span class="action dropdown-item">...</span>
              <span class="action dropdown-item">...</span>
              <span @click="getMessages" class="action dropdown-item"
                >Messages</span
              >
              <hr class="bg-dark p-0 m-0" />
              <span class="action dropdown-item text-danger" @click="logout"
                >logout</span
              >
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.activeTool === 'Messages'">
        <div v-if="messages.length > 0">
          <Message
            v-for="message in messages"
            :key="message.id"
            :message="message"
          />
        </div>
        <div >
          <Loading />
        </div>
      </div>
      <div v-if="this.activeTool === 'Portfolio'">
          <PortfolioManager/>
          />
        </div>
        <div v-else>
          <Loading />
        </div>
      </div>
      <div
        v-if="editPortfolio"
        class="col-12 col-lg-7 col-md-9 col-sm-11 py-5 m-auto p-0 text-center"
      >
        <p>{{ $auth.userInfo.email }}</p>
        <button class="btn btn-dark text-light my-3 p-3 px-5">
          <h3 class="m-0 p-0">
            <i class="fas fa-camera"></i>
          </h3>
        </button>
        <input class="d-none" ref="picture-file" type="file" />
        <br />
        <img
          class="preview-img"
          src="https://placehold.it/500x500?text=please%20select%20a%20file"
          alt
        />
        <br />
        <button class="btn btn-primary my-3">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "../components/Message";
import Loading from "../components/Loading";
$(function () {
  var navMain = $(".navbar-collapse");
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });
});
export default {
  data() {
    return {
      activeTool: null,
      editPortfolio: false,
      showMessages: true,
      sale: false,
      content: false,
    };
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
    profile() {
      return this.$store.state.profile;
    },
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    async getMessages() {
      this.$store.dispatch("getMessages");
      this.activeTool = "Messages";
    },
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
  components: {
    Message,
    Loading,
  },
};
</script>

<style>
.action {
  cursor: pointer;
}
/* .h1-anim {
  animation-name: h1;
  animation-duration: 1s;
  font-size: x-large;
  padding: 0.5rem;
  margin: 0rem;
} */
@keyframes h1 {
  0% {
    padding: 3rem;
    font-size: 36pt;
  }
  100% {
    padding: 0.5rem;
    font-size: x-large;
  }
}
.preview-img {
  width: 100%;
}
.profile-img {
  height: 3rem;
  width: 3rem;
  overflow: hidden;
  border-radius: 50%;
}
</style>
