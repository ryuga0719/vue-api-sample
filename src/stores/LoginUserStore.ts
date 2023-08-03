// store/index.ts
import { defineStore } from "pinia";
import apiClient from "@/plugins/axios";

interface User {
  name: string;
  email: string;
}

export const useLoginUserStore = defineStore({
  id: "loginUser",
  state: () => ({
    user: {} as User,
  }),
  actions: {
    async fetchUserData() {
      try {
        const response = await apiClient.get("/user"); // ここにエンドポイントを指定

        const userData = response.data;
        this.user = userData;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
  },
});
