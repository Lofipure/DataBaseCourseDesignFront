import Home from "./components/Home";
import AdminMain from "./components/Admin/AdminMain";
import AdminShow from "./components/Admin/AdminShow";
import AdminAdd from "./components/Admin/AdminAdd";

import StudentMain from "./components/Student/StudentMain";
import StudentBasic from "./components/Student/StudentBasic";
import StudentChoice from "./components/Student/StudentChoice";

import TeacherMain from "./components/Teacher/TeacherMain";
import TeacherBasic from "./components/Teacher/TeacherBasic";
import TeacherChoiceCourse from "./components/Teacher/TeacherChoiceCourse";
import TeacherInGrade from "./components/Teacher/TeacherInGrade";

export default {
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/admin',
            component: AdminMain,
            children: [
                {
                    path: 'show',
                    component: AdminShow
                },
                {
                    path: 'add',
                    component: AdminAdd
                }
            ],
            redirect: '/admin/show'
        },
        {
            path: '/student',
            component: StudentMain,
            children: [
                {
                    path: 'basicInfo/:studentID',
                    component: StudentBasic,
                },
                {
                    path: 'choiceCourse/:studentID',
                    component: StudentChoice,
                }
            ],
            redirect: 'student/basicInfo/:studentID'
        },
        {
            path: '/teacher',
            component: TeacherMain,
            children: [
                {
                    path: 'basicInfo/:teacherID',
                    component: TeacherBasic
                },
                {
                    path: 'choiceCourse/:teacherID',
                    component: TeacherChoiceCourse
                },
                {
                    path: 'inGrade/:teacherID',
                    component: TeacherInGrade
                }
            ],
            redirect: 'teacher/basicInfo/:teacherID'
        }
    ]
}