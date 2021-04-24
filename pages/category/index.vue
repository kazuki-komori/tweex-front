<template>
  <div>
    <SecHero/>
    <section class="bg-blue-100 bg-opacity-50 py-20">
      <AppContainer>
        <div class="flex items-center justify-center pb-8">
          <label class="px-2 hidden" for="category">カテゴリの作成</label>
          <input
            class="rounded-l sm:px-2 py-2 text-xl font-medium"
            autocomplete="off"
            placeholder="カテゴリの作成"
            type="text"
            id="category"
          >
          <div class="bg-blue-400 cursor-pointer border-r border-white">
            <span class="block material-icons font-medium text-white text-2xl py-1.5 px-2">
              colorize
            </span>
          </div>
          <div class="bg-blue-400 cursor-pointer rounded-r">
            <span class="block material-icons font-medium text-white text-2xl py-1.5 px-2">
              add_circle_outline
            </span>
          </div>
        </div>
        <div class="grid grid-cols-6 sm:gap-6 gap-2">
          <div class="sm:col-span-2 col-span-3" v-for="_ in 6">
            <CategoryCard/>
          </div>
        </div>
      </AppContainer>
    </section>
  </div>
</template>
<script>
import AppContainer from "@/components/layout/AppContainer"
import SecHero from "@/pages/category/-SecHero"
import CategoryCard from "@/components/molecules/CategoryCard"

export default {
  components: { CategoryCard, SecHero, AppContainer },
}
</script>
<style scoped>
</style>
