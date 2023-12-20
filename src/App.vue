<!-- App.vue -->
<template>
  <div id="app">
    <router-view />
    <div class="menu flex h-screen">
    <div class="w-[285px] border-r border-white bg-gray1 p-4">
    </div>

    <div class="w-[1635px] bg-gray1">
      <!-- Content for the second column -->
      <div class="search h-[58px] bg-gray2 p-4">
        <i class="fa-solid fa-magnifying-glass text-white"></i>
      </div>
    </div>
  </div>
  <CircleMenu />
  </div>
</template>

<script setup>
  import CircleMenu from './components/CircleMenu.vue';
</script>

<script>

// export default {
//   components: {
//     CircleMenu,
//   },
// };
</script>
