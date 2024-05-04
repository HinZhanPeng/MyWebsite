<template>
    <div class="">
        Hin Zhan Peng <br>
        <span v-if="false">Age {{ age }} <br></span>
        Senior Software Developer at Mayflower Holidays Sdn Bhd<br>
        Skills: C#, Vuejs, Nuxt.js, JavaScript, jQuery, CSS3, HTML5<br>
        Working Experience: {{ workingExperience }}+ years as a software developer <br><br>

        <span v-if="false" class="cursor-pointer" @click="showHireMe">Looking for a hybrid/remote job.</span> <span
            v-if="showHire">PLEASE HIRE ME.</span>
        
    </div>
</template>
<script>
import HomePage from "/pages/HomePage.vue";
import moment from 'moment';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiThemeLightDark } from '@mdi/js'
import $ from "jquery";

export default {
    components: {
        HomePage,
        SvgIcon
    },
    data() {
        return {
            path: mdiThemeLightDark,
            workingExperience: 0,
            isDarkMode: false,
            showHire: false,
            age: 0,
        }

    },
    created() {
        const now = moment(); // Current time
        const year2018 = moment('2018', 'YYYY'); // The year 2018
        let differenceInYears = now.diff(year2018, 'years');
        this.workingExperience = differenceInYears;

        const year1995 = moment('1995', 'YYYY'); // The year 2018
        differenceInYears = now.diff(year1995, 'years');
        this.age = differenceInYears;
    },
    mounted() {

    },
    methods: {
        toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
            this.isDarkMode = !this.isDarkMode;
            this.$nextTick().then(() => {
                $(".svg-icon.dark path").css("fill", "white");
            });
        },
        showHireMe() {
            this.showHire = true;
        }
    }
}
</script>
<style lang="">

</style>