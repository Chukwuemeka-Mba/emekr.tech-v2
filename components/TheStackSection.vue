<template>
  <div
    class="container items-center w-full grid lg:grid-cols-2 lg:px-0 max-w-7xl"
  >
    <div class="lang">
      <div class="top">
        <h1 class="text-left my-5 mx-10 md:mx-20 text-lg font-light">
          Tools & Technologies
        </h1>
      </div>
      <div
        class="tab-1 mx-10 md:mx-20 grid-cols-2 grid gap-3 lg:order-first sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3"
      >
        <TheStackCard
          v-for="stack in tools"
          :key="stack.id"
          :stack="stack"
          :active="activeTab"
        />
      </div>
    </div>
    <div>
      <div class="lang">
        <div class="top">
          <h1 class="text-left my-5 mx-20 text-lg font-light">Languages</h1>
        </div>
        <div
          class="tab-1 mx-10 md:mx-20 grid-cols-2 sm:mx-10 grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3"
        >
          <TheStackCard
            v-for="stack in stacks"
            :key="stack.id"
            :stack="stack"
            :active="activeTab"
          />
        </div>
      </div>

      <div class="lang">
        <div class="top">
          <h1 class="text-left my-5 mx-20 text-lg font-light">Platforms</h1>
        </div>
        <div
          class="tab-1 mx-10 grid-cols-2 mx-10 md:mx-20 grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3"
        >
          <TheStackCard
            v-for="stack in platforms"
            :key="stack.id"
            :stack="stack"
            :active="activeTab"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "",
      stacks: this.$store.state.stacks,
      tools: this.$store.state.tools,
      platforms: this.$store.state.platforms,
    };
  },
};
</script>

<style lang="scss" scoped></style>
