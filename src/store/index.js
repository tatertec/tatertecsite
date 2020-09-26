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
  modules: { MessageStore, ProfileStore },
});
