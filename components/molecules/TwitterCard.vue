<template>
  <div>
    <div class="border rounded border-gray-300 shadow p-4">
      <div class="grid sm:grid-cols-8 grid-cols-6">
        <img
          class="sm:col-span-1 col-span-1 w-10 rounded-full"
          src="https://pbs.twimg.com/profile_images/1326832078432788481/b8-S8iu0_normal.png"
          alt="プロフィール"
        />
        <div class="sm:col-span-7 col-span-5">
          <div class="sm:flex pb-1">
            <p class="text-gray-700 font-bold sm:px-1">かずやん</p>
            <div class="flex">
              <p class="text-gray-600 sm:text-base text-sm px-1">@D_kazuyan</p>
              <p class="text-gray-600 sm:text-base text-sm px-1">
                {{ $moment("2021-04-14T11:30:12.000Z").fromNow() }}
              </p>
            </div>
          </div>
          <a
            class="block hover:opacity-80"
            target="_blank"
            href="https://twitter.com/D_kazuyan/status/1385241500427055109"
          >
            <p class="text-gray-700 text-sm font-medium">
              届いた！\nこれ着て大学行ったら流石に変人扱いされそう
              https://t.co/C41aJhLByQ
            </p>
          </a>
          <div class="pt-2 grid grid-cols-4">
            <img
              v-for="_ in 4"
              :key="_"
              class="p-img w-full col-span-2 cursor-pointer object-cover rounded transparent opacity-90 border-2 hover:border-blue-500"
              src="https://pbs.twimg.com/media/Ey7mFUcVIAMhhVd.jpg"
              alt=""
              @click="
                viewIMG('https://pbs.twimg.com/media/Ey7mFUcVIAMhhVd.jpg')
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      previewIMG: "",
    }
  },
  methods: {
    viewIMG(url) {
      this.previewIMG = url
      this.$emit("preview", url)
    },
  },
}
</script>
<style scoped>
.p-img {
  height: 180px;
}
@media (max-width: 639px) {
  .p-img {
    height: 100px;
  }
}
</style>
