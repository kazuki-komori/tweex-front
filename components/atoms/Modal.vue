<template>
  <div @click.self="$emit('close')" class="left-0 top-0 h-screen w-full fixed bg-black bg-opacity-50 z-40">
    <div class="modal p-10 bg-white rounded shadow-lg w-1/3 mt-24 mx-auto bg-gray-200">
      <slot/>
    </div>
  </div>
</template>
<style scoped>
.modal {
  width: 600px;
}
.overlay {
  overflow-y: hidden;
  position: fixed;
}
</style>
