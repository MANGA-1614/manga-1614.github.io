<template>
    <buildselect/>

    <div id="build">
        <div id="role">
            <div class="role_select">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Select Role
                </button>
                
                <ul class="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenuButton1">
                    <li @click="id_drop(0)">MT-Almighty</li>
                    <li @click="id_drop(1)">ST-Almighty</li>
                    <li @click="id_drop(2)">Ailments</li>
                    <li @click="id_drop(3)">Physical</li>
                    <li @click="id_drop(4)">Gun Damage</li>
                    <li @click="id_drop(5)">Gun Critical</li>
                    <li @click="id_drop(6)">Fire</li>
                    <li @click="id_drop(7)">Ice</li>
                    <li @click="id_drop(8)">Elec</li>
                    <li @click="id_drop(9)">Wind</li>
                    <li @click="id_drop(10)">Psy</li>
                    <li @click="id_drop(11)">Nuke</li>
                    <li @click="id_drop(12)">Bless</li>
                    <li @click="id_drop(13)">Curse</li>
                    <li @click="id_drop(14)">Buffer/Debuffer</li>
                    <li @click="id_drop(15)">Starter</li>
                    <li @click="id_drop(16)">Healer</li>
                    <li @click="id_drop(17)">Hama-Based Insta-Kill</li>
                    <li @click="id_drop(18)">Curse-Based Insta-Kill</li>
                </ul>
            </div>
            <h2>
                {{ build2.role }}
            </h2>        
        </div>

        <info :build="build2" :element="element"/>
    </div>
</template>

<script>
    import info from '../components/build_info.vue'
    import build_2 from '@/data/persona_builds_2.json'
    import element_desc from '@/data/persona_elementals.json'
    import buildselect from '../components/build_select.vue'
    
    export default {
        name: 'Build 2',

        components: {
            buildselect,
            info
        },
        
        data() {
            return {
                //test: "Test",
                id: 0,
                build2: build_2.builds[0],
                element: element_desc
            }
        },

        mounted() {
            this.id = 0;
        },

        methods: {
            next() {
                if (this.id < (build_2.builds.length - 1)) {
                    this.id = this.id + 1;
                    this.build2 = build_2.builds[this.id];
                }
            },

            back() {
                if (this.id > 0) {
                    this.id = this.id - 1;
                    this.build2 = build_2.builds[this.id];
                }
            },

            id_drop(id_drop) {
                this.id = id_drop;
                this.build2 = build_2.builds[this.id];
            }
        }
    }
</script>

<style scoped>
    @import '../assets/build_css.css';
</style>