<script setup>
import { ref } from 'vue';

import MaterialSymbolsFormatBold from '~icons/material-symbols/format-bold'
import IcBaselineFormatItalic from '~icons/ic/baseline-format-italic'
import MingcuteFontFill from '~icons/mingcute/font-fill'
import unorderdlist from '~icons/streamline/interface-text-formatting-list-bullets-points-bullet-unordered-list-lists-bullets'
import IconParkOutlineOrderedList from '~icons/icon-park-outline/ordered-list'
import addimage from '~icons/streamline/image-picture-landscape-2-photos-photo-landscape-picture-photography-camera-pictures'
import addvideo from '~icons/material-symbols/video-call-rounded'
import undo from '~icons/material-symbols/undo-rounded'
import redo from '~icons/material-symbols/redo-rounded'
import dropdown from '~icons/material-symbols/arrow-drop-down'
import linksymbol from '~icons/material-symbols/attach-file'
import IcSharpKeyboardVoice from '~icons/ic/sharp-keyboard-voice'
import UimAlignJustify from '~icons/uim/align-justify'
import CilJustifyRight from '~icons/cil/justify-right'
import CilJustifyLeft from '~icons/cil/justify-left'
import CilJustifyCenter from '~icons/cil/justify-center'


const AnnName = ref('');
const className = ref('');
const teacherName = ref('');
const date = ref('');
const postBody = ref('');

const onSubmit = () => {
  // Handle form submission here (e.g., send data to the server)
  // Reset form fields after submission
  AnnName.value = '';
  className.value = '';
  teacherName.value = '';
  date.value = '';
  postBody.value = '';
};

const showDropdown = ref(false);
const selectedOption = ref(null);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function selectOption(option) {
  selectedOption.value = option;
}
</script>


<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded-lg shadow-md;">
      <form class="flex flex-col">
        <h1 class="py-4 font-semibold text-center border-b-2 mb-3 text-5 bg-blue-500 text-white">Edit Announcement</h1>
        <div class="flex gap-3">
          <p class="text-4">Announcement Name :</p>
          <input v-model="AnnName" type="text" placeholder="Announcement name"
            class="mb-4 p-2 border border-gray-300 rounded-md w-100 h-10" />
        </div>
        <div class="flex gap-3">
          <p class="text-4">Class Name :</p>
          <input v-model="className" type="text" placeholder="Class name"
            class="mb-4 p-2 border border-gray-300 rounded-md w-100 h-10" />
        </div>
        <div class="flex gap-3">
          <p class="text-4">Teacher Name :</p>
          <input v-model="teacherName" type="text" placeholder="Teacher name"
            class="mb-4 p-2 border border-gray-300 rounded-md w-100 h-10" />
        </div>
        <div class="flex gap-3 justify-left mr-10 mt-3">
        <p class="text-4">Schedule Period Extent upto :</p>
          <input v-model="date" type="date" class="mb-4 p-2 border border-gray-300 rounded-md w-50 h-10" />
        </div>
        <p class="text-4 pb-2">Content :</p>
        <div class="mb-4 p-2 border border-gray-300 rounded-md w-200 h-60 flex justify-center">
          <div>
            <div class="flex justify-center items-center">
              <div class="flex justify-center items-center bg-gray-100 p-2">
                <div class="toolbar-item">
                  <undo />
                </div>
                <div class="toolbar-item">
                  <redo />
                </div>
                <div class="dropdown">
                  <button
                    class="flex items-center gap-2 px-2 py-1 rounded-md bg-white text-gray-800 border border-gray-300"
                    @click="toggleDropdown">
                    <span>paragraph</span>
                    <dropdown />

                  </button>
                  <div v-if="showDropdown" class="dropdown-menu">
                    <div @click="selectOption(1)" class="dropdown-item">Option 1</div>
                    <div @click="selectOption(2)" class="dropdown-item">Option 2</div>
                    <div @click="selectOption(3)" class="dropdown-item">Option 3</div>
                    <div @click="selectOption(4)" class="dropdown-item">Option 4</div>
                  </div>
                </div>
                <div class="toolbar-item">
                  <linksymbol />
                </div>
                <div class="toolbar-item">
                  <MaterialSymbolsFormatBold />
                </div>
                <div class="toolbar-item">
                  <IcBaselineFormatItalic />
                </div>
                <div class="toolbar-item">
                  <MingcuteFontFill />
                </div>
                <div class="toolbar-item">
                  <unorderdlist />
                </div>
                <div class="toolbar-item">
                  <IconParkOutlineOrderedList />
                </div>
                <div class="toolbar-item">
                  <addimage />
                </div>
                <div class="toolbar-item">
                  <addvideo />
                </div>
                <div class="toolbar-item">
                  <IcSharpKeyboardVoice />
                </div>
                <div class="toolbar-item">
                  <UimAlignJustify />
                </div>
                <div class="toolbar-item">
                  <CilJustifyRight />
                </div>
                <div class="toolbar-item">
                  <CilJustifyLeft />
                </div>
                <div class="toolbar-item">
                  <CilJustifyCenter />
                </div>
              </div>
            </div>
            <div class="editor-content border p-4 h-40 justify-center item-center">
              <v-quill v-model="content" />
            </div>
          </div>
        </div>
        <div class="justify-end flex p-4 gap-4">
          <button @click="onSubmit" class="px-3 py-1 bg-green-500 text-white rounded-md cursor-pointer">Save</button>
          <button @click="onSubmit" class="px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.toolbar-item {
  @apply p-1 m-1 border-2 flex justify-center;
}
</style>
