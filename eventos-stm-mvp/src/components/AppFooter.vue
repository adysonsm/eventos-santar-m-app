<template>
  <v-footer class="d-flex flex-column pa-0" app>
    <v-card
      flat
      tile
      width="100%"
      class="text-center"
      color="primary"
      rounded="0"
    >
      <v-card-text class="py-3 px-2">
        <v-row class="justify-center">
          <v-col cols="12" sm="8" md="6">
            <h3 class="text-h6 text-white mb-2">Conecte-se conosco!</h3>
            <v-btn
              v-for="icon in socialIcons"
              :key="icon.name"
              class="mx-2"
              :icon="icon.icon"
              variant="plain"
              color="white"
              size="default"
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
            ></v-btn>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white-text py-3 px-2">
        <v-row>
          <v-col cols="12" md="6" class="text-left text-sm-center text-md-left">
            <p class="text-body-2 mb-1">
              <v-icon size="small" class="mr-1">mdi-map-marker</v-icon>
              Av. Tapajós, 1234 - Centro, Santarém - PA
            </p>
            <p class="text-body-2 mb-1">
              <v-icon size="small" class="mr-1">mdi-phone</v-icon>
              (93) 99999-9999
            </p>
            <p class="text-body-2 mb-1">
              <v-icon size="small" class="mr-1">mdi-email</v-icon>
              contato@eventossantarem.com
            </p>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="text-right text-sm-center text-md-right"
          >
            <p class="text-body-2 mb-0">
              &copy; {{ new Date().getFullYear() }} Eventos Santarém. Todos os
              direitos reservados.
            </p>
            <p class="text-caption mt-0">
              Desenvolvido com
              <v-icon size="x-small" color="red">mdi-heart</v-icon> em Santarém.
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    socialIcons: [
      {
        name: "Facebook",
        icon: "mdi-facebook",
        link: "https://facebook.com/eventossantarem",
      },
      { name: "Instagram", icon: "https://instagram.com/eventossantarem" },
      {
        name: "Twitter",
        icon: "mdi-twitter",
        link: "https://twitter.com/eventossantarem",
      },
      {
        name: "LinkedIn",
        icon: "mdi-linkedin",
        link: "https://linkedin.com/company/eventossantarem",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.v-footer {
  background-color: #f5f5f5;
}

.v-card {
  // Por padrão, 'color="primary"' já usa a cor primária do seu tema Vuetify.
  // Se quiser uma cor diferente, pode usar um hex code direto aqui ou outra classe de cor do Vuetify.
  // Exemplo para uma cor mais clara (se seu 'primary' for escuro):
  // background-color: #FF8A65 !important;
  // Ou um cinza claro para o rodapé:
  // background-color: #ECEFF1 !important;
  // color: #424242 !important; // Se o fundo for claro, mude a cor do texto para escuro
}

.white-text {
  color: rgba(255, 255, 255, 0.7); // Mantém o texto claro para fundos escuros
}

// Estilos responsivos para quebra de texto em telas menores
@media (max-width: 600px) {
  .v-card-text p {
    font-size: 0.75rem !important;
  }
  .v-btn.v-btn--icon {
    font-size: 1.2rem !important; // Ícones um pouco menores
  }
}
</style>
