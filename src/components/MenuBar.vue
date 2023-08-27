<template>
    <v-card class="list-class pt-5 pb-3 h-60 w-auto">
        <v-list no-gutters style="padding: 0;" class="pl-4" nav>
          <MenuBarButton value="1" title="Burgers" imageUrl="src/assets/burgers.svg" width="40" @click="currentCategorySelected('Burgers')"/>
          <MenuBarButton value="2" title="Additions" imageUrl="src/assets/additions.svg" width="33" @click="currentCategorySelected('Additions')"/>
          <MenuBarButton value="3" title="Sauces" imageUrl="src/assets/sauces.svg" width="38" @click="currentCategorySelected"/>
          <MenuBarButton value="4" title="Desserts" imageUrl="src/assets/deserts.svg" width="24" @click="currentCategorySelected"/>
          <MenuBarButton value="5" title="Drinks" imageUrl="src/assets/drinks.svg" width="20" @click="currentCategorySelected"/>
          <MenuBarButton value="6" title="Breakfast" imageUrl="src/assets/breakfast.svg" width="45" @click="currentCategorySelected"/>
          <MenuBarButton value="7" title="McCafé" imageUrl="src/assets/cafe.svg" width="26" @click="currentCategorySelected"/>
          <MenuBarButton value="8" title="Happy Meal" imageUrl="src/assets/happymeal.svg" width="30" @click="currentCategorySelected"/>
        </v-list>
    </v-card>
    
</template>

<style lang="scss" scoped>

</style>

<script lang="js">

import MenuBarButton from './MenuBarButton.vue';
import eventBus from '@/plugins/eventBus';

export default {
  components: { 
    MenuBarButton,
  },
  methods: {
    currentCategorySelected(category) {
      eventBus.$emit('selected', category);
    }
  }
}
</script>