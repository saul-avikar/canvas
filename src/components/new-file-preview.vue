<template>
	<v-container>
		<v-layout>
			<div
				style="background-color: red; max-width: 80%; max-height: 180px; display: inline; border: 3px solid black; box-sizing: border-box;"
				:style="{width: widthRatio * 100 + '%', height: heightRatio * 180 + 'px'}"
			>
				{{ background }}
			</div>

			<div class="ml-2" :style="{height: heightRatio * 180 + 'px'}">
				<v-layout column fill-height>
					<v-flex xs4 pa-0 align-self-start text-xs-center style="display: flex; justify-content: flex-start; flex-direction: column; width: 100%;">
						<v-icon>arrow_upward</v-icon>
					</v-flex>

					<v-flex xs4 pa-0 align-self-start text-xs-center style="display: flex; justify-content: center; flex-direction: column; width: 100%;">
						{{ height }}
					</v-flex>

					<v-flex xs4 pa-0 align-self-start text-xs-center style="display: flex; justify-content: flex-end; flex-direction: column; margin-bottom: -8px; width: 100%;">
						<v-icon pa-0 style="margin-bottom: -8px;">arrow_downward</v-icon>
					</v-flex>
				</v-layout>
			</div>
		</v-layout>

		<v-layout class="mt-2" style="min-width: 52px; max-width: 80%;" :style="{width: widthRatio * 100 + '%'}">
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

				return ratio > 1 ? 1 : ratio;
			},

			widthRatio () {
				const ratio = this.width / this.height;

				return ratio > 1 ? 1 : ratio;
			}
		}
	};
</script>
