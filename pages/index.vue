<script setup>
const { users } = await $fetch("/api/users", {
  method: "GET",
});
</script>

<template>
  <div>
    <DelayHydration>
      <div style="height: calc(100vh - 48px)" class="relative w-full flex">
        <nuxt-img
          class="w-full h-full absolute inset-0 object-cover brightness-50"
          src="images/readable-image-name-bg.jpeg"
          alt="Background"
          placeholder
        />
        <div class="container m-auto z-10 relative">
          <div
            class="flex flex-col gap-8 max-w-sm text-center m-auto text-white"
          >
            <h1>Test assignment for front-end developer</h1>
            <p>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
            <BaseButton> Sign up </BaseButton>
          </div>
        </div>
      </div>
      <!-- Working with GET request -->
      <div id="get-request" class="bg-background">
        <div class="container mx-auto py-10">
          <div class="flex flex-col gap-8">
            <p class="text-4xl text-center">Working with GET request</p>
            <!-- decompose it late -->
            <div class="grid grid-cols-get-request gap-4 xl:gap-8">
              <LazyUserCard v-for="user in users" :key="user.id" :user="user" />
            </div>
            <BaseButton>Show more</BaseButton>
          </div>
        </div>
      </div>

      <!-- Working with POST request -->
    </DelayHydration>
  </div>
</template>
