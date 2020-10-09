<template>
    <div>
        <v-row justify="center">
            <v-col cols="12">
                <div v-for="(item, i) in teachCourse" v-bind:key="i">
                    <v-subheader>{{item.courseName}}</v-subheader>
                    <v-simple-table style="text-align: center">
                        <thead>
                        <tr>
                            <th style="text-align: center">学号</th>
                            <th style="text-align: center">姓名</th>
                            <th style="text-align: center">学院</th>
                            <th style="text-align: center">专业</th>
                            <th style="text-align: center">邮箱</th>
                            <th style="text-align: center">打分</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(ele,index) in student[i]" v-bind:key="index">
                            <td>{{ele.studentID}}</td>
                            <td>{{ele.sutdentName}}</td>
                            <td>{{ele.studentCollege}}</td>
                            <td>{{ele.studentMajor}}</td>
                            <td>{{ele.studentEmail}}</td>
                            <td>
                                <div style="width: 20%; margin: 0 auto">
                                    <v-text-field v-model="ele.grade" append-outer-icon="mdi-pencil"
                                                  v-on:click:append-outer="giveStudentGrade(item.courseID, ele.studentID, ele.grade)"
                                    ></v-text-field>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </v-simple-table>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "TeacherInGrade",
        data: () => ({
            teacherID: undefined,
            teachCourse: [],
            student: [],
        }),
        mounted() {
            this.teacherID = this.$route.params.teacherID;
            axios({
                method: "GET",
                url: `http://localhost:14000/teacher/getTeachCourse?teacherID=${this.teacherID}`
            }).then((response) => {
                this.teachCourse = response.data;
                for (let i = 0; i < this.teachCourse.length; ++i) {
                    let postObj = {
                        teacherID: this.teacherID,
                        courseID: this.teachCourse[i].courseID
                    };
                    axios({
                        method: "GET",
                        url: `http://localhost:14000/teacher/getStudentList?teacherID=${postObj.teacherID}&courseID=${postObj.courseID}`
                    }).then(response => {
                        this.student.push(response.data);
                    });
                }
            });
        },
        methods: {
            giveStudentGrade(courseID, studentID, grade) {
                console.log(courseID, studentID, grade, this.teacherID);
                axios({
                    method: "GET",
                    url: `http://localhost:14000/teacher/inGradeForStudent?studentID=${studentID}&courseID=${courseID}&teacherID=${this.teacherID}&grade=${grade}`
                }).then(response => {
                    console.log(response.data);
                    location.reload();
                });
            }
        }
    }
</script>

<style scoped>

</style>