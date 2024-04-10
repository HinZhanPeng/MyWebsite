<template>
    <div
        class="header flex border-b min-h-16 items-center sticky top-0 bg-slate-100 dark:bg-slate-800 z-10">
        <div class="w-2/4 flex mx-auto ">
            <div class="dark:text-slate-50 grid gap-4 grid-flow-col">
                <NuxtLink class="cursor-pointer" to="/">About Me</NuxtLink>
                <NuxtLink class="cursor-pointer" to="/WorkingExperience">Working Experience</NuxtLink>
                <NuxtLink class="cursor-pointer" to="/Skills">Skills</NuxtLink>
            </div>
            <div class="ml-auto">
                <svg-icon v-if="!isDarkMode" class="cursor-pointer" @click="toggleDarkMode" type="mdi"
                    :path="path"></svg-icon>
                <svg-icon v-else class="cursor-pointer svg-icon dark" @click="toggleDarkMode" type="mdi"
                    :path="path"></svg-icon>
            </div>

        </div>

    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiThemeLightDark } from '@mdi/js'
import $ from "jquery";

export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            path: mdiThemeLightDark,
            isDarkMode: false,
        }

    },
    created() {

    },
    mounted() {

    },
    methods: {
        toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
            // this.isDarkMode = !this.isDarkMode;
            // this.$nextTick().then(() => {
            //     $(".svg-icon.dark path").css("fill", "white");
            // });
        },
    }
}
</script>