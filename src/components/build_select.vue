<template>
    <div class="dropdown">
        <button @click="toggle()" id="btn_build_list">Select Build List</button>

        <div id="build_content" v-show=this.isHidden>
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
    @import '../assets/build_css.css';
</style>