<template>
    <h1>
        This is the Home page.
    </h1>

    <br>

    <h2>Purpose of this site:</h2>

    <div>
        Practice VueJS
    </div>

    <div>
        Make an easy-to-read website for Persona 5 Royal builds
    </div>

    <br>

    <h2>To start:</h2>

    <div>
        Use the button above to select a list, depending on your situation:
    </div>

    <ul>
        <li>You do not have the Omnipotent Orb nor the paid DLC</li>
        <li>You have the Omnipotent Orb but not the paid DLC</li>
        <li>You have the Omnipotent Orb and DLC</li>
    </ul>
</template>

<style scoped>
    h1, h2, div, ul {
        text-align: center;
    }

    h1 {
        margin-top: 5%;
    }

    ul {
        width: 35%;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    li {
        text-align:left;
    }
</style>