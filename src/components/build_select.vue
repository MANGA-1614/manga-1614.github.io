<template>
    <div class="dropdown">
        <button @click="toggle()">Select Build List</button>

        <div id="content" v-show=this.isHidden>
            <router-link to="/build/No_Orbs_No_DLC"> No Omnipotent Orb, No DLC</router-link>
            <br>
            <router-link to="/build/Orbs_No_DLC">With Omnipotent Orb, No DLC</router-link>
            <br>
            <router-link to="/build/Orbs_DLC">With Omnipotent Orb, With DLC</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isHidden: false
            }
        },
        
        methods: {
            toggle() {
                this.isHidden = !this.isHidden;
            }
        }
    }
</script>

<style scoped>
    div#content {
        left: 50% !important;
        right: auto !important;
        text-align: center !important;
        transform: translateX(-50%) !important;
        position: absolute !important;
        padding: 12px 16px;
        background-color: white;
        border: 2px solid red;
    }
</style>