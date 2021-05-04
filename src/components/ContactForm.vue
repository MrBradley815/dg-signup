<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-wrap">
      <input type="text" class="capitalize" required v-model="first" maxlength="40">
      <span class="input-focus" data-placeholder="FIRST NAME"></span>
    </div>
    <div class="input-wrap">
      <input type="text" class="capitalize" required v-model="last" maxlength="40">
      <span class="input-focus" data-placeholder="LAST NAME"></span>
    </div>
    <div class="input-wrap">
      <input type="text" required v-model="phone" maxlength="40">
      <span class="input-focus" data-placeholder="PHONE"></span>
    </div>
    <div class="input-wrap">
      <input type="email" required v-model="email" maxlength="80">
      <span class="input-focus" data-placeholder="EMAIL"></span>
    </div>
    <p>Preferred Contact Method</p>
    <div class="input-wrap radio-input-wrap">
      <div>
        <input type="radio" name="radio-group" id="phone" value="phone" v-model="pref" />
        <label for="phone">PHONE</label>
      </div>
      <div>
        <input type="radio" name="radio-group" id="email" value="email" v-model="pref" />
        <label for="email">EMAIL</label>
      </div>
    </div>
    <div class="error"></div>
    <button>Submit</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'
import { useRouter } from 'vue-router'
import ButtonSpinner from '../components/ButtonSpinner.vue'

export default {
  components: { ButtonSpinner },
  setup() {
    const { error, addDoc } = useCollection('contacts')
    const router = useRouter()

    const first = ref('')
    const last = ref('')
    const phone = ref('')
    const email = ref('')
    const pref = ref(null)

    const handleSubmit = async () => {
      const contact = {
        firstName: first.value,
        lastName: last.value,
        phone: phone.value,
        email: email.value,
        pref: pref.value,
        completed: false,
        followUp: false,
        remove: false,
        createdAt: timestamp()
      }

      await addDoc(contact)
      router.push({ name: 'ThankYou' })
    }

    return { first, last, phone, email, pref, handleSubmit, error }
  }
}
</script>

<style scoped>
  p {
    text-align: left;
    color: #999;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  .radio-input-wrap {
    text-align: left;
    border: 0;
    display: flex;
  }
  .radio-input-wrap > div {
    margin-right: 10px;
  }
  .capitalize {
    text-transform: capitalize;
  }
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    font-size: 14px;
    display: inline-block;
    color: #999;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #222;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
</style>