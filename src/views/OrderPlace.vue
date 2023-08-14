<template>
    <v-container fluid class="h-100 w-100" no-gutters>
        <v-row class="h-100">
            <v-col cols="3"/>
            <v-col cols="3" no-gutters align="center">
                <v-row class="h-25" no-gutters/>
                    <v-card class="v-card h-50 w-75" to="/home" no-gutters :ripple="false">
                        <v-row class="w-100 h-25" no-gutters/>

                        <v-row align="center" class="pt-6 pr-4 pl-4" no-gutters>
                            <v-img
                            :width="50"
                            src="src/assets/mc-dine-in.svg"
                            />
                        </v-row>

                        <v-row align="center" class="w-100 pt-10" no-gutters>
                            <v-col align-self="start" align="center">
                                <h1 class="subtitle">Dine-in</h1>
                            </v-col>
                            
                        </v-row>

                    </v-card>
                <v-row class="h-25" no-gutters/>
                
            </v-col>

            <v-col cols="3" no-gutters align="center">
                <v-row class="h-25" no-gutters/>
                    <v-card class="v-card h-50 w-75" to="/home" no-gutters :ripple="false">
                        <v-row class="w-100 h-25" no-gutters/>

                        <v-row align="center" no-gutters class="pl-12 pr-12">
                            <v-img
                            :width="50"
                            src="src/assets/mc-take-out.svg"
                            />
                        </v-row>

                        <v-row align="center" class="w-100 pt-11" no-gutters>
                            <v-col align-self="start" align="center">
                                <h1 class="subtitle">Take-out</h1>
                            </v-col>
                        </v-row>

                    </v-card>
                <v-row class="h-25" no-gutters/>
            </v-col>
            <v-col cols="3"/>
        </v-row>

    </v-container>



</template>

<style lang="scss" scoped>
@import "@/styles/constants.scss";


.v-card{
    background-color: white;
    border-radius: 25px;
    border-radius: 25px;
    border-color: black;
    border-width: 3px;
    border-style: solid;
    background-color: white;
    box-shadow: none;
    transition: none !important;
}

.v-card:hover {
    box-shadow: 4px 4px 0 0 black;
    background-color: $mc-yellow;
}

.v-card:hover .v-overlay {
    display: none !important;
}


</style>

<script lang="js" setup>

</script>

