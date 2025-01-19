<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';

const hidden = ref(true);
const block = ref(false);

const toggleNavbar = () => {
    if (hidden) {
        hidden.value = !hidden.value;
        block.value = !block.value
    } else {
        hidden.value = hidden.value;
        block.value = block.value
    }
}
//     :class="{'invisible md:visible': hidden, '': block}"
// }
// @click="toggleNavbar"



</script>

<template>
    <nav class="p-x-4 bg-white fixed top-0 w-full place-items-center">

        <button type="button" @click="toggleNavbar"  class="visible md:invisible md:absolute  my-2 inline-flex items-center justify-center p-2 w-full h-10 text-sm text-gray-500 hover:text-[#61CE70] focus:text-[#61CE70] focus:outline-none">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>
    
            <div class="nav-container w-full uppercase py-3 px-5 flex flex-col md:flex-row items-center justify-evenly"
            :class="{'invisible absolute -top-20 md:visible md:static': hidden, '': block}">
                <div class="nav-link hover:text-[#61CE70]">
                    <a href="#">Blog</a>
                </div>
                <div class="nav-link hover:text-[#61CE70]">
                    <a href="#press">Press</a>
                </div>
                <div class="nav-link hover:text-[#61CE70]">
                    <a href="#contacts">Join us</a>
                </div>
            </div>

        
    </nav>
</template>

<style>


/* nav {
    width: 100%;
    
}
.nav-container {
    width: 60%;
    height: 61px;
    margin: 7px auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-link {
    font-size: 14px;
    margin: 25px;
}

a {
    text-decoration: none;
    color: #703412;
} */
</style>