<template>
    <v-col cols="4" class="pa-0 pb-0 col-storing-elmnt">
        <v-card class="catalogue-slot h-100 w-100" no-gutters :elevation="0" style="padding: 0px;" variant="outlined">
            <v-row class="h-100 w-100 pa-0" no-gutters>
                <v-col cols="12" class="pt-8" align="center" align-self="top">
                    <v-img
                        :src="itemUrlSource"
                        :width="itemWidth"
                    ></v-img>
                </v-col>
                <v-col cols="12" class="pt-3 px-3" align="center" align-self="center">
                    <h3>{{ itemName }}</h3>
                </v-col>
                <v-col cols="12" class="pb-1 pt-3" align="center" align-self="center">
                    <h3>{{ itemPrice }}€</h3>
                </v-col>
                <v-col cols="12" class="pb-5 pt-1 px-8" align="center" align-self="center">
                    <NumberSpinner @sendToReceiptToggled="combineItem" :itemMinValue="1" :itemMaxValue="100"/>
                </v-col>
            </v-row>    
        </v-card>
    </v-col>
    
</template>

<style lang="scss" scoped>

@import "@/styles/constants.scss";
.catalogue-slot {
    border: 2px black solid;
    border-radius: 30px;
    height: 100%;
    background-color: white;
}

.catalogue-slot:hover {
    box-shadow: 0px 10px 0px 0px black;
}

</style>

<script lang="js">
import NumberSpinner from './NumberSpinner.vue';

export default {
    components: {
        NumberSpinner
    },
    props: {
        itemId: Number,
        itemName: String,
        itemWidth: Number,
        itemUrlSource: String,
        itemPrice: Number,
    },
    data() {
        return {
            recievedNumOfItems: 0,
            items: []
        };
    },
    methods: {
    combineItem(data) {
      this.recievedNumOfItems = parseInt(data, 10);
      console.log('Received number:', this.recievedNumOfItems);
      let itemCombined = this.recievedNumOfItems + 'x ' + this.itemName;
      console.log('Item:', itemCombined);
      let priceForItems = this.recievedNumOfItems * this.itemPrice;
      console.log('Price total: ',priceForItems);
      this.$emit('addToCartItemInfo', { price: priceForItems, title: itemCombined });
    }
  }
};
</script>