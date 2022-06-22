<template>
  <div class="main bg-black">
    <section class="nav">
      <TheNavbar />
    </section>
    <section class="about">
      <TheAboutCard />
    </section>
    <div class="work-mobile bg-black text-white">
      <section class="challenges mx-10">
        <h1 class="text-3xl font-thin text-left my-10 text-gray-50">
          Projects
        </h1>
        <TheProjects />
      </section>
      <section class="challenges">
        <h1
          class="text-3xl font-thin text-left mx-10 lg:mx-20 pt-16 text-gray-50"
        >
          Work Experience
        </h1>
        <TheExperiences />
      </section>
      <section class="stack d-flex justify-center text-center">
        <h1 class="text-3xl font-thin text-left ml-10 my-10 text-gray-50">
          Tech Stack
        </h1>
        <TheStackSection />
      </section>
    </div>
    <section class="footer">
      <TheFooter />
    </section>
  </div>
</template>

<script>
import TheNavbar from "~/components/TheNavbar.vue";
export default {
  name: "IndexPage",
  components: { TheNavbar },
};
</script>
<style lang="scss" scoped>
.main {
  .about {
    @media screen and (min-width: 800px) {
      height: 50vh;
    }
  }
  .footer {
    position: relative;
    bottom: 00px;
    width: 100%;
  }
  .work-mobile {
    @media screen and (min-width: 500px) {
      display: none;
    }
  }
}
</style>
