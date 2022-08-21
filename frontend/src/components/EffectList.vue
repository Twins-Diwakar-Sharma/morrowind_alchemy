<template>
    <div id='EffectList'>
        <div class='effectList_listContainers'>
            <div id='effectList_search'>
                <input type='text' placeholder='selected item problem'/> 
            </div>
       </div>
        <div class='effectList_listContainers'>
            <div id='effectList_listDiv' >
              <li v-for="effect in effectBuffer" id='effectList_list'>
                <EffectListItem :name="effect" />
              </li>  
           </div>
        </div>
    </div>
</template>


<script charset="utf-8">
    import EffectListItem from './EffectListItem.vue' 
    
    export default {
        name: 'EffectList',
        components: {EffectListItem},
        data(){
            return{
                effectBuffer: [],
                index: 1,
                stride: 0,
                itemHeight: 68,
                scrollValue: 0,
                scrollWindowLength: 3,
                length: 1,
            }
        },
        mounted(){
            let effectList_listDiv = document.getElementById('effectList_listDiv');
            effectList_listDiv.addEventListener('scroll', this.handleScroll);
            this.length = this.scrollWindowLength*3;
            //this.getEffectsSubArray();
            this.getEffectsSubArrayTestor();
        },
        methods: {

            handleScroll(){
                if(this.effectBuffer.length >= 9)
                    this.handleScrollForGreaterThan9Items();
                else
                    this.handleScrollForLessThan9Items();
            },

            handleScrollForGreaterThan9Items(){
             let effectList_listDiv = document.getElementById('effectList_listDiv');
            
                if(this.scrollValue <= (this.itemHeight * this.scrollWindowLength) ){
                     this.scrollValue = effectList_listDiv.scrollTop;
                     this.index = 1;
                    if(this.scrollValue <= 1){
                        this.index = 1;
                        this.getEffectsSubArrayTestor();
                    }
                }else{
                    if(effectList_listDiv.scrollTop > 2*(this.itemHeight * this.scrollWindowLength) ) {
                        effectList_listDiv.scrollTop = (this.itemHeight * this.scrollWindowLength);
                        this.scrollValue += (this.itemHeight * this.scrollWindowLength);
                        this.index = this.index + this.scrollWindowLength; // before getEffectsSubArrayTestor
                        this.getEffectsSubArrayTestor();
                    }

                    if(effectList_listDiv.scrollTop <= 1){
                        effectList_listDiv.scrollTop = (this.itemHeight * this.scrollWindowLength);
                        this.scrollValue -= (this.itemHeight * this.scrollWindowLength);
                        this.getEffectsSubArrayTestor();
                        this.index = this.index - this.scrollWindowLength; // after getEffectsSubArrayTestor
                    }

                }
  
            },

            handleScrollForLessThan9Items(){
                let effectList_listDiv = document.getElementById('effectList_listDiv');
                this.scrollValue = effectList_listDiv.scrollTop;
            },

            getEffectsSubArray() {
                let jsonObj = {ind : this.index, len : this.length}; 
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

                        this.effectBuffer = [];
                        for(let each_element of data)
                        {
                            this.effectBuffer.push(each_element.name);
                        }
                        console.log(this.effectBuffer);

                       }).catch((error)  => {
                        console.log('failure'); 
                    });
            },

            
            getEffectsSubArrayTestor() {
                for(let i=0; i<this.length; i++){
                    this.effectBuffer[i] = (this.index + i - 1);
                }
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

    .effectList_listContainers {
        border-radius: 0.5rem;
    }    

    #effectList_search {
        margin: 0.2em;
    }

    #effectList_search > input{
        background-color: #feef84;     
        border: 1px solid #752b16;
        margin: 1em;
    }

    #effectList_search > input:focus {
        outline: none;
    }

    #effectList_listDiv {
        overflow-y: scroll;
        scroll-behavior: none;
        height: 12em;
        scrollbar-width: none;
    }

    #effectList_listDiv::-webkit-scrollbar {
        display: none;
    }

    #effectList_list {
        display: grid;
        gap: 4px;
        grid-template-columns: 1fr;
        justify-items: center;
    }

</style>
