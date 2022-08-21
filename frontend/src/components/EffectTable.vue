
<template>
    <div class="EffectTable">
        <input type="text" placeholder="input an effect" name="search" id="effectInput"/> 
        <br>
        <button @click="getIngredientsFromEffect">Go</button>
        <button @click="getIngredientsSubArray">Goto</button>
        <br>
        <ul id="EffectTable_EffectsStaged"></ul>
   </div>
</template>

<style>
.EffectTable {
    background-color: #df4545;
    margin: 2px;
    padding: 10px;
}

input {
    background-color: #ff6565;
    border: none;
    border-radius: 0.5rem;
    color: black;
    margin: 10px;
} 

input:focus{
 outline: none;
}

button {
    background-color: #ff6565;
    border: 1px solid #df4545;
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

        getIngredientsFromEffect() {
            let effect = document.getElementById("effectInput").value;
            let jsonObj = {effect : effect}; 
            let backendURL = "http://" + location.hostname + ":3000";
            let url = backendURL + "/getIngredientsFromEffect";
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
                     let ingredListString = "";    
                    for(let each_element of data)
                    {
                        ingredListString += each_element.name + "\n";
                    }
                    document.getElementById("ingredientTextArea").value = ingredListString; 
                   }).catch((error)  => {
                    console.log('failure'); 
                });
        },

        getIngredientsSubArray() {
            let jsonObj = {ind : 1, len : 3}; 
            let backendURL = "http://" + location.hostname + ":3000";
            let url = backendURL + "/getIngredientsSubArray";
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
                     let ingredListString = "";    
                    for(let each_element of data)
                    {
                        ingredListString += each_element.name + "\n";
                    }
                    document.getElementById("ingredientTextArea").value = ingredListString; 
                   }).catch((error)  => {
                    console.log('failure'); 
                });
        },


   }
}

    </script>
