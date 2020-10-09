<template>
    <div>
        <v-row>
            <v-col cols="2">
                <v-list>
                    <v-list-item-group>
                        <v-list-item v-for="(item,i) in menu" v-bind:key="i" color="primary" v-bind:to="item.router">
                            <v-list-item-icon>
                                <v-icon>{{item.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{item.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
            <v-col cols="9">
                <router-view></router-view>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "TeacherMain",
        data: () => ({
            userData: {},
            menu: []
        }),
        mounted() {
            axios({
                method: "GET",
                url: `http://localhost:14000/teacher/getPassword?teacherID=${this.$route.params.teacherID}`
            }).then(response => {
                this.userData = response.data;
                console.log(this.userData);
                this.menu = [
                    {
                        name: "信息",
                        icon: "mdi-account-star-outline",
                        router: `/teacher/basicInfo/${this.userData[0].teacherID}`
                    },
                    {
                        name: "选课",
                        icon: "mdi-teach",
                        router: `/teacher/choiceCourse/${this.userData[0].teacherID}`
                    },
                    {
                        name: "录入成绩",
                        icon: "mdi-scoreboard-outline",
                        router: `/teacher/inGrade/${this.userData[0].teacherID}`
                    }
                ]
            })
        },
        beforeDestroy() {
            sessionStorage.clear();
        }
    }
</script>

<style scoped>

</style>