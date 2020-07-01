<template>
    <div>
        <v-row justify="center">
            <v-col cols="4">
                <div class="ma-5">
                    <v-card width="90%" class="ma-auto" loading="teal lighten-1">
                        <v-card-title>关于题目~</v-card-title>
                        <v-card-text>
                            <v-row justify="center">
                                <v-col cols="10">
                                    <v-icon>mdi-school</v-icon>&nbsp;学生选课系统
                                </v-col>
                                <v-col cols="10">数据库原理与应用课程设计</v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </div>
                <div class="ma-5">
                    <v-card width="90%" class="ma-auto" loading="warning">
                        <v-card-title>关于技术栈~</v-card-title>
                        <v-card-text>
                            <v-row justify="center">
                                <v-col cols="10">
                                    <v-icon>mdi-vuejs</v-icon>
                                    前端：Vue.js
                                </v-col>
                                <v-col cols="10">
                                    <v-icon>mdi-nodejs</v-icon>
                                    后端：Node.js
                                </v-col>
                                <v-col cols="10">
                                    <v-icon>mdi-database</v-icon>
                                    数据库：MySQL
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </div>
                <div class="ma-5">
                    <v-card width="90%" class="ma-auto" loading="red">
                        <v-card-title>关于作者~</v-card-title>
                        <v-card-text>
                            <v-row justify="center">
                                <v-col cols="10">
                                    <v-icon>mdi-account</v-icon>
                                    姓名：王子恒
                                </v-col>
                                <v-col cols="10">
                                    <v-icon>mdi-google-classroom</v-icon>
                                    班级：软件工程1804
                                </v-col>
                                <v-col cols="10">
                                    <v-icon>mdi-format-list-numbered</v-icon>
                                    学号：18407020432
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: () => ({})
    }
</script>

<style scoped>
#main-title {
    text-align: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>