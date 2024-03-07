import { defineStore } from 'pinia'
import {
  getAuth,
  signOut as signOutFirebase,
  signInWithEmailAndPassword,
  signInWithRedirect,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import { GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider()

import { ref } from 'vue'
import { FirebaseError } from 'firebase/app'

export default defineStore('firebase', () => {
  const isLoggedIn = ref(false)
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  async function signIn() {
    const auth = getAuth()
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      alert('LogInOk')
    } catch (err) {
      if (err instanceof FirebaseError) {
        errorMessage.value = err.message
        alert(errorMessage.value)
      }
    }
    password.value = ''
  }

  async function signOut() {
    const auth = getAuth()
    await signOutFirebase(auth)
      .then(() => {
        alert('LogedOut')
      })
      .catch((err) => {
        errorMessage.value = err.message
        alert(errorMessage.value)
      })
  }

  function signInWithGoogle() {
    const auth = getAuth()
    return signInWithRedirect(auth, provider)
  }

  async function registerUser() {
    const auth = getAuth()
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    password.value = ''
  }

  return {
    isLoggedIn,
    email,
    password,
    errorMessage,
    signIn,
    signOut,
    signInWithGoogle,
    registerUser
  }
})
