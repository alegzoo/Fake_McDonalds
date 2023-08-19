<template>
    <v-container no-gutters fluid style="padding: 0" class="h-100 container">
        <v-card class="v-card-receipt pa-0" elevation="0" no-gutters>
            <v-sheet class="paymentpart"/>
            <v-sheet class="paymentpart2"/>
        </v-card>
        <v-card class="below-cut h-100" elevation="0">

        </v-card>
    </v-container>


</template>

<style lang="scss" scoped>

@import "@/styles/constants.scss";
.v-card-receipt{
    border-radius: 0px;
    height: auto;
    min-height: 50%;
    box-shadow: none;

    position: relative;

    background: white;
    border-top: 2px black solid;
    border-left: 2px black solid;
}


.paymentpart::before{
    background: linear-gradient(-45deg, black 18px, black 18px, transparent 0), linear-gradient(45deg, black 18px, transparent 0);
    background-position: left top;
    background-repeat: repeat-x;
    background-size: 35px 35px;
    content: " ";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 32px;
}



.paymentpart2::before{
    background: linear-gradient(-45deg, $mc-green 16px, $mc-green 16px, transparent 0), linear-gradient(45deg, $mc-green 16px, transparent 0);
    background-position: left top;
    background-repeat: repeat-x;
    background-size: 35px 35px;
    content: " ";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 32px;
}

.below-cut{
    background-color: $mc-green;
    border-radius: 0px;
    max-height: 8%;
    border-left: black 2px solid;
    border-bottom: 2px black solid;
}
</style>

<script lang="js" setup>

</script>