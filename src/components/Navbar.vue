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
    <nav>

        <button type="button" @click="toggleNavbar">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>
    
            <div class="nav-container"
            :class="{'invisible md:visible': hidden, 'transform translate-y-full transition': block}">
                
                    <a href="#">Blog</a>
                
                
                    <a href="#press">Press</a>
                
                
                    <a href="#contacts">Join us</a>
                
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