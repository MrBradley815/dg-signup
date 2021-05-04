<template>
  <div class="welcome container">
    <img src="../assets/logo.png" class="logo" />
    <LoginForm @login="enterMenu" />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import { useRouter } from 'vue-router'

export default {
  components: { LoginForm },
  setup() {
    const router = useRouter()

    const enterMenu = () => {
      router.push({ name: 'Menu' })
    }

    return { enterMenu }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 45px;
  }
  /* form styles */
  .welcome form {
    margin: 20px auto;
  }
  .welcome button {
    margin-top: 30px;
  }
</style>