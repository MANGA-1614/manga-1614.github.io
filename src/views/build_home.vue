<template>
    <div id="main">
        <h1>To start:</h1>

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
    h1, div, ul {
        text-align: center;
    }

    h1 {
        margin-top: 1%;
    }

    #content {
        text-align: center;
    }

    #content > ul {
        text-align: left;
        display:inline-block;
    }
</style>