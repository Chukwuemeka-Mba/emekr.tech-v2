<template>
  <div class="main">
    <section class="nav">
      <TheNavbar />
    </section>
    <section class="about">
      <TheAboutCard />
    </section>
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
  .footer {
    position: relative;
    bottom: 0px;
    width: 100%;
  }
}
</style>
