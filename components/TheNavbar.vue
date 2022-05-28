<template lang="">
  <div>
    <nav class="bg-black navbar">
      <div class="w-full max-w-7xl">
        <div
          x-data="{ open: false }"
          class="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 text-gray-50"
        >
          <div
            class="flex flex-row items-center justify-between lg:justify-start"
          >
            <a
              href="/"
              class="emekr text-lg font-bold tracking-tighter text-black-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
            >
              emekr.tech
            </a>
            <a href="/menu.html">
              <button
                class="toggle rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                @click="open = !open"
              ></button>
            </a>
            <div
              class="mid-nav rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            >
              <ul class="flex-row flex gap-5">
                <li class="text-white-60">
                  <nuxt-link to="/">
                    <font-awesome-icon icon="fa-regular fa-lightbulb" class=""
                  /></nuxt-link>
                </li>
                <li class="text-white-60">
                  <nuxt-link to="/code">
                    <font-awesome-icon icon="code" class=""
                  /></nuxt-link>
                </li>
                <li class="text-white-60">
                  <nuxt-link to="/articles">
                    <font-awesome-icon icon="pen-fancy" class=""
                  /></nuxt-link>
                </li>
                <li class="text-white-60" @click="open == !open">
                  <a
                    href="https://docs.google.com/document/d/1O6Pw30G0fZLhPqbr1k6YSO8H1nIqjfnpmDj81nHuI7c/edit#"
                    ><font-awesome-icon
                      icon="note-sticky"
                      class=""
                      v-show="(open = true)"
                  /></a>
                  <font-awesome-icon
                    icon=" fa-regular fa-sun"
                    class=""
                    v-show="(open = false)"
                  />
                </li>
              </ul>
            </div>
          </div>
          <nav
            :class="{ flex: open, hidden: !open }"
            class="links-container flex-col items-center flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row sm:hidden lg:border-l-2 lg:pl-2 hidden"
          >
            <div id="links" class="nav-links font-thin">
              <a
                class="px-4 py-2 mt-2 font-thin text-md text-white md:mt-0 hover:text-gray-300 focus:outline-none focus:shadow-outline"
                href="/"
                >About</a
              >
              <a
                class="px-4 py-2 mt-2 text-white md:mt-0 font-thin hover:text-gray-300 focus:outline-none focus:shadow-outline"
                href="/code"
                >Work</a
              >
              <a
                class="px-4 py-2 mt-2 text-md text-white md:mt-0 font-thin hover:text-gray-300 focus:outline-none focus:shadow-outline"
                href="/articles"
                >Articles</a
              >

              <a
                class="px-4 py-2 mt-2 text-md text-white md:mt-0 font-thin hover:text-gray-300 focus:outline-none focus:shadow-outline"
                href="#contact"
                >Contact</a
              >
            </div>
          </nav>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.emekr {
  @include header-font();
  font-size: 30px;
  letter-spacing: 2px;
}
.nav-links {
  a {
    @include body-font();
  }
}
</style>
