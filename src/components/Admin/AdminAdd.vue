<template>
    <div>
        <v-bottom-sheet v-model="studentDialogStatus" width="75%">
            <v-sheet class="text-center">
                <v-btn color="red" v-on:click="studentDialogStatus = false" icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <div class="box">
                    <v-subheader>新增学生信息</v-subheader>
                    <v-row justify="center">
                        <v-col cols="3">
                            <v-text-field v-model="studentData.studentID" label="学号"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="studentData.sutdentName" label="姓名"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="studentData.studentGender" label="性别"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="studentData.studentCollege" label="学院"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="studentData.studentMajor" label="专业"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="studentData.studentAge" label="年龄"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="studentData.studentTelephone" label="电话"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="studentData.studentEmail" label="邮箱"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="studentData.studentBirthday" type="date" label="出生日期"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="studentData.studentPassword" type="password"
                                          label="密码"></v-text-field>
                        </v-col>
                    </v-row>
                </div>
                <div>
                    <v-btn color="success" dark width="40%" class="submitBtn" v-on:click="addNewStudent">注册</v-btn>
                </div>
            </v-sheet>
        </v-bottom-sheet>
        <v-bottom-sheet v-model="teacherDialogStatus" width="75%">
            <v-sheet class="text-center">
                <v-btn color="red" dark v-on:click="teacherDialogStatus = false" icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <div class="box">
                    <v-subheader>新增教师信息</v-subheader>
                    <v-row justify="center">
                        <v-col cols="3">
                            <v-text-field label="工号" v-model="teacherData.teacherID"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="姓名" v-model="teacherData.teacherName"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="性别" v-model="teacherData.teacherGender"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="学院" v-model="teacherData.teacherCollege"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="职称" v-model="teacherData.teacherWork"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="电话" v-model="teacherData.teacherTelephone"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="邮箱" v-model="teacherData.teacherEmail"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="密码" v-model="teacherData.teacherPassword"
                                          type="password"></v-text-field>
                        </v-col>
                    </v-row>
                </div>
                <div>
                    <v-btn color="success" dark width="40%" class="submitBtn" v-on:click="addNewTeacher">注册</v-btn>
                </div>
            </v-sheet>
        </v-bottom-sheet>
        <v-bottom-sheet v-model="courseDialogStatus" width="75%">
            <v-sheet class="text-center">
                <v-btn color="red" v-on:click="courseDialogStatus = false" icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <div class="box">
                    <v-subheader>新增课程信息</v-subheader>
                    <v-row justify="center">
                        <v-col cols="4">
                            <v-text-field v-model="courseData.courseID" label="课程号"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="courseData.courseName" label="课程名"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="courseData.courseScore" label="学分"></v-text-field>
                        </v-col>
                    </v-row>
                </div>
                <div>
                    <v-btn color="success" dark width="40%" class="submitBtn" v-on:click="addNewCourse">注册</v-btn>
                </div>
            </v-sheet>
        </v-bottom-sheet>
        <v-row justify="center">
            <v-col cols="3">
                <v-card height="300px" width="300px" color="success" dark hover class="d-flex align-center"
                        elevation="10" v-on:click="studentDialogStatus = true">
                    <div class="flex-grow-1 text-center display-3">学生</div>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card height="300px" width="300px" color="orange darken-2" dark hover class="d-flex align-center"
                        elevation="10" v-on:click="teacherDialogStatus = true">
                    <div class="flex-grow-1 text-center display-3">教师</div>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card height="300px" width="300px" class="d-flex align-center" color="deep-purple accent-2" dark hover
                        elevation="10" v-on:click="courseDialogStatus = true">
                    <div class="flex-grow-1 text-center display-3">课程</div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "AdminAdd",
        data: () => ({
            studentData: {},
            studentDialogStatus: false,
            teacherData: {},
            teacherDialogStatus: false,
            courseData: {},
            courseDialogStatus: false,
        }),
        methods: {
addNewStudent() {
    // 以添加新的学生为例
    axios.post('http://localhost:14000/admin/addNewStudent', JSON.stringify(this.studentData))
        // 以json字符串的形式发送post请求
        .then(response => {
            if (response.data === true) {
                // 相关变量复原
                this.studentData = {};
                this.studentDialogStatus = false;
                console.log("新增学生成功");
            }
        });
},
            addNewTeacher() {
                axios.post('http://localhost:14000/admin/addNewTeacher', JSON.stringify(this.teacherData))
                    .then(response => {
                        if (response.data === true) {
                            this.teacherData = {};
                            this.teacherDialogStatus = false;
                        }
                    });
            },
            addNewCourse() {
                axios.post('http://localhost:14000/admin/addNewCourse', JSON.stringify(this.courseData))
                    .then(response => {
                        console.log(response);
                        if (response.data === true) {
                            this.courseData = {};
                            this.courseDialogStatus = false;
                        }
                    });
            },
        }
    }
</script>

<style scoped>
    .box {
        padding: 1% 5% 0 5%;
    }

    .submitBtn {
        margin-bottom: 2%;
    }
</style>