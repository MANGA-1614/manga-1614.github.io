<template>
    <!--
        Combine v-if and v-show to hide using ID
        Have a button go through the list
    -->

    <button @click="back()">Back</button>
    <button @click="next()">Next</button>

    <h1>
        {{ build.persona }}
    </h1>

    <h2>
        {{ build.role }}
    </h2>

    <h3>
        {{ build.trait }}
    </h3>

    <h4>
        Skills
    </h4>

    <ul>
        <li v-for="skill in build.skills" :key="skill.id" id="skills">
            {{ skill }}
        </li>
    </ul>

    <h4>
        Description
    </h4>

    <ul>
        <li v-for="reason in build.reasons" :key="reason.id" id="reasons">
            {{ reason[0] }}

            <ul>
                <li v-for="(sub_reason, id1) in reason.slice(1)" :key="id1">
                    {{ sub_reason[0] }}

                    <ul>
                        <li v-for="(sub_sub_reason, id2) in sub_reason.slice(1)" :key="id2">
                            {{ sub_sub_reason[0] }}
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

    <div v-if="build.element">
        <h4>
            Notes on Elemental Personas
        </h4>

        <ul>
            <li v-for="(desc, id1) in element.write_up" :key="id1">
                {{ desc[0] }}

                <ul>
                    <li v-for="(sub_desc, id2) in desc.slice(1)" :key="id2">
                        {{ sub_desc[0] }}

                        <ul>
                            <li v-for="(sub_sub_desc, id3) in sub_desc.slice(1)" :key="id3">
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
    import build1 from '@/data/persona_builds_1.json'
    import element_desc from '@/data/persona_elementals.json'
    export default {
        name: 'Build 1',
        
        data() {
            return {
                //test: "Test",
                id: 0,
                build: build1.builds[0],
                element: element_desc
            }
        },

        mounted() {
            this.id = 0;
        },

        methods: {
            next() {
                if (this.id < (build1.builds.length - 1)) {
                    this.id = this.id + 1;
                    this.build = build1.builds[this.id];
                }
            },

            back() {
                if (this.id > 0) {
                    this.id = this.id - 1;
                    this.build = build1.builds[this.id];
                }
            }
        }
    }
</script>

<style>
</style>