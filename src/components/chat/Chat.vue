<template>
  <v-card
    :style="styles"
    :class="cardClasses"
    class="pa-1 ma-1"
  >
    <v-row
      v-for="(row, rowIndex) in config.layout"
      :key="rowIndex"
      no-gutters
    >
      <v-col
        v-for="(col, colIndex) in row"
        :key="colIndex"
        :class="`text-${col.align}`"
        :cols="col.autoWidth ? 'auto' : false"
        :style="colStyles(col)"
        class="px-1"
      >
        <component
          :is="col.content"
          :chat="chat"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import DateComponent from '@/components/chat/frame/Date'
import DateIconName from '@/components/chat/frame/DateIconName'
import DateName from '@/components/chat/frame/DateName'
import Icon from '@/components/chat/frame/Icon'
import IconName from '@/components/chat/frame/IconName'
import Message from '@/components/chat/frame/Message'
import Name from '@/components/chat/frame/Name'
import Site from '@/components/chat/frame/Site'

export default {
  components: {
    Message,
    Name,
    Icon,
    IconName,
    Site,
    Date: DateComponent,
    DateIconName,
    DateName,
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
    chat: {
      type: Object,
      required: true,
    },
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.site.backgroundColor,
        borderRadius: this.site.commentAreaRounded ? '4px' : 0,
        textShadow: this.site.shadow ? '1px 1px 4px #00000070' : 'initial',
      }
    },
    site() {
      return this.config[this.chat.site]
    },
    cardClasses() {
      return {
        'elevation-0': !this.config.commentAreaShadow,
        'elevation-2': this.config.commentAreaShadow,
      }
    },
  },
  methods: {
    colStyles(col) {
      return {
        color: col.color,
      }
    },
  },
}
</script>
