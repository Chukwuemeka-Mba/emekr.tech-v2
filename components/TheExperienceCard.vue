<template lang="">
  <div>
    <div class="mx-10">
      <div class="inline-flex items-center justify-center sm:mx-auto my-5">
        <img
          :src="require(`~/assets/images/${experience.img}`)"
          alt=""
          class="w-12 h-12"
        />
      </div>
      <h1
        class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-whitw lg:text-3xl"
      >
        {{ experience.company }}
      </h1>
      <h3>{{ experience.position }}</h3>
      <p
        class="mt-2 text-gray-500 max-w-xs lg:h-auto lg:text-center overflow-y-scroll"
      >
        {{ experience.desc }}
      </p>
      <div class="mt-4 flex mx-auto flex-row lg:items-center">
        <a
          class="flex gap-5 mr-2 text-gray-100 md:mx-auto cursor-pointer dark:text-gray-400 hover:text-orange-500 dark:hover:text-gray-300"
          :href="experience.compUrl"
        >
          <font-awesome-icon
            icon="earth"
            class="w-6 h-6 hover:text-gray-50 text-gray-500"
          />
          <p class="text-gray-600 md:mx-auto">{{ experience.location }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    experience: Object,
  },
};
</script>
<style lang=""></style>
