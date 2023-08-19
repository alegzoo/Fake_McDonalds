<template>
    <v-container no-gutters fluid style="padding: 0" class="h-100 container">
        <v-card class="v-card-receipt">

        </v-card>
        <v-card class="paymentpart">

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
    padding: 8px 8px 32px 8px;
    background: white;
    border-top: 2px black solid;
    border-left: 2px black solid;
    //border-bottom: 2px black solid;
}

.paymentpart{
    border-radius: 0px;
    height: auto;
    min-height: 10%;
    box-shadow: none;

    //position: relative;
    //padding: 8px 8px 32px 8px;
    //background: white;
    border-left: 2px black solid;
    border-bottom: 2px black solid;
    border-bottom: 2px black solid;
}

.paymentpart::before{
    background: linear-gradient(-45deg, $mc-green 16px, $mc-green 16px, transparent 0), linear-gradient(45deg, $mc-green 16px, transparent 0);
    background-position: left top;
    background-repeat: repeat-x;
    background-size: 22px 32px;
    content: " ";
    display: block;
    position: absolute;
    bottom: 55px;
    left: 0px;
    width: 100%;
    height: 32px;
}

</style>

<script lang="js" setup>

</script>