<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-none flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Logo</span
        >
      </a>
      <div class="hidden w-full md:block md:w-auto space-x-3">
        <a href="#" class="text-white hover:text-indigo-300">Home</a>
        <a href="#" class="text-white hover:text-indigo-300">Profile</a>
        <a href="#" class="text-white hover:text-indigo-300" @click.prevent="toggleLoginScreen"
          >Login</a
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { mapWritableState } from 'pinia'
import useModalStore from '@/stores/modal'

export default {
  name: 'NavBar',
  computed: {
    ...mapWritableState(useModalStore, ['isOpen'])
  },
  methods: {
    toggleLoginScreen() {
      this.isOpen = !this.isOpen
      console.log(this.isOpen)
    }
  }
}
</script>

<style></style>
