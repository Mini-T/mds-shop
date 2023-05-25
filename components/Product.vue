<template>
    <div class="card m-4">
        <div class="header" :style="'background-image:url('+ product.image +')'"></div>
        <div class="body p-3">
            <h1 class="p-2 font-semibold">{{ product.title }}</h1>
            <p>{{ product.description }}</p>
        </div>
        <div class="footer">
            <button @click="$emit('panier', {id: product.id, title: product.title, price: product.price, quantity: 1})">+</button>
            <span>{{ product.price }}</span>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })
</script>
<style scoped>
.card{
    width: 200px;
    height: min-content;
    border: solid grey 2px;
}

.header{
    background-size: cover;
    background-position: center;
    height: 200px;
    width: 100%;
}

.body {

}

.footer {
    display: flex;
    justify-content: space-between;
    height: 30px;
    width: 100%;
}
</style>