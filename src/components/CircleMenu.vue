<!-- CircleMenu.vue -->
<template>
    <div 
      :class="{ 'circle-menu': true, 'bg-gray2': $route.path === '/tasks' || $route.path === '/message', 'bg-menublue': $route.path === '/' }" 
      @click="toggleMenu">
      <img
          src="../img/icon-all-menu.png"
          class="w-15 m-auto"
      />
    </div>

    <div v-if="isOpen" 
      class="menu-items"
      :class="{'active': $route.path === '/message' || $route.path === '/tasks'}"
    >
      <div class="flex items-center" v-if="$route.path == '/'" >
        <router-link
          to="/tasks"
          class="circle-menu-items"
          :class="{'task-active': $route.path === '/tasks' }"
        >
          <p v-if="$route.path == '/'" class="text-gray6 mb-[10px]">Tasks</p>
          <!-- <i :class="{ 'fas fa-tasks bg-white': true, 'bg-taskactive menu-active': $route.path === '/tasks' }"></i> -->
          <img
              src="../img/menu-task.png"
              class="w-15 m-auto"
              :class="{ 'bg-white': true, 
                'bg-taskactive menu-active': $route.path === '/tasks' }"
          />
        </router-link>

        <router-link
          to="/message"
          class="circle-menu-items"
        >
          <p v-if="$route.path == '/'" class="text-gray6 mb-[10px]">Inbox</p>
          <!-- <i :class="{ 'fas fa-envelope bg-white': true, 'bg-inboxactive menu-active': $route.path === '/message' }"></i> -->

          <img
              src="../img/menu-inbox.png"
              class="w-10 m-auto"
              :class="{ 'fas fa-envelope bg-white': true, 
                'bg-inboxactive menu-active': $route.path === '/message' }"
          />
        </router-link>
      </div>


      <div class="menu-active" v-if="$route.path == '/message'" >
        <router-link
          to="/tasks"
          class="circle-menu-items noactive"
          :class="{'task-active': $route.path === '/tasks' }"
        >
          <p v-if="$route.path == '/'" class="text-gray6 mb-[10px]">Tasks</p>
          <!-- <i :class="{ 'fas fa-tasks bg-white': true, 'bg-taskactive menu-active': $route.path === '/tasks' }"></i> -->

          <img
              src="../img/menu-task.png"
              class="m-auto"
              :class="{ 'bg-white': true, 
              'bg-taskactive menu-active': $route.path === '/tasks' }"
          />
        </router-link>

        <router-link
          to="/message"
          class="circle-menu-items"
        >
          <p v-if="$route.path == '/'" class="text-gray6 mb-[10px]">Inbox</p>
          <!-- <i :class="{ 'fas fa-envelope': true, 'bg-inboxactive menu-active': $route.path === '/message' }"></i> -->

          <img
              src="../img/menu-inbox-active.png"
              class="m-auto"
              :class="{
                'bg-inboxactive menu-active': $route.path === '/message' }"
          />
        </router-link>
      </div>

      <div class="menu-active" v-if="$route.path == '/tasks'" >
       <router-link
          to="/message"
          class="circle-menu-items noactive"
        >
          <p v-if="$route.path == '/'" class="text-gray6 mb-[10px]">Inbox</p>
          <!-- <i :class="{ 'fas fa-envelope bg-white': true, 'bg-inboxactive menu-active': $route.path === '/message' }"></i> -->
          <img
              src="../img/menu-inbox.png"
              class="m-auto"
              :class="{ 'bg-white': true, 
                'bg-inboxactive menu-active': $route.path === '/message' }"
          />
        </router-link>

        <router-link
          to="/tasks"
          class="circle-menu-items"
          :class="{'task-active': $route.path === '/tasks' }"
        >
          <p v-if="$route.path == '/'" class="text-gray6 mb-[10px]">Tasks</p>
          <!-- <i :class="{ 'fas fa-tasks': true, 'bg-taskactive menu-active': $route.path === '/tasks' }"></i> -->
          <img
              src="../img/menu-task-active.png"
              class="m-auto"
              :class="{
                'bg-taskactive menu-active': $route.path === '/tasks' }"
          />
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      if (this.isOpen) {
        // If the menu is open, close it
        this.isOpen = false;
        this.$router.push('/');
      } else {
        // If the menu is closed, navigate to "/" and open it
        
        this.isOpen = true;
      }
    },
  },
};
</script>

<style>

.menu {
  position: relative;
}

.circle-menu {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  bottom: 30px;
  right: 30px;
}

.circle-menu i {
  color: #fff;
}

.menu-items {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: 105px;
}

.menu-items.active {
  right: 15px;
}

.menu-items.active .circle-menu-items.noactive {
  bottom: 3px;
  position: absolute;
  right: 90px;
}

.circle-menu-items {
  text-align: center;
}

.menu-active .circle-menu-items img {
  margin: 0 35px;
}

.circle-menu-items img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 15px;
  margin: 0 10px;
}

.circle-menu-items img.menu-active{
  width: 68px;
  height: 68px;
  margin: 0;
}

/* .menu-items img {
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.3s;
} */
</style>