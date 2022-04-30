<template lang="">
  <main>
    <a :href="article.link">
      <div
        class="flex cursor-pointer bg-black flex-col items-center pb-10 mx-auto py-10 border-b border-gray-200 max-w-3xl sm:flex-row"
      >
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10"
        >
          <img
            :src="require(`~/assets/images/${article.img}`)"
            class="image"
            alt=""
          />
        </div>
        <div
          class="text-whiteflex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md"
        >
          <h2 class="text-gray-200 text-xl font-light">{{ article.name }}</h2>
          <p class="text-gray-400 text-sm mt-5 font-light">
            {{ article.desc }}
          </p>
          <span class="flex flex-row gap-5 mt-5">
            <a :href="article.link"
              ><font-awesome-icon icon="link" class="text-white"
            /></a>
            <p class="text-gray-300">{{ article.platform }}</p>
            <p class="text-gray-300">{{ article.published }}</p>
          </span>
        </div>
      </div>
    </a>
  </main>
</template>
<script>
export default {
  props: {
    article: Object,
  },
};
</script>
<style lang="scss" scoped>
.image {
  width: 80px;
  height: 80px;
  border-radius: 62px;
}
</style>
