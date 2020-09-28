<template>
  <div class="row py-5">
    <div class="col-12 col-lg-10 col-xxl-9 m-auto">
      <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              class="profile-img"
              :src="profile.picture"
              alt="profile image"
            />
          </div>
        </div>
        <div
          class="col-12 p-0 py-4 px-2 d-flex justify-content-between align-items-center"
        >
          <h4 class="m-0 px-3">Account</h4>
          <h4
            class="m-0 px-3 btn btn-dark text-light"
            type="button"
            data-toggle="modal"
            data-target="#accountSettingsModal"
            title="Account settings"
          >
            Settings
          </h4>
        </div>
        <div class="col-12">
          <hr class="bg-dark" />
        </div>

        <div class="col-12">
          <div class="d-flex justify-content-between">
            <label class="p-2 m-0"
              >texts remaining: {{ profile.textRemaining }}</label
            >
            <span
              type="button"
              data-toggle="modal"
              data-target="#purchaseModal"
              title="Account settings"
              class="px-lg-3 font-weight-bold px-1"
            >
              Buy more
            </span>
          </div>
          <hr class="p-0 m-0" />
        </div>
        <div class="col-12">
          <div class="d-flex">
            <label class="p-2 m-0"
              >Text alert when: {{ profile.textAlertNumber }} texts
              remain</label
            >
          </div>
          <hr class="p-0 m-0" />
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center">
            <label class="p-2 m-0"
              >Account Type: {{ profile.accountType }}</label
            >
            <div v-if="profile.accountType === 'basic'">
              <span
                type="button"
                data-toggle="modal"
                data-target="#upgradeAccountModal"
                title="Account settings"
                class="px-lg-3 font-weight-bold px-1"
              >
                Upgrade
              </span>
            </div>
          </div>
          <hr class="p-0 m-0" />
        </div>

        <div class="col-12 p-0">
          <AccountSettingsModal />
        </div>
        <div class="col-12 p-0">
          <PurchaseModal />
        </div>
        <div class="col-12 p-0">
          <UpgradeAccountModal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountSettingsModal from "./AccountSettingsModal";
import PurchaseModal from "./PurchaseModal";
import UpgradeAccountModal from "./upgradeAccountModal";
export default {
  name: "AccountManager",

  computed: {
    profile() {
      return this.$store.state.ProfileStore.profile;
    },
  },
  methods: {
    toggleTextAlert() {
      this.$store.dispatch("toggleTextAlert", this.profile);
    },
  },
  components: {
    AccountSettingsModal,
    PurchaseModal,
    UpgradeAccountModal,
  },
};
</script>

<style>
</style>