<template>
  <div class="menu container">
    <img src="../assets/logo.png" class="logo" />
    <button @click="handleContact">Contact Form</button>
    <button @click="handleAdmin">Admin</button>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { user } = getUser()
    const { logout, error } = useLogout()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })

    const handleContact = () => {
      router.push({ name: 'Contact' })
    }

    const handleAdmin = () => {
      router.push({ name: 'Admin' })
    }

    const handleLogout = async () => {
      await logout()
      if (!error.value) {
        console.log('User logged out')
      }
    }

    return { handleContact, handleAdmin, handleLogout }
  }
}
</script>

<style>
  .menu {
    text-align: center;
    padding: 45px;
  }

  .menu button {
    display: block;
    margin: 20px auto;
    width: 80%;
    font-size: 22px;
    padding: 12px 0;
  }
</style>