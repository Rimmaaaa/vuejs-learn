<script setup>
import { RouterLink, useRoute } from 'vue-router';
</script>

<template>
    <nav>
        <div class="nav-container">
            <div class="nav-link">
                <a href="#blog">Blog</a>
            </div>
            <div class="nav-link">
                <a href="#press">Press</a>
            </div>
            <div class="nav-link">
                <a href="#contacts">Join us</a>
            </div>
            
        </div>
        
    </nav>
</template>

<style>


nav {
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
}
</style>