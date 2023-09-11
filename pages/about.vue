<template>
  <div>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum placeat ut qui molestiae sed temporibus culpa nostrum cupiditate architecto maiores.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum placeat ut qui molestiae sed temporibus culpa nostrum cupiditate architecto maiores.</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/GBP')
</script>

<style lang="scss" scoped>

</style>