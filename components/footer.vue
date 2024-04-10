<template>
    <div class="footer border-t min-h-24 bg-slate-100 dark:bg-slate-800">
        <div class="flex mt-2.5">
            <div class="dark:text-slate-50  text-xs">
                @ 2024 Hin Zhan Peng
            </div>
            <div class="ml-auto grid gap-4 grid-flow-col">
                <a href="https://www.linkedin.com/in/hin-zhan-peng-96721b144/">
                    <svg-icon type="mdi" :path="path.mdiLinkedin"></svg-icon>
                </a>
                <a href="https://github.com/HinZhanPeng">
                    <svg-icon type="mdi" :path="path.mdiGithub"></svg-icon>
                </a>

            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
import $ from "jquery";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLinkedin, mdiGithub } from '@mdi/js';

export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            path: {
                mdiLinkedin,
                mdiGithub

            },
            currentYear: 0
        }

    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style></style>