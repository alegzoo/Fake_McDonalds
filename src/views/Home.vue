<template>
    <v-container fluid class="h-100 w-100 cont" no-gutters style="padding: 0;" scrollable="false">
        <v-row no-gutters class="h-auto w-100 pa-6">
            <v-col cols="auto">
                <v-img
                :width="70"
                src="src/assets/mc-logo2.svg"
                >
                </v-img>
                
            </v-col>

            <v-col cols="auto" class="pl-8" align-self="center">
                <h1 class="title-mc">McDonald's</h1>
            </v-col>
        </v-row>


        <v-row no-gutters class="h-100 w-100">
            <v-col cols="3">
                <v-card class="pt-8 nav-card">
                    <v-list no-gutters style="padding: 0;" class="pl-3 v-list" mandatory="true"  :active-class="customActiveClass" @click="toggleItem">
                        <MenuBarButton class="menu-item" :class="{ active: selectedMenuItem === 1 }" @click="currentCategory('Burgers', 1)" :value="1" title="Burgers" imageUrl="src/assets/burgers.svg" :width="40"/>
                        <MenuBarButton class="menu-item" :class="{ active: selectedMenuItem === 2 }" @click="currentCategory('Additions', 2)" :value="2" title="Additions" imageUrl="src/assets/additions.svg" :width="33"/>
                        <MenuBarButton class="menu-item" :class="{ active: selectedMenuItem === 3 }" @click="currentCategory('Sauces', 3)" :value="3" title="Sauces" imageUrl="src/assets/sauces.svg" :width="38"/>
                        <MenuBarButton class="menu-item" :class="{ active: selectedMenuItem === 4 }" @click="currentCategory('Desserts', 4)" :value="4" title="Desserts" imageUrl="src/assets/deserts.svg" :width="24"/>
                        <MenuBarButton class="menu-item" :class="{ active: selectedMenuItem === 5 }" @click="currentCategory('Drinks', 5)" :value="5" title="Drinks" imageUrl="src/assets/drinks.svg" :width="20"/>
                        <MenuBarButton class="menu-item" :class="{ active: selectedMenuItem === 6 }" @click="currentCategory('Breakfast', 6)" :value="6" title="Breakfast" imageUrl="src/assets/breakfast.svg" :width="45"/>
                        <MenuBarButton class="menu-item" :class="{ active: selectedMenuItem === 7 }" @click="currentCategory('McCafé', 7)" :value="7" title="McCafé" imageUrl="src/assets/cafe.svg" :width="26"/>
                        <MenuBarButton class="menu-item" :class="{ active: selectedMenuItem === 8 }" @click="currentCategory('Happy Meal', 8)" :value="8" title="Happy Meal" imageUrl="src/assets/happymeal.svg" :width="30"/>
                    </v-list>
                </v-card>
            </v-col>
            

            <v-col cols="6" class="pl-6" no-gutters>
                <v-container fluid class="h-100 w-100" no-gutters style="padding: 0;">
                    <v-row no-gutters class="w-100 h-100 pa-0">
                        <v-col :elevation="8" cols="auto" class="h-100 pt-6 cols-width1 pa-0" align="start">
                            <v-sheet
                                class="v-sheet-one h-100"
                                > 
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto" class="h-100 pt-3 cols-width2 pa-0" align="start">
                            <v-sheet
                                class="v-sheet-one h-100"
                                > 
                            </v-sheet>
                        </v-col>
                        <v-col class="h-100 w-100" no-gutters style="padding: 0px">
                            <v-card class="h-100 px-2" id="v-card-menu">
                                <v-row class="w-auto v-card-item1" no-gutters style="padding: 0px">
                                    <v-row class="w-100" no-gutters style="padding: 0px">
                                        <v-col class="pa-9 header">
                                            <h1 class="title">{{ currentCategorySelected }}</h1>
                                        </v-col>
                                    </v-row>
                                </v-row>
                                <v-row class="px-0 v-card-item2" no-gutters style="padding: 0px">
                                    <v-row class="w-100 h-100 px-0">
                                        <CatalogueItem @addToCartItemInfo="handleAddToCart" style="overflow: hidden;" v-if="currentCategorySelected === 'Burgers'" v-for="item in Burgers" :itemName="item.name" :itemUrlSource="item.urlSource" :itemWidth="item.width" :itemPrice="item.price" />
                                        <CatalogueItem v-else-if="currentCategorySelected === 'Additions'" v-for="item in Additions" :itemName="item.name" :itemUrlSource="item.urlSource" :itemWidth="item.width" :itemPrice="item.price"/>
                                        <CatalogueItem v-else-if="currentCategorySelected === 'Sauces'" v-for="item in Sauces" :itemName="item.name" :itemUrlSource="item.urlSource" :itemWidth="item.width" :itemPrice="item.price"/>
                                    </v-row>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>


            <v-col cols="3" class=" col-rec" align="right">
                <v-row class="receipt-col pt-3 w-auto" align="right">
                    <Receipt class="receipt-itself" :arrOfItems="itemsArr"/>
                </v-row>
            </v-col>
        </v-row>
    </v-container>


