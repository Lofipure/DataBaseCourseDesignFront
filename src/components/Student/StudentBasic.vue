<template>
    <div>
        <v-dialog v-model="changePasswordDialogStatus" class="overflow-hidden" width="40%">
            <v-card class="overflow-hidden">
                <v-card-subtitle class="pa-4">更改密码</v-card-subtitle>
                <v-row justify="center">
                    <v-col cols="6">
                        <v-text-field label="新密码" v-bind:hint="'原密码：' + userData.studentPassword" persistent-hint
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
        <div class="basicInformation">
            <v-subheader>{{userData.sutdentName}}同学的基本信息</v-subheader>
            <v-row justify="center">
                <v-col cols="3">
                    <v-text-field v-model="userData.sutdentName" label="姓名" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.studentAge" label="年龄" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.studentBirthday" type="date" label="生日" shaped
                                  outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.studentGender" label="性别" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.studentCollege" label="学院" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.studentMajor" label="专业" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.studentEmail" label="邮箱" shaped outlined></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="userData.studentTelephone" label="联系方式" shaped outlined></v-text-field>
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
            <v-subheader>{{userData.sutdentName}}同学的选课信息</v-subheader>
            <v-simple-table>
                <thead>
                <tr>
                    <th>课程名</th>
                    <th>学分</th>
                    <th>教师</th>
                    <th>教授学院</th>
                    <th>教师邮箱</th>
                    <th>教师职称</th>
                    <th>成绩</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,i) in alreadyChoice" v-bind:key="i">
                    <td>{{item.courseName}}</td>
                    <td>{{item.courseScore}}</td>
                    <td>{{item.teacherName}}</td>
                    <td>{{item.teacherCollege}}</td>
                    <td>{{item.teacherEmail}}</td>
                    <td>{{item.teacherWork}}</td>
                    <td>{{item.grade==null ? "阅卷中...":item.grade}}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';

    export default {
        name: "StudentBasic",
        data: () => ({
            userData: {},
            changePasswordDialogStatus: false,
            newPassword: undefined,
            alreadyChoice: [],
        }),
        mounted() {
            axios({
                method: "GET",
                url: `http://localhost:14000/student/getPassword?studentID=${this.$route.params.studentID}`
            }).then(response => {
                this.userData = response.data[0];
                this.userData.studentBirthday = moment(this.userData.studentBirthday).format("YYYY-MM-DD");
            });
            axios({
                method: "GET",
                url: `http://localhost:14000/student/getAlreadyChoice?studentID=${this.$route.params.studentID}`
            }).then(response => {
                this.alreadyChoice = response.data;
                console.log(this.alreadyChoice);
            })
        },
        methods: {
            updateStudent() {
                axios.post('http://localhost:14000/admin/updateStudent', JSON.stringify(this.userData))
                    .then(response => {
                        if (response.data === true) {
                            console.log('update success');
                        }
                    });
                location.reload();
            },
            changePassword() {
                axios.post('http://localhost:14000/student/changePassword', JSON.stringify({
                    studentID: this.userData.studentID,
                    studentPassword: this.newPassword
                }))
                    .then(response => {
                        if (response.data === true) {
                            console.log('change success')
                        }
                    });
                location.reload();
            }
        }
    }
</script>

<style scoped>

</style>