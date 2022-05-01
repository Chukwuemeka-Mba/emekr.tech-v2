<template lang="">
  <main class="bg-black">
    <section class="title bg-black">
      <div
        class="container flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <div
          class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue"
        >
          <div class="w-full text-white mx-auto">
            <h1 class="text-3xl font-thin my-3">Featured Articles</h1>
            <a href="http://medium.com/@reallifenero" class="text-gray-400"
              ><span>Medium</span></a
            >
            <a
              href="http://screwfaceletters.substack.com"
              class="text-gray-400 mx-2"
              ><span>Substack</span></a
            >
            <a href="http://dev.to" class="text-gray-400 mx-2"
              ><span>Dev.to</span></a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="cards" v-for="article in articles">
      <TheArticleCard :article="article" />
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      articles: this.$store.state.articles,
    };
  },
};
</script>
<style lang=""></style>
