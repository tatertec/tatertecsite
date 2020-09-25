import Vue from "vue";
import Vuex from "vuex";
import { api } from "./api";
import { MessageStore } from "./messageStore";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
  },
  mutations: {
    setProfile(state, profileData) {
      state.profile = profileData;
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    //TODO add the logic and server stuff for this
    async addToEmailList({}, email) {
      try {
        //NOTE emailList is not a route yet
        let res = await api.post("emailList", email);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: { MessageStore },
});
