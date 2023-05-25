<template>
  <Navbar />
  <div class="w-full flex flex-col items-center">
    <SearchBar @update:modelValue="searchKeyword = value"/>
    <div class="products mx-auto w-2/4">
      <Product
        v-for="product of filteredProducts"
        :product="product"
        @panier="addToPanier"
      />
    </div>
  </div>
</template>
<script setup>
import SearchBar from "../../components/SearchBar.vue";
import Product from "../../components/Product.vue";
import Navbar from "../../components/NavBar.vue";
import { fetchAndStockProducts } from "../../composables/states";

definePageMeta({
  title: "Produits",
  middleware: "auth-middleware",
});

const products = useProducts();
const panierProduits = usePanier();
const searchKeyword = ref('')
const filteredProducts = computed(() => {
    if (searchKeyword.value === "") return products.value
    return products.value.filter(item => item.title.toLowerCase().includes(searchKeyword.value.toLowerCase()) || item.description.toLowerCase().includes(searchKeyword.value.toLowerCase()))
})
function addToPanier(produit) {
  const find = panierProduits.value.find((item) => item.id === produit.id);
  if (find !== undefined) {
    find.quantity++;
    return;
  }
  panierProduits.value.push(produit);
}

onMounted(async () => {
  if (products.value < 1) {
    await fetchAndStockProducts(products);
  }
});
</script>
<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
</style>
