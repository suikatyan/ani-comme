<template>
  <v-card
    :style="styles"
    :class="cardClassed"
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
import Icon from '@/components/chat/frame/Icon'
import IconName from '@/components/chat/frame/IconName'
import Message from '@/components/chat/frame/Message'
import Name from '@/components/chat/frame/Name'
import Site from '@/components/chat/frame/Site'
import Time from '@/components/chat/frame/Time'
import TimeIconName from '@/components/chat/frame/TimeIconName'
import TimeName from '@/components/chat/frame/TimeName'

export default {
  components: {
    Message,
    Name,
    Icon,
    IconName,
    Site,
    Time,
    TimeIconName,
    TimeName,
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
      }
    },
    site() {
      return this.config[this.chat.site]
    },
    cardClassed() {
      return {
        'elevation-0': !this.config.commentAreaShadow,
        'elevation-2': this.config.commentAreaShadow,
      }
    },
  },
}
</script>
