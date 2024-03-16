import "vue";
import "hookable";
import "devalue";
import { f as defineStore } from "../server.mjs";
const defaultValue = {
  user: {
    email: "",
    name: "",
    status: false
  }
};
const useAuthStore = defineStore("auth", {
  state: () => defaultValue,
  getters: {
    isAuth: (state) => state.user.status
  },
  actions: {
    clear() {
      this.$patch(defaultValue);
    },
    set(input) {
      this.$patch({ user: input });
    }
  }
});
const useIsLoadingStore = defineStore("isLoading", {
  state: () => ({
    isLoading: true
  }),
  actions: {
    set(data) {
      this.$patch({ isLoading: data });
    }
  }
});
export {
  useAuthStore as a,
  useIsLoadingStore as u
};
//# sourceMappingURL=auth.store-BtBICFDT.js.map
