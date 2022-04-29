<template lang="">
  <main class="bg-black text-white">
    <section class="navbar">
      <TheNavbar />
    </section>
    <section class="challenges">
      <h1 class="text-xl font-bold text-left ml-20 my-10 text-gray-50">
        Work Experience
      </h1>
      <TheExperiences />
    </section>
    <section class="stack d-flex justify-center text-center">
      <h1 class="text-xl font-bold text-left ml-20 my-10 text-gray-50">
        Tech Stack
      </h1>
      <TheStackSection />
    </section>

    <section class="challenges mx-20 my-10">
      <h1 class="text-xl font-bold text-left my-10 text-gray-50">Projects</h1>
      <TheProjects />
    </section>
    <section class="footer">
      <TheFooter />
    </section>
  </main>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
main {
}
</style>
