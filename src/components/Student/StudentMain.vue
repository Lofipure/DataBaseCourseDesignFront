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
    import axios from 'axios';

    export default {
        name: "StudentMain",
        data: () => ({
            userData: {},
            menu: []
        }),
        mounted() {
            axios({
                method: "GET",
                url: `http://localhost:14000/student/getPassword?studentID=${this.$route.params.studentID}`
            })
                .then(response => {
                    this.userData = response.data;
                    console.log(this.userData);
                    this.menu = [
                        {
                            name: "信息",
                            icon: "mdi-account-star-outline",
                            router: `/student/basicInfo/${this.userData[0].studentID}`
                        },
                        {
                            name: "选课",
                            icon: "mdi-google-classroom",
                            router: `/student/choiceCourse/${this.userData[0].studentID}`
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