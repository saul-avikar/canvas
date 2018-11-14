<template>
	<div class="home">
		<a-canvas />
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import ACanvas from "@/components/app-canvas";

	export default {
		props: {
			name: {
				type: String,
				required: true
			}
		},

		data: () => ({
			image: null
		}),

		created () {
			let canvasFile = this.getFile(this.name);

			if (canvasFile) {
				this.image = canvasFile;
				return;
			}

			this.createFile(this.name).then(file => {
				this.image = file;
			}).catch(e => {
				console.error("Failed to create file", e);
			});
		},

		computed: {
			...mapGetters({
				getFile: "files/getFile"
			})
		},

		methods: {
			...mapActions({
				createFile: "files/createFile"
			})
		},

		components: {
			ACanvas
		}
	};
</script>
