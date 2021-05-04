<template>
  <div class="admin-container">
    <img src="../assets/logo.png" class="logo" />
    <ContactList />
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import ContactList from '../components/ContactList.vue'

export default {
  components: { ContactList },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>
  .admin-container {
    background: white;
    padding: 45px;
    width: 90%;
    margin: 80px auto;
    border-radius: 20px;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    text-align: center;
  }
</style>