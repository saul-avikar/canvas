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
							<v-text-field
								v-model="title"
								label="Title"
								required
							/>

							<v-text-field
								v-model="height"
								type="number"
								label="Height"
								required
							/>

							<v-text-field
								v-model="width"
								type="number"
								label="Width"
								required
							/>

							<v-select
								label="background"
								:items="['White', 'Transparency']"
								v-model="background"
							/>
						</v-layout>
					</v-flex>

					<v-flex xs12 sm6>
						<new-file-preview
							:height="height"
							:width="width"
							:background="background"
						/>
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
		data: () => ({
			title: "",
			height: "400",
			width: "640",
			background: "White"
		}),

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
