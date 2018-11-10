<template>
	<v-app>
		<a-menu-right />

		<a-toolbar />

		<a-menu-left />

		<a-page />

		<a-footer />
	</v-app>
</template>

<script>
	import AToolbar from "@/components/app-toolbar";
	import AMenuLeft from "@/components/app-menu-left";
	import APage from "@/components/app-page";
	import AMenuRight from "@/components/app-menu-right";
	import AFooter from "@/components/app-footer";

	export default {
		data: () => ({
			right: false,
			left: false
		}),

		components: {
			AToolbar,
			AMenuLeft,
			APage,
			AMenuRight,
			AFooter
		}
	};
</script>
