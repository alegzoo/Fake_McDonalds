<template>
    <v-container fluid class="h-100 w-100 cont" no-gutters style="padding: 0;" scrollable="false">
        <v-row no-gutters class="h-auto w-100 pa-6">
            <v-col cols="auto">
                <v-img
                :width="70"
                src="src/assets/Mc-logo.svg"
                >
                </v-img>
                
            </v-col>

            <v-col cols="auto" class="pl-8" align-self="center">
                <h1 class="title-mc">McDonalds</h1>
            </v-col>
        </v-row>


        <v-row no-gutters class="h-100 w-100">
            <v-col sm="3">
                <v-card class="list-class pt-8 nav-card">
                    <v-list no-gutters style="padding: 0;" class="pl-3" :active-class="customActiveClass" @click="toggleItem">
                        <span>
                            <MenuBarButton v-if="numOfTriggers === 0" class="default-item" :value="1" title="Burgers" imageUrl="src/assets/burgers.svg" :width="40" @click="scrollFunc"/>
                        </span>
                        <MenuBarButton v-if="numOfTriggers != 0" :value="1" title="Burgers" imageUrl="src/assets/burgers.svg" :width="40" @click="currentCategory('Burgers'), scrollFunc, numOfTriggers++"/>
                        <MenuBarButton :value="2" title="Additions" imageUrl="src/assets/additions.svg" :width="33" @click="currentCategory('Additions'), scrollFunc, numOfTriggers++"/>
                        <MenuBarButton :value="3" title="Sauces" imageUrl="src/assets/sauces.svg" :width="38" @click="currentCategory('Sauces'), scrollFunc, numOfTriggers++"/>
                        <MenuBarButton :value="4" title="Desserts" imageUrl="src/assets/deserts.svg" :width="24" @click="currentCategory('Desserts'), scrollFunc, numOfTriggers++"/>
                        <MenuBarButton :value="5" title="Drinks" imageUrl="src/assets/drinks.svg" :width="20" @click="currentCategory('Drinks'), scrollFunc, numOfTriggers++"/>
                        <MenuBarButton :value="6" title="Breakfast" imageUrl="src/assets/breakfast.svg" :width="45" @click="currentCategory('Breakfast'), scrollFunc, numOfTriggers++"/>
                        <MenuBarButton :value="7" title="McCafé" imageUrl="src/assets/cafe.svg" :width="26" @click="currentCategory('McCafé'), scrollFunc, numOfTriggers++"/>
                        <MenuBarButton :value="8" class="pb-4" title="Happy Meal" imageUrl="src/assets/happymeal.svg" :width="30" @click="currentCategory('Happy Meal'), scrollFunc, numOfTriggers++"/>
                    </v-list>
                </v-card>
            </v-col>
            

            <v-col sm="6" class="pl-6" no-gutters>
                <v-container fluid class="h-100 w-100" no-gutters style="padding: 0;">
                    <v-row no-gutters class="w-100 h-100 pa-0 width-row">
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
                        <v-col class="v-scroll">
                            <v-container no-gutters fluid style="padding: 0" class="h-100 w-100" float>
                                    <v-card class="h-100 v-card-menu">
                                        <v-row class="h-auto w-auto">
                                            <v-col class="pa-9">
                                                <h1 class="title">{{ currentCategorySelected }}</h1>
                                            </v-col>
                                        </v-row>
                                        <v-row class="h-auto w-auto px-2">
                                            <CatalogueItem v-if="currentCategorySelected === 'Burgers'" v-for="item in Burgers" :itemName="item.name" :itemUrlSource="item.urlSource" :itemWidth="item.width" :itemPrice="item.price"/>
                                            <CatalogueItem v-else-if="currentCategorySelected === 'Additions'" v-for="item in Additions" :itemName="item.name" :itemUrlSource="item.urlSource" :itemWidth="item.width" :itemPrice="item.price"/>
                                            <CatalogueItem v-else-if="currentCategorySelected === 'Sauces'" v-for="item in Sauces" :itemName="item.name" :itemUrlSource="item.urlSource" :itemWidth="item.width" :itemPrice="item.price"/>
                                        </v-row>
                                    </v-card>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>


            <v-col sm="3" class="pl-12 h-100 w-100">
                <v-container no-gutters fluid style="padding: 0" class="h-50">
                    <v-card class="v-card-receipt pa-0" elevation="0" no-gutters>
                        <v-sheet class="paymentpart"/>
                        <v-sheet class="paymentpart2"/>
                    </v-card>
                    <v-card class="below-cut h-100" elevation="0">
                        <v-row no-gutters class="h-100 w-100 px-7 pt-1">
                        </v-row>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>
    </v-container>


</template>

<style lang="scss" scoped>
.title-mc{
    font-size: 40px !important;
}

.cont * {
    // overflow: hidden !important;
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
}
.v-sheet-one {
    border-left: 2px black solid;
    border-top: 2px black solid;
}


.cols-width1 {
    width: 20px !important;
    //box-shadow: -2px 35px 10px grey !important;
}

.cols-width2 {
    width: 20px !important;
    //box-shadow: -2px 20px 10px grey !important;
}


.v-card-menu {
    border-left: 2px black solid;
    border-right: 2px black solid;
    border-top: 2px black solid;
    border-radius: 0px;
    overflow-y: scroll !important;
    max-block-size: 48%;
    display: block;
}

.title {
    color: black;
}
.custom-active-class {
    font-weight: bold;
    color: black;
    opacity: 100%;
}

.default-item {
    font-weight: bold;
    color: black;
    opacity: 100%;
}

.v-scroll {

}

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
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 0px;
    max-height: 9%;
    border-left: black 2px solid;
    border-bottom: 2px black solid;

}
</style>

<script lang="js">
import MenuBarButton from '@/components/MenuBarButton.vue';
import CatalogueItem from '@/components/CatalogueItem.vue';

export default {
components: {
    MenuBarButton,
    CatalogueItem,
},
methods: {
    toggleItem() {
        this.isActive = !this.isActive;
    },
    currentCategory(category) {
        this.currentCategorySelected = category;
    },
    scrollFunc() {
        let mainMenu = document.getElementById('main-menu');
        mainMenu.scrollTop = 0;
    }

},
data() {
    return {
        currentCategorySelected: 'Burgers',
        isActive: false,
        customActiveClass: 'custom-active-class',
        selectedItem: 1,
        numOfTriggers: 0,

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
