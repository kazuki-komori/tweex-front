<template>
  <section class="pt-5 pb-20">
    <AppContainer>
      <img
        class="p-img mx-auto block"
        src="@/assets/images/clean_box.png"
        alt=""
      />
      <p class="text-center sm:text-3xl text-xl text-gray-700 font-bold">
        Category
      </p>
    </AppContainer>
  </section>
</template>
<script>
import AppContainer from "@/components/layout/AppContainer"
export default {
  components: { AppContainer },
}
</script>
<style scoped>
.p-img {
  width: 200px;
  height: 200px;
}
@media (max-width: 639px) {
  .p-img {
    width: 100px;
    height: 100px;
  }
}
</style>
