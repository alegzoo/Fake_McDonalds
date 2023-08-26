<template>
    <v-container fluid class="h-100 w-100" no-gutters style="padding: 0;">
        <v-row no-gutters class="w-100 h-100 pa-0 width-row">
            <v-col cols="auto" class="h-100 pt-6 cols-width pa-0" align="start">
                <v-sheet
                    class="v-sheet-one h-100"
                    > 
                </v-sheet>
            </v-col>
            <v-col cols="auto" class="h-100 pt-3 cols-width pa-0" align="start">
                <v-sheet
                    class="v-sheet-one h-100"
                    > 
                </v-sheet>
            </v-col>
            <v-col class="scroll-v-col">
                <MainMenu/>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<style lang="scss" scoped>
.v-sheet-one {
    border-left: 2px black solid;
    border-top: 2px black solid;
    max-block-size: 50%;
}


.cols-width {
    width: 20px !important;
}

</style>

<script lang="js" setup>
import MainMenu from '@/components/MainMenu.vue'



</script>