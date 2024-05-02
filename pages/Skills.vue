<template>
    <div>
        <div class="grid gap-10">
            <div class="text-3xl">
                Programming Language
            </div>
            <div class="grid gap-10 grid-cols-2 md:grid-cols-3">
                <div v-for="(item, index) in language" class="max-h-16">
                    <div class="flex gap-4">
                        <svg-icon class="min-w-6" type="mdi" :path="item.path"></svg-icon>
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="bg-stone-400 dark:bg-sky-300">
                        <div :class=" ['h-1', 'dark:bg-sky-600', `w-${item.level}`, 'bg-lime-400']"></div>
                    </div>
                    <div v-if="false">
                        {{ item.level }}
                    </div>
                </div>
            </div>
            <div class="text-3xl">
                Version Control
            </div>
            <div class="grid gap-10 grid-cols-3">
                <div v-for="(item, index) in versionControl" class="max-h-16">
                    <div class="flex gap-4">
                        <svg-icon class="min-w-6" type="mdi" :path="item.path"></svg-icon>
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
            <div class="text-3xl">
                CI/CD
            </div>
            <div class="grid gap-10 grid-cols-3">
                <div v-for="(item, index) in CICD" class="max-h-16">
                    <div class="flex gap-4">
                        <svg-icon class="min-w-6" type="mdi" :path="item.path"></svg-icon>
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
            <div class="text-3xl">
                Speaking Language
            </div>
            <div class="grid gap-10 grid-cols-3">
                <div v-for="(item, index) in speakingLanguage" class="max-h-16">
                    <div class="flex gap-4">
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="bg-stone-400 dark:bg-sky-300">
                        <div :class=" ['h-1', 'dark:bg-sky-600', `w-${item.level}`, 'bg-lime-400']"></div>
                    </div>
                    <div v-if="false">
                        {{ item.level }}
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {
    mdiVuejs, mdiLanguageCsharp, mdiNuxt,
    mdiLanguageJavascript, mdiJquery, mdiLanguageCss3,
    mdiLanguageHtml5, mdiMicrosoftAzureDevops, mdiBitbucket,
    mdiGit
} from '@mdi/js';

export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            language: [
                { name: 'C#', path: mdiLanguageCsharp, level: '9/10' },
                { name: 'Vuejs', path: mdiVuejs, level: '8/10' },
                { name: 'Nuxt.js', path: mdiNuxt, level: '7/10' },
                { name: 'JavaScript', path: mdiLanguageJavascript, level: '8/10' },
                { name: 'jQuery', path: mdiJquery, level: '8/10' },
                { name: 'CSS3', path: mdiLanguageCss3, level: '9/10' },
                { name: 'HTML5', path: mdiLanguageHtml5, level: '9/10' },
            ],
            speakingLanguage: [
                { name: 'Malay', level: '5/10' },
                { name: 'Chinese', level: '10/10' },
                { name: 'English', level: '7/10' },
            ],
            versionControl: [
                { name: 'Git', path: mdiGit }
            ],
            CICD: [
                { name: 'Azure DevOps', path: mdiMicrosoftAzureDevops },
                { name: 'Bitbucket', path: mdiBitbucket },

            ]
        }
    }
}
</script>
<style></style>