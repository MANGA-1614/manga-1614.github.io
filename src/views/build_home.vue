<template>
    <div id="main">
        <h2>To start:</h2>

        <div>
            Use the button above to select a list, depending on your situation:
        </div>

        <div id="content">
            <ul>
                <li>You do not have the Omnipotent Orb nor the paid DLC</li>
                <li>You have the Omnipotent Orb but not the paid DLC</li>
                <li>You have the Omnipotent Orb and DLC</li>
            </ul>
        </div>
    </div>
    <buildselect/>
</template>

<script>
    import buildselect from '../components/build_select.vue'
    
    export default {
        name: 'build_home',
        components: {
            buildselect
        }
    }
</script>

<style scoped>
    h2, div, ul {
        text-align: center;
    }

    #content {
        text-align: center;
    }

    #content > ul {
        text-align: left;
        display:inline-block;
        zoom:1;
    }
</style>