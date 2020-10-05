<template>
  <div class="row">
    <div class="col-12 p-0 bg-light">
      <div v-if="!$auth.isAuthenticated" class="row p-0 m-0">
        <Loading />
      </div>
      <div v-else class="row p-0 m-0">
        <div class="col-12 p-0 text-center bg-secondary">
          <h1 class="text-primary py-5">Dashboard</h1>
        </div>

        <div
          class="col-12 d-flex bg-secondary d-md-none py-3 justify-content-center"
        >
          <div class="dropdown mx-5">
            <div
              type="button"
              class="btn btn-dark text-light dashboard-menu-btn text-center p-2 m-0"
              id="dropdownMenuOffset"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-offset="0,0"
            >
              Menu
            </div>
            <div
              class="dropdown-menu p-0 m-0"
              aria-labelledby="dropdownMenuOffset"
            >
              <!--NOTE when added uncomment these links  -->
              <!-- <span @click="setTool('Portfolio')" class="action dropdown-item">
                Portfolio
              </span>
              <span @click="setTool('Sale')" class="action dropdown-item"
                >Sale</span
              > -->

              <span @click="setTool('Messages')" class="action dropdown-item"
                >Messages</span
              >
              <span @click="setTool('Account')" class="action dropdown-item"
                >Account</span
              >
            </div>
          </div>
        </div>
        <div class="col-12 justify-content-end d-none d-md-flex py-5">
          <!--NOTE when added uncomment these links  -->
          <!-- <span @click="setTool('Portfolio')" class="action px-4 link ">
              Portfolio
            </span>
            <span @click="setTool('Sale')" class="action px-4 link "
              >Sale</span
            > -->

          <span @click="setTool('Messages')" class="action px-4 link"
            >Messages</span
          >
          <span @click="setTool('Account')" class="action px-4 link"
            >Account</span
          >
        </div>
      </div>
      <div class="col-12">
        <div v-if="this.activeTool === 'Messages'">
          <MessageManager />
        </div>
      </div>
      <div class="col-12">
        <div v-if="this.activeTool === 'Portfolio'">
          <PortfolioManager />
        </div>
      </div>
      <div class="col-12">
        <div v-if="this.activeTool === 'Sale'">
          <SaleManager />
        </div>
      </div>
      <div class="col-12">
        <div v-if="this.activeTool === 'Account'">
          <AccountManager />
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
import AccountManager from "../components/dashboard/AccountManager";
import MessageManager from "../components/dashboard/MessageManager";
import PortfolioManager from "../components/dashboard/PortfolioManager";
import SaleManager from "../components/dashboard/SaleManager";
import Loading from "../components/Loading";

export default {
  data() {
    return {
      activeTool: "Account",
    };
  },
  computed: {
    profile() {
      return this.$store.state.ProfileStore.profile;
    },
  },

  methods: {
    async setTool(name) {
      this.activeTool = name;
    },
  },
  components: {
    MessageManager,
    PortfolioManager,
    SaleManager,
    AccountManager,
    Loading,
  },
};
</script>

<style>
.dropdown-item {
  transition: 0.3s;
  background: #212939 !important;
  color: rgb(235, 235, 235) !important;
  border-bottom: solid black 1px;
}
.dropdown-item:hover {
  transition: 0.3s;
  background: #212939d7 !important;
  color: rgb(235, 235, 235) !important;
  border-bottom: solid rgba(255, 255, 255, 0.527) 1px;
}

.dropdown-item:active {
  transition: 0.3s;
  background: #fbb84b !important;
  color: black !important;
  border-bottom: solid black 1px;
}
.dashboard-menu-btn {
  width: 10rem;
}
.action {
  cursor: pointer;
}

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
