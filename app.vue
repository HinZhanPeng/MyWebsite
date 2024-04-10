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
      <div class="flex flex-col min-h-dvh !bg-slate-100 dark:!bg-slate-800 dark:text-slate-50 leading-7">
        <HeaderMain />
        <NuxtPage class="flex-1 py-5 w-2/4 mx-auto" />
        <FooterMain />
      </div>
    </NuxtLayout>
</template>

<style scoped>
  .v-application__wrap{
    min-height: auto!important;

  }
</style>