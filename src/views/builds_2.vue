<template>
    <buildselect/>

    <h2>
        Omnipotent Orb without DLC
    </h2>

    <div id="build">
        <div id="role">
            <div class="role_select">
                <button @click="toggle()">Select Role</button>

                <div id="role_content" v-show=this.isHidden>
                    <span @click="id_drop(0)">MT-Almighty</span>
                    <br>
                    <span @click="id_drop(1)">ST-Almighty</span>
                    <br>
                    <span @click="id_drop(2)">Ailments</span>
                    <br>
                    <span @click="id_drop(3)">Physical</span>
                    <br>
                    <span @click="id_drop(4)">Gun Damage</span>
                    <br>
                    <span @click="id_drop(5)">Gun Critical</span>
                    <br>
                    <span @click="id_drop(6)">Fire</span>
                    <br>
                    <span @click="id_drop(7)">Ice</span>
                    <br>
                    <span @click="id_drop(8)">Elec</span>
                    <br>
                    <span @click="id_drop(9)">Wind</span>
                    <br>
                    <span @click="id_drop(10)">Psy</span>
                    <br>
                    <span @click="id_drop(11)">Nuke</span>
                    <br>
                    <span @click="id_drop(12)">Bless</span>
                    <br>
                    <span @click="id_drop(13)">Curse</span>
                    <br>
                    <span @click="id_drop(14)">Buffer/Debuffer</span>
                    <br>
                    <span @click="id_drop(15)">Starter</span>
                    <br>
                    <span @click="id_drop(16)">Healer</span>
                    <br>
                    <span @click="id_drop(17)">Hama-Based Insta-Kill</span>
                    <br>
                    <span @click="id_drop(18)">Curse-Based Insta-Kill</span>
                </div>
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
                element: element_desc,
                isHidden: false
            }
        },

        mounted() {
            this.id = 0;
        },

        methods: {
            toggle() {
                this.isHidden = !this.isHidden;
            },

            id_drop(id_drop) {
                this.id = id_drop;
                this.build2 = build_2.builds[this.id];
                this.toggle();
            }
        }
    }
</script>

<style scoped>
    @import '../assets/build_css.css';
</style>