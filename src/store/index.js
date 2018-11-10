import Vue from "vue";
import Vuex from "vuex";
import files from "./modules/files";
import layers from "./modules/layers";
import data from "./modules/data";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		files,
		layers,
		data
	},
	state: {

	},
	getters: {

	},
	mutations: {

	},
	actions: {

	}
});
