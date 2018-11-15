<template>
	<v-container>
		<v-layout>
			<div
				class="content-preview"
				:style="{width: widthRatio + 'px', height: heightRatio + 'px'}"
			>
				{{ background }}
			</div>

			<div class="ml-2" :style="{height: heightRatio + 'px'}">
				<v-layout column fill-height>
					<v-flex
						xs4 pa-0 align-self-start text-xs-center
						class="flex-column"
						style="justify-content: flex-start;"
					>
						<v-icon>arrow_upward</v-icon>
					</v-flex>

					<v-flex
						xs4 pa-0 align-self-start text-xs-center
						class="flex-column"
						style="justify-content: center; margin-top: 8px;"
					>
						{{ height }}
					</v-flex>

					<v-flex
						xs4 pa-0 align-self-start text-xs-center
						class="flex-column"
						style="justify-content: flex-end;"
					>
						<v-icon
							pa-0
							style="margin-bottom: -8px;"
						>
							arrow_downward
						</v-icon>
					</v-flex>
				</v-layout>
			</div>
		</v-layout>

		<v-layout
			class="mt-2 width-container"
			:style="{width: widthRatio + 'px'}"
		>
			<v-layout>
				<v-flex xs4 pa-0 text-xs-left>
					<v-icon>arrow_back</v-icon>
				</v-flex>

				<v-flex xs4 pa-0 text-xs-center style="margin-left: 3px;">
					{{ width }}
				</v-flex>

				<v-flex xs4 pa-0 text-xs-right>
					<v-icon style="margin-right: -3px;">arrow_forward</v-icon>
				</v-flex>
			</v-layout>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		props: {
			height: {
				type: String,
				required: true
			},

			width: {
				type: String,
				required: true
			},

			background: {
				type: String,
				required: true,
				validator (value) {
					return value === "White" || value === "Transparency";
				}
			}
		},

		computed: {
			heightRatio () {
				const ratio = this.height / this.width;

				return (ratio > 1 ? 1 : ratio) * 180;
			},

			widthRatio () {
				const ratio = this.width / this.height;

				return (ratio > 1 ? 1 : ratio) * 180;
			}
		}
	};
</script>

<style scoped>
	.content-preview {
		background-color: red;
		min-width: 55px;
		min-height: 70px;
		max-width: 80%;
		max-height: 180px;
		border: 3px solid black;
		box-sizing: border-box;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.width-container {
		min-width: 52px;
		max-width: 80%;
	}
</style>
