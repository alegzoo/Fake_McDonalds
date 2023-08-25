<template>
<v-container no-gutters fluid style="padding: 0" class="h-100">
        <v-card class="h-100 v-card-menu">
            <v-row class="h-auto w-auto">
                <v-col class="pa-9">
                    <h1 class="title">Burgers</h1>
                </v-col>
            </v-row>
            <v-row class="h-auto w-auto px-2">
                <Catalogue-item class="item-menu" v-for="item in catalogueData" :itemName="item.name" :itemUrlSource="item.urlSource" :itemWidth="item.width" :itemPrice="item.price"/>
            </v-row>
        </v-card>
</v-container>

</template>

<style lang="scss" scoped>
@import "@/styles/constants.scss";
.v-card-menu {
    border: 2px black solid;
    border-radius: 0px;
}

.title {
    color: black;
}

.row-products {
    overflow-y: auto !important;
}
</style>


<script lang="js">

import { VVirtualScroll } from 'vuetify/lib/components/index.mjs';
import CatalogueItem from './CatalogueItem.vue';

export default {
  components: {
    CatalogueItem,
},
  data() {
        return {
            catalogueData: [
            { id: 1 , name: "Bigmac", width: 250, urlSource: 'src/assets/bigmac.png', price: 4.2 },
            { id: 2 , name: "Double Quarter Pounder", width: 250, urlSource: 'src/assets/doublequarterpunder.png', price: 3.7 },
            { id: 3 , name: "Quarter Pounder with Cheese", width: 250, urlSource: 'src/assets/quarterPounderCheese.png', price: 4 },
            { id: 4 , name: "Quarter Pounder with Cheese Deluxe", width: 250, urlSource: 'src/assets/quarterPounderWithCheeseDeluxe.png', price: 5.2 },
            { id: 5 , name: "Quarter Pounder with Cheese Bacon", width: 250, urlSource: 'src/assets/quarterpounderwithcheesebacon.png', price: 4.7 },
            { id: 6 , name: "McDouble", width: 250, urlSource: 'src/assets/mcdouble.png', price: 2.4 },
            { id: 7 , name: "Hamburger", width: 250, urlSource: 'src/assets/hamburger.png', price: 1.7 },
            { id: 8 , name: "Cheeseburger", width: 250, urlSource: 'src/assets/cheeseburger.png', price: 1.7 },
            { id: 9 , name: "Double Cheeseburger", width: 250, urlSource: 'src/assets/doublecheese.png', price: 3.3 }
        ]
    };
  },
};
</script>
