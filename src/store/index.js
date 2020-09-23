import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex);
let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true,
});

export default new Vuex.Store({
  state: {
    profile: {},
    user: {},
  },

  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getUser({ commit, dispatch }) {
      try {
        let res = await api.get("user");
        console.log(res.data);
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
