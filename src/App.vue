<script setup>
  import Cabecalho from './components/Cabecalho.vue'
  import Rodape from './components/Rodape.vue'
</script>

<template>
  <Cabecalho />
  <router-view />
  <Rodape />
</template>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Genos", sans-serif;
}
</style>