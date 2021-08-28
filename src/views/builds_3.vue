<template>
    <buildselect/>

    <h2>
        Omnipotent Orb with DLC
    </h2>

    <div id="build">
        <div id="role">
            <div class="role_select">
                <button @click="toggle()">Select Role</button>

                <div id="role_content" v-show=this.isHidden>
                    <span @click="id_drop(0)">Almighty</span>
                    <br>
                    <span @click="id_drop(1)">Ailment - Sleep and Rage</span>
                    <br>
                    <span @click="id_drop(2)">Ailment - Go Even Further Beyond</span>
                    <br>
                    <span @click="id_drop(3)">Ailment - Immunity</span>
                    <br>
                    <span @click="id_drop(4)">Fire</span>
                    <br>
                    <span @click="id_drop(5)">Bless</span>
                    <br>
                    <span @click="id_drop(6)">Curse</span>
                    <br>
                    <span @click="id_drop(7)">Buffer/Debuffer</span>
                </div>
            </div>
            <h2>
                {{ build3.role }}
            </h2>        
        </div>

        <info :build="build3" :element="element"/>
    </div>
</template>

<script>
    import info from '../components/build_info.vue'
    import build_3 from '@/data/persona_builds_3.json'
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
                id: 0,
                build3: build_3.builds[0],
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
                this.build3 = build_3.builds[this.id];
                this.toggle();
            }
        }
    }
</script>

<style scoped>
    @import '../assets/build_css.css';
</style>