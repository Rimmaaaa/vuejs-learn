<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const cards = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/cards');
        cards.value = response.data;
    } catch (error) {
        console.error('Error fetching cards', error);
    }
});
</script>

<template>
    <main id="press" class=" max-w-5xl place-self-center p-8">
        <p class="text-lg lg:w-1/2 mt-8">Explore the brands joining Pattern Brands, the sales process & the founders behind them.</p>

        <section class="card-container mt-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-start">
            <div class="card cursor-pointer w-3/4 place-self-center  md:w-[312px] md:h-[501px]" v-for="card in cards" :key="card.id">
                <div class="img-container">
                    <img :src="card.imgLink" alt="image" class="">
                </div>
                <p class="leading-4 mt-3 text-lg text-[#4B4B4B]">{{ card.title }}</p>
                <h3 class="uppercase text-xs font-mono mt-2 text-[#838383]">{{ card.subtitle }}</h3>
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