<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Login @enterChatroom="enterChatroom"></Login>
      <p>
        not a member?
        <span @click="showLoginForm = !showLoginForm">create account?</span>
      </p>
    </div>
    <div v-else>
      <Signup @enterChatroom="enterChatroom"></Signup>
      <p>
        Already member?
        <span @click="showLoginForm = !showLoginForm">Login Account?</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Login from '../components/Login';
import Signup from '../components/Signup.vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    Login,
    Signup,
  },
  setup() {
    let showLoginForm = ref(true);
    let router = useRouter();
    let enterChatroom = () => {
      router.push({ name: 'Chatroom' });
    };
    return { showLoginForm, enterChatroom };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome input {
  width: 100%;
  border-radius: 20px;
  border: 1px solid #eee;
  color: #999;
  padding: 10px;
  margin: 10px auto;
  outline: none;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
