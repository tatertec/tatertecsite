import { api } from "./api";

export const MessageStore = {
  state: {
    messages: [],
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
    removeMessage(state, messageId) {
      state.messages = state.messages.filter((m) => m.id !== messageId);
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
    /**@param {any}commit calls api to get all messages for the loged in user*/
    async getMessages({ commit }) {
      try {
        let res = await api.get("messages");
        commit("setMessages", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    /**@param {any}dispatch
     * @param {string} id   removes a message by its id */
    async deleteMessage({ commit }, id) {
      try {
        let res = await api.delete("messages/" + id);
        if (res.data) {
          commit("removeMessage", id);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
