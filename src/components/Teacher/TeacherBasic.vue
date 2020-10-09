<template>
    <div>
        <v-dialog v-model="changePasswordDialogStatus" class="overflow-hidden" width="40%">
            <v-card class="overflow-hidden">
                <v-card-subtitle class="pa-4">更改密码</v-card-subtitle>
                <v-row justify="center">
                    <v-col cols="6">
                        <v-text-field label="新密码" v-bind:hint="'原密码：' + userData.teacherPassword" persistent-hint
                                      v-model="newPassword"></v-text-field>
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-row justify="center">
                        <v-btn width="50%" color="success" v-on:click="changePassword">更改</v-btn>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <div>
            <v-subheader>{{userData.teacherName}}老师的基本信息</v-subheader>
            <v-row justify="center">
                <v-col cols="3">
                    <v-text-field v-model="userData.teacherName" label="姓名" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.teacherGender" label="性别" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.teacherEmail" label="邮箱" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.teacherWork" label="职称" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.teacherCollege" label="学院" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.teacherTelephone" label="电话" shaped outlined></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="2">
                    <v-btn color="success" width="90%" v-on:click="updateStudent">保存当前更改</v-btn>
                </v-col>
                <v-col cols="2">
                    <v-btn color="primary" width="90%" v-on:click="changePasswordDialogStatus = true">更改密码</v-btn>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-subheader>{{userData.teacherName}}老师的授课情况</v-subheader>
            <v-simple-table>
                <thead>
                <tr>
                    <th>课程号</th>
                    <th>课程名</th>
                    <th>学分</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, i) in alreadyChoice" v-bind:key="i">
                    <td>{{item.courseID}}</td>
                    <td>{{item.courseName}}</td>
                    <td>{{item.courseScore}}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "TeacherBasic",
        data: () => ({
            userData: {},
            changePasswordDialogStatus: false,
            newPassword: undefined,
            alreadyChoice: [],
        }),
        mounted() {
            axios({
                method: "GET",
                url: `http://localhost:14000/teacher/getPassword?teacherID=${this.$route.params.teacherID}`
            }).then(response => {
                this.userData = response.data[0];
                console.log(this.userData);
            });

            axios({
                method: "GET",
                url: `http://localhost:14000/teacher/getAlreadyChoice?teacherID=${this.$route.params.teacherID}`
            }).then(response => {
                this.alreadyChoice = response.data;
                console.log(this.alreadyChoice);
            })
        },
        methods: {
            updateStudent() {
                axios.post('http://localhost:14000/admin/updateTeacher', JSON.stringify(this.userData))
                    .then(response => {
                        if (response.data === true) {
                            console.log('update success');
                        }
                    });
                location.reload();
            },
            changePassword() {
                axios.post('http://localhost:14000/teacher/changePassword', JSON.stringify({
                    teacherID: this.userData.teacherID,
                    teacherPassword: this.newPassword
                }))
                    .then(response => {
                        if (response.data === true) {
                            console.log('change success');
                        }
                    });
                location.reload();
            }
        }
    }
</script>

<style scoped>

</style>