<template>
  <v-row>
    <v-col
      cols="4"
      class="d-flex flex-column justify-center"
    >
      <span class="ml-4">
        <slot name="title" />
      </span>
    </v-col>
    <v-col cols="8">
      <slot name="content" />
    </v-col>
  </v-row>
</template>
