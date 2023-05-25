<template>
    <nav class="flex justify-between items-center text-lg bg-blue-400">
        <span class="mx-2">{{ email }}</span>

        <UContainer class="email w-full flex">
            <div class="flex px-4 w-full justify-around">
            <NuxtLink to="/inventory">Inventaire</NuxtLink>
            <NuxtLink to="/products">Produits</NuxtLink>
            <NuxtLink to="/">Login</NuxtLink>
            </div>
        </UContainer>
        <Panier />
    </nav>
</template>
<script setup>
    import Panier from './Panier.vue'

    const email = useCookie('email')
</script>
<style scoped></style>