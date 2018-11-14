<template>
	<v-toolbar
		color="blue-grey"
		dark
		fixed
		app
		clipped-right
		clipped-left
	>
		<toolbar-menu @new-file="newFileDialog = true" />

		<v-toolbar-title v-for="file of files">
			{{ file.name }}
		</v-toolbar-title>
	</v-toolbar>
</template>

<script>
	import { mapState } from "vuex";

	import ToolbarMenu from "@/components/toolbar-menu.vue";
	import NewFileDialog from "@/components/new-file-dialog";

	export default {
		data: () => ({
			newFileDialog: false
		}),

		computed: {
			...mapState({
				files: state => state.files.files
			})
		},

		components: {
			ToolbarMenu,
			NewFileDialog
		}
	};
</script>
