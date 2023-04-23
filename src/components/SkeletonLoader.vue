<template>
  <div class="skeleton-loader" :style="vars">&nbsp;</div>
</template>

<script lang="ts">
export default {
  name: "skeleton-loader",
  props: {
    height: String,
    width: String,
    borderRadius: {
      type: String,
      default: "3px",
    },
    duration: {
      type: String,
      default: '2s'
    },
    maxWidth: String
  },
  computed: {
    vars() {
      return {
        '--mw-skel-height': this.height,
        '--mw-skel-width': this.width,
        '--mw-skel-max-width': this.maxWidth,
        '--mw-skel-border-radius': this.borderRadius,
        '--mw-skel-duration': this.duration,
      }
    }
  }
};
</script>

<style scoped>
@keyframes skeleton {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
.skeleton-loader {
  height: var(--mw-skel-height);
  width: var(--mw-skel-width);
  max-width: var(--mw-skel-max-width);
  border-radius: var(--mw-skel-border-radius);
  background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  );
  background-size: 200%, 100%;
  box-shadow: 0 4px 6px -1px rgba(0 0 0 / 0.1), 0 2px 4px -2px rgba(0 0 0 / 0.1);
  animation: skeleton var(--mw-skel-duration) linear infinite;
}
</style>