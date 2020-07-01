<template>
    <v-app>
        <div class="overflow-hidden">
            <v-dialog v-model="loginDialog" max-width="20%">
                <v-card v-if="!loadingStatus">
                    <v-card-title class="text-center flex align-center justify-center">登录</v-card-title>
                    <v-card-text>
                        <v-row justify="center">
                            <v-col cols="10">
                                <v-text-field label="用户名" v-model="userData.userName" type="text"
                                              v-bind:disabled="loadingStatus"></v-text-field>
                            </v-col>
                            <v-col cols="10">
                                <v-text-field label="密码" v-model="userData.userPassword" type="password"
                                              v-bind:disabled="loadingStatus"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-radio-group v-model="userData.role" row>
                                <v-radio label="教师" value="teachers"></v-radio>
                                <v-radio label="学生" value="students"></v-radio>
                                <v-radio label="管理员" value="admin"></v-radio>
                            </v-radio-group>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="success" class="ma-auto" width="70%" v-on:click="login">登录</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-app-bar color="primary" dark scroll-target="#body">
                <v-app-bar-nav-icon>
                    <v-icon>mdi-school</v-icon>
                </v-app-bar-nav-icon>
                <v-toolbar-title>学生选课系统</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-btn icon v-on:click.stop="loginDialog = true">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
                <v-btn icon v-on:click.stop="toHome">
                    <v-icon>mdi-home-export-outline</v-icon>
                </v-btn>
            </v-app-bar>
            <v-sheet id="body" max-width="100%">
                <router-view style="height: 100%"></router-view>
            </v-sheet>
        </div>
    </v-app>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'App',
        mounted() {
            if (this.userData === {}) {
                this.loginDialog = true
            }
            if (!sessionStorage.token) {
                this.loadingStatus = sessionStorage.token;
            }
        },
        data: () => ({
            loginDialog: false,
            userData: {},
            loadingStatus: undefined
        }),
        methods: {
            login() {
                this.loginDialog = false;
                if (this.userData.role === 'admin') {
                if (this.userData.userName === 'admin' && this.userData.userPassword === "admin") {
                    alert(`管理员登录成功`);
                    // 添加用户名到session
                    sessionStorage.setItem('token', this.userData.userName);
                    // 路由跳转
                    this.$router.push('/admin');
                } else {
                        console.log(this.userData.userName === 'admin', this.userData.userPassword === 'admin');
                        alert("管理员用户名或密码错误");
                    }
                } else if (this.userData.role === 'students') {
                    console.log(this.userData.userName, this.userData.userPassword);
                    axios({
                        method: "GET",
                        url: `http://localhost:4000/student/getPassword?studentID=${this.userData.userName}`
                    }).then(response => {
                        let password = response.data[0].studentPassword;
                        console.log(password);
                        if (this.userData.userPassword === password) {
                            alert("学生登录成功");
                            sessionStorage.setItem('token', this.userData.userName);
                            this.$router.push(`/student/basicInfo/${this.userData.userName}`);
                        } else {
                            alert("用户名或密码错误");
                        }
                    });
                } else if (this.userData.role === 'teachers') {
                    axios({
                        method: "GET",
                        url: `http://localhost:4000/teacher/getPassword?teacherID=${this.userData.userName}`
                    }).then(response => {
                        let password = response.data[0].teacherPassword;
                        if (this.userData.userPassword === password) {
                            alert("教师登录成功");
                            console.log(this.userData.userName);
                            sessionStorage.setItem('token', this.userData.userName);
                            this.$router.push(`/teacher/basicInfo/${this.userData.userName}`);
                        } else {
                            alert("用户名或密码错误");
                        }
                    });
                }
            },
            toHome() {
                this.$router.push('/home');
            }
        }
    };
</script>
