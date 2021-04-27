<template>
  <div
    class="left-0 top-0 h-screen w-full fixed bg-black bg-opacity-50 z-40"
    @click.self="$emit('close')"
  >
    <div
      class="modal sm:p-10 p-2 bg-white rounded shadow-lg w-1/3 mt-24 mx-auto bg-gray-200"
    >
      <slot />
    </div>
  </div>
</template>
<style scoped>
.modal {
  width: 600px;
  height: 450px;
}
.overlay {
  overflow-y: hidden;
  position: fixed;
}
@media (max-width: 639px) {
  .modal {
    width: 250px;
    height: 300px;
  }
}
</style>
