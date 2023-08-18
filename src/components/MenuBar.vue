<template>
    <v-card class="list-class pt-5 pb-3 pr-3">
        <v-list no-gutters style="padding: 0;" class="pl-4" >
            <v-list-item variant="plain" class="item-in-list" v-for="(item, index) in menuItems" :key="index" value="1" :ripple="false">
                <v-row no-gutters>
                    <v-col class="h-100 pb-5" cols="3" align-self="center" align="center">
                        <v-img :src="item.imageUrl" :width= item.width></v-img>
                    </v-col >
                    <v-col cols="auto" class="pl-5 pb-5" align-self="center" align="center">
                        <h3>{{ item.title }}</h3>
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

.list-class {
  background-color: transparent;
  box-shadow: none;
}
</style>

<script lang="js">
export default {
  data() {
    return {
      menuItems: [
        { title: 'Burgers', imageUrl: 'src/assets/burgers.svg', width: 40},
        { title: 'Additions', imageUrl: 'src/assets/additions.svg', width: 33},
        { title: 'Sauces', imageUrl: 'src/assets/sauces.svg', width: 38},
        { title: 'Desserts', imageUrl: 'src/assets/deserts.svg', width: 24},
        { title: 'Drinks', imageUrl: 'src/assets/drinks.svg', width: 20},
        { title: 'Breakfast', imageUrl: 'src/assets/breakfast.svg', width: 45},
        { title: 'McCafé', imageUrl: 'src/assets/cafe.svg', width: 26},
        { title: 'Happy Meal', imageUrl: 'src/assets/happymeal.svg', width: 30},
      ]
    };
  }
};
</script>