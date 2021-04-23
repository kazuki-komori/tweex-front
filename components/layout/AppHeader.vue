<template>
  <section class="mb-5 pt-5 pb-2 shadow">
    <AppContainer>
      <p>hoge</p>
      <nav>
        <ul class="flex text-xl font-bold text-gray-700 cursor-pointer">
          <router-link to="/" class="px-2">Home</router-link>
          <router-link to="/category" class="px-2">Category</router-link>
        </ul>
      </nav>
    </AppContainer>
  </section>
</template>
<script>
import AppContainer from "@/components/layout/AppContainer"
export default {
  components: { AppContainer }
}
</script>
