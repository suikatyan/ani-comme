<template>
  <v-app>
    <v-app-bar
      color="primary"
      app
      dark
      hide-on-scroll
    >
      <router-link :to="{name: 'Home'}">
        <h1 class="white--text">
          あにこめ
        </h1>
      </router-link>
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
      <v-alert
        :icon="false"
        type="warning"
        class="text-center"
        tile
      >
        本サイトは開発途中（アルファ版）です。不具合がある可能性がありますので、了承の上ご利用ください。
        <v-tooltip
          fixed
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              href="https://twitter.com/suikatyan9"
              target="_blank"
              outlined
              v-on="on"
            >
              不具合報告
            </v-btn>
          </template>
          作者のTwitterに飛ぶ
        </v-tooltip>
      </v-alert>
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
