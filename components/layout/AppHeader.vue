<template>
  <section class="px-5 pt-5 pb-2 shadow">
    <div class="flex justify-end">
      <LoginButton @click="login" />
    </div>
    <nav class="flex text-xl font-semibold text-gray-600 cursor-pointer">
      <router-link to="/" class="inline-block px-2">Home</router-link>
      <router-link to="/category" class="inline-block px-2"
        >Category</router-link
      >
    </nav>
  </section>
</template>
<script>
import LoginButton from "@/components/atoms/LoginButton"
import { authMapper } from "@/store/auth"
export default {
  components: { LoginButton },
  methods: {
    ...authMapper.mapActions(["Login"]),
    async login() {
      await this.Login()
    },
  },
}
</script>
