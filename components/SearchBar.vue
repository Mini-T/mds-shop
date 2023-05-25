<template>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
    />
  </template>
  
  <script>
  
  </script>
  
  <style>
  </style>