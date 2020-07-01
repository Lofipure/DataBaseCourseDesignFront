<template>
    <div>
        <div>
            <v-row justify="center">
                <v-col cols="12">
                    <v-simple-table fixed-header style="text-align: center">
                        <thead>
                        <tr>
                            <th style="text-align: center">课程号</th>
                            <th style="text-align: center">课程名</th>
                            <th style="text-align: center">学分</th>
                            <th style="text-align: center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,i) in courseData" v-bind:key="i">
                            <td>{{item.courseID}}</td>
                            <td>{{item.courseName}}</td>
                            <td>{{item.courseScore}}</td>
                            <td>
                                <v-btn color="success" small v-on:click="choiceCourse(i)" v-bind:disabled="!status[i]">
                                    {{!status[i] ? '已教授':'教授'}}
                                </v-btn>
                            </td>
                        </tr>
                        </tbody>
                    </v-simple-table>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "TeacherChoiceCourse",
        data: () => ({
            courseData: [],
            teacherID: undefined,
            alreadyChoice: [],
            status: []
        }),
        mounted() {
            axios({
                method: "GET",
                url: `http://localhost:4000/course/getAll`
            }).then(response => {
                this.courseData = response.data;
                console.log(this.courseData);
                axios({
                    method: "GET",
                    url: `http://localhost:4000/teacher/getAlreadyChoice?teacherID=${this.$route.params.teacherID}`
                }).then(response => {
                    this.alreadyChoice = response.data;
                    console.log(this.alreadyChoice);
                    for (let i = 0; i < this.courseData.length; ++i) {
                        let flag = 1;
                        for (let j = 0; j < this.alreadyChoice.length; ++j) {
                            if (this.alreadyChoice[j].courseID === this.courseData[i].courseID) {
                                flag = 0;
                                break;
                            }
                        }
                        if (flag === 1) {
                            this.status.push(true);
                        } else {
                            this.status.push(false);
                        }
                    }
                })
            });
        },
        methods: {
            choiceCourse(i) {
                let postObj = {
                    courseID: this.courseData[i].courseID,
                    teacherID: this.$route.params.teacherID,
                    courseScore: this.courseData[i].courseScore,
                };
                // console.log(postObj);
                axios.post(`http://localhost:4000/teacher/sendCourseChoice`, JSON.stringify(postObj))
                    .then(response => {
                        if (response.data === true) {
                            console.log("choice success");
                        }
                    });
            }
        }
    }
</script>

<style scoped>

</style>