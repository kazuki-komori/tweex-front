<template>
  <div class="font">
    <AppHeader/>
    <AppContainer>
      <Nuxt />
    </AppContainer>
  </div>
</template>
<script>
import AppContainer from "../components/layout/AppContainer"
import AppHeader from "@/components/layout/AppHeader"
export default {
  components: { AppHeader, AppContainer }
}
</script>
<style scoped>
.font {
  font-family: "游ゴシック",serif;
}
</style>
