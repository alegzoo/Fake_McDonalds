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
                                        <template v-for="item in currentItems" :key="item.id">
                                            <CatalogueItem
                                                :itemId="item.id"
                                                :itemName="item.name"
                                                :itemWidth="item.width"
                                                :itemUrlSource="item.urlSource"
                                                :itemPrice="item.price"
                                                @addToCartItemInfo="handleAddToCart"
                                            />
                                        </template>
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
}

.cols-width2 {
    width: 20px !important;
}


#v-card-menu {
    border-left: 2px black solid;
    border-right: 2px black solid;
    border-top: 2px black solid;
    border-radius: 0px;
    overflow-y: auto;
    overflow-x: hidden;
    height: auto;
    max-height: 87.3vh;
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
    width: 100%;
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
computed: {
    currentItems() {
        switch (this.currentCategorySelected) {
            case 'Burgers':
                return this.Burgers;
            case 'Additions':
                return this.Additions;
            case 'Sauces':
                return this.Sauces;
            case 'Desserts':
                return this.Desserts;
            case 'Drinks':
                return this.Drinks;
            case 'Breakfast':
                return this.Breakfast;
            case 'McCafé':
                return this.McCafé;
            case 'Happy Meal':
                return this.HappyMeal;
            default:
                return [];
        }
    }
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
        Desserts: [
        { id: 1, name: "KITKAT Banana Split Mcflurry", width: 270, urlSource: 'src/assets/kitkatmcf.jpeg', price: 3.2 },
        { id: 2, name: "OREO Mcflurry", width: 250, urlSource: 'src/assets/oreomcf.jpeg', price: 3.2 },
        { id: 3, name: "M&M'S Mcflurry", width: 250, urlSource: 'src/assets/mnmmcf.jpeg', price: 3.2 },
        { id: 4, name: "Vanilla Cone", width: 250, urlSource: 'src/assets/vanillacone.jpeg', price: 2 },
        { id: 5, name: "Chocolate Shake", width: 250, urlSource: 'src/assets/chocolateshake.jpeg', price: 3 },
        { id: 6, name: "Vanilla Shake", width: 250, urlSource: 'src/assets/vanillashake.jpeg', price: 3 },
        { id: 7, name: "Strawberry Shake", width: 250, urlSource: 'src/assets/strawberryshake.jpeg', price: 3 },
        { id: 8, name: "Hot Fudge Sundae", width: 250, urlSource: 'src/assets/hotfudgesundae.jpeg', price: 4 },
        { id: 9, name: "Hot Caramel Sundae", width: 250, urlSource: 'src/assets/hotcaramelsundae.jpeg', price: 4 },
        { id: 10, name: "Baked Apple Pie", width: 250, urlSource: 'src/assets/bakedapplepie.jpeg', price: 1.7 },
        { id: 11, name: "Chocolate Chip Cookie", width: 250, urlSource: 'src/assets/chocolatechipcookie.jpeg', price: 2 }
        ],
        Drinks: [
        { id: 1, name: "Coca-Cola", width: 270, urlSource: 'src/assets/cocacola.jpeg', price: 2 },
        { id: 2, name: "Sprite", width: 250, urlSource: 'src/assets/sprite.jpeg', price: 2 },
        { id: 3, name: "Dr Pepper", width: 250, urlSource: 'src/assets/drpepper.jpeg', price: 2 },
        { id: 4, name: "Fonta Orange", width: 250, urlSource: 'src/assets/fanta.jpeg', price: 2 },
        { id: 5, name: "Diet Coke", width: 250, urlSource: 'src/assets/dietcoke.jpeg', price: 2 },
        { id: 6, name: "Hi-C Orange Lavaburst", width: 250, urlSource: 'src/assets/hicorange.jpeg', price: 2 },
        { id: 7, name: "Frozen Fanta Blue Raspberry", width: 250, urlSource: 'src/assets/frozenfanta.jpeg', price: 2 },
        { id: 8, name: "Frozen Coca-Cola Classic", width: 250, urlSource: 'src/assets/frozencola.jpeg', price: 2 },
        { id: 9, name: "Strawberry Banana Smoothie", width: 250, urlSource: 'src/assets/straweberrysmoothie.jpeg', price: 2 },
        { id: 10, name: "Mango Pineapple Smoothie", width: 250, urlSource: 'src/assets/mangosmoothie.jpeg', price: 2 },
        { id: 11, name: "Lemonade", width: 250, urlSource: 'src/assets/lemonade.jpeg', price: 2 },
        { id: 12, name: "Sweet Tea", width: 250, urlSource: 'src/assets/sweettea.jpeg', price: 2 },
        { id: 13, name: "Unsweetened Iced Tea", width: 250, urlSource: 'src/assets/notsweeticetea.jpeg', price: 2 },
        { id: 14, name: "Hot Tea", width: 250, urlSource: 'src/assets/hottea.jpeg', price: 2 },
        { id: 15, name: "Minute Maid Premium Orange Juice", width: 250, urlSource: 'src/assets/minutemaidorange.jpeg', price: 2 },
        { id: 16, name: "Honest Kids Appley Ever After Organic Juice Drink", width: 250, urlSource: 'src/assets/honestkidsjuice.jpeg', price: 2 },
        { id: 17, name: "1% Low Fat Milk Jug", width: 250, urlSource: 'src/assets/lowfatmilk.jpeg', price: 2 },
        { id: 18, name: "Reduced Sugar Low Fat Chocolate Milk Jug", width: 250, urlSource: 'src/assets/chocolatemilkjug.jpeg', price: 2 },
        { id: 19, name: "Hot Chocolate", width: 250, urlSource: 'src/assets/hotchocolate.jpeg', price: 2 },
        { id: 19, name: "DASANI Water", width: 250, urlSource: 'src/assets/dasaniwater.jpeg', price: 2 },
        ],
        Breakfast: [
        { id: 1, name: "Bacon, Egg & Cheese Biscuit", width: 250, urlSource: 'src/assets/baconegg&cheese.jpeg', price: 4.5 },
        { id: 2, name: "Egg McMuffin", width: 250, urlSource: 'src/assets/eggmcmuffin.jpeg', price: 3.2 },
        { id: 3, name: "Sausage McMuffin", width: 250, urlSource: 'src/assets/sausagemcmuffin.jpeg', price: 2.8 },
        { id: 4, name: "Sausage McMuffin® with Egg", width: 250, urlSource: 'src/assets/sausagemcmuffinwegg.jpeg', price: 3.4 },
        { id: 5, name: "Sausage Biscuit", width: 250, urlSource: 'src/assets/sausagebiscuit.jpeg', price: 2.2 },
        { id: 6, name: "Sausage Biscuit with Egg", width: 250, urlSource: 'src/assets/sausagebiscuitwegg.jpeg', price: 2.7 },
        { id: 7, name: "Bacon, Egg & Cheese McGriddles", width: 250, urlSource: 'src/assets/mcgriddles.jpeg', price: 3 },
        { id: 8, name: "Sausage McGriddles", width: 250, urlSource: 'src/assets/mggriddles1.jpeg', price: 2.8 },
        { id: 9, name: "Sausage, Egg & Cheese McGriddles", width: 250, urlSource: 'src/assets/mggriddles2.jpeg', price: 3.2 },
        { id: 10, name: "Big Breakfast", width: 250, urlSource: 'src/assets/bigbreakfast.jpeg', price: 5.6 },
        { id: 11, name: "Big Breakfast with Hotcakes", width: 250, urlSource: 'src/assets/bigbreakfastwpancakes.jpeg', price: 7 },
        { id: 12, name: "Hotcakes", width: 250, urlSource: 'src/assets/hotcakes.jpeg', price: 4.2 },
        { id: 13, name: "Hotcakes and Sausage", width: 250, urlSource: 'src/assets/hotcakessausage.jpeg', price: 5 },
        { id: 14, name: "Sausage Burrito", width: 250, urlSource: 'src/assets/sausageburrito.jpeg', price: 5.4 },
        { id: 15, name: "Hash Browns", width: 250, urlSource: 'src/assets/hashbrowns.jpeg', price: 2 },
        { id: 16, name: "Fruit & Maple Oatmeal", width: 250, urlSource: 'src/assets/fruitoatmeal.jpeg', price: 3.5 },
        { id: 17, name: "Egg McMuffin Meal", width: 250, urlSource: 'src/assets/eggmcmuffin1.jpeg', price: 4 },
        { id: 18, name: "Sausage McMuffin with Egg Meal", width: 250, urlSource: 'src/assets/eggmcmuffin2.jpeg', price: 4.9 },
        { id: 19, name: "Sausage Biscuit with Egg Meal", width: 250, urlSource: 'src/assets/sausagebiscuit1.jpeg', price: 4.2 },
        { id: 19, name: "Bacon, Egg & Cheese Biscuit Meal", width: 250, urlSource: 'src/assets/biscuitmeal.jpeg', price: 3.9 },
        { id: 20, name: "Bacon, Egg & Cheese McGriddles Meal", width: 250, urlSource: 'src/assets/cheesemcgriddles.jpeg', price: 3.7 },
        { id: 21, name: "Sausage, Egg & Cheese McGriddles Meal", width: 250, urlSource: 'src/assets/sausagemcgriddlescheese.jpeg', price: 5.2 },
        { id: 22, name: "Sausage McGriddles® Meal", width: 250, urlSource: 'src/assets/mcgriddlescheese.jpeg', price: 3.4 },
        { id: 23, name: "Sausage Burrito Meal", width: 250, urlSource: 'src/assets/burritomeal.jpeg', price: 3.8 },
        ],
        McCafé: [
        { id: 1, name: "McCafé Caramel Macchiato", width: 250, urlSource: 'src/assets/caramelmacchiato.jpeg', price: 2.3 },
        { id: 2, name: "McCafé Cappuccino", width: 250, urlSource: 'src/assets/cappuccino.jpeg', price: 2 },
        { id: 3, name: "McCafé Caramel Cappuccino", width: 250, urlSource: 'src/assets/caramelcappuccino.jpeg', price: 2.5 },
        { id: 4, name: "McCafé French Vanilla Cappuccino", width: 250, urlSource: 'src/assets/vanillacappuccino.jpeg', price: 2.4 },
        { id: 5, name: "McCafé Mocha Latte", width: 250, urlSource: 'src/assets/mochalate.jpeg', price: 2.2 },
        { id: 6, name: "McCafé Americano", width: 250, urlSource: 'src/assets/americano.jpeg', price: 2 },
        { id: 7, name: "McCafé Premium Roast Coffee", width: 250, urlSource: 'src/assets/premiumroastcoffee.jpeg', price: 3.2 },
        { id: 8, name: "McCafé Iced Caramel Macchiato", width: 250, urlSource: 'src/assets/icedcaramelmacchiato.jpeg', price: 3.8 },
        { id: 9, name: "Iced Mocha", width: 250, urlSource: 'src/assets/icedmocha.jpeg', price: 3.4 },
        { id: 10, name: "McCafé Iced Coffee", width: 250, urlSource: 'src/assets/icedcoffee.jpeg', price: 3.5 },
        { id: 11, name: "McCafé Iced Caramel Coffee", width: 250, urlSource: 'src/assets/icedcaramelcoffee.jpeg', price: 3.7 },
        { id: 12, name: "McCafé Iced French Vanilla Coffee", width: 250, urlSource: 'src/assets/icedfrenchvanillacoffee.jpeg', price: 4 },
        { id: 13, name: "McCafé Latte", width: 250, urlSource: 'src/assets/latte.jpeg', price: 2.6 },
        { id: 14, name: "Iced Latte", width: 250, urlSource: 'src/assets/icedlatte.jpeg', price: 2.6 },
        { id: 15, name: "McCafé Caramel Latte", width: 250, urlSource: 'src/assets/caramellatte.jpeg', price: 3 },
        { id: 16, name: "Iced Caramel Latte", width: 250, urlSource: 'src/assets/icedcaramellatte.jpeg', price: 3 },
        { id: 17, name: "French Vanilla Latte", width: 250, urlSource: 'src/assets/frenchvanillalatte.jpeg', price: 3.4 },
        { id: 18, name: "Iced French Vanilla Latte", width: 250, urlSource: 'src/assets/icedfrenchvanillalatte.jpeg', price: 3.4 },
        { id: 19, name: "McCafé Caramel Frappé", width: 250, urlSource: 'src/assets/caramelfrappe.jpeg', price: 3.5 },
        { id: 19, name: "McCafé® Mocha Frappé", width: 250, urlSource: 'src/assets/mochafrappe.jpeg', price: 3.3 },
        ],
        HappyMeal: [
        { id: 1, name: "Hamburger Happy Meal®", width: 250, urlSource: 'src/assets/hamburgerhappymeal.jpeg', price: 5.5 },
        { id: 2, name: "4 Piece Chicken McNuggets Happy Meal", width: 250, urlSource: 'src/assets/happymealnuggets.jpeg', price: 6 },
        { id: 3, name: "6 Piece Chicken McNuggets Happy Meal", width: 250, urlSource: 'src/assets/happymealnuggets6.jpeg', price: 6.2 },
        ]
    }
}

}

</script>
