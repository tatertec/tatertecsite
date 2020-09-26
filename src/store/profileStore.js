import { api } from "./api";

export const ProfileStore = {
  state: { profile: {} },
  mutations: {
    setProfile(state, profileData) {
      state.profile = profileData;
    },
  },

  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async toggleTextAlert({ commit, dispatch }, data) {
      data.textEnabled = !data.textEnabled;
      try {
        let res = await api.put("profile/" + data.id, data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
