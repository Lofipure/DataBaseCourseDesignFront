<template>
    <div>
        <div>
            <v-simple-table>
                <thead>
                <tr>
                    <th>课程名</th>
                    <th>教师</th>
                    <th>教授学院</th>
                    <th>教师邮箱</th>
                    <th>学分</th>
                    <th>教师职称</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,i) in courseData" v-bind:key="i">
                    <td>{{item.courseName}}</td>
                    <td>{{item.teacherName}}</td>
                    <td>{{item.teacherCollege}}</td>
                    <td>{{item.teacherEmail}}</td>
                    <td>{{item.courseScore}}</td>
                    <td>{{item.teacherWork}}</td>
                    <td>
                        <v-btn small v-on:click="choiceCourse(i)" color="success"
                               v-bind:disabled="choice[i]">{{choice[i] ? "已修": "选择"}}
                        </v-btn>
                    </td>
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
        name: "StudentChoice",
        data: () => ({
            userData: {},
            courseData: {},
            alreadyChoice: [],
            choice: []
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
                url: `http://localhost:14000/student/getChoiceList?studentID=${this.$route.params.studentID}`
            }).then(response => {
                this.courseData = response.data;
                console.log("courseData", this.courseData);
                axios({
                    method: "GET",
                    // http://localhost:14000/student/getChoiceList?studentID=18407020432
                    url: `http://localhost:14000/student/getAlreadyChoice?studentID=${this.$route.params.studentID}`
                }).then(response => {
                    this.alreadyChoice = response.data;
                    console.log("alreadyChoice", this.alreadyChoice);
                    for (let i = 0; i < this.courseData.length; ++i) {
                        let flag = 1;
                        for (let j = 0; j < this.alreadyChoice.length; ++j) {
                            if (this.alreadyChoice[j].courseName === this.courseData[i].courseName 
                            && this.alreadyChoice[j].teacherName === this.courseData[i].teacherName) {
                                flag = 0;
                                break;
                            }
                        }
                        if (flag === 1) {
                            this.choice.push(false);
                        } else {
                            this.choice.push(true);
                        }
                    }
                    console.log(this.choice);
                });
            });
        },
        methods: {
            choiceCourse(index) {
                let postObj = {
                    studentID: this.userData.studentID,
                    courseID: this.courseData[index].courseID,
                    courseScore: this.courseData[index].courseScore,
                    teacherID: this.courseData[index].teacherID,
                }
                axios.post("http://localhost:14000/student/choiceCourse", JSON.stringify(postObj))
                    .then(response => {
                        console.log(response.data);
                        if(response.data == 'choice success') {
                            alert("选课成功，同学要好好学习哦~")
                            location.reload();
                        }
                    });
            }
        }
    }
</script>

<style scoped>

</style>