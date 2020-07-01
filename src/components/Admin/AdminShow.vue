<template>
    <div>
        <v-dialog v-model="forStudentChangeStatus" width="70%">
            <v-card>
                <div class="overflow-hidden">
                    <v-card-subtitle>修改学生信息</v-card-subtitle>
                    <v-row justify="center" class="dialog-box">
                        <v-col cols="3">
                            <v-text-field v-model="forStudentChange.studentID" label="学号"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forStudentChange.sutdentName" label="姓名"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forStudentChange.studentGender" label="性别"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forStudentChange.studentCollege" label="学院"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forStudentChange.studentMajor" label="专业"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forStudentChange.studentAge" label="年龄"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forStudentChange.studentTelephone" label="电话"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forStudentChange.studentEmail" label="邮箱"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forStudentChange.studentBirthday" type="date"
                                          label="出生日期"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-row justify="center">
                            <v-btn class="align-center" width="50%" color="success" v-on:click="sureUpdateStudent">
                                确定修改
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog v-model="forTeacherChangeStatus" width="70%">
            <v-card>
                <div class="overflow-hidden">
                    <v-card-subtitle>修改教师信息</v-card-subtitle>
                    <v-row justify="center" class="dialog-box">
                        <v-col cols="3">
                            <v-text-field v-model="forTeacherChange.teacherID" label="工号"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forTeacherChange.teacherName" label="姓名"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forTeacherChange.teacherGender" label="性别"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forTeacherChange.teacherCollege" label="学院"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forTeacherChange.teacherWork" label="职称"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forTeacherChange.teacherTelephone" label="电话"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forTeacherChange.teacherEmail" label="邮箱"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-row justify="center">
                            <v-btn class="align-center" width="50%" color="success" v-on:click="sureUpdateTeacher">
                                确定修改
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog v-model="forCourseChangeStatus" width="70%">
            <v-card>
                <div class="overflow-hidden">
                    <v-card-subtitle>修改课程信息</v-card-subtitle>
                    <v-row justify="center" class="dialog-box">
                        <v-col cols="3">
                            <v-text-field v-model="forCourseChange.courseID" label="课程号"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forCourseChange.courseName" label="课程名"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="forCourseChange.courseScore" label="学分"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-row justify="center">
                            <v-btn class="align-center" width="50%" color="success" v-on:click="sureUpdateCourse">
                                确定修改
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </div>
            </v-card>
        </v-dialog>
        <v-row justify="center">
            <v-col cols="11">
                <v-subheader>学生</v-subheader>
                <v-simple-table fixed-header id="studentTable" style="text-align: center">
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th>学号</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>性别</th>
                            <th>学院</th>
                            <th>专业</th>
                            <th>联系方式</th>
                            <th>邮箱</th>
                            <th>生日</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,i) in showData.studentData" v-bind:key="i">
                            <th>{{item.studentID}}</th>
                            <th>{{item.sutdentName}}</th>
                            <th>{{item.studentAge}}</th>
                            <th>{{item.studentGender}}</th>
                            <th>{{item.studentCollege}}</th>
                            <th>{{item.studentMajor}}</th>
                            <th>{{item.studentTelephone}}</th>
                            <th>{{item.studentEmail}}</th>
                            <th>{{item.studentBirthday}}</th>
                            <th>
                                <v-btn-toggle dense>
                                    <v-btn icon v-on:click="upDateStudent(i)">
                                        <v-icon color="success">mdi-dots-horizontal-circle-outline</v-icon>
                                    </v-btn>
                                    <v-btn icon v-on:click="deleteStudent(item.studentID)">
                                        <v-icon color="red">mdi-delete-outline</v-icon>
                                    </v-btn>
                                </v-btn-toggle>
                            </th>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="11">
                <v-subheader>教师</v-subheader>
                <v-simple-table fixed-header id="teacherTable" style="text-align: center">
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th>工号</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>学院</th>
                            <th>职称</th>
                            <th>联系方式</th>
                            <th>邮箱</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,i) in showData.teacherData" v-bind:key="i">
                            <th>{{item.teacherID}}</th>
                            <th>{{item.teacherName}}</th>
                            <th>{{item.teacherGender}}</th>
                            <th>{{item.teacherCollege}}</th>
                            <th>{{item.teacherWork}}</th>
                            <th>{{item.teacherTelephone}}</th>
                            <th>{{item.teacherEmail}}</th>
                            <th>
                                <v-btn-toggle dense>
                                    <v-btn icon v-on:click="upDateTeacher(i)">
                                        <v-icon color="success">mdi-dots-horizontal-circle-outline</v-icon>
                                    </v-btn>
                                    <v-btn icon v-on:click="deleteTeacher(item.teacherID)">
                                        <v-icon color="red">mdi-delete-outline</v-icon>
                                    </v-btn>
                                </v-btn-toggle>
                            </th>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="11">
                <v-subheader>课程</v-subheader>
                <v-simple-table fixed-header id="courseTable" style="text-align: center">
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th>课程号</th>
                            <th>课程名</th>
                            <th>学分</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,i) in showData.courseData" v-bind:key="i">
                            <th>{{item.courseID}}</th>
                            <th>{{item.courseName}}</th>
                            <th>{{item.courseScore}}</th>
                            <th>
                                <v-btn-toggle dense>
                                    <v-btn icon v-on:click="updateCourse(i)">
                                        <v-icon color="success">mdi-dots-horizontal-circle-outline</v-icon>
                                    </v-btn>
                                    <v-btn icon v-on:click="deleteCourse(item.courseID)">
                                        <v-icon color="red">mdi-delete-outline</v-icon>
                                    </v-btn>
                                </v-btn-toggle>
                            </th>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import axios from "axios";
    import moment from "moment";

    export default {
        name: "AdminShow",
        data: () => ({
            showData: [],
            updateData: {},
            forStudentChange: {},
            forStudentChangeStatus: false,
            forTeacherChange: {},
            forTeacherChangeStatus: false,
            forCourseChange: {},
            forCourseChangeStatus: false,
            updateStudentSnackbar: false,
        }),
        mounted() {
            axios({
                method: "GET",
                url: "http://localhost:4000/admin/showAllUsers",
            }).then((response) => {
                console.log(response);
                this.showData = response.data;
            });
        },
        methods: {
            deleteStudent(studentID) {
                axios({
                    method: "GET",
                    url: `http://localhost:4000/admin/deleteStudent?index=${studentID}`,
                }).then(response => {
                    console.log(response);
                    this.refresh = true;
                });
                location.reload();
            },
            deleteTeacher(teacherID) {
                axios({
                    method: "GET",
                    url: `http://localhost:4000/admin/deleteTeacher?index=${teacherID}`,
                }).then(response => {
                    if (response.data === true) {
                        console.log(response)
                    }
                });
                location.reload();
            },
            deleteCourse(courseID) {
                axios({
                    method: "GET",
                    url: `http://localhost:4000/admin/deleteCourse?index=${courseID}`
                }).then(response => {
                    console.log(response)
                });
                location.reload();
            },
            upDateStudent(index) {
                this.forStudentChange = this.showData.studentData[index];
                this.$data.forStudentChange.studentBirthday = moment(this.$data.forStudentChange.studentBirthday).format("YYYY-MM-DD");
                this.$data.forStudentChangeStatus = true;
            },
            sureUpdateStudent() {
                axios.post('http://localhost:4000/admin/updateStudent', JSON.stringify(this.forStudentChange))
                    .then(response => {
                        if (response.data === true) {
                            console.log('update success');
                        }
                    });
                location.reload();
            },
            upDateTeacher(index) {
                this.forTeacherChange = this.showData.teacherData[index];
                this.forTeacherChangeStatus = true;
            },
            sureUpdateTeacher() {
                axios.post('http://localhost:4000/admin/updateTeacher', JSON.stringify(this.forTeacherChange))
                    .then(response => {
                        if (response.data === true) {
                            console.log('update success');
                        }
                    });
                location.reload();
            },
            updateCourse(index) {
                this.forCourseChange = this.showData.courseData[index];
                this.forCourseChangeStatus = true;
            },
            sureUpdateCourse() {
                axios.post('http://localhost:4000/admin/updateCourse', JSON.stringify(this.forCourseChange))
                    .then(response => {
                        if (response.data === true) {
                            console.log('update success');
                        }
                    });
                location.reload();
            }
        }
    }
</script>

<style scoped>
    .dialog-box {
        padding: 0 7%;
    }
</style>