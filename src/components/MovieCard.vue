<template>
  <div class="bg-white rounded-md movie-card overflow-hidden transition-transform duration-300 hover:-translate-y-3">
    <div class="h-full flex flex-col">
      <div class="h-2/3 overflow-hidden" :class="{ 'watched': watched }">
        <img class="w-full h-full object-cover object-center" :src="image" alt="">
      </div>
      <div class="relative p-7 h-full">
        <div class="h-full flex flex-col">
          <div class="absolute -top-7 right-7">
            <a class="movie-card__play-btn bg-purple" href="#"><font-awesome-icon class="play-btn__icon"
                :icon="['fass', 'play']" /></a>
          </div>

          <h2 class="text-3xl font-medium movie-card__title">{{ title }}</h2>

          <div class="py-3 flex justify-between items-center text-sm">
            <div>
              <font-awesome-icon class="text-yellow-400" size="sm" :icon="['fas', 'star']" />
              <span class="ml-1">{{ formatRating(rating) }}/{{ maxRating }}</span>
            </div>
            <div>
              {{ category }}
            </div>
          </div>

          <button @click="$emit('markWatched')" class="font-semibold flex justify-between my-3 hover:underline hover:cursor-pointer">Mark as watched</button>

          <p class="mb-7 leading-6 movie-card__overview">{{ overview }}</p>

          <div class="flex-grow flex items-end">
            <a href="#"
              class="w-fit text-sm cursor-pointer bg-purple text-white px-4 py-2 rounded inline-block font-bold uppercase">details</a>
          </div>
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
    rating: [Number],
    category: String,
    maxRating: {
      type: Number,
      default: 10
    },
    overview: {
      type: String,
      required: true
    },
    watched: Boolean
  },
  emits: ['markWatched'],
  methods: {
    formatRating(rating: number | undefined) {
      if (typeof rating === 'undefined')
        return '0.0';

      return rating.toFixed(1);
    }
  }
}
</script>

<style scoped lang="scss">
.movie-card {
  font-weight: 300;
  color: #948a99;
  box-shadow: 10px 10px 40px 0 rgb(52 58 64 / 10%);

  &__play-btn {
    box-shadow: 0 10px 30px 0 rgb(147 82 179 / 70%);
    height: 60px;
    width: 60px;
    line-height: 60px;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #fff;
      transform: scale(1.05);
    }
  }

  .watched {
    position: relative;
    user-select: none;

    &::after {
      content: 'watched';
      color: #FFF;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.6);
      inset: 0;
    }
  }

  &__title {
    color: #3e4555;
  }

  .play-btn__icon {
    height: 20px;
    width: 20px;
    color: #fff;
    border-radius: 50%;
  }

  &__overview {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    display: -moz-box;
    word-break: break-all;
  }
}
</style>