<template>
	<v-card>
		<v-card-title
			class="headline grey lighten-2 pa-1 pl-3"
			primary-title
		>
			<span>New File</span>

			<v-spacer />

			<v-btn
				@click="closeDialog"
				icon
			>
				<v-icon>close</v-icon>
			</v-btn>
		</v-card-title>

		<v-card-text>
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-flex xs12 sm6>
						<v-layout row wrap>
							<v-text-field label="Title" required />

							<v-text-field label="Height" required />

							<v-text-field label="Width" required />
						</v-layout>
					</v-flex>

					<v-flex xs12 sm6>
						<new-file-preview />
					</v-flex>
				</v-layout>
			</v-container>
		</v-card-text>

		<v-divider />

		<v-card-actions>
			<v-spacer />

			<v-btn
				flat
				@click="closeDialog"
			>
				I accept
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	import NewFilePreview from "@/components/new-file-preview";

	export default {
		methods: {
			closeDialog () {
				this.$emit("close");
			}
		},

		components: {
			NewFilePreview
		}
	};
</script>
