<template>
    <div class="dropdown">
        <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            Select Build List
        </button>

        <ul class="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenuButton1">
            <li>
                <router-link to="/build/No_Orbs_No_DLC"> No Omnipotent Orb, No DLC</router-link>
            </li>
            <li>
                <router-link to="/build/Orbs_No_DLC">With Omnipotent Orb, No DLC</router-link>
            </li>
            <li>
                <router-link to="/build/Orbs_DLC">With Omnipotent Orb, With DLC</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .dropdown {
        text-align: center;
    }

    .dropdown-menu-center {
        left: 50% !important;
        right: auto !important;
        top: 37px !important;
        text-align: center !important;
        transform: translateX(-50%) !important;
        position: absolute !important;
    }
</style>