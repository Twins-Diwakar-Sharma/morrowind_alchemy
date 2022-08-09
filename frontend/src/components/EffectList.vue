<template>
    <div id='EffectList'>
        <div class='listContainers'>
            <div id='search'>
                <input type='text' /> 
            </div>
            <div>
                <button @click="getEffectsSubArray">GOTO</button>
            </div>
        </div>
        <div class='listContainers'>
            <div id='list'>
                <EffectListItem name="Paralyses" />
                <EffectListItem name="Detect Animal" />
                <EffectListItem name="Restore Fatigue" />
                <EffectListItem name="Resist Magicka" />
            </div>
        </div>
    </div>
</template>


<script charset="utf-8">
    import EffectListItem from './EffectListItem.vue' 
    
    export default {
        name: 'EffectList',
        components: {EffectListItem},
        length: 5,
        index: 1,
        data(){
            return{
                EffectArray:[]
            }
        },
        methods: {

        getEffectsSubArray() {
            let jsonObj = {ind : 1, len : 3}; 
            let backendURL = "http://" + location.hostname + ":3000";
            let url = backendURL + "/getEffectsSubArray";
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


<style>
    #EffectList {
        padding: 1em;
        margin-left: 4em;
        margin-right: 4em;
    }

    .listContainers {
        border-radius: 0.5rem;
    }    

    #search {
        margin: 0.2em;
    }

    #search > input{
        background-color: #feef84;     
        border: 1px solid #752b16;
        margin: 1em;
    }

    #search > input:focus {
        outline: none;
    }

    #list {
        display: grid;
        gap: 4px;
        grid-template-columns: 1fr;
        justify-items: center;
    }

</style>
