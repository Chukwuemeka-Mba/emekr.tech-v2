<template lang="">
  <main
    class="relative grid sm:grid-cols-2 lg:grid-cols-auto items-center ml-20 sm:ml-20 pb-12 md:px-12"
  >
    <div
      class="grid grid-cols-1 gap-12 mx-auto justify-center align-middle lg:text-center"
      v-for="experience in experiences"
    >
      <TheExperienceCard :experience="experience" />
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      experiences: this.$store.state.experiences,
    };
  },
};
</script>
<style lang=""></style>
