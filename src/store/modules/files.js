export default {
	namespaced: true,

	state: {
		files: {}
	},

	getters: {
		getFile: (state) => (fileName) => {
			return state.files[fileName];
		}
	},

	actions: {
		createFile ({ state, commit }, fileName) {
			commit("addFile", fileName);

			return state.files[fileName];
		}
	},

	mutations: {
		addFile (state, fileName) {
			state.files[fileName] = {
				name: fileName,
				layers: []
			};
		}
	}
};
