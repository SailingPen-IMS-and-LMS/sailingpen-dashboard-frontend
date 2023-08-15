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


const blogName = ref('');
const date = ref('');
const postBody = ref('');

const onSubmit = () => {
  // Handle form submission here (e.g., send data to the server)
  // Reset form fields after submission
  blogName.value = '';
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
    <div class="bg-white p-4 rounded-lg shadow-md border-green-4">
      <form class="flex flex-col justify-center">
        <h1 class="py-4 font-semibold text-center text-5 border-b-2 mb-4">View Blog Post</h1>
        <div class="flex gap-3">
          <p class="text-4" >Blog Post Name :</p>
          <h2 class="mb-4 p-2 border border-gray-300 rounded-md w-100 h-10">{{ blogName }}</h2>
        </div>
        <p class="text-4 pb-2" >Content :</p>
        <div class="mb-4 p-2 border border-gray-300 rounded-md w-200 h-60 flex justify-center">
          <p>This is the content of the Blog Post</p>
        </div>
        <div class="justify-end flex p-4">
          <button @click="onSubmit" class="px-6 py-1 bg-[#5e5cba] text-white rounded-md cursor-pointer">Back</button>
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
