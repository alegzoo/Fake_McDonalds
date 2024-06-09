<template>
    <v-card class="h-100 w-100 px-5" no-gutters style="padding: 0px;" :elevation="0">
        <v-row class="v-row-top px-1" no-gutters align="center" align-self="center" align-content="center">
            <v-col cols="4">
                <v-btn
                @click="decrement"
                :active="false"
                class="incr"
                :ripple="false"
                :elevation="0"
                variant="plain"
                icon="mdi-chevron-left"
                />
            </v-col>
            
            <v-col cols="4" align-self="center" align="center">
                <h2 class="number-display">{{ itemNumOfItems }}</h2>
            </v-col>
            
            <v-col cols="4" align-self="center" align="center">
                <v-btn
                :active="false"
                @click="increment"
                :ripple="false"
                :elevation="0"
                variant="plain"
                icon="mdi-chevron-right"
                />
            </v-col>
        </v-row>
        <v-row no-gutters align="center" align-self="center" align-content="center">
            <v-col cols="12" align-self="center" align="center" class="cart-col py-1">
                <v-btn
                block
                variant="text"
                :ripple="false"
                @click="sendToReceipt(itemNumOfItems)"
                >
                <v-icon size="large" class="cart-icon" icon="mdi-cart-variant"/>
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<style lang="scss">
@import "@/styles/constants.scss";

.v-row-top {
    border: 2px black solid;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.cart-col {
    background-color: $mc-green;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;
}

.cart-icon{
    color: white;
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
        },
        sendToReceipt(numItems) {
            this.$emit('sendToReceiptToggled', numItems);
            console.log(numItems)
        }
    }
}
</script>
