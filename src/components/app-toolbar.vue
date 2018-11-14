<template>
	<v-toolbar
		color="blue-grey"
		dark
		fixed
		app
		clipped-right
		clipped-left
	>
		<toolbar-menu />

		<v-toolbar-title v-for="file of files">
			{{ file.name }}
		</v-toolbar-title>
	</v-toolbar>
</template>

<script>
	import { mapState } from "vuex";
	import ToolbarMenu from "@/components/toolbar-menu.vue";

	export default {
		computed: {
			...mapState({
				files: state => state.files.files
			})
		},

		components: {
			ToolbarMenu
		}
	};
</script>
