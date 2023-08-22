<template>
    <v-card class="h-100 w-100 px-" no-gutters style="padding: 0px;" :elevation="0">
        <v-row class="v-row-top" no-gutters align="center" align-self="center" align-content="center">
            <v-col cols="4">
                <v-btn
                class="incr"
                :ripple="false"
                :elevation="0"
                variant="flat"
                @click="increment"
                icon="mdi-chevron-left"
                />
            </v-col>
            
            <v-col cols="4" align-self="center" align="center">
                <h2 class="number-display">1</h2>
            </v-col>
            
            <v-col cols="4" align-self="center" align="center">
                <v-btn
                @click="decrement"
                :ripple="false"
                :elevation="0"
                variant="flat"
                icon="mdi-chevron-right"
                />
            </v-col>
        </v-row>
    </v-card>
</template>

<style lang="scss" scoped>
.v-row-top{
    border: 2px black solid;
}

.incr{
    font-size: 30px;
}
</style>

<script lang="js">
export default {
    props: {
        value: {
            type: Number,
            required: true,
        },
        min: {
            type: Number,
            default: 1,
        },
        max: {
            type: Number,
            default: Infinity,
        },
        methods: {
            increment() {
                if (this.value < this.max) {
                    this.$emit('input', this.value + 1);
                }
            },
            decrement() {
                if (this.value > this.min) {
                    this.$emit('input', this.value - 1);
                }
            }
        }
    }
};

</script>