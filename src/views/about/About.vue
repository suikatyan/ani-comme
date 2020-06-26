<template>
  <default-layout class="about">
    <v-breadcrumbs :items="breads">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h2>このサイトについて</h2>
    <div class="pt-4">
      <v-card
        v-for="content in contents"
        :key="content.title"
        class="my-4"
        outlined
      >
        <v-card-title>
          {{ content.title }}
        </v-card-title>
        <v-card-text class="text--primary">
          {{ content.text }}
        </v-card-text>
      </v-card>

      <v-card
        class="my-4"
        outlined
      >
        <v-card-title>
          サイトのソースは見れますか。
        </v-card-title>
        <v-card-text class="text--primary">
          GitHub上で見ることができます。
          <v-btn
            color="primary"
            href="https://github.com/suikatyan/ani-comme"
            target="_blank"
            outlined
          >
            GitHub
            <v-icon>
              mdi-github
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-card>

      <v-card
        class="my-4"
        outlined
      >
        <v-card-title>
          不具合を見つけました。 / 作者に連絡が取りたい。
        </v-card-title>
        <v-card-text class="text--primary">
          作者のTwitterまでご連絡ください。
          <v-btn
            color="primary"
            href="https://twitter.com/suikatyan9"
            target="_blank"
            outlined
          >
            Twitter
            <v-icon>
              mdi-twitter
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/components/layouts/DefaultLayout'

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      breads: [
        {
          text: 'トップ',
          to: '/',
        },
        {
          text: 'このサイトについて',
          to: '/config',
          disabled: true,
        },
      ],
      contents: [
        {
          title: 'このサイトでは何ができますか。',
          text: 'ニコニコ生放送とYoutubeのコメントを取得し、表示するツールです。コメントの表示レイアウトはカスタマイズできます。各配信サイトへのログインは不要です。',
        },
        {
          title: 'コメント投稿はできますか。',
          text: 'コメントの表示に特化したツールのため、コメント投稿はできません。',
        },
        {
          title: '棒読みちゃんとの連携はできますか。',
          text: 'できません。そのうち対応するかもしれません。',
        },
        {
          title: 'コテハンやNG設定はできますか。',
          text: 'できません。そのうち対応するかもしれません。',
        },
        {
          title: 'Youtubeのコメント表示にラグがあるのはなぜですか。',
          text: 'コメントはリアルタイムではなく一定間隔（4秒〜10秒）でコメントを取得しています。これはYoutubeの仕様であり、どうしてもラグが発生してしまいます。ちなみにYoutubeのページに埋め込まれている公式のチャット画面も同様にラグが発生しています。',
        },
        {
          title: '推奨環境は何ですか。',
          text: 'FireFox（最新版）、Google Chrome（最新版）です。また、JavaScriptを有効にしてください。スマートフォン・タブレットには対応していません。',
        },
        {
          title: 'クッキーは使っていますか。',
          text: '使っていません。Google Analyticsなどのツールも使用していません。',
        },
      ],
    }
  },
}
</script>
