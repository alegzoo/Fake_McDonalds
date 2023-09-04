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
            <v-col cols="3" no-gutters class="navigation-bar w-100" style="padding: 0px;">
                <v-card class="list-class pt-8 nav-card">
                    <v-list no-gutters style="padding: 0;" class="pl-1" :active-class="customActiveClass" v-model="selectedItem" @click="toggleItem">
                        <MenuBarButton v-if="selectedItem" :value="1" title="Burgers" imageUrl="src/assets/burgers.svg" :width="40" @click="currentCategorySelected = 'Burgers'"/>
                        <MenuBarButton :value="2" title="Additions" imageUrl="src/assets/additions.svg" :width="33" @click="currentCategorySelected = 'Additions'"/>
                        <MenuBarButton :value="3" title="Sauces" imageUrl="src/assets/sauces.svg" :width="38" @click="currentCategorySelected = 'Sauces'"/>
                        <MenuBarButton :value="4" title="Desserts" imageUrl="src/assets/deserts.svg" :width="24" @click="currentCategorySelected = 'Desserts'"/>
                        <MenuBarButton :value="5" title="Drinks" imageUrl="src/assets/drinks.svg" :width="20" @click="currentCategorySelected = 'Drinks'"/>
                        <MenuBarButton :value="6" title="Breakfast" imageUrl="src/assets/breakfast.svg" :width="45" @click="currentCategorySelected = 'Breakfast'"/>
                        <MenuBarButton :value="7" title="McCafé" imageUrl="src/assets/cafe.svg" :width="26" @click="currentCategorySelected = 'McCafé'"/>
                        <MenuBarButton :value="8" title="Happy Meal" imageUrl="src/assets/happymeal.svg" :width="30" @click="currentCategorySelected = 'Happy Meal'"/>
                    </v-list>
                </v-card>
            </v-col>
            

            <v-col cols="6" class="pl-6" no-gutters>
                <v-container fluid class="h-100 w-100" no-gutters style="padding: 0;">
                    <v-row no-gutters class="w-100 h-100 pa-0 width-row">
                        <v-col cols="auto" class="h-100 pt-6 cols-width pa-0" align="start">
                            <v-sheet
                                class="v-sheet-one h-100"
                                :elevation="8"
                                > 
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto" class="h-100 pt-3 cols-width pa-0" align="start">
                            <v-sheet
                                class="v-sheet-one h-100"
                                :elevation="4"
                                > 
                            </v-sheet>
                        </v-col>
                        <v-col>
                            <v-container no-gutters fluid style="padding: 0" class="h-100">
                                    <v-card class="h-100 v-card-menu">
                                        <v-row class="h-auto w-auto">
                                            <v-col class="pa-9">
                                                <h1 class="title">{{ currentCategorySelected }}</h1>
                                            </v-col>
                                        </v-row>
                                        <v-row class="h-auto w-auto px-2">
                                            <CatalogueItem v-if="currentCategorySelected === 'Burgers'" v-for="item in Burgers" :itemName="item.name" :itemUrlSource="item.urlSource" :itemWidth="item.width" :itemPrice="item.price"/>
                                            <CatalogueItem v-else-if="currentCategorySelected === 'Additions'" v-for="item in Additions" :itemName="item.name" :itemUrlSource="item.urlSource" :itemWidth="item.width" :itemPrice="item.price"/>
                                        </v-row>
                                    </v-card>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>


            <v-col cols="3" class="pl-12 h-50 w-100">
                <Receipt/>
            </v-col>
        </v-row>

    </v-container>


</template>

<style lang="scss" scoped>
.title-mc{
    font-size: 40px !important;
}

.cont * {
    overflow: hidden !important;
}


.navigation-bar {
    background-color: white;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    max-height: 72% !important;

}

.nav-card {
    box-shadow: none;
}
.v-sheet-one {
    border-left: 2px black solid;
    border-top: 2px black solid;
    max-block-size: 100%;
}


.cols-width {
    width: 20px !important;
}

.v-card-menu {
    border-left: 2px black solid;
    border-right: 2px black solid;
    border-top: 2px black solid;
    border-radius: 0px;
    overflow-y: auto;
    max-block-size: 100%;
}

.title {
    color: black;
}
.custom-active-class {
    background-color: red;
}
</style>

<script lang="js">
import Receipt from '@/components/Receipt.vue';
import MenuBarButton from '@/components/MenuBarButton.vue';
import MainMenu from '@/components/MainMenu.vue'
import CatalogueItem from '@/components/CatalogueItem.vue';


export default {
components: {
    MenuBarButton,
    MainMenu,
    CatalogueItem,
    Receipt
},
methods: {
    toggleItem() {
        this.isActive = !this.isActive;
    }
},
data() {
    return {
        currentCategorySelected: '',
        isActive: false,
        customActiveClass: 'custom-active-class',
        selectedItem: true,

        Burgers: [
        { id: 1 , name: "Bigmac", width: 250, urlSource: 'src/assets/bigmac.png', price: 4.2 },
        { id: 2 , name: "Double Quarter Pounder", width: 250, urlSource: 'src/assets/doublequarterpunder.png', price: 3.7 },
        { id: 3 , name: "Quarter Pounder with Cheese", width: 250, urlSource: 'src/assets/quarterPounderCheese.png', price: 4 },
        { id: 4 , name: "Quarter Pounder with Cheese Deluxe", width: 250, urlSource: 'src/assets/quarterPounderWithCheeseDeluxe.png', price: 5.2 },
        { id: 5 , name: "Quarter Pounder with Cheese Bacon", width: 250, urlSource: 'src/assets/quarterpounderwithcheesebacon.png', price: 4.7 },
        { id: 6 , name: "McDouble", width: 250, urlSource: 'src/assets/mcdouble.png', price: 2.4 },
        { id: 7 , name: "Hamburger", width: 250, urlSource: 'src/assets/hamburger.png', price: 1.7 },
        { id: 8 , name: "Cheeseburger", width: 250, urlSource: 'src/assets/cheeseburger.png', price: 1.7 },
        { id: 9 , name: "Double Cheeseburger", width: 250, urlSource: 'src/assets/doublecheese.png', price: 3.3 }
        ],
        Additions: [
        { id: 1 , name: "Small Fries", width: 250, urlSource: 'src/assets/smallF.jpeg', price: 4.2 },
        { id: 2 , name: "Medium Fries", width: 250, urlSource: 'src/assets/mediumF.jpeg', price: 4.2 },
        { id: 3 , name: "Large Fries", width: 250, urlSource: 'src/assets/largeF.jpeg', price: 4.2 }
        ],

    }
}

}

</script>
