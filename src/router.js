import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/:image",
			name: "image",
			component: () => import(/* webpackChunkName: "image" */ "./views/Image.vue")
		},
		{
			path: "/",
			name: "home",
			component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
		}
	]
});
