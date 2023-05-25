<template>
    <nav class="flex justify-center items-center text-lg bg-blue-400">
        <UContainer class="email">
            {{ email }}
        </UContainer>
        <Panier :item-list="panierProduits" />
    </nav>
    <SearchBar @update:modelValue="search"/>
    <div class="products mx-auto w-2/4">

        <Product v-for="product of products" :product=product @panier="addToPanier"/>
    </div>
</template>
<script setup>
    import SearchBar from '../components/SearchBar.vue'
    import Product from '../components/Product.vue'
    import Panier from '../components/Panier.vue'

    definePageMeta({
        title: 'Produits',
        middleware: 'auth-middleware',
    })

    const email = useCookie('email')
    const products = ref([])
    const panierProduits = ref([])

    function addToPanier(produit) {
        const find = panierProduits.value.find(item => item.id === produit.id)
        if(find !== undefined){
            find.quantity++
            return
        }
        panierProduits.value.push(produit)
    }

    function search(keyword) {
        
    }
    onMounted(async () => {
        products.value = await (await fetch('https://fakestoreapi.com/products')).json()
        console.log(products.value)
    })
</script>
<style scoped>
.products{
    display: flex;
    flex-wrap: wrap;
}</style>