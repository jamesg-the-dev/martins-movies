<template>
  <nav>
    <ul class="mx-auto">
      <li v-if="current !== 1" class="inline-block w-12 h-12 mr-2">
        <button @click="current--; selectPage()" class="paginator-item"><font-awesome-icon :icon="['fas', 'chevron-left']" /></button>
      </li>
      <li v-for="page in pages" :key="page" class="inline-block w-12 h-12 mr-2">
        <button class="paginator-item" @click="current = page; selectPage()" :class="{'selected': page === current}" type="button">{{ page }}</button>
      </li>
      <li v-if="current < length" class="inline-block w-12 h-12 mr-2">
        <button @click="current++; selectPage()" class="paginator-item"><font-awesome-icon :icon="['fas', 'chevron-right']" /></button>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
export default {
  emits: ['changePage'],
  props: {
    length: {
      type: Number,
      required: true
    },
    pagesAtATime: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      current: 1,
    }
  },
  computed: {
    pages() {
      //get the current group of pagesAtATime
      const displayPages = this.length < this.pagesAtATime ? this.length : this.pagesAtATime 
      
      /**
       * When displaying a certain number of pages at a time, each display will have a group. In order to retrieve the group number, I've dvided the current selected page with the number of pages being displayed at a time. I will then be able to retrieve the page numbers for that group by multiplying it to the `displayPages` variable
       */
      const group = Math.ceil(this.current / this.pagesAtATime)

      //similar to the above explanation, but getting the final group 
      const finalGroup = Math.ceil(this.length / this.pagesAtATime);

      //display only the remaining number of pages in the pagination element
      if (group !== 1 && group === finalGroup) {
        const remainder = this.length % this.pagesAtATime
        return [...Array(remainder).keys()].map(item => (this.length + item) - (remainder - 1))
      }
      
      //display the current page group in the pagination element
      return [...Array(displayPages).keys()].map(item => (displayPages * group + item) - (displayPages - 1))
    }
  },
  methods: {
    selectPage() {
      this.$emit('changePage', this.current)
    }
  }
}
</script>

<style scoped lang="scss">
.paginator-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  transition: all 400ms;

  &.selected {
    background-color: #9352b3;
    color: #FFF;
  }

  &:not(.selected):hover {
    background-color: #e7edef;
  }
}
</style>