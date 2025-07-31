// src/plugins/vuetify.js (exemplo de configuração de tema)
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#FF5722", // Seu laranja/vermelho principal (Santarém!)
          secondary: "#607D8B", // Um cinza para secundário
          accent: "#00BCD4", // Uma cor de destaque (ciano)
          error: "#F44336",
          warning: "#FFC107",
          info: "#2196F3",
          success: "#4CAF50",
        },
      },
    },
  },
});
