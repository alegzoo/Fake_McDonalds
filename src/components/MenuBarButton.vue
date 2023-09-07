<template>
    <v-list-item variant="plain" :ripple="false" :value="value">
        <v-row no-gutters>
            <v-col class="h-100 pb-5" cols="3" align-self="center" align="center">
                <v-img :src="imageUrl" :width= width></v-img>
            </v-col>
            <v-col cols="auto" class="pl-8 pb-5" align-self="center" align="center">
                <h3>{{ title }}</h3>
            </v-col>
        </v-row>
    </v-list-item>
</template>

<style lang="scss" scoped>

</style>

<script lang="js">
export default {
    props: {
        title: String,
        imageUrl: String,
        width: Number,
        value: Number,
    },
}
</script>
