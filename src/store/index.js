import Vue from "vue";
import Vuex from "vuex";
import { api } from "./api";
import { MessageStore } from "./messageStore";
import { ProfileStore } from "./profileStore";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
  },
  modules: { MessageStore, ProfileStore },
});
