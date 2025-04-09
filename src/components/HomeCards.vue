<script setup>
import { ref } from 'vue';

import cardsArr from '@/cards.json'

const cards = ref(cardsArr);

</script>

<template>
    <main id="press" class="max-w-5xl place-self-center p-8">
        
        <h2 class="mt-8">Explore the brands joining Pattern Brands, the sales process & the founders behind them.</h2>

        <section class="card-container">
            <div class="card" v-for="card in cards" :key="card.id">
                
                <img :src="card.imgLink" alt="image">
                
                <p class="leading-4 mt-3 text-lg">{{ card.title }}</p>
                <h3 class="uppercase mt-2 text-[#838383]">{{ card.subtitle }}</h3>
            </div>
        </section>
    </main>
    
</template>

<style>
    /* main {
        padding-inline: 72px;
    }

   main p {
        width: 600px;
        font-size: 32px;
        margin-bottom: 193px;
    }
    .card-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10%;
        row-gap: 100px;
        margin-bottom: 100px;
    }
    .card {
        width: 312px;
    }

    .img-container img {
        width: 312px;
        border-radius: 8px;
        box-shadow: 0px 8px 30px 0px #0000001F;
    }
    
    .card p, .card h3 {
        width: 100%;
    }

    .card p {
        font-size: 24px;
        line-height: 28.8px;
        margin: 20px 0 10px 0;
    }

    .card h3 {
        font-size: 12px;
        line-height: 18px;
        opacity: 72%;
        text-transform: uppercase;
    } */
</style>