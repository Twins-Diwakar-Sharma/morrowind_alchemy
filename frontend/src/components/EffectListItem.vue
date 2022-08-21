<template>
    <label :class="{ 'selectedLabel' : selected }" @click='stage'>
        <span class='selected'>{{name}}</span>
    </label>
</template>


<script charset="utf-8">
    export default {
        name: 'EffectListItem',
        props: ['name'] ,

        data(){
            return {
                selected: false,
            }
        },

        methods: {
            stage(){
                this.selected = !this.selected;
                let es = document.getElementById('EffectTable_EffectsStaged');
                let l = document.createElement('li');
                l.innerHTML = this.name;
                es.appendChild(l);
            }

        }
    
    }
</script>

<style>
    label {
        border-radius: 0.5rem;
        background-color: #313131;
        color: #feef84;
        color: #ae9f34;
        padding: 1em;
        margin: 0.5em;
        cursor: pointer;
    } 

    label > input {
        display: none;
    }

    label > span {
        user-select: none;
        -moz-user-select: none;
    }

    .selectedLabel {
        color: white; 
        text-shadow: 0 0 1em #feef84;
        background-color: #3f3f3f; 
    }
    
</style>
