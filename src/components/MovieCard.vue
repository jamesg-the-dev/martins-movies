<template>
  <div class="bg-white rounded-md movie-card overflow-hidden">
    <div>
      <div class="max-h-80 overflow-hidden">
        <img class="w-full" :src="image" alt="">
      </div>
      <div class="relative p-7">
        <div>
          <div class="absolute -top-7 right-7">
          </div>
          <h2 class="text-3xl font-medium movie-card__title">{{ title }}</h2>

          <div class="py-3 flex justify-between items-center text-sm">
            <div>
              <font-awesome-icon class="text-yellow-400" size="sm" :icon="['fas', 'star']" />
              <span class="ml-1">{{ rating }}/{{ maxRating }}</span>
            </div>
            <div>
              {{ category }}
            </div>
          </div>

          <p class="mb-7 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam...
          </p>

          <a href="#" class="text-sm cursor-pointer bg-purple text-white px-4 py-2 rounded inline-block font-bold uppercase">details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      required: true,
      type: String
    },
    rating: [Number, String],
    category: String,
    maxRating: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style scoped>
.movie-card {
  font-weight: 300;
  color: #948a99;
  box-shadow: 10px 10px 40px 0 rgb(52 58 64 / 10%);
}

.movie-card__title {
  color: #3e4555;
}
</style>