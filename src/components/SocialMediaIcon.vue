<template>
  <div class="rounded-full border border-gray-500 w-10 h-10 inline-flex p-3 cursor-pointer">
    <font-awesome-icon :icon="['fab', icon]"></font-awesome-icon>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
export const allowedIcons = ['instagram', 'facebook-f', 'twitter', 'google-plus-g'] as const
export type Icon = 'instagram' | 'facebook-f' | 'twitter' | 'google-plus-g'
export default defineComponent({
  props: {
    icon: {
      type: String as PropType<Icon>,
      required: true
    }
  }
})
</script>