<template>
  <footer class="footer bg-slate-700 text-white">
    <div class="section main-container">
      <div class="flex flex-wrap">
        <div class="basis-1/4 px-3">
          <img class="mb-8 w-2/3" src="../assets/logo-white.png" alt="">
          <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque. Praesentium suscipit provident explicabo dignissimos nostrum numquam deserunt earum accusantium et fugit.</p>
        </div>

        <div class="basis-1/4 px-3">
          <div>
            <h4 class="text-2xl font-bold mb-8">Useful Links</h4>
            <ul>
              <li class="transition-all hover:text-purple duration-300 hover:pl-2 pb-3"><RouterLink to="">About Us</RouterLink></li>
              <li class="transition-all hover:text-purple duration-300 hover:pl-2 pb-3"><RouterLink to="">Blog</RouterLink></li>
              <li class="transition-all hover:text-purple duration-300 hover:pl-2 pb-3"><RouterLink to="">Forum</RouterLink></li>
              <li class="transition-all hover:text-purple duration-300 hover:pl-2 pb-3"><RouterLink to="">My Account</RouterLink></li>
              <li class="transition-all hover:text-purple duration-300 hover:pl-2 pb-3"><RouterLink to="">Watch List</RouterLink></li>
            </ul>
          </div>
        </div>

        <div class="basis-1/4 px-3">
          <div>
            <h4 class="text-2xl font-bold mb-8">Latest News</h4>
            <ul>
              <li class="pb-3"><RouterLink to=""><div>Blog Post 1</div><small>JANUARY 13, 2018</small></RouterLink></li>
              <li class="pb-3"><RouterLink to=""><div>Blog Post 2</div><small>JANUARY 13, 2018</small></RouterLink></li>
              <li class="pb-3"><RouterLink to=""><div>Blog Post 3</div><small>JANUARY 13, 2018</small></RouterLink></li>
            </ul>
          </div>
        </div>

        <div class="basis-1/4 px-3">
          <div>
            <h4 class="text-2xl font-bold mb-8">Follow Us</h4>
            <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque.</p>
            <div>
              <RouterLink to="">
                <SocialMediaIcon :class="{'ml-3': i !== 0}" v-for="(icon, i) in allowedIcons" :key="i" :icon="icon"/>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t py-6 border-t-gray-500">
      <div class="main-container">
        <div class="flex justify-between">
          <ul>
            <li class="mr-4 transition-color duration-300 hover:text-purple inline-block"><RouterLink to="">Privacy & Cookies</RouterLink></li>
            <li class="mr-4 transition-color duration-300 hover:text-purple inline-block"><RouterLink to="">Terms & Condtions</RouterLink></li>
            <li class="mr-4 transition-color duration-300 hover:text-purple inline-block"><RouterLink to="">Legal Disclaimer</RouterLink></li>
            <li class="mr-4 transition-color duration-300 hover:text-purple inline-block"><RouterLink to="">Community</RouterLink></li>
          </ul>

          <div>
            All Rights Reserved by <span class="capitalize">{{ appName() }}</span>.
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import { RouterLink } from 'vue-router';
import { allowedIcons } from './SocialMediaIcon.vue';
import SocialMediaIcon from './SocialMediaIcon.vue';

export default {
    components: { RouterLink, SocialMediaIcon },
    data() {
      return {
        allowedIcons
      }
    }
}
</script>

<style scoped>
.footer {
  background-color: #3e4555;
}
</style>