import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './pages/index.vue'
import Report from './pages/report.vue'
import PandS from './pages/pands.vue'
import Solution from './components/PandS/Solution.vue'
import Product from './components/PandS/Product.vue'
import About from './pages/about.vue'

Vue.use(VueRouter);

// vue-router 2.0
const router = new VueRouter({
	mode: 'history',
	scrollBehavior: ()=>{{y:0}},
	routes: [
		{ path: '/', component: Index },
		{ path: '/index', component: Index },
		{ path: '/pands', component: PandS,
			children: [
				{ path: '', component: Solution},
				{ path: 'solution', component: Solution},
				{ path: 'product', component: Product}
			]
		},
		{ path: '/report', component: Report },
		{ path: '/about', component: About },
		{ path: '*', redirect: '/' },
	]
});

export default router;

// vue-router 0.7x
// router.map({
// 	'/index': {
// 		name: 'index',
// 		component: Index
// 	},
// 	'/pands': {
// 		component: PandS,
// 		subRoutes: {
// 			'/': {
// 				component: Solution
// 			},
// 			'/solution': {
// 				name: 'solution',
// 				component: Solution
// 			},
// 			'/product': {
// 				name: 'product',
// 				component: Product
// 			}
// 		}
// 	},
// 	'/report': {
// 		name: 'report',
// 		component: Report
// 	},
// 	'/about': {
// 		name: 'about',
// 		component: About
// 	}
// });

// router.alias({
// 	'/pands': '/pands/solution'
// })

// router.redirect({
// 	'*': '/index'
// });


