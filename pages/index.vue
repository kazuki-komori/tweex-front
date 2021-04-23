<template>
  <div>
    <LoginButton @click="login"/>
    <section class="grid grid-cols-6">
      <div class="sm:col-span-3 col-span-6 m-2" v-for="_ in 6">
        <TwitterCard @preview="preview"/>
      </div>
    </section>
    <Modal v-if="isModalShow" @close="isModalShow = false">
      <img :src="previewURL" alt="">
    </Modal>
  </div>
</template>

<script>
import { authMapper } from "@/store/auth"
import TwitterCard from "@/components/molecules/TwitterCard"
import LoginButton from "@/components/atoms/LoginButton"
import Modal from "@/components/atoms/Modal"

export default {
  components: { Modal, LoginButton, TwitterCard },
  data() {
    return {
      previewURL: "",
      isModalShow: false
    }
  },
  async mounted() {
    await this.SetProfile()
  },
  methods: {
    ...authMapper.mapActions(["SetProfile", "Login"]),
    async login () {
      await this.Login()
    },
    preview(img) {
      this.isModalShow = true
      this.previewURL = img
    }
  },
}
</script>
<style scoped>
.p-button {
  width: 200px;
}
</style>
