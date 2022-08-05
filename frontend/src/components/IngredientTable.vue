<template>
    <div class="IngredientTable">
        <textarea name="" id="ingredientTextArea" readonly rows=10 cols=30 ></textarea> 
   </div>
</template>

<style>
.IngredientTable {
    background-color: #34df8f;
    margin: 2px;
    padding: 10px;
}

textarea {
    background-color: #34ffaf;
    color: black;
    border: none;
    border-radius: 0.5rem;
} 

textarea:focus {
    outline: none;
}
</style>


<script>
    
export default {
    name: 'IngredientTable',
    data() {
        return{}
    },
    methods: {
    
    }

}



    
</script>




