<template>
	<v-app>
		<menu-right />

		<a-toolbar />

		<menu-left />

		<a-page />

		<a-footer />
	</v-app>
</template>

<script>
	import AToolbar from "@/components/app-toolbar";
	import APage from "@/components/app-page";
	import AFooter from "@/components/app-footer";

	import MenuRight from "@/components/menu-right";
	import MenuLeft from "@/components/menu-left";

	export default {
		data: () => ({
			right: false,
			left: false
		}),

		components: {
			AToolbar,
			MenuLeft,
			APage,
			MenuRight,
			AFooter
		}
	};
</script>
