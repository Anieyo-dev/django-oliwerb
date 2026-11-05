import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      lng_key_login: "Login",
      lng_key_addresEmail: "Email address",
      lng_key_password: "{msg} Password",
      lng_key_repeat: "Repeat",
      lng_key_unregisteredDesc: "If you have not an account, click ",
      lng_key_forgotPasswordDesc: "If you forgot a password, click ",
      lng_key_here: "here",
      lng_key_hello: "Hello",
      lng_key_world: "World",
      lng_key_dashboardTXT: "Hello it is dashboard route",
    },
    pl: {
      lng_key_login: "Logowanie",
      lng_key_addresEmail: "Adres Email",
      lng_key_password: "{msg} Hasło",
      lng_key_repeat: "Powtórz",
      lng_key_unregisteredDesc: "Jeśli nie masz jeszcze konta, kliknij ",
      lng_key_forgotPasswordDesc: "Jeśli nie pamiętasz hasła, kliknij ",
      lng_key_here: "tutaj",
      lng_key_hello: "Witaj",
      lng_key_world: "Świecie",
      lng_key_dashboardTXT: "Witaj, to jest widok dashboard'a",
    },
    de: {
      lng_key_login: "Anmeldung",
      lng_key_addresEmail: "E-Mail-Addresse",
      lng_key_password: "Passwort",
      lng_key_unregisteredDesc: "Wenn Sie kein Konto haben, klicken Sie auf ",
      lng_key_forgotPasswordDesc:
        "Wenn Sie ein Passwort vergessen haben, klicken Sie auf ",
      lng_key_here: "hier",
      lng_key_hello: "Hallo",
      lng_key_world: "Welt",
      lng_key_dashboardTXT: "Hallo, es ist eine Dashboard-Route",
    },
  },
});
