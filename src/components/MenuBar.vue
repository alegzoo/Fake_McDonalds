<template>
    <v-card class="list-class pt-5 pb-3 h-60 w-auto">
        <v-list no-gutters style="padding: 0;" class="pl-2" nav>
            <v-list-item variant="plain" id="item-in-list" @click="handleItemClick" class="item-in-list" v-for="item in menuItems" :ripple="false" :value="item.value">
              <v-row no-gutters>
                <v-col class="h-100 pb-5" cols="3" align-self="center" align="center">
                    <v-img :src="item.imageUrl" :width= item.width></v-img>
                </v-col>
                <v-col cols="auto" class="pl-8 pb-5" align-self="center" align="center">
                    <h3 id="category">{{ item.title }}</h3>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
    </v-card>
    
</template>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.item-in-list {
  background-color: transparent;
}

.item-in-list:hover{
  font-weight: bold;
}

.item-in-list:active{
  font-weight: bold !important;
}

.list-class {
  background-color: transparent;
  box-shadow: none;
}

</style>

<script lang="js">

export default {
  data() {
    return {
      activeItem: null,
      menuItems: [
        { value: 1 ,title: 'Burgers', imageUrl: 'src/assets/burgers.svg', width: 40, currentCategory: 'Burgers'},
        { value: 2 ,title: 'Additions', imageUrl: 'src/assets/additions.svg', width: 33, currentCategory: 'Additions'},
        { value: 3 ,title: 'Sauces', imageUrl: 'src/assets/sauces.svg', width: 38},
        { value: 4 ,title: 'Desserts', imageUrl: 'src/assets/deserts.svg', width: 24},
        { value: 5 ,title: 'Drinks', imageUrl: 'src/assets/drinks.svg', width: 20},
        { value: 6 ,title: 'Breakfast', imageUrl: 'src/assets/breakfast.svg', width: 45},
        { value: 7 ,title: 'McCafé', imageUrl: 'src/assets/cafe.svg', width: 26},
        { value: 8 ,title: 'Happy Meal', imageUrl: 'src/assets/happymeal.svg', width: 30},
      ],
      methods: {
        handleItemClick() {
          console.log('Hello')
        }
      }
    }
  }
}
</script>