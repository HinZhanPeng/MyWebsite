<template>
    <div class="hamburger p-8 flex flex-col gap-4">
        <div>
            <NuxtLink class="cursor-pointer" to="/">About Me</NuxtLink>
        </div>
        <div>
            <NuxtLink class="cursor-pointer" to="/WorkingExperience">Working Experience</NuxtLink>
        </div>
        <div>
            <NuxtLink class="cursor-pointer" to="/Skills">Skills</NuxtLink>
        </div>

    </div>

</template>
<script>
import $ from "jquery";

export default {
    components: {

    },
    data() {
        return {

        }
    },
    methods: {


    }
}
</script>
<style>
.hamburger {
    position: absolute;
    height: 100%;
    width: 240px;
    z-index: 111;
    transform: translateX(-240px);
    transition: transform .4s ease;
}

.hamburger.clicked {
    transform: translateX(0px);
    /* animation: slideX 1s ease-in-out forwards; */
}
</style>