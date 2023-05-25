<template>
  <div class="main">
    <UContainer>
      <UInput
        v-model="email"
        type="email"
        name="email"
        placeholder="Enter email"
        required
        @keyup.enter="handleForm(email)"
      />
    </UContainer>
  </div>
</template>
<script setup>
useHead({ title: "Login" });
import {fetchAndStockProducts} from '../composables/states'


const products = useProducts()
const { query } = useRoute();
const email = ref("");
const cookie = useCookie("email"); 
function handleForm(input) {
  cookie.value = input
  navigateTo("products");
}

onMounted(async () => {
  if (query.email) {
    handleForm(query.email);
  }
  if (products.value.length < 1) {
            await fetchAndStockProducts(products)
        }
})
</script>
<style scoped>
.main {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: aqua;
}
</style>
