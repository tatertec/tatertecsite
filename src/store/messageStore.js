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
    /**@param {object} data sends a message to the database props needed are {string} senderName  {string}senderEmail {string} senderPhoneNumber*/
    async sendMessage({}, data) {
      try {
        await api.post("messages", data);
      } catch (error) {
        console.error(error);
      }
    },
    /**@param {any}commit commits data to store*/
    async getMessages({ commit }) {
      try {
        let res = await api.get("messages");
        commit("setMessages", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    /**@param {any}dispatch dispatches an action
     * @param {string} id   remove a message by its id*/
    async deleteMessage({ dispatch }, id) {
      try {
        let res = await api.delete("messages/" + id);
        if (res.data) {
          dispatch("removeMessage", id);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
