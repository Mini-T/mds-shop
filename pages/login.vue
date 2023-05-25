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

const { query } = useRoute();
const email = ref("");
const cookie = useCookie("email");
function handleForm(input) {
  cookie.value = input;
  navigateTo("products");
}

onMounted(() => {
  if (query.email) {
    handleForm(query.email);
  }
});
</script>
<style scoped>
.main {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: aqua;
}
</style>
