<script setup>
const props = defineProps(["user"]);
</script>

<template>
  <div class="p-5 flex flex-col gap-5 rounded-xl bg-white text-center">
    <BaseImage :src="user.photo" />
    <p>{{ user.name }}</p>
    <div class="flex flex-col">
      <p>{{ user.position }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.phone }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  @apply truncate;
}
</style>
