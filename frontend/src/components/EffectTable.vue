
<template>
    <div class="EffectTable">
        <input type="text" placeholder="input an effect" name="search" id="effectInput"/> 
        <br>
        <button @click="getIngredients">Go</button>
   </div>
</template>

<style>
.EffectTable {
    background-color: #444444;
    border: 2px solid red;
    margin: 2px;
    padding: 10px;
}

input {
    background-color: black;
    color: white;
    margin: 10px;
} 
</style>

<script>


export default {
    name: 'EffectTable',
    data() {
        return {
        }
    },
    methods: {

 
        getIngredients() {
            let effect = document.getElementById("effectInput").value;
            let jsonObj = {effect : effect}; 
            let backendURL = "http://" + location.hostname + ":3000";
            let url = backendURL + "/getIngredients";
            console.log("bheja " + jsonObj.effect);
            fetch (url, {
                        mode: 'cors',
                        method: 'post',
                        headers: {
                          // "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                            "Accept": "application/json, text/plain, */*",
                            "Content-type":"application/json; charset=UTF-8",
                            "Access-Control-Allow-Origin":"*",  
                        },
                       body: JSON.stringify(jsonObj)
            }).then(res => res.json())
                .then(data => {
                    console.log('success');
                     let ingred = "";    
                    for(let x in data)
                    {
                         ingred += data[x].name + "\n";
                    }
                    document.getElementById("ingredientTextArea").value = ingred; 
                   }).catch((error)  => {
                    console.log('failure'); 
                });
        },
   }
}

</script>
