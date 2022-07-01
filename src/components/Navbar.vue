<template>
  <nav v-if="user">
    <div>
      <p>Hi {{ user.displayName }}</p>
      <p class="email">logged in as {{ user.email }}</p>
    </div>
    <button @click="Logout">Logout</button>
  </nav>
</template>

<script>
import getUser from '../composables/getUser';
import useLogout from '../composables/useLogout';
import { useRouter } from 'vue-router';
export default {
  setup() {
    let router = useRouter();
    //SignOut Method
    let { logout, error } = useLogout();

    let Logout = async () => {
      let res = await logout();
      if (res) {
        router.push({ name: 'Welcome' });
      }
    };

    //getUserInformation
    let { user } = getUser();

    return { Logout, user, error };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
