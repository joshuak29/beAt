 <template>
  <main class="w-full h-full min-h-screen flex flex-col p-4 gap-6 mt-10">
    <!--  -->
    <header class="w-full fixed flex flex-row top-0 left-0 h-10 items-center px-2 pr-4 justify-between bg-gray-100">
      <span class="text-xl font-bold">dark_jnr</span>
      <font-awesome-icon icon="bars" class="text-xl"/>
    </header>
    <!-- profile pic and posts, followers and following -->
    <div class="w-full flex flex-row items-center gap-10">
      <!-- pic -->
      <img src="" class="w-24 rounded-full bg-gray-400 aspect-square" />

      <!-- followers -->
      <div class="flex flex-row gap-4">
        <div class="text-center">
          <div class="font-semibold text-lg">100</div>
          <div class="text-xs">Followers</div>
        </div>

        <!-- following -->
        <div class="text-center">
          <div class="font-semibold text-lg">23</div>
          <div class="text-xs">Following</div>
        </div>
      </div>
      
    </div>

    <!-- bio -->
    <div class="text-gray-700">
      <!-- name -->
      <h1 class="font-bold text-lg">Rukundo Josue</h1>
      <p>Son of God</p>
      <p>John 3:16</p>
    </div>

    <!-- friends -->
    <!-- <article>
      <h1 class="text-lg font-semibold mb-2 flex flex-row justify-between"><span>Friends</span> <span class="text-xs text-blue-400 underline">View all</span></h1>
      <div class="flex flex-row gap-2 w-full overflow-scroll">
        <FriendVue v-for="i in 5" :key="i" />
      </div>
    </article> -->

    <!-- posts -->
    <article>
      <h1 class="text-lg font-semibold mb-4 flex flex-row justify-between"><span>Posts</span> <span class="text-xs text-blue-400 underline">View all</span></h1>
      <div class="flex flex-col w-full">
        <PostVue />
        <PostVue />
        <PostVue />
      </div>
    </article>
  </main>
</template>

<script setup>
import FriendVue from "../components/profile/Friend.vue";
import PostVue from "../components/shared/Post.vue";
</script>