</template>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.cont {
    overflow: hidden
}

.title-mc{
    font-size: 40px !important;
}

.nav-card {
    background-color: white;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    width: 330px;
    box-shadow: 1px 0px 10px 0.05px rgb(160, 160, 160);
}

.v-sheet-one {
    border-left: 2px black solid;
    border-top: 2px black solid;
    box-shadow: -1px 0px 10px 0.05px rgb(160, 160, 160);
}

.cols-width1 {
    width: 20px !important;
    //box-shadow: -2px 35px 10px grey !important;
}

.cols-width2 {
    width: 20px !important;
    //box-shadow: -2px 20px 10px grey !important;
}


#v-card-menu {
    border-left: 2px black solid;
    border-right: 2px black solid;
    border-top: 2px black solid;
    border-radius: 0px;
    overflow-y: auto;
    overflow-x: hidden;
    height: auto;
    max-height: 86vh;
    display: flex;
    flex-wrap: wrap;
    background-color: $mc-yellow;
    box-shadow: -1px 0px 10px 0.05px rgb(160, 160, 160);

}

.v-card-item1 {
    height: auto;
}

.title {
    color: black;
}

.custom-active-class {
    font-weight: bold;
    color: black;
    opacity: 100%;
}

.receipt-col {
    margin-left: 15%;
    position: relative;
}

.receipt-itself {
    box-shadow: -1px 0px 10px 0.05px rgb(160, 160, 160);
    border-bottom-left-radius: 12px;
    overflow-y: visible;
}

.menu-item.active {
    opacity: 1;
}

.menu-item.active:before {
    background-color: $mc-red;
    border: 2px black solid;
    width: 15px;
    height: 50px;
    position: absolute;
    left: -15px;
    top: 0px;
    content: "";
    opacity: 1;
}

@import "@/styles/constants.scss";
</style>

<script lang="js">
import MenuBarButton from '@/components/MenuBarButton.vue';
import CatalogueItem from '@/components/CatalogueItem.vue';
import Receipt from '@/components/Receipt.vue';

