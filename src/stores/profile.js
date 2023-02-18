import { defineStore } from "pinia";

export default defineStore("profile", {
  state() {
    return {
      id: 1,
      username: "jose perez",
      avatar: "/avatars/avatar.jpg",
      status: "active",
    };
  },
});
