<template>
  <div
    :class="{
      'stack-card-ctn bg-black text-white': true,
      active: stack.type === active,
      faded: active !== stack.type && active !== '',
    }"
    :style="stack.type === active ? `background: ${stack.bg}` : ''"
  >
    <div class="icon">
      <img v-bind:src="require('assets/images/' + stack.img)" alt="" />
    </div>
    <div class="text-white">
      {{ stack.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StackCard",
  props: {
    stack: {
      type: Object,
      default: () => {},
    },
    active: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped>
.stack-card-ctn {
  max-height: 60px;
  max-width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #cecece;
  border-radius: 4px;
  transition: 0.3s;
  opacity: 1;
  font-size: 14px;
}
.stack-card-ctn.faded {
  opacity: 0.5;
}
.stack-card-ctn.active {
  opacity: 1;
  color: #ffffff;
}
.icon img {
  width: 33px;
}
</style>
