<template>
	<v-menu
		:close-on-content-click="false"
		offset-y
		transition="slide-y-transition"
	>
		<v-toolbar-side-icon slot="activator" />

		<v-list class="pa-0">
			<v-list-tile class="ma-0">
				<v-menu
					:close-on-content-click="false"
					offset-x
					transition="slide-x-transition"

				>
					<v-list-tile-title slot="activator" @click="focus">
						<v-icon>note_add</v-icon> New file
					</v-list-tile-title>

					<v-list class="pa-0">
						<v-list-tile>
							<v-icon>add_circle</v-icon>
							<v-text-field label="Untitled" ref="newFileInput" :single-line="true" />
						</v-list-tile>
					</v-list>
				</v-menu>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script>
	export default {
		methods: {
			focus () {
				//this.$nextTick(() => {
					console.log(this.$refs.newFileInput.$el.getElementsByTagName("input")[0])
					this.$refs.newFileInput.$el.getElementsByTagName("input")[0].focus();
				//});
			}
		}
	};
</script>
