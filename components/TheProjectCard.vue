<template lang="">
  <main class="">
    <div class="flex w-full mx-4 my-2 text-white">
      <div
        class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8"
      >
        <img
          class="object-cover object-center w-full rounded-t-xl lg:h-36 h-48"
          :src="require(`~/assets/images/${project.img}`)"
          alt="blog"
        />
        <div class="px-6 bg-black text-white py-8">
          <h4 class="mt-4 text-2xl font-semibold">
            <span class="">{{ project.name }} </span>
          </h4>
          <p
            class="mt-4 mb-5 text-gray-400 text-base font-normal leading-relax"
          >
            {{ project.desc }}
          </p>
          <a :href="project.liveUrl">
            <font-awesome-icon icon="link" class="mx-2.5" />
          </a>
          <a :href="project.githubUrl">
            <font-awesome-icon icon="fa-brands fa-github" class="mx-2.5" />
          </a>
          <p class="text-gray-500 mt-5">{{ project.stack }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: {
    project: Object,
  },
};
</script>
<style lang=""></style>
