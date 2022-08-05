<template>
    <div id='SearchEffect'>
        <EffectList />
    </div>

    <div id='StageEffect'>
       xyz 1
    </div>

    <div id='StageIngredients'>
       xyz 2
    </div>

    <div id='SearchIngredients'>
       xyz 3
    </div>


</template>

<script charset="utf-8">
    import EffectList from './components/EffectList.vue'
    
    export default {
        name: 'App',
        components: {EffectList},

    }

</script>


<style>

html{
    background-color: #222222;
}

#app{
    
  display: grid;
  gap: 1.2em;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(120px, auto);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
}

#app > div {
    border-radius: 0.5rem;
    background-color: #bee653;

}

#app > #SearchEffect {
    grid-row: 1 / 4;
}

#app > #StageEffect {
    grid-column: 2 / 5;
}

#app > #StageIngredients {
    grid-column: 2 / 5;
    grid-row: 2 / 4;
}

#app > #SearchIngredients {
    grid-column: 1 / 5;
    grid-row: 4 / 5;
}

</style>
