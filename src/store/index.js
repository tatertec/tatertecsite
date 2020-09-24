import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex);
let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "https://concretedigitalserver.herokuapp.com/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true,
});

export default new Vuex.Store({
  state: {
    profile: {},
    user: {},
    messages: [],
  },

  mutations: {
    setProfile(state, profileData) {
      state.profile = profileData;
    },

    setMessages(state, messages) {
      state.messages = messages;
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

    //TODO add this to my other client side templates

    async sendMessage({}, data) {
      console.log("sending message");
      try {
        let res = await api.post("messages", data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getMessages({ commit }) {
      try {
        let res = await api.get("messages");
        console.log(res.data);
        commit("setMessages", res.data);
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
  modules: {},
});