export default {
created() {
    if (this.selectedMenuItem == null) {
        this.currentCategorySelected = 'Burgers';
        this.selectedMenuItem = 1;
    }
},
components: {
    MenuBarButton,
    CatalogueItem,
    Receipt
},
methods: {
    scrollFunc() {
        let mainMenu = document.getElementById('v-card-menu');
        
        if (mainMenu) {
            mainMenu.scrollTop = 0;
        }
    },
    toggleItem() {
        this.isActive = !this.isActive;
        this.scrollFunc();
    },
    currentCategory(category, value) {
        this.currentCategorySelected = category;
        this.selectedMenuItem = value;
    },
    sendToReceiptFromParent(data) {
        console.log("Price Total:", data.priceForItems, "Item Name Total:", data.itemCombined);

        this.recievedPriceTotal = data.priceForItems;
        this.recievedItemNameTotal = data.itemCombined;
    },
    handleAddToCart(itemData) {
        this.itemsArr.push(itemData);
    },

},
data() {
    return {
        currentCategorySelected: 'Burgers',
        isActive: false,
        selectedMenuItem: 1,
        customActiveClass: 'custom-active-class',
        selectedItem: 1,
        numOfTriggers: 0,
        recievedPriceTotal: 0,
        recievedItemNameTotal: '',
        itemsArr: [],

        Burgers: [
        { value: 1 , name: "Bigmac", width: 250, urlSource: 'src/assets/bigmac.png', price: 4.2 },
        { value: 2 , name: "Double Quarter Pounder", width: 250, urlSource: 'src/assets/doublequarterpunder.png', price: 3.7 },
        { value: 3 , name: "Quarter Pounder with Cheese", width: 250, urlSource: 'src/assets/quarterPounderCheese.png', price: 4 },
        { value: 4 , name: "Quarter Pounder with Cheese Deluxe", width: 250, urlSource: 'src/assets/quarterPounderWithCheeseDeluxe.png', price: 5.2 },
        { value: 5 , name: "Quarter Pounder with Cheese Bacon", width: 250, urlSource: 'src/assets/quarterpounderwithcheesebacon.png', price: 4.7 },
        { value: 6 , name: "McDouble", width: 250, urlSource: 'src/assets/mcdouble.png', price: 2.4 },
        { value: 7 , name: "Hamburger", width: 250, urlSource: 'src/assets/hamburger.png', price: 1.7 },
        { value: 8 , name: "Cheeseburger", width: 250, urlSource: 'src/assets/cheeseburger.png', price: 1.7 },
        { value: 9 , name: "Double Cheeseburger", width: 250, urlSource: 'src/assets/doublecheese.png', price: 3.3 }
        ],
        Additions: [
        { id: 1 , name: "Small Fries", width: 250, urlSource: 'src/assets/smallF.jpeg', price: 4.2 },
        { id: 2 , name: "Medium Fries", width: 250, urlSource: 'src/assets/mediumF.jpeg', price: 4.2 },
        { id: 3 , name: "Large Fries", width: 250, urlSource: 'src/assets/largeF.jpeg', price: 4.2 },
        { id: 4 , name: "Chicken McNuggets 4 piece", width: 250, urlSource: 'src/assets/nug4piece.jpeg', price: 4.2 },
        { id: 5 , name: "Chicken McNuggets 6 piece", width: 250, urlSource: 'src/assets/nug6piece.jpeg', price: 4.2 },
        { id: 6 , name: "Chicken McNuggets 10 piece", width: 250, urlSource: 'src/assets/nug10piece.jpeg', price: 4.2 },
        ],
        Sauces: [
        { id: 1, name: "Tangy Barbeque Sauce", width: 250, urlSource: 'src/assets/tangy.jpeg', price: 1},
        { id: 2, name: "Spicy Buffalo Sauce", width: 250, urlSource: 'src/assets/buffalospicy.jpeg', price: 1},
        { id: 3, name: "Creamy Ranch Sauce", width: 250, urlSource: 'src/assets/creamyranch.jpeg', price: 1},
        { id: 4, name: "Honey Mustard Sauce", width: 280, urlSource: 'src/assets/honeymustard.jpeg', price: 1},
        { id: 5, name: "Honey", width: 250, urlSource: 'src/assets/honey.jpeg', price: 1},
        { id: 6, name: "Sweet & Sour Sauce", width: 250, urlSource: 'src/assets/sweetnsour.jpeg', price: 1},
        { id: 7, name: "Ketchup Packet", width: 250, urlSource: 'src/assets/ketchup.jpeg', price: 1},
        { id: 8, name: "Mustard Packet", width: 250, urlSource: 'src/assets/mustard.jpeg', price: 1},
        { id: 9, name: "Mayonnaise Packet", width: 250, urlSource: 'src/assets/mayo.jpeg', price: 1}
        ],

    }
}

}

</script>
