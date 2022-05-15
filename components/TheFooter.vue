<template lang="">
  <div>
    <footer class="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="px-5 py-12 mx-auto lg:py-10 md:px-12 lg:px-20 xl:px-20">
        <div class="space-y-8">
          <a
            href=""
            class="text-xl emekr font-bold tracking-tighter text-gray-200 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
          >
            emekr.tech
          </a>
        </div>
        <div class="gap-8 mt-2 xl:mt-0 xl:col-span-2">
          <div class="lg:justify-end md:grid md:grid-cols-1">
            <div class="w-full mt-1 md:mt-0">
              <div class="mt-8 lg:justify-end xl:mt-8">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  class="icon-link text-gray-100 flex flex-row"
                  href="mailto:emekamba10@gmail.com"
                >
                  <h3
                    id="contact"
                    class="text-xs font-semibold mr-5 tracking-wider text-gray-100 uppercase"
                  >
                    Hire Me !
                  </h3>
                  <font-awesome-icon icon="envelope" />
                </a>
                <p class="mt-4 text-xs text-gray-400 lg:ml-auto">
                  Expect a reply before your mom gets home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-5 py-12 md:px-12 bg-black-500 max-w-7xl sm:px-6 md:flex lg:px-20 lg:pb-20 xl:px-20"
      >
        <div class="flex justify-center mb-2 space-x-6 md:order-first md:mb-0">
          <a
            href="https://www.twitter.com/@reallifenero"
            class="text-blue-400 hover:text-blue-500"
          >
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </a>
          <a
            href="https://open.spotify.com/user/cm1eugbw1h74q0q4q1recppeb?si=449e8ce681634450"
            class="text-green-600"
          >
            <font-awesome-icon
              icon="fa-brands fa-spotify"
              class="text-green-400 hover:text-green-500"
            />
          </a>

          <a
            href="https://github.com/Chukwuemeka-Mba"
            class="text-blue-400 hover:text-blue-500"
          >
            <font-awesome-icon
              icon="fa-brands fa-github"
              class="icon-link text-blue-400 hover:text-blue-500"
            />
          </a>
          <a class="mx-2" href="https://www.linkedin.com/in/emekamba">
            <font-awesome-icon
              icon="fa-brands fa-linkedin-in"
              class="text-blue-400 hover:text-blue-500"
            />
          </a>
        </div>
        <div class="text-gray-50 flex justify-center mx-20">
          <span class="text-md emekr">
            <a
              href="https://github.com/Chukwuemeka-Mba"
              class="emekr text-xl mx-2 text-white hover:text-gray-100"
              rel="noopener noreferrer"
              >Built By Emeka | </a
            >Copyright © 2022
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.emekr {
  @include header-font();
  letter-spacing: 2px;
}
</style>
