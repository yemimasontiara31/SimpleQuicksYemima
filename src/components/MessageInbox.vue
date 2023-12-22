<!-- Message.vue -->
<template>
  <div class="card-chat bg-white rounded-md w-[650px] h-[537px]">
    <div v-if="!showDetails && !showDetails2 && !showDetails3" class="content relative h-[537px]">
      <div class="search rounded-md border border-gray2 mt-[24px] m-4">
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
        <div class="content-chats">
          <div 
            class="chat-new flex py-[22px] mx-4 border-b border-gray3 cursor-pointer"
            @click="toggleDetails"
          >
            <div class="w-[80px]">
              <div class="group flex">
                <img
                  src="../img/person_gray.png"
                  class="m-auto bg-gray5"
                />

                <img
                  src="../img/person_white.png"
                  class="m-auto bg-blue1 top"
                />
              </div>
            </div>
            <div class="content-chat ml-[15px]">
              <div class="title-date flex">
                <h3 class="text-blue1 font-bold">109220-Naturalization</h3>
                <p class="ml-[10px] text-gray2">January 1,2021 19:10</p>
              </div>

              <div class="name">
                <h4 class="text-gray2 font-medium	">Cameron Phillips :</h4>
              </div>

              <div class="last-chat">
                <p class="text-gray2"  style="font-size: 14px;">Please check this out!</p>
              </div>

            </div>
          </div>

          <div 
            class="chat-2 flex py-[22px] mx-4 border-b border-gray3 cursor-pointer"
            @click="toggleDetails2"
          >
            <div class="w-[80px]">
              <div class="group flex">
                <img
                  src="../img/person_gray.png"
                  class="m-auto bg-gray5"
                />

                <img
                  src="../img/person_white.png"
                  class="m-auto bg-blue1 top"
                />
              </div>
            </div>
            <div class="content-chat ml-[15px]">
              <div class="title-date flex">
                <h3 class="text-blue1 font-bold w-[250px]">I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</h3>
                <p class="text-gray2">02/06/2021 10:45</p>
              </div>

              <div class="name">
                <h4 class="text-gray2 font-medium	">Obaidullah Amarkhil :</h4>
              </div>

              <div class="last-chat">
                <p class="text-gray2"  style="font-size: 14px;">Morning. I’ll try to do them. Thanks</p>
              </div>

            </div>
          </div>

          <div 
            class="chat-3 flex py-[22px] mx-4 border-b border-gray3 cursor-pointer"
            @click="toggleDetails3"
          >
            <div class="w-[80px] flex justify-center">

              <div class="initial-circle bg-blue1">
                {{ getInitials('FastVisa') }}
              </div>
            </div>
            <div class="content-chat ml-[15px]">
              <div class="title-date flex">
                <h3 class="text-blue1 font-bold">FastVisa Support</h3>
                <p class="ml-[10px] text-gray2">01/06/2021 12:19</p>
              </div>

              <div class="last-chat">
                <p class="text-gray2"  style="font-size: 14px;">Hey there! Welcome to your inbox.</p>
              </div>
            </div>
          </div>
        </div>
        
         
      </div>

      
    </div>

    <div v-if="showDetails" class="content-chat w-[650px] h-[537px]">
        <div class="head-chat p-[20px] flex justify-between items-center border-b border-gray4">
          <div class="chat-name flex items-center">
            <i class="fa-solid fa-arrow-left cursor-pointer" @click="toggleDetails"></i>

            <div class="title ml-[10px]">
              <h3 class="font-bold text-blue1">109220-Naturalization</h3>
              <h4 class="text-gray1">3 Participants</h4>
            </div>
            
          </div>
          
          <div class="close cursor-pointer" @click="toggleDetails">
              <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div class="text-content p-[20px]">
          <div class="sender">
            <h3 class="font-bold text-yellow">Dina</h3>
            <div class="body flex items-top">
                <div class="bg-lightyellow rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>Hey there. 
                    How is the progress of this project?</p>
                  
                  <p class="mt-[15px]">16:32</p>
                </div>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdown">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>

          <div class="you flex flex-col items-end mt-[10px]">
            <h3 class="font-bold text-purple">You</h3>
            <div class="body flex items-top">
                <div class="dropdown-container mr-[10px] cursor-pointer" @click="toggleDropdown2">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen2" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-lightpurple rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>Hi, No worries. It will be completed ASAP. I’ve asked Cameron yesterday.</p>
                  
                  <p class="mt-[15px]">16:35</p>
                </div>
            </div>
          </div>

          <div class="sender mt-[10px]">
            <h3 class="font-bold text-green">Cameron Phillips</h3>
            <div class="body flex items-top">
                <div class="bg-lightgreen rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>Please check this out!</p>
                  
                  <p class="mt-[15px]">16:45</p>
                </div>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdown3">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen3" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>

          <div class="type">
            <div class="type-msg flex justify-between items-center">
              <div class="py-[8px] px-[16px] w-full border border-gray3 rounded-[5px] mr-[10px]">
                <p class="text-gray1">Type a new message</p>
              </div>
              <button class="py-[8px] px-[16px] rounded-[5px] text-white bg-blue1">Send</button>
            </div>
          </div>
        </div>
    </div>

    <div v-if="showDetails2" class="content-chat w-[650px] h-[537px]">
        <div class="head-chat p-[20px] flex justify-between items-center border-b border-gray4">
          <div class="chat-name flex items-center">
            <i class="fa-solid fa-arrow-left cursor-pointer" @click="toggleDetails2"></i>

            <div class="title ml-[10px]">
              <h3 class="font-bold text-blue1">I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</h3>
              <h4 class="text-gray1">3 Participants</h4>
            </div>
            
          </div>
          
          <div class="close cursor-pointer" @click="toggleDetails2">
              <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div class="text-content p-[20px]" style="overflow-y: auto; max-height: 300px;" @scroll="handleScroll">
          <div class="sender">
            <h3 class="font-bold text-yellow">Mary Hilda</h3>
            <div class="body flex items-top">
                <div class="bg-lightyellow rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>Just Fill me in for his updates yea?</p>
                  
                  <p class="mt-[10px]">19:32</p>
                </div>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdown">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>

          <div class="you flex flex-col items-end mt-[10px]">
            <h3 class="font-bold text-purple">You</h3>
            <div class="body flex items-top">
                <div class="dropdown-container mr-[10px] cursor-pointer" @click="toggleDropdown2">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen2" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-lightpurple rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>No worries. It will be completed ASAP. I’ve asked him yesterday.</p>
                  
                  <p class="mt-[10px]">19:32</p>
                </div>
            </div>
          </div>

          <div class="spacer-line">
            <div class="line"></div>
            <div class="text">Today June 09, 2021</div>
            <div class="line"></div>
          </div>

          <div class="sender">
            <h3 class="font-bold text-yellow">Mary Hilda</h3>
            <div class="body flex items-top">
                <div class="bg-lightyellow rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>Hello Obaidullah, I will be your case advisor for case #029290. 
                    I have assigned some homework for you to fill. 
                    Please keep up with the due dates. Should you have any questions, 
                    you can message me anytime. Thanks.</p>
                  
                  <p class="mt-[10px]">19:32</p>
                </div>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdown3">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen3" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>

          <div class="you flex flex-col items-end mt-[10px]">
            <h3 class="font-bold text-purple">You</h3>
            <div class="body flex items-top">
                <div class="dropdown-container mr-[10px] cursor-pointer" @click="toggleDropdown4">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen4" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-lightpurple rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.</p>
                  
                  <p class="mt-[10px]">19:32</p>
                </div>
            </div>
          </div>

          <div class="sender">
            <h3 class="font-bold text-yellow">Mary Hilda</h3>
            <div class="body flex items-top">
                <div class="bg-lightyellow rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>Sure thing ,Claren.</p>
                  
                  <p class="mt-[10px]">19:32</p>
                </div>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdown5">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen5" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>

          <div v-if="showNewMessage" class="flex justify-center items-center p-[10px] my-[20px] mx-auto new-message bg-lightblue w-fit rounded-[5px]">
            <p class="text-blue1">New Message</p>
            <i class="fa-solid fa-arrow-down text-gray6 ml-[10px]"></i>
          </div>

           <div class="spacer-line">
              <div class="line red"></div>
              <div class="text-red">New Message</div>
              <i class="fa-solid fa-arrow-down text-gray6 ml-[10px]"></i>
              <div class="line red"></div>`
          </div>

          <div class="sender mt-[10px]">
            <h3 class="font-bold text-green">Obaidullah Amarkhil</h3>
            <div class="body flex items-top">
                <div class="bg-lightgreen rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>Morning. I’ll try to do them. Thanks</p>
                  
                  <p class="mt-[15px]">19:32</p>
                </div>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdown6">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen6" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div class="type p-[20px] w-[540px]">
            <div class="type-msg flex justify-between items-center">
              <div class="py-[8px] px-[16px] w-full border border-gray3 rounded-[5px] mr-[10px]">
                <p class="text-gray1">Type a new message</p>
              </div>
              <button class="py-[8px] px-[16px] rounded-[5px] text-white bg-blue1">Send</button>
            </div>
          </div>
    </div>

    <div v-if="showDetails3" class="content-chat w-[650px] h-[537px]">
        <div class="head-chat p-[20px] flex justify-between items-center border-b border-gray4">
          <div class="chat-name flex items-center">
            <i class="fa-solid fa-arrow-left cursor-pointer" @click="toggleDetails3"></i>
            <h3 class="font-bold text-blue1 ml-[10px]">FastVisa Support</h3>
          </div>
          
          <div class="close cursor-pointer" @click="toggleDetails3">
              <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div class="text-content p-[20px]">
          <div class="sender">
            <h3 class="font-bold text-blue1">FastVisa Support</h3>
            <div class="body bg-graychat rounded-md text-gray2 p-[10px] w-[400px]">
              <p>Hey there. 
                Welcome to your inbox! Contact us for more information and help about anything! 
                We’ll send you a response as soon as possible.</p>
              
              <p class="mt-[20px]">19:32</p>
            </div>
          </div>

          <div class="you flex flex-col items-end mt-[10px]">
            <h3 class="font-bold text-purple">You</h3>
            <div class="body flex items-top">
                <div class="dropdown-container mr-[10px] cursor-pointer" @click="toggleDropdown">
                  <i class="fa-solid fa-ellipsis text-gray2"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpen" class="dropdown-content edit">
                    <ul>
                      <li class="text-blue1">Edit</li>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-lightpurple rounded-md text-gray2 p-[10px] w-[400px]">
                  <p>Hi, I need help with something can you help me ?</p>
                  
                  <p class="mt-[20px]">19:32</p>
                </div>
            </div>
          </div>

          <div class="type">

            <div class="loader-chat p-[15px] flex items-center rounded-[5px] mb-[10px] bg-lightblue w-full">
              <div class="loader chat"></div>
              <p>Please wait while we connect you with one of our team ...</p>
            </div>
            <div class="type-msg flex justify-between items-center">
              <div class="py-[8px] px-[16px] w-full border border-gray3 rounded-[5px] mr-[10px]">
                <p class="text-gray1">Type a new message</p>
              </div>
              <button class="py-[8px] px-[16px] rounded-[5px] text-white bg-blue1">Send</button>
            </div>
          </div>
        </div>
    </div>

   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: true,
        showDetails: false,
        showDetails2: false,
        showDetails3: false,
        isDropdownOpen: false,
        isDropdownOpen2: false,
        isDropdownOpen3: false,
        isDropdownOpen4: false,
        isDropdownOpen5: false,
        isDropdownOpen6: false,
        showNewMessage: false,
        lastScrollTop: 0,
      };
    },

    mounted() {
      // Simulate loading delay
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },

    methods: {
      getInitials(name) {
        return name
          .split(' ')
          .map(word => word[0])
          .join('')
          .toUpperCase();
      },

      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },

      toggleDropdown2() {
        this.isDropdownOpen2 = !this.isDropdownOpen2;
      },

      toggleDropdown3() {
        this.isDropdownOpen3 = !this.isDropdownOpen3;
      },

      toggleDropdown4() {
        this.isDropdownOpen4 = !this.isDropdownOpen4;
      },

      toggleDropdown5() {
        this.isDropdownOpen5 = !this.isDropdownOpen5;
      },

      toggleDropdown6() {
        this.isDropdownOpen6 = !this.isDropdownOpen6;
      },

      toggleDetails() {
        this.showDetails = !this.showDetails;
      },

      toggleDetails2() {
        this.showDetails2 = !this.showDetails2;
      },

      toggleDetails3() {
        this.showDetails3 = !this.showDetails3;
      },

      handleScroll(event) {
        // Check if the scroll has reached the bottom
        const isAtBottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;

        // Update the showNewMessage property based on the scroll position
        this.showNewMessage = !isAtBottom;
      },
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

.loader.chat {
  width: 20px;
  height: 20px;
  border: 2px solid #F8F8F8;
  border-top: 2px solid #2F80ED;
  margin-right: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.group img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 10px;
}

.group img.top {
  z-index: 2;
  margin-left: -27px;
}

.chat-new {
  position: relative;
}

.chat-new:after {
  width: 5px;
  height: 5px;
  background-color: #EB5757;
  position: absolute;
  bottom: 30px;
  right: 20px;
  border-radius: 50%;
  content: '';
}

.initial-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ffffff; /* Set your desired text color */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px; /* Set your desired font size */
  font-weight: bold; /* Set your desired font weight */
}

.content-chat {
  position: relative;
}

.type {
  position: fixed;
  bottom: 140px;
  width: 495px;
}

.dropdown-container {
  position: relative;
}

.dropdown-content.edit {
  position: absolute;
  top: 15px; /* Place the dropdown below the icon */
  left: 0;
  z-index: 2;
  width: 150px;
}

.dropdown-content.edit li:first-child{
  color: #2F80ED;
}

.dropdown-content.edit li:last-child{
  color: #EB5757;
}

.spacer-line {
  display: flex;
  align-items: center;
  margin: 20px 0; 
}

.line {
  flex: 1;
  height: 2px;
  background-color: #4F4F4F; 
  margin: 0 10px; 
}

.line.red {
  background-color: #EB5757; 
}

.text {
  font-size: 14px; 
  color: #4F4F4F; 
}

/* .new-message {
  text-align: center;
  padding: 10px;
  background-color: #eee;
  border-top: 1px solid #ccc;
} */

</style>
