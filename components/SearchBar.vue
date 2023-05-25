<template>
    <input
    class="w-96 my-3"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      type="text"
    />
  </template>
  
  <script>
  
  </script>
  
  <style>
  </style>