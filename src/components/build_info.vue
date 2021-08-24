<template>
    <div id="persona">
        <b>
            Persona
        </b>

        <h1>
            {{ build.persona }}
        </h1>
    </div>

    <div id="trait">
        <b>
            Trait
        </b>

        <h3>
            {{ build.trait }}
        </h3>        
    </div>

    <div id="skills">
        <h4 id="h4_skills">
            Skills
        </h4>

        <div id="list_skill" v-for="skill in build.skills" :key="skill.id">
            {{ skill }}
        </div>      
    </div>

    <div id="desc">
        <h4 id="h4_desc">
            Description
        </h4>
        <ul>
            <li id="list_desc" v-for="reason in build.reasons" :key="reason.id">
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

    <div id="element" v-if="build.element">
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
</template>

<script>
    export default {
        props: ['build', 'element'],
    }
</script>

<style scoped>
    h1, h2, h3{
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
</style>