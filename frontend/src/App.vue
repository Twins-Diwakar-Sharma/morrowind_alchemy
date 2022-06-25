<template>
    <EffectTable/>
    <IngredientTable/>
</template>

<script charset="utf-8">
    import EffectTable from './components/EffectTable.vue'
    import IngredientTable from './components/IngredientTable.vue'
    
    export default {
        name: 'App',
        components: {EffectTable, IngredientTable},
    }

</script>


<style>

#app{
    

  display: grid;
  grid-template-columns: repeat(2,1fr);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  justify-items:center;
}

</style>
