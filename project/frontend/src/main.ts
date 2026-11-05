import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { i18n } from "./translations/messages";

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount("#app");
