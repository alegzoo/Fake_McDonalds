<template>
    <v-container fluid class="h-100 w-100 cont" no-gutters style="padding: 0;" scrollable="false">
        <v-row no-gutters class="h-auto w-100 pa-6">
            <v-col cols="auto">
                <v-img
                :width="70"
                src="src/assets/Mc-logo.svg"
                >
                </v-img>
                
            </v-col>

            <v-col cols="auto" class="pl-8" align-self="center">
                <h1 class="title-mc">McDonalds</h1>
            </v-col>
        </v-row>


        <v-row no-gutters class="pt-3">
            <v-col cols="3" align-self="left" no-gutters  class="navigation-bar pt-6 pb-6">
                <MenuBar/>
            </v-col>


            <v-col cols="6">
                <Catalogue/>
            </v-col>


            <v-col cols="3">

            </v-col>
        </v-row>

    </v-container>


</template>

<style lang="scss" scoped>
.title-mc{
    font-size: 40px !important;
}

.cont {
    overflow: hidden !important;
}

.navigation-bar{
    background-color: white;
    border-top: 3px solid black;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}
</style>

<script lang="js" setup>

import MenuBar from '@/components/MenuBar.vue';
import Catalogue from '@/components/Catalogue.vue';

</script>
