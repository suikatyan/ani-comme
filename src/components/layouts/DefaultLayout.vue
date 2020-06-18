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
        :to="{name: 'About'}"
        text
      >
        このサイトについて
        <v-icon small>
          mdi-newspaper-variant-outline
        </v-icon>
      </v-btn>

      <v-btn
        :to="{name: 'Config'}"
        text
      >
        設定
        <v-icon small>
          mdi-cog
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
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
