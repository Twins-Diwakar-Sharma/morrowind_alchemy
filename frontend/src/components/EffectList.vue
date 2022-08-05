<template>
    <div id='EffectList'>
        <div class='listContainers'>
            <div id='search'>
                <input type='text' /> 
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
