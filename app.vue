<template>
  <NuxtLayout>
    <SideBar class="raleway !bg-slate-200 dark:!bg-slate-900 dark:!text-slate-50" />
    <div
      class="raleway md:flex justify-center !bg-slate-100 dark:!bg-slate-800 dark:text-slate-50 leading-7 px-8 md:px-0 hamburger-main"
      @click="hamburgerMainClicked">
      <div class="flex flex-col min-h-dvh md:w-7/10">

        <HeaderMain />
        <NuxtPage class="flex-1 py-5" />
        <FooterMain />
      </div>

    </div>
  </NuxtLayout>
</template>

<script>
import HeaderMain from '/components/header.vue';
import FooterMain from '/components/footer.vue';
import SideBar from '/components/sidebar.vue';
import $ from "jquery";

export default {
  components: {
    HeaderMain,
    FooterMain,
    SideBar
  },
  methods: {
    hamburgerMainClicked() {
      if ($(".hamburger.clicked, .hamburger-main.clicked").length > 0) {
        $(".hamburger.clicked, .hamburger-main.clicked").removeClass("clicked");
      }
    }
  }
}
</script>



<style>
.raleway {
  font-family: 'raleway';
}

.hamburger-main {
  transition: transform .4s ease;
}

.hamburger-main.clicked {
  transform: translateX(240px);
}
</style>