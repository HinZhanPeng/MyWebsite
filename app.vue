<script>
import HeaderMain from '/components/header.vue';
import FooterMain from '/components/footer.vue';

export default {
  components: {
    HeaderMain,
    FooterMain
  }
}
</script>

<template>
  <NuxtLayout>
    <div class="lg:flex justify-center !bg-slate-100 dark:!bg-slate-800 dark:text-slate-50 leading-7 px-8 lg:px-0">
      <div class="flex flex-col min-h-dvh lg:w-7/10">
        <HeaderMain />
        <NuxtPage class="flex-1 py-5" />
        <FooterMain />
      </div>

    </div>
  </NuxtLayout>
</template>

<style scoped>
.v-application__wrap {
  min-height: auto !important;

}
</style>