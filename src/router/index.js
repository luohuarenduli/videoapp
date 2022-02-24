/*
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-01-05 10:03:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-08 11:51:33
 */
/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: () => 
			import(/* webpackChunkName: "user" */ '@/views/user/index'),
      // children:[{
			// 	path: '/userInfo',
			// 	name: 'userInfo',
			// 	meta: {
			// 			title: '用户信息',
			// 	},
			// 	component: () =>
			// 			import (
			// 					/* webpackChunkName: "dashboard" */
			// 					'@/views/user/components/userInfo.vue'
			// 			),
			// },]
		},
		{
			path:'/userInfo',
			name:'UserInfo',
			component:()=>import(/* webpackChunkName: "user" */ '@/views/user/components/userInfo.vue')
		},
		// {
		// 	path:'/details',
		// 	name:'Details',
		// 	component:()=>import(/* webpackChunkName: "user" */ '@/views/details/details')
		// }
]

const router = new VueRouter({
    routes
})

export default router