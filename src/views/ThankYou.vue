<template>
  <div class="thank-you container">
    <img src="../assets/logo.png" class="logo" />
    <h2>Thank you for your submission!</h2>
    <h3>We'll be in contact shortly</h3>
    <button @click="enterContact">Back</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()

    const enterContact = () => {
      router.push({ name: 'Contact' })
    }

    return { enterContact }
  }
}
</script>

<style scoped>
  .thank-you {
    text-align: center;
    padding: 45px;
  }
  h2 {
    margin-bottom: 25px;
  }
  .thank-you button {
    margin-top: 30px;
  }
</style>