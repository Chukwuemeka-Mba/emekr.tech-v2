<template lang="">
  <main>
    <section class="md:overflow-x-scroll">
      <div class="container mx-auto md:px-20 max-w-7xl">
        <div class="flex flex-row flex-wrap mx-auto md:flex-nowrap lg:px-24">
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
