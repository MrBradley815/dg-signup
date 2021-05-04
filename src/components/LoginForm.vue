<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-wrap">
      <input type="email" required v-model="email">
      <span class="input-focus" data-placeholder="EMAIL"></span>
    </div>
    <div class="input-wrap">
      <input type="password" required v-model="password">
      <span class="input-focus" data-placeholder="PASSWORD"></span>
    </div>
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref, watch } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  setup(props, context) {
    const email = ref('')
    const password = ref('')

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>