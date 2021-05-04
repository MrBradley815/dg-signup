<template>
  <div class="contact container">
    <img src="../assets/logo.png" class="logo" />
    <ContactForm />
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import ContactForm from '../components/ContactForm'

export default {
  components: { ContactForm },
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
  .contact {
    text-align: center;
    padding: 45px;
  }
</style>