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
                <li v-for="(sub_reason, id) in reason.slice(1)" :key="id">
                    {{ sub_reason }}
                </li>
            </ul>
        </li>
    </ul>

<!--
    <div v-for="(data, id) in build" :key="id">
        <span> Build {{ id + 1 }}</span>
        <h1>{{ data.persona }}</h1>
        <h2>{{ data.role }}</h2>
        <h3>{{ data.trait }}</h3>

        <h4>Skills</h4>
        <ul>
            <li v-for="skill in data.skills" :key="skill.id" id="skills">
                {{ skill }}
            </li>
        </ul>

        <h4>Description</h4>
        <ul>
            <li v-for="reason in data.reasons" :key="reason.id" id="desc">
                {{ reason }}
            </li>
        </ul>
    </div>
-->
</template>

<script>
    import build1 from '@/data/persona_builds_no_orb.json'
    export default {
        name: 'Build 1',
        
        data() {
            return {
                //test: "Test",
                id: 0,
                build: build1.builds[0],
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
    #desc {
        margin-right: 50%;
    }

    #skills {

    }
</style>