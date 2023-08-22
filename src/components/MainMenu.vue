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

.title{
    color: black;
}
</style>


<script>

import CatalogueItem from './CatalogueItem.vue';

export default {
  components: {
    CatalogueItem,
  },
  data() {
        return {
            catalogueData: [
            { id: 1 , name: "Cheeseburger", width: 250, urlSource: 'src/assets/bigmac.png', price: 1.7 },
            { id: 2 , name: "Hamburger", width: 200, urlSource: 'src/assets/hamburger.webp', price: 1.7 },
        ]
    };
  },
};
</script>
