<template lang="">
  <div>
    <div class="">
      <div class="inline-flex items-center justify-center mx-auto my-5">
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
        class="mt-2 text-gray-500 max-w-xs max-h-20 lg:h-auto overflow-y-scroll"
      >
        {{ experience.desc }}
      </p>
      <div class="mt-4 flex flex-row">
        <a
          class="mr-2 text-gray-100 cursor-pointer dark:text-gray-400 hover:text-orange-500 dark:hover:text-gray-300"
          :href="experience.compUrl"
        >
          <font-awesome-icon
            icon="earth"
            class="w-6 h-6 hover:text-gray-50 text-gray-500"
          />
        </a>
        <p class="text-gray-600">{{ experience.location }}</p>
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
