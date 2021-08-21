<template>
    <div id="dropdown">
        <b>Roles</b>
        <div @click="id_drop(0)">MT-Almighty</div>
        <div @click="id_drop(1)">ST-Almighty</div>
        <div @click="id_drop(2)">Ailments</div>
        <div @click="id_drop(3)">Physical</div>
        <div @click="id_drop(4)">Gun Damage</div>
        <div @click="id_drop(5)">Gun Critical</div>
        <div @click="id_drop(6)">Fire</div>
        <div @click="id_drop(7)">Ice</div>
        <div @click="id_drop(8)">Elec</div>
        <div @click="id_drop(9)">Wind</div>
        <div @click="id_drop(10)">Psy</div>
        <div @click="id_drop(11)">Nuke</div>
        <div @click="id_drop(12)">Bless</div>
        <div @click="id_drop(13)">Curse</div>
        <div @click="id_drop(14)">Buffer/Debuffer</div>
        <div @click="id_drop(15)">Starter</div>
        <div @click="id_drop(16)">Healer</div>
        <div @click="id_drop(17)">Hama-Based Insta-Kill</div>
        <div @click="id_drop(18)">Curse-Based Insta-Kill</div>
    </div>

    <div id="build1">
        <!--
        <div id="buttons">
            <button @click="back()">Back</button>
            <button @click="next()">Next</button>
        </div>
        -->

        <div id="persona">
            <b>
                Persona
            </b>

            <h1>
                {{ build1.persona }}
            </h1>
        </div>

        <div id="role">
            <b>
                Role
            </b>

            <h2>
                {{ build1.role }}
            </h2>        
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
    
    export default {
        name: 'Build 1',
        
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
        width: 25%;
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

    #dropdown, #build1 {
        float: left;
    }

    #dropdown {
        top: 0%;
        bottom: 0%;
        position: fixed;
        text-align: center;
    }

    #dropdown > div {
        margin-top: 5%;
    }
    
    #build1 {
        width: 70%;
        margin-left: 20%;
    }

</style>