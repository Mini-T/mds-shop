<template>
    <Navbar />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td><button @click="incrementItem(item)">+</button><button @click="decrementItem(item)">-</button></td>
        </tr>
      </tbody>
    </table>

    {{ inventoryItems }}
  </template>
<script setup>
import Navbar from '../../components/NavBar.vue'
import {fetchAndStockProducts} from '../../composables/states'
const products = useProducts()
const inventoryItems = ref([])
const $redis = useNuxtApp().$redis

async function incrementItem(item) {
    await $redis.incr(item.id)
    await getValue(item)
}

async function decrementItem(item) {
    await $redis.decr(item.id)
    await getValue(item)
    
}

async function getValue(item) {
    const value = await $redis.get(item.id)
    item['quantity'] = value
}

onMounted(async () => {
    products.value.forEach(product => {
        getValue(product)
    })
    if (products.value < 1) {
            await fetchAndStockProducts(products)
        }
})
</script>
<style scoped></style>