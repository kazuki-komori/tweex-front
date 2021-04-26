<template>
  <section>
    <AppContainer>
      <section class="grid grid-cols-6">
        <div v-for="_ in 6" :key="_" class="sm:col-span-3 col-span-6 m-2">
          <TwitterCard @preview="preview" />
        </div>
      </section>
      <Modal v-if="isModalShow" @close="isModalShow = false">
        <img :src="previewURL" alt="" />
      </Modal>
    </AppContainer>
  </section>
</template>

<script>
import { authMapper } from "@/store/auth"
import TwitterCard from "@/components/molecules/TwitterCard"
import Modal from "@/components/atoms/Modal"
import AppContainer from "@/components/layout/AppContainer"

export default {
  components: { AppContainer, Modal, TwitterCard },
  data() {
    return {
      previewURL: "",
      isModalShow: false,
    }
  },
  async mounted() {
    await this.SetProfile()
  },
  methods: {
    ...authMapper.mapActions(["SetProfile", "Login"]),
    async login() {
      await this.Login()
    },
    preview(img) {
      this.isModalShow = true
      this.previewURL = img
    },
  },
}
</script>
