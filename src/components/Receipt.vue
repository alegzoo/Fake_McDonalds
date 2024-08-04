<template>
    <v-card no-gutters fluid style="padding: 0px" class="container-receipt">
        <v-card class="v-card-receipt w-100 pr-3 pl-2 h-100" elevation="0" no-gutters>
            <v-row class="h-auto w-100 py-3" no-gutters>
                <v-col cols="12" align="center">
                    <v-img :width="100" aspect-ratio="16/9" cover src="@/assets/mc-logo.svg"></v-img>
                </v-col>
            </v-row>

            <v-row class="h-auto w-auto" no-gutters>
                <v-col cols="12" no-gutters align="center" class="px-3">
                    <p>– McDonald’s Prešov –</p>
                </v-col>
            </v-row>
            
            <v-row class="h-auto w-auto" no-gutters>
                <v-col cols="12" no-gutters align="center" class="px-3 pt-2">
                    <p>{{ formattedDateTime }}</p>
                </v-col>
            </v-row>

            <v-row class="h-auto w-auto" no-gutters>
                <v-col cols="6" no-gutters align="left" class="px-3 pt-4">
                    <p>QTY ITEM</p>
                </v-col>
                <v-col cols="6" no-gutters align="right" class="px-3 pt-4">
                    <p>TOTAL</p>
                </v-col>
            </v-row>

            <v-row align="center" no-gutters class="w-100 items-receipt">
                <v-col cols="12" class="col-item" no-gutters v-for="(item, index) in arrOfItems" :key="`item-${index}`">
                    <v-row no-gutters align="center" class="pt-3">
                        <v-col cols="9" align="left" class="pb-3 px-3">
                            <p style="padding: 0px; margin:0px">{{ item.title }}</p>
                        </v-col>
                        <v-col cols="3" align="right" class="pt-5 px-3">
                            <p style="padding: 0px; margin:0px">{{ item.price }}€</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="h-auto w-auto" no-gutters>
                <v-col cols="9" no-gutters align="left" class="px-3 pt-4">
                    <p>Packaging (Take-Out)</p>
                </v-col>
                <v-col cols="3" no-gutters align="left" class="px-3 pt-4">
                    <p>free</p>
                </v-col>
            </v-row>

            <v-row class="h-auto w-auto pb-10" no-gutters>
                <v-col cols="12" no-gutters align="right" class="px-3 pt-4">
                    <h2>{{ totalPrice.toFixed(2) }}€</h2>
                </v-col>
            </v-row>

            <v-row class="h-100 w-auto paymentparts" no-gutters>
                <v-sheet class="paymentpart"/>
                <v-sheet class="paymentpart2"/>
            </v-row>
        </v-card>
        <v-row class="below-cut h-100 pa-3" elevation="0" align="center" no-gutters>
            <v-col cols="12" align="center">
                <v-btn @click="printReceipt" variant="outlined" append-icon="mdi-contactless-payment" class="pay-btn px-16">PAY</v-btn>
            </v-col>
        </v-row>
        <div ref="printArea" style="display: none;"></div>
    </v-card>
</template>

<script>
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // getMonth() is zero-indexed
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} | ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

export default {
    data() {
        return {
            itemsArr: [],
            formattedDateTime: new Date().toLocaleString(),
        };
    },
    props: {
        arrOfItems: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        totalPrice() {
            return this.arrOfItems.reduce((sum, item) => sum + item.price, 0);
        },
    },
    methods: {
    generateReceiptContent() {
        const maxLineLength = 40; // Adjust this based on your desired receipt width

        const centerText = (text) => {
            const padding = Math.max(0, Math.floor((maxLineLength - text.length) / 2.4));
            return ' '.repeat(padding) + text;
        };

        const asciiArt = `
           @@@@    @@@         
          @@ @@@ @@@ @@        
         @@@  @@@@@   @@       
        @@@   @@@@@   @@@      
        @@@    @@@    @@@      
        @@@    @@@    @@@      
        @@@    @@@    @@@      
        @@@           @@@      
        `;

        const header = `${centerText("McDonald’s Prešov")}\n${centerText(this.formattedDateTime)}\n`;
        const itemsHeader = `QTY ITEM${' '.repeat(23)}TOTAL\n\n`;
        const items = this.arrOfItems.map(item => `${item.title.padEnd(25)} ${item.price.toFixed(2)}€`).join('\n');
        const footer = `\nPackaging (Take-Out)${' '.repeat(12)}free\n\nTotal: ${this.totalPrice.toFixed(2)}€`;

        return `${header}\n${asciiArt}\n${itemsHeader}${items}\n${footer}`;
    },
    downloadReceipt() {
        // Generate the receipt content
        const receiptContent = this.generateReceiptContent();

        // Define the file path where the receipt will be saved
        const filePath = '/Users/alexmarinica/Desktop/Fake_McDonald_vuetify/src';

        // Create a blob and save the receipt content to the specified file path
        const blob = new Blob([receiptContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'receipt.txt';

        // Trigger the download
        link.click();

        // Wait for the file to be written, then call the print script
        link.addEventListener('click', () => {
            setTimeout(() => {
                // Call the Bash script to print the receipt
                const scriptPath = '/Users/alexmarinica/Desktop/Fake_McDonald_vuetify/src/print_receipt.sh';
                const { exec } = require('child_process');
                exec(`bash ${scriptPath} ${filePath}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.error(`Stderr: ${stderr}`);
                        return;
                    }
                    console.log(`Stdout: ${stdout}`);
                });
            }, 1000); // Adjust the timeout as necessary to ensure the file is saved
        });
    }
}



};
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.container-receipt {
    height: 50vh;
}

.paymentparts {
    height: 100%;
}

.v-card-receipt {
    border-radius: 0px;
    box-shadow: none;
    position: relative;
    background: white;
    border-top: 2px black solid;
    border-left: 2px black solid;
}

.paymentpart::before {
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

.paymentpart2::before {
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

.below-cut {
    background-color: $mc-green;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 0px;
    border-left: black 2px solid;
    border-bottom: 2px black solid;
}

.container-receipt {
    font-family: 'Dotted', 'normal';
    font-size: 1em;
    overflow-y: visible;
    overflow-x: hidden;
    height: 50%;
}

.col-item {
    border-bottom: dotted black 2px;
}

.slider-container {
  width: 100%;
  padding-top: 30px;
}

.slider {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 50px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  border-radius: 5px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  background: #4caf50;
  border-radius: 50%;
}

.pay-btn {
    background-color: white;
}

.items-receipt {
    max-height: 210px !important;
    overflow-y: auto !important;
}
</style>
