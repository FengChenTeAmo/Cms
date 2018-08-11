import Vue from 'vue'
import Router, { Route } from 'vue-router'
import store from '../store'
// import webStorage from 'webStorage'
import { A_RELOGIN } from '../store/base/Login'
Vue.use(Router)
declare let require: any;
export enum RouterPath {
    Login = '/Login',
    Main = '/Main',
    LoginUI = '/LoginUI',
    MainUI = '/MainUI',
    ModalUI = '/ModalUI',
    PersonalUI = '/PersonalUI',
    RegisterUI = '/RegisterUI',
    Information = '/Information',
    SetUp = '/SetUp',
    Shopping = '/Shopping',
    AboutUs = '/AboutUs',
    Community = "/Community",
    DemandManagement = '/DemandManagement',
    ProjectManagement = '/ProjectManagement',
    DesignManagement = '/DesignManagement',
    Architecture = '/Architecture',
    DataBase = '/DataBase',
    CodeAutomation = '/CodeAutomation',
    DevelopingDocument = '/DevelopingDocument',
}
const router = new Router({
    routes: [
        {
            path: RouterPath.Login,
            name: '登录',
            component: r => require(["../user/Login.vue"], r),
        },
        {
            path: RouterPath.Main,
            name: '主页面',
            component: r => require(["../components/Main.vue"], r)
        },
        {
            path: RouterPath.LoginUI,
            name: '登陆界面UI',
            component: r => require(["../components/OurProducts/LoginUI.vue"], r)
        },
        {
            path: RouterPath.MainUI,
            name: '主页面UI',
            component: r => require(["../components/OurProducts/MainUI.vue"], r)
        },
        {
            path: RouterPath.ModalUI,
            name: 'ModalUI',
            component: r => require(["../components/OurProducts/ModalUI.vue"], r)
        },
        {
            path: RouterPath.PersonalUI,
            name: '个人中心UI',
            component: r => require(["../components/OurProducts/PersonalUI.vue"], r)
        },
        {
            path: RouterPath.RegisterUI,
            name: '注册UI',
            component: r => require(["../components/OurProducts/RegisterUI.vue"], r)
        },
        {
            path: RouterPath.Information,
            name: '个人中心',
            component: r => require(["../components/PersonalCenter/Information.vue"], r)
        },
        {
            path: RouterPath.SetUp,
            name: '用户设置',
            component: r => require(["../components/PersonalCenter/SetUp.vue"], r)
        },
        {
            path: RouterPath.Shopping,
            name: '我的商品',
            component: r => require(["../components/PersonalCenter/Shopping.vue"], r)
        },
        {
            path: RouterPath.AboutUs,
            name: '关于我们',
            component: r => require(["../components/AboutUs.vue"], r)
        },
        {
            path: RouterPath.Community,
            name: '论坛',
            component: r => require(["../components/Community.vue"], r)
        },
        {
            path: RouterPath.DemandManagement,
            name: '需求管理',
            component: r => require(["../components/DemandManagement.vue"], r)
        },
        {
            path: RouterPath.ProjectManagement,
            name: '项目管理',
            component: r => require(["../components/ProjectManagement.vue"], r)
        },
        {
            path: RouterPath.DesignManagement,
            name: '设计管理',
            component: r => require(["../components/DesignManagement.vue"], r)
        },
        {
            path: RouterPath.Architecture,
            name: '架构设计',
            component: r => require(["../components/Architecture.vue"], r)
        },
        {
            path: RouterPath.DataBase,
            name: '数据库设计与管理',
            component: r => require(["../components/DataBase.vue"], r)
        },
        {
            path: RouterPath.CodeAutomation,
            name: '代码自动部署',
            component: r => require(["../components/CodeAutomation.vue"], r)
        },
        {
            path: RouterPath.DevelopingDocument,
            name: '开发文档',
            component: r => require(["../components/DevelopingDocument.vue"], r)
        }
    ]
})

// router.beforeEach((to: Route, from: Route, next: Function) => {
//     if (store.state.Login.UID > 0) {
//         next()
//     } else if (to.path != RouterPath.Login) {
//         // to.path = RouterPath.Login;
//         //TODO 自动登录及重登请求
//         store.dispatch(A_RELOGIN, {
//             s: (d: any) => {
//                 next();
//             },
//             e: (e: any) => {
//                 next(RouterPath.Login)
//             }
//         })
//     } else {
//         next()
//     }
// })

export default router;