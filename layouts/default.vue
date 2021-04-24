<template>
  <div class="font">
    <AppHeader/>
    <Nuxt />
  </div>
</template>
<script>
import AppHeader from "@/components/layout/AppHeader"
export default {
  components: { AppHeader }
}
</script>
<style scoped>
.font {
  font-family: Inter, BlinkMacSystemFont, Arial ,sans-serif;
}
</style>
