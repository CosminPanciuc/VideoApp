<template>
  <template v-if="isOpen">
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-white rounded shadow p-6 max-w-sm mx-auto">
        <template v-if="registerPage">
          <h2 class="text-2xl font-bold mb-4 flex justify-center">Register</h2>
          <vee-form :validation-schema="schema" @submit="registerUser">
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Email</label>
              <vee-field
                name="email"
                v-model="email"
                type="email"
                class="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-indigo-500"
              />
              <div>
                <ErrorMessage class="text-red-600 w-full" name="email" />
              </div>
            </div>
            <div class="mb-4">
              <label for="password" class="block text-gray-700">Password</label>
              <vee-field
                name="password"
                v-model="password"
                type="password"
                class="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-indigo-500"
              />
              <div>
                <ErrorMessage class="text-red-600 w-full" name="password" />
              </div>
            </div>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Register
            </button>
          </vee-form>
        </template>
        <template v-else>
          <h2 class="text-2xl font-bold mb-4 flex justify-center">Login</h2>
          <form>
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Email</label>
              <input
                v-model="email"
                type="email"
                class="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Password</label>
              <input
                v-model="password"
                type="password"
                class="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </form>
          <div class="flex justify-end items-top pb-2">
            <button class="hover:text-indigo-300 text-xs">Forgot password?</button>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            @click="signIn"
          >
            Login
          </button>

          <div class="mb-4 flex justify-center items-center">
            <button class="bg-grey-300 px-4 py-2 rounded" @click="signInWithGoogle">
              Sign In with Google
            </button>
          </div>
          <div class="mb-4 flex justify-center items-center">
            <button class="hover:text-indigo-300" @click="registerPage = true">Sign Up</button>
          </div>
        </template>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import { mapActions, mapWritableState } from 'pinia'
import useModalStore from '@/stores/modal'
import useFirebaseStore from '@/stores/firebase'

export default {
  name: 'AuthAndRegi',
  data() {
    return {
      registerPage: false,
      schema: {
        email: 'required|email',
        password: 'required|min:8|max:128|'
      }
    }
  },
  computed: {
    ...mapWritableState(useModalStore, ['isOpen']),
    ...mapWritableState(useFirebaseStore, ['email', 'password'])
  },
  methods: {
    ...mapActions(useFirebaseStore, ['signIn', 'signOut', 'signInWithGoogle', 'registerUser'])
  }
}
</script>

<style></style>
