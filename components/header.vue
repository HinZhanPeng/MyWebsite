<template>
    <div class="header flex border-b min-h-16 items-center sticky top-0 bg-slate-100 dark:bg-slate-800 z-10">
        <div class="flex flex-1 items-center">
            <div class="md:hidden" @click.stop="ClickedHamburger">
                <svg width="24" height="24">
                    <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round"></path>
                </svg>
            </div>
            <div class="dark:text-slate-50 hidden md:grid gap-4 grid-flow-col items-center">
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
        if (localStorage.getItem("darkMode") == 'true') {
            document.documentElement.classList.toggle('dark');
        }
    },
    methods: {
        toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
            let isDarkMode = document.documentElement.classList.contains('dark');
            if (isDarkMode) {
                localStorage.setItem("darkMode", true);
            }
            else {
                localStorage.setItem("darkMode", false);
            }

        },
        ClickedHamburger() {
            if ($(".hamburger.clicked, .hamburger-main.clicked").length <= 0) {
                $(".hamburger, .hamburger-main").addClass("clicked");

            }
            else {
                $(".hamburger.clicked, .hamburger-main.clicked").removeClass("clicked");

            }
        }
    }
}
</script>