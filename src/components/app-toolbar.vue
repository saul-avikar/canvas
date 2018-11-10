<template>
	<v-toolbar
		color="blue-grey"
		dark
		fixed
		app
		clipped-right
		clipped-left
	>
		<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
		<v-toolbar-title>Toolbar</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
	</v-toolbar>
</template>
