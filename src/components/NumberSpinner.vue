<template>
    <v-card class="h-100 w-100" no-gutters style="padding: 0px;" :elevation="0">
        <v-row class="v-row-top" no-gutters align="center" align-self="center" align-content="center">
            <v-col cols="4">
                <v-btn
                @click="decrement"
                class="incr"
                :ripple="false"
                :elevation="0"
                variant="flat"
                icon="mdi-chevron-left"
                />
            </v-col>
            
            <v-col cols="4" align-self="center" align="center">
                <h2 class="number-display">{{ itemNumOfItems }}</h2>
            </v-col>
            
            <v-col cols="4" align-self="center" align="center">
                <v-btn
                @click="increment"
                :ripple="false"
                :elevation="0"
                variant="flat"
                icon="mdi-chevron-right"
                />
            </v-col>
        </v-row>
        <v-row no-gutters align="center" align-self="center" align-content="center">
            <v-col cols="12" class="px-6 cart-col">
                <v-btn
                class="shopping-cart"
                :ripple="false"
                :elevation="0"
                variant="text"
                icon="mdi-cart-variant"
                >
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<style lang="scss">
@import "@/styles/constants.scss";

.v-row-top {
    border: 2px black solid;
}

.cart-col {
    background-color: $mc-green;
}
</style>

<script>
export default {
    props: {
        itemMinValue: Number,
        itemMaxValue: Number,
        itemNumOfItemsProp: Number, // Use a different name for the prop
    },
    data() {
        return {
            itemNumOfItems: 1, // Initialize with a starting value
        };
    },
    methods: {
        increment() {
            this.itemNumOfItems++;
        },  
        decrement() {
            if (this.itemNumOfItems > this.itemMinValue) {
                this.itemNumOfItems--;
            }
        }  
    }
}
</script>
