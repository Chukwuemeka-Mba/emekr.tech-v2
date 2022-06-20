<template lang="">
  <div>
    <section class="bg-black text-gray-100">
      <div
        class="container flex flex-col items-center px-5 pt-8 mx-auto lg:px-24"
      >
        <div>
          <div class="flex flex-wrap py-8 md:flex-nowrap">
            <div class="flex flex-col flex-shrink-0 px-4 mb-6 md:w-64 md:mb-0">
              <strong
                class="flex text-3xl font-thin leading-none text-left text-thin lg:text-4xl"
              >
                {{ date }} {{ month }} | {{ hours }}:{{
                  minutes < 10 ? "0" + minutes : minutes
                }}
                <span class="text-sm"></span>
              </strong>
              <span
                class="mt-1 text-lg font-normal leading-relaxed text-gray-400"
                >Emeka Mba.</span
              >
            </div>
            <div class="prose md:flex-grow prose-md">
              <h1 class="text-xl font-medium py-5">
                Hey, I'm Emeka. <br />
                A
                <span class="text-gray-500">finance focused</span>
                frontend engineer, currently working at Acumen.
              </h1>
              <p class="my-5 font-normal text-gray-200">
                I try to simplify complex things by writing, designing and
                engineering to solve problems, build companies and help people.
              </p>
              <p class="my-5 font-normal text-gray-200">
                My passion lies in conjuring ideas and sculpting them into
                reality with code. I'm always looking to collaborate on building
                interesting projects.
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
      time: "",
      day: "",
      date: "",
    };
  },
  created: function () {
    var newDate = new Date();
    this.month = newDate.toLocaleString("default", { month: "long" });
    this.year = newDate.getFullYear();
    this.hours = newDate.getHours();
    this.minutes = newDate.getMinutes();
    this.day = newDate.getUTCDay();
    this.date = newDate.getDate();
  },
};
</script>
<style lang=""></style>
