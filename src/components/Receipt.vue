<template>
    <v-card no-gutters fluid style="padding: 0px" class="container-receipt">
        <v-card class="v-card-receipt w-100 pr-3 pl-2 h-100" elevation="0" no-gutters>
            <v-row class="h-auto w-100 py-3" no-gutters>
                <v-col cols="12" align="center">
                    <v-img
                    :width="100"
                    aspect-ratio="16/9"
                    cover
                    src="@/assets/mc-logo.svg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row class="h-auto w-auto" no-gutters>
                <v-col cols="12" no-gutters align="center" class="px-3">
                    <p>– McDonald’s Prešov –</p>
                </v-col>
            </v-row>
            
            <v-row class="h-auto w-auto" no-gutters>
                <v-col cols="12" no-gutters align="center" class="px-3 pt-2">
                    <p>{{ formattedDateTime }}
                    </p>
                </v-col>
            </v-row>

            <v-row class="h-auto w-auto" no-gutters>
                <v-col cols="6" no-gutters align="left" class="px-3 pt-4">
                    <p>QTY ITEM</p>
                </v-col>
                <v-col cols="6" no-gutters align="right" class="px-3 pt-4">
                    <p>TOTAL</p>
                </v-col>
            </v-row>

            <v-row align="center" no-gutters class="w-100">
                <v-col cols="12" class="col-item" no-gutters v-for="(item, index) in arrOfItems" :key="`item-${index}`">
                    <v-row no-gutters align="center" class="pt-3">
                        <v-col cols="9" align="left" class="pb-3 px-3">
                            <p style="padding: 0px; margin:0px">{{ item.title }}</p>
                        </v-col>
                        <v-col cols="3" align="right" class="pt-5 px-3">
                            <p style="padding: 0px; margin:0px">{{ item.price }}€</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>


            <v-row class="h-auto w-auto" no-gutters>
                <v-col cols="6" no-gutters align="left" class="px-3 pt-4">
                    <p>Packaging (Take-Out)</p>
                </v-col>
            </v-row>

            <v-row class="h-auto w-auto pb-10" no-gutters>
                <v-col cols="12" no-gutters align="right" class="px-3 pt-4">
                    <h2>{{ totalPrice.toFixed(2) }}</h2>
                </v-col>
            </v-row>

            <v-row class="h-100 w-auto paymentparts" no-gutters>
                <v-sheet class="paymentpart"/>
                <v-sheet class="paymentpart2"/>
            </v-row>
        </v-card>
        <v-row class="below-cut h-100 pb-2" elevation="0">
            <v-row no-gutters class="h-100 w-100 px-7 pt-4 pb-3">
                <v-slider class="slider-comp rounded-pill" no-gutters color="#FFFFFF" :disable-ripple="true" :thumb-size="40" hide-details elevation="0" max="100" track-size="40" :active="false"></v-slider>
            </v-row>
        </v-row>
    </v-card>

</template>

<style lang="scss" scoped>

@import "@/styles/constants.scss";

.container-receipt {
    height: 50vh;
}

.paymentparts {
    height: 100%;
}

.slider-comp::v-deep .v-slider-track * {
    border-radius: 9999px;
}
.slider-comp::v-deep .v-slider-thumb {
    margin-left: 20px;
}

.v-card-receipt {
    border-radius: 0px;
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
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 0px;
    max-height: 18%;
    border-left: black 2px solid;
    border-bottom: 2px black solid;
}

.container-receipt {
    font-family: 'Dotted', 'normal';
    font-size: 1em;
    overflow-y: visible;
    overflow-x: hidden;
    height: 50%;
}

.col-item {
    border-bottom: dotted black 2px;
}


</style>

<script lang="js">

const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1; // getMonth() is zero-indexed
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} | ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

export default {
    data() {
        return {
            priceForItems: 0,
            itemCombined: '',
            itemsArr: [],
            formattedDateTime: new Date().toLocaleString()
        };
    },
    props: {
        arrOfItems: Array,
        itemPrice: Number,
        itemTitle: String
    },
    methods: {

    },
    computed: {
        totalPrice() {
        return this.arrOfItems.reduce((sum, item) => sum + item.price, 0);
        }
    },
};

</script>