<template>
	<v-menu
		offset-y
		transition="slide-y-transition"
	>
		<v-toolbar-side-icon slot="activator" />

		<v-list class="pa-0">

			<v-dialog v-model="newFileDialog" max-width="600px">
				<v-list-tile slot="activator">
					<v-list-tile-title>
						<v-icon flat>note_add</v-icon> New file
					</v-list-tile-title>
				</v-list-tile>

				<new-file-dialog @close="newFileDialog = false" />
			</v-dialog>
		</v-list>
	</v-menu>
</template>

<script>
	import NewFileDialog from "@/components/new-file-dialog";

	export default {
		data: () => ({
			newFileDialog: false
		}),

		components: {
			NewFileDialog
		}
	};
</script>
