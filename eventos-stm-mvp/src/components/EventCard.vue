<template>
  <v-card
    class="event-card"
    :max-width="$vuetify.display.smAndDown ? '280' : '300'"
    elevation="3"
    @click="goToDetails"
    link
  >
    <v-img :src="event.imageUrl" height="180px" cover></v-img>

    <v-card-title class="text-h6 pb-1">{{ event.title }}</v-card-title>

    <v-card-subtitle class="pb-1">
      {{ event.location }} - {{ formatDate(event.date) }}
    </v-card-subtitle>

    <v-card-text>
      <div class="description-text">{{ event.description }}</div>
    </v-card-text>

    <v-card-actions>
      <div class="price text-h6 font-weight-bold">
        R$ {{ event.price.toFixed(2) }}
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary" variant="flat" @click.stop="goToDetails">
        Ver Detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push({
        name: "EventDetails",
        params: { id: this.event.id },
      });
    },
    formatDate(dateString) {
      const options = { month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString("pt-BR", options);
    },
  },
};
</script>

<style lang="scss" scoped>
.event-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 12px;
  min-width: 240px;
  flex-shrink: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    min-width: 280px;
    border-radius: 16px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
  }

  .v-img {
    border-radius: 0;
  }

  .v-card-title {
    white-space: normal;
    word-break: break-word;
    line-height: 1.3;
    min-height: 58px;
    padding: 12px 16px 8px 16px;
    font-size: 1.1rem;

    @media (min-width: 768px) {
      padding: 16px 20px 8px 20px;
      font-size: 1.2rem;
    }
  }

  .v-card-subtitle {
    white-space: normal;
    word-break: break-word;
    line-height: 1.3;
    min-height: 38px;
    padding: 0 16px 8px 16px;
    font-size: 0.9rem;
    opacity: 0.8;

    @media (min-width: 768px) {
      padding: 0 20px 8px 20px;
      font-size: 0.95rem;
    }
  }

  .v-card-text {
    padding: 8px 16px 12px 16px;

    @media (min-width: 768px) {
      padding: 8px 20px 16px 20px;
    }
  }

  .v-card-actions {
    padding: 12px 16px 16px 16px;

    @media (min-width: 768px) {
      padding: 16px 20px 20px 20px;
    }
  }

  .description-text {
    font-size: 0.85rem;
    color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    min-height: 60px;
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .price {
    color: var(--v-theme-primary);
    font-weight: 600;
  }
}
</style>
