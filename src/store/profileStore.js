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
    async updateProfile({ commit, dispatch }, profile) {
      try {
        let res = await api.put("profile/" + profile.id, profile);
        console.log(res.data);
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
