<template>
    <UPopover>
        <UButton trailing-icon='shopping-cart'></UButton>
        <template #panel>
            <div class="p-4">
                <header class="flex justify-between"><p>title</p>      <p>quantité</p></header>
                <div class="flex justify-between" v-for="item in itemList">
                    <span class="truncate w-3/4" >{{ item.title }}</span>
                    <span>{{ item.quantity }}</span>
                </div>
                <div class="flex justify-between">
                    <span>Nombre de produits:  {{ itemList.reduce((total, obj) => total + obj.quantity, totalQuantity)  }}</span>
                    <span class="m-1">Prix total: {{ itemList.reduce((total, obj) => total + (obj.price * obj.quantity), totalPrice) }}</span>
                </div>
            </div>
        </template>
    </UPopOver>
</template>
<script setup>
const totalQuantity = ref(0)
const totalPrice = ref(0)
    const props = defineProps({})
    const itemList = usePanier()
</script>
<style scoped>

</style>