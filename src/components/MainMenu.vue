<template>
<v-container no-gutters fluid style="padding: 0" class="h-100">
    <v-card class="h-100 v-card-menu">
        <v-row class="h-auto w-auto">
            <v-col class="pa-9">
                <h1 class="title">Burgers</h1>
            </v-col>
        </v-row>
        <v-row class="h-auto w-auto">
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
</style>


<script lang="js">

import CatalogueItem from './CatalogueItem.vue';

export default {
  components: {
    CatalogueItem,
  },
  data() {
        return {
            catalogueData: [
            { id: 1 , name: "Bigmac", width: 250, urlSource: 'src/assets/bigmac.png', price: 1.7 },
            { id: 2 , name: "Double Quarter Pounder", width: 250, urlSource: 'src/assets/doublequarterpunder.png', price: 1.7 },
            { id: 3 , name: "Quarter Pounder with Cheese", width: 250, urlSource: 'src/assets/quarterPounderCheese.png', price: 1.7 },
            { id: 4 , name: "Quarter Pounder w. Cheese Deluxe", width: 250, urlSource: 'src/assets/quarterPounderWithCheeseDeluxe.png', price: 1.7 },
        ]
    };
  },
};
</script>
