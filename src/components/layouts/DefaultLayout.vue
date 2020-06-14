<template>
  <v-app>
    <v-app-bar
      color="primary"
      app
      dark
      hide-on-scroll
    >
      <h1>あにこめ</h1>
      <v-spacer />
      <v-btn
        to="/config"
        icon
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>

    <v-footer
      color="primary"
      app
      dark
      absolute
    >
      <v-col
        class="text-center"
        cols="12"
      >
        &copy; 2020 suikatyan
      </v-col>
    </v-footer>
  </v-app>
</template>
