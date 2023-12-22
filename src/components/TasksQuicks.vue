<!-- TasksComponent.vue -->
<template>
  <div class="card-chat bg-white rounded-md w-[650px] h-[537px]">
    <div class="content relative h-[537px]">
      <div class="button-task mt-[24px]">
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

            <button class="new-task-button py-[8px] px-[16px] rounded-[5px] text-white bg-blue1"
              @click="toggleNewTask"
            >
              New Task
            </button>

          </div>
      </div>

      <div v-if="isLoading" class="loading-overlay">
          <div class="flex flex-col items-center justify-center">
            <div class="loader"></div>
            <p class="text-gray2 mt-[10px]">Loading Task Lists ...</p>
          </div>
        </div>
        <div v-else class="p-[20px]" style="overflow: scroll; max-height: 450px;">
          <!-- Your content when not loading -->

          <div class="content-task border-b border-gray3 pb-[22px] mx-4 cursor-pointer">
            <div 
              class="task flex items-center relative"
            >
              <input type="checkbox">
              <p class="text-gray2 ml-[10px] text-sm">Close off Case #012920- RODRIGUES, Amiguel</p>

              <div class="absolute flex items-center" style="right: 0;">

                <span class="days-left text-red ml-[20px] text-xs	">2 Days Left</span>
                <span class="days-left text-gray2 ml-[10px] text-xs">12/06/2021</span>
                <i class="fa-solid fa-chevron-up ml-[15px] text-gray2"></i>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdownDelete">
                  <i class="fa-solid fa-ellipsis text-gray3"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpenDelete" class="dropdown-content delete">
                    <ul>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="desc-task">
              <div class="date flex items-center">
                <i class="fa-regular fa-clock text-blue1"></i>

                <div class="datepicker text-gray2 ml-[15px]">
                    <input type="date" v-model="selectedDate" @blur="hideDatepicker" :placeholder="formattedPlaceholder"/>
                </div>
              </div>

              <div class="desc flex items-center">
                <img
                    src="../img/edit_pen.png"
                    class="m-auto w-[15px]"
                />

                <p class="ml-[25px] text-gray2" style="font-size: 14px;">Closing off this case since this application has been cancelled. 
                  No one really understand how this case could possibly be cancelled. 
                  The options and the documents within this document were totally a guaranteed for a success!</p>
              </div>
            </div>
          </div>

          <div class="content-task border-b border-gray3 pb-[22px] mx-4 cursor-pointer">
            <div 
              class="task flex items-center relative"
            >
              <input type="checkbox">
              <p class="text-gray2 ml-[10px] w-[55%] text-sm">Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203</p>

              <div class="absolute flex items-center" style="right: 0;">

                <span class="days-left text-red ml-[20px] text-xs	">4 Days Left</span>
                <span class="days-left text-gray2 ml-[10px] text-xs">14/06/2021</span>
                <i class="fa-solid fa-chevron-up ml-[15px] text-gray2"></i>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdownDelete2">
                  <i class="fa-solid fa-ellipsis text-gray3"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpenDelete2" class="dropdown-content delete">
                    <ul>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="desc-task">
              <div class="date flex items-center">
                <i class="fa-regular fa-clock text-blue1"></i>

                <div class="datepicker text-gray2 ml-[15px]">
                    <input type="date" v-model="selectedDate2" @blur="hideDatepicker" />
                </div>
              </div>

              <div class="desc flex items-center">
                <img
                    src="../img/edit_pen.png"
                    class="m-auto w-[15px]"
                />

                <p class="ml-[25px] text-gray2" style="font-size: 14px;">All Cases must include all payment transactions, 
                  all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.</p>
              </div>
            </div>
          </div>

          <div class="content-task border-b border-gray3 pb-[22px] mx-4 cursor-pointer">
            <div 
              class="task flex items-center relative"
            >
              <input type="checkbox">
              <p class="text-gray2 ml-[10px] text-sm">Set up appointment with Dr Blake</p>

              <div class="absolute flex items-center" style="right: 0;">

                <span class="days-left text-red ml-[20px] text-xs	">10 Days Left</span>
                <span class="days-left text-gray2 ml-[10px] text-xs">22/06/2021</span>
                <i class="fa-solid fa-chevron-up ml-[15px] text-gray2"></i>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdownDelete3">
                  <i class="fa-solid fa-ellipsis text-gray3"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpenDelete3" class="dropdown-content delete">
                    <ul>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="desc-task">
              <div class="date flex items-center">
                <i class="fa-regular fa-clock text-blue1"></i>

                <div class="datepicker text-gray2 ml-[15px]">
                    <input type="date" v-model="selectedDate3" @blur="hideDatepicker" />
                </div>
              </div>

              <div class="desc flex items-center">
                <img
                    src="../img/edit_pen.png"
                    class="w-[15px]"
                />

                <p class="ml-[25px] text-gray2" style="font-size: 14px;">No Description</p>              
              </div>
            </div>
          </div>

          <div class="done-task border-b border-gray3 py-[22px] mx-4 cursor-pointer">
            <div 
              class="task flex items-center relative" @click="toggleDetails"
            >
              <!-- <input type="checkbox" checked> -->
              <div class="custom-checkbox">
                <input type="checkbox" checked>
                <!-- Tambahkan teks label atau elemen lainnya jika diperlukan -->
              </div>
              <p class="text-gray2 ml-[10px] text-sm line-through">Contact Andrew for Online Meeting and Conference</p>

              <div class="absolute flex items-center" style="right: 0;">
                <span class="days-left text-gray2 ml-[10px] text-xs">3/06/2021</span>

                <i v-if="showDetails" class="fa-solid fa-chevron-up ml-[15px] text-gray2" @click="toggleDetails"></i>
                <i v-else class="fa-solid fa-chevron-down ml-[15px] text-gray2" @click="toggleDetails"></i>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdownDelete4">
                  <i class="fa-solid fa-ellipsis text-gray3"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpenDelete4" class="dropdown-content delete">
                    <ul>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="showDetails" class="desc-task">
              <div class="date flex items-center">
                <i class="fa-regular fa-clock text-blue1"></i>

                <div class="datepicker text-gray2 ml-[15px]">
                    <input type="date" v-model="selectedDate4" @blur="hideDatepicker" />
                </div>
              </div>

              <div class="desc flex items-center">
                <img
                    src="../img/edit_pen.png"
                    class="w-[15px]"
                />

                <p class="ml-[25px] text-gray2" style="font-size: 14px;">
                  Homeworks needed to be checked are as follows : 
                  Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.
                </p>              
              </div>
            </div>
          </div>

          <div class="done-task border-b border-gray3 py-[22px] mx-4 cursor-pointer">
            <div 
              class="task flex items-center relative" @click="toggleDetails2"
            >
              <!-- <input type="checkbox" checked> -->
              <div class="custom-checkbox">
                <input type="checkbox" checked>
                <!-- Tambahkan teks label atau elemen lainnya jika diperlukan -->
              </div>
              <p class="text-gray2 ml-[10px] text-sm line-through">Assign 3 homework to Client A</p>

              <div class="absolute flex items-center" style="right: 0;">
                <span class="days-left text-gray2 ml-[10px] text-xs">2/06/2021</span>

                <i v-if="showDetails2" class="fa-solid fa-chevron-up ml-[15px] text-gray2" @click="toggleDetails2"></i>
                <i v-else class="fa-solid fa-chevron-down ml-[15px] text-gray2" @click="toggleDetails2"></i>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdownDelete5">
                  <i class="fa-solid fa-ellipsis text-gray3"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpenDelete5" class="dropdown-content delete">
                    <ul>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="showDetails2" class="desc-task">
              <div class="date flex items-center">
                <i class="fa-regular fa-clock text-blue1"></i>

                <div class="datepicker text-gray2 ml-[15px]">
                    <input type="date" v-model="selectedDate5" @blur="hideDatepicker" />
                </div>
              </div>

              <div class="desc flex items-center">
                <img
                    src="../img/edit_pen.png"
                    class="w-[15px]"
                />

                <p class="ml-[25px] text-gray2" style="font-size: 14px;">
                  Homeworks needed to be checked are as follows : 
                  Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.
                </p>              
              </div>
            </div>
          </div>

          <div v-if="showNewTask">
            <div class="done-task py-[22px] mx-4 cursor-pointer">
            <div 
              class="task flex items-center relative"
            >
              <!-- <input type="checkbox" checked> -->
              <div class="custom-checkbox">
                <input type="checkbox">
                <!-- Tambahkan teks label atau elemen lainnya jika diperlukan -->
              </div>

              <input class="border border-gray3 p-[10px] ml-[10px] rounded-md w-[300px]" type="text" id="textInput" placeholder="Type Task Title" />

              <div class="absolute flex items-center" style="right: 0;">
                <i class="fa-solid fa-chevron-up ml-[15px] text-gray2"></i>

                <div class="dropdown-container ml-[10px] cursor-pointer" @click="toggleDropdownDelete6">
                  <i class="fa-solid fa-ellipsis text-gray3"></i>

                  <!-- Dropdown Content -->
                  <div v-if="isDropdownOpenDelete6" class="dropdown-content delete">
                    <ul>
                      <li class="text-red">Delete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="desc-task">
              <div class="date flex items-center">
                <i class="fa-regular fa-clock text-gray2"></i>

                <div class="datepicker text-gray2 ml-[15px]">
                    <input type="date" v-model="SetDate" @blur="hideDatepicker" />
                </div>
              </div>

              <div class="desc flex items-center">
                <img
                    src="../img/edit_pen.png"
                    class="w-[15px] black-and-white"
                />

                <p class="ml-[25px] text-gray2" style="font-size: 14px;">
                  No Description
                </p>              
              </div>
            </div>
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
        isDropdownOpen: false,
        isDropdownOpenDelete: false,
        isDropdownOpenDelete2: false,
        isDropdownOpenDelete3: false,
        isDropdownOpenDelete4: false,
        isDropdownOpenDelete5: false,
        isDropdownOpenDelete6: false,
        selectedDate: '2021-06-12',
        selectedDate2: '2021-06-14',
        selectedDate3: '2021-06-22',
        selectedDate4: '2021-06-03',
        selectedDate5: '2021-06-02',
        SetDate: 'Set Date',
        isDatepickerVisible: false,
        showDetails: false,
        showDetails2: false,
        showNewTask: false,
      }

    },
    mounted() {
      // Simulate loading delay
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },

    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },

      toggleDropdownDelete() {
        this.isDropdownOpenDelete = !this.isDropdownOpenDelete;
      },

      toggleDropdownDelete2() {
        this.isDropdownOpenDelete2 = !this.isDropdownOpenDelete2;
      },

      toggleDropdownDelete3() {
        this.isDropdownOpenDelete3 = !this.isDropdownOpenDelete3;
      },

      toggleDropdownDelete4() {
        this.isDropdownOpenDelete4 = !this.isDropdownOpenDelete4;
      },

      toggleDropdownDelete5() {
        this.isDropdownOpenDelete5 = !this.isDropdownOpenDelete5;
      },

      toggleDropdownDelete6() {
        this.isDropdownOpenDelete6 = !this.isDropdownOpenDelete6;
      },

      toggleAccordion(index) {
        this.activeIndex = (this.activeIndex === index) ? -1 : index;
      },

      showDatepicker() {
        this.isDatepickerVisible = true;
      },

      hideDatepicker() {
        this.isDatepickerVisible = false;
      },

      toggleDetails() {
        this.showDetails = !this.showDetails;
      },

      toggleDetails2() {
        this.showDetails2 = !this.showDetails2;
      },

      toggleNewTask() {
        this.showNewTask = !this.showNewTask;
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

.datepicker {
  /* position: absolute; */
  /* z-index: 1000; */
  background-color: #fff;
  padding: 10px;
  /* border: 1px solid #828282; */
}

input[type="date"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dropdown-content.delete {
  width: 85px;
}

.dropdown-content.delete li:first-child{
  color: #EB5757;
}

input[type="checkbox"]:checked {
    border-color: #828282;
}

.black-and-white {
  filter: grayscale(100%);
}

</style>