<template lang="">
  <main>
    <section class="md:overflow-x-scroll">
      <div class="container mx-auto max-w-7xl">
        <div class="flex flex-row flex-wrap md:flex-nowrap lg:px-20">
          <div v-for="project in projects">
            <TheProjectCard :project="project" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      projects: this.$store.state.projects,
    };
  },
};
</script>
<style lang=""></style>
