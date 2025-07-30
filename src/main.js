// main.js or main.ts
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(Toast, {
  position: "top-right",
  timeout: 3000,
});
app.mount("#app");
