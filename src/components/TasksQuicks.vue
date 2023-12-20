<!-- TasksComponent.vue -->
<template>
  <div class="card-chat bg-white rounded-md w-[534px] h-[537px]">
    <div class="content relative h-[537px]">
      <div class="button-task m-4">
          <div class="content-task pl-[50px] pr-[10px] flex justify-between items-center">
            <div class="my-tasks-dropdown">
              <div @click="toggleDropdown" class="dropdown-toggle">
                My Tasks
                <i class="fa-solid fa-chevron-down ml-[10px]"></i>
              </div>
              <div v-if="isDropdownOpen" class="dropdown-content">
                <ul>
                  <li>Personal Errands</li>
                  <li>Urgent To-Do</li>
                </ul>
              </div>
            </div>

            <button class="new-task-button py-[8px] px-[16px] rounded-[5px] text-white bg-blue1">New Task</button>

          </div>
      </div>

      <div v-if="isLoading" class="loading-overlay">
          <div class="flex flex-col items-center justify-center">
            <div class="loader"></div>
            <p class="text-gray2 mt-[10px]">Loading Task Lists ...</p>
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
        isDropdownOpen: false,
      };
    },
    mounted() {
      // Simulate loading delay
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },

    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
    },

    selectTask(task) {
      console.log(`Selected task: ${task}`);
      // Lakukan sesuatu dengan task yang dipilih
    },
  };
</script>

<style>

.my-tasks-dropdown {
  display: inline-block;
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  border: 1px solid #828282;
  color: #4F4F4F;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
}

.fa-chevron-down {
  margin-left: 5px;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: -45px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #828282;
  border-radius: 5px;
  /* border-top: none; */
  width: 200px;
  /* display: none; */
}

.dropdown-content ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.dropdown-content li {
  padding: 5px 10px;
  cursor: pointer;
  color: #4F4F4F;
  border-bottom: 1px solid #828282;
}

.dropdown-content li:last-child {
  border-bottom: unset;
}

.dropdown-content li:hover {
  background-color: #f0f0f0;
}

</style>