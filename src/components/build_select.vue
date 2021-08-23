<template>
    <div class="dropdown">
        <button
            class="btn_btn-secondargy_dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            Select Build List
        </button>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <!--
                Vue Routing here
            -->
            <li>
                <router-link to="/build/No_Orbs_No_DLC"> No Omnipotent Orb, No DLC</router-link>
            </li>
            <li>
                With Omnipotent Orb, No DLC
            </li>
            <li>
                With Omnipotent Orb, With DLC
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .dropdown {
        text-align: center;
    }
</style>