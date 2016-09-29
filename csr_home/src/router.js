import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './pages/index'
import Report from './pages/report'
import PandS from './pages/pands'
import Solution from './components/PandS/Solution'
import Product from './components/PandS/Product'
import About from './pages/about'

Vue.use(VueRouter);

const router = new VueRouter({
	history: false
});

router.map({
	'/index': {
		name: 'index',
		component: Index
	},
	// '/pands/solution': {
	// 	component: Solution
	// },
	// '/pands/product': {
	// 	component: Product
	// },
	'/pands': {
		component: PandS,
		subRoutes: {
			'/': {
				component: Solution
			},
			'/solution': {
				name: 'solution',
				component: Solution
			},
			'/product': {
				name: 'product',
				component: Product
			}
		}
	},
	'/report': {
		name: 'report',
		component: Report
	},
	'/about': {
		name: 'about',
		component: About
	}
});

router.alias({
	'/pands': '/pands/solution'
})

router.redirect({
	'*': '/index'
});

export default router;
