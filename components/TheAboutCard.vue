<template lang="">
  <div>
    <section class="bg-black text-gray-100">
      <div
        class="container flex flex-col items-center px-5 py-8 mx-auto lg:px-24"
      >
        <div>
          <div class="flex flex-wrap py-8 md:flex-nowrap">
            <div class="flex flex-col flex-shrink-0 px-4 mb-6 md:w-64 md:mb-0">
              <strong
                class="flex text-3xl font-thin leading-none text-left text-thin lg:text-4xl"
              >
                {{ month }} {{ year }} <span class="text-sm">⚡️ </span>
              </strong>
              <span class="mt-1 text-lg font-bold leading-relaxed text-gray-500"
                >Emeka Mba.</span
              >
            </div>
            <div class="prose md:flex-grow prose-md">
              <h1 class="text-xl font-bold py-5">
                Hey, I'm Emeka. A
                <span class="hover:text-yellow-500">component obsessed</span>
                and
                <span class="hover:text-yellow-500">finance focused</span>
                frontend engineer working at Acumen.
              </h1>
              <p class="my-5">
                Creator of Vitest, Slidev, VueUse, UnoCSS, Type Challenges and
                others. Core team member of Vue, Nuxt and Vite. Team member of
                Windi CSS, wenyan-lang 文言 and Intlify.
              </p>
              <p class="my-5">
                Dreaming up ideas and making them come true is where my passion
                lies. You can find my full projects list here. I have also
                started a 100-day challenge about design, compform,
                interactivity, and experimenting with new things on
                100.antfu.me.
              </p>
              <p class="my-5">
                Outside of programming, I enjoy doing photography and traveling.
                Some of my photos can be found on Instagram. If you happen to be
                in the same city I live (currently in Shanghai), maybe we can
                hang out and take some photos or code together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      month: "",
      year: "",
    };
  },
  created: function () {
    var newDate = new Date();
    this.month = newDate.toLocaleString("default", { month: "long" });
    this.year = newDate.getFullYear();
  },
};
</script>
<style lang=""></style>
