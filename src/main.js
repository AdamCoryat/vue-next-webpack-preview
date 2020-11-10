import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";

const app = createApp({
  data: () => ({
    modalOpen: false,
  }),
  methods: {
    toggleModalState() {
      this.modalOpen = !this.modalOpen;
    },
  },
});

app.mount("#app");
createApp(App).mount("#app");
