<!-- Message.vue -->
<template>
  <div class="card-chat bg-white rounded-md w-[534px] h-[537px]">
    <div class="content relative h-[537px]">
      <div class="search rounded-md border-2	border-gray2 m-4">
          <div class="content-search h-[32px] px-[50px] flex justify-between items-center">
            <p class="text-gray1">Search</p>
            <i class="fa-solid fa-magnifying-glass text-gray1"></i>
          </div>
      </div>

      <div v-if="isLoading" class="loading-overlay">
          <div class="flex flex-col items-center justify-center">
            <div class="loader"></div>
            <p class="text-gray2 mt-[10px]">Loading Chats ...</p>
          </div>
        </div>
        <div v-else>
          <!-- Your content when not loading -->
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: true,
      };
    },
    mounted() {
      // Simulate loading delay
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
  };
</script>

<style>

.card-chat {
  position: absolute;
  bottom: 120px;
  right: 40px;
  z-index: 2;

}

.loading-overlay {
  position: absolute;
  top: 40%;
  left: 40%;

}

.loader {
  border: 6px solid #F8F8F8;
  border-radius: 50%;
  border-top: 6px solid #C4C4C4;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin-left: -5px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
