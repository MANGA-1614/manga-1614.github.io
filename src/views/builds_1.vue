<template>
    <!--
        Bootstrap dropdown here instaed of div lists
    -->

    <buildselect/>

    <div id="build1">
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
                {{ build1.role }}
            </h2>        
        </div>

        <div id="persona">
            <b>
                Persona
            </b>

            <h1>
                {{ build1.persona }}
            </h1>
        </div>

        <div id="trait">
            <b>
                Trait
            </b>

            <h3>
                {{ build1.trait }}
            </h3>        
        </div>

        <div id="skills">
            <h4 id="h4_skills">
                Skills
            </h4>

            <div id="list_skill" v-for="skill in build1.skills" :key="skill.id">
                {{ skill }}
            </div>      
        </div>

        <div id="desc">
            <h4 id="h4_desc">
                Description
            </h4>
            <ul>
                <li id="list_desc" v-for="reason in build1.reasons" :key="reason.id">
                    {{ reason[0] }}
                    <ul>
                        <li id="list_sub_desc" v-for="(sub_reason, id1) in reason.slice(1)" :key="id1">
                            {{ sub_reason[0] }}

                            <ul>
                                <li id="list_sub_sub_desc" v-for="(sub_sub_reason, id2) in sub_reason.slice(1)" :key="id2">
                                        {{ sub_sub_reason[0] }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li> 
            </ul>    
        </div>

        <div id="element" v-if="build1.element">
            <h4 id="h4_elem">
                Notes on Elemental Personas
            </h4>

            <ul>
                <li id="list_elem" v-for="(desc, id1) in element.write_up" :key="id1">
                    {{ desc[0] }}

                    <ul>
                        <li id="list_sub_elem" v-for="(sub_desc, id2) in desc.slice(1)" :key="id2">
                            {{ sub_desc[0] }}

                            <ul>
                                <li id="list_sub_sub_elem" v-for="(sub_sub_desc, id3) in sub_desc.slice(1)" :key="id3">
                                    {{ sub_sub_desc[0] }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import build_1 from '@/data/persona_builds_1.json'
    import element_desc from '@/data/persona_elementals.json'
    import buildselect from '../components/build_select.vue'
    
    export default {
        name: 'Build 1',

        components: {
            buildselect
        },
        
        data() {
            return {
                //test: "Test",
                id: 0,
                build1: build_1.builds[0],
                element: element_desc
            }
        },

        mounted() {
            this.id = 0;
        },

        methods: {
            next() {
                if (this.id < (build_1.builds.length - 1)) {
                    this.id = this.id + 1;
                    this.build1 = build_1.builds[this.id];
                }
            },

            back() {
                if (this.id > 0) {
                    this.id = this.id - 1;
                    this.build1 = build_1.builds[this.id];
                }
            },

            id_drop(id_drop) {
                this.id = id_drop;
                this.build1 = build_1.builds[this.id];
            }
        }
    }
</script>

<style scoped>
    button {
        margin-bottom: 3%;
    }

    h1, h2, h3{
        /*border: 1px solid red;*/
        line-height: 20%;
        margin-top: 2%;
        margin-bottom: 4%;
    }

    div {
        text-align: center;
    }

    ul {
        list-style-position: inside;
        margin-top: 0%;
    }

    li {
        line-height: 1.5;
    }

    #h4_skills, #h4_desc, #h4_elem {
        margin-bottom: 0px;
    }

    #persona, #role, #trait, #skills {
        width: 50%;
        margin: auto;
    }

    #list_skill {
        margin: auto;
    }

    #desc {
        width: 50%;
        margin: auto;
    }

    #element {
        width: 75%;
        margin: auto;
    }

    #list_desc, #list_elem {
        text-align: left;
        margin: auto;
    }

    #build1 {
        text-align: center;
        width: 70%;
        margin: auto;
    }

    .role_select {
        margin: auto;
    }

    #role_select > div {
        margin-top: 5%;
    }

    ul[aria-labelledby="dropdownMenuButton1"] > li {
        text-align: center;
    }

    ul[aria-labelledby="dropdownMenuButton1"] {
        border: 2px solid red;
    }

    .dropdown-menu-center {
        left: 50% !important;
        right: auto !important;
        margin-top: 100px !important;
        text-align: center !important;
        transform: translateX(-50%) !important;
        position: fixed !important;
    }
</style>