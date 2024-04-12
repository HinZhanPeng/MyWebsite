<template>
    <div>
        <div class="grid gap-20">
            <div v-for="(item, index) in workingExperience" class="lg:flex border-b !pb-10 last:!border-b-0" style="    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;">
                <div v-if="index % 2 > 0 || isTablet" class="flex flex-1 lg:mr-10 justify-center items-center lg:border-2 rounded-2xl mb-10 lg:mb-0">
                    <img width="200" :src="item.imagePath">
                </div>
                <div class="grid gap-10 lg:w-1/3 text-center">
                    <div class="text-xs mb-10">
                        {{ item.applicationType }}
                    </div>
                    <div class="text-5xl font-bold">
                        <h2>{{ item.websiteName }}</h2>
                    </div>
                    <div class="text-sm">
                        {{ item.position }} <br>
                        {{ item.company }} <br>
                        {{ item.startDate }} - {{ item.endDate }}
                    </div>
                    <div class="text-sm" v-html="item.description">
                    </div>
                    <div class="font-extrabold text-xl">
                        <a target="_blank" :href="item.website"><span class="underline underline-offset-1">Website</span></a>
                    </div>
                </div>
                
                <div v-if="index % 2 == 0 & !isTablet" class="flex flex-1 lg:ml-10 justify-center items-center lg:border-2 rounded-2xl">
                    <img width="200" :src="item.imagePath">
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import dsiImage from '~/assets/image/dsi.jpg';
import togagoImage from '~/assets/image/togago.png';
import mayflowerImage from '~/assets/image/mayflower.jpg';
import jmcImage from '~/assets/image/jmc.jpg';
import iconnectixImage from '~/assets/image/iconnectix.jpg';
import $ from 'jquery';
export default {
    data() {
        return {
            workingExperience: [
                {
                    applicationType: 'Application Website',
                    position: 'Senior Software Developer',
                    company: 'Mayflower Holidays Sdn Bhd',
                    startDate: 'Feb 2024',
                    endDate: 'PRESENT',
                    description: 'Maintaining & enchancing travel agency website Mayflower',
                    imagePath: mayflowerImage,
                    website: 'https://www.mayflower.com.my/',
                    websiteName: 'Mayflower'
                },
                {
                    applicationType: 'Application Website',
                    position: 'Senior .Net Developer',
                    company: 'TOGL Technologies Pte Ltd',
                    startDate: 'Apr 2022',
                    endDate: 'Jan 2024',
                    description: 'Maintaining & enchancing travel agency website Togago',
                    imagePath: togagoImage,
                    website: 'https://www.togago.com/',
                    websiteName: 'TogaGo'
                },
                {
                    applicationType: 'Application Website',
                    position: 'Software Engineer',
                    company: 'JMC Technologies Pte Ltd',
                    startDate: 'Jun 2018',
                    endDate: 'Apr 2022',
                    description: 'Maintaining & enchance HR System',
                    imagePath: jmcImage,
                    website: 'https://www.jmcsg.com/',
                    websiteName: 'JMC'
                },
                {
                    applicationType: 'Application Website',
                    position: 'Software Engineer',
                    company: 'Iconnectix Sdn Bhd',
                    startDate: 'NOV 2017',
                    endDate: 'APRIL 2018',
                    description: 'Maintaining & enhancing e-casino website',
                    imagePath: iconnectixImage,
                    website: 'https://www.iconnectix.com/',
                    websiteName: 'Iconnectix'
                },
                {
                    applicationType: 'Desktop Application',
                    position: 'Intern',
                    company: 'DSI ebizness Sdn Bhd',
                    startDate: 'Feb 2017',
                    endDate: 'Jul 2017',
                    description: 'Maintaining a property software',
                    imagePath: dsiImage,
                    website: 'http://www.ebizness.com.my/',
                    websiteName: 'DSI eBizness'
                }

            ],
            isTablet:false,
        }

    },
    created(){
        // console.log($(window).width());
       
    },
    mounted() {
        if(window.innerWidth < 1024){
            this.isTablet = true;
        }


    }
}
</script>
<style></style>