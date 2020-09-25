import Vue from "vue";
import Vuex from "vuex";
import { api } from "./api";

export const MessageStore = {
  state: {
    messages: [],
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  actions: {
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
    async deleteMessage({ commit, dispatch }, id) {
      try {
        let res = await api.delete("messages/" + id);
        console.log(res.data);
        dispatch("getMessages");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
