<template>
	<div id="app">
		<AppHeader></AppHeader>
		<SettingsBar></SettingsBar>
		<GameTable></GameTable>
		<ActionBar></ActionBar>
	</div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import GameTable from "@/components/GameTable.vue";
import SettingsBar from "@/components/SettingsBar.vue";
import ActionBar from "@/components/ActionBar.vue";

export default {
	name: "App",
	components: { AppHeader, GameTable, SettingsBar, ActionBar },
	props: {},
	data() {
		return {
			appTitle: "Roll some dice",
			subtitle:
				"Click the roll button, select the dice you want to keep, click the roll button."
		};
	},
	methods: {},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	updated() {},
	destroyed() {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600;700&display=swap");

html,
body {
	box-sizing: border-box;
	padding: 0;
	margin: 0 auto;
	width: 100vw;
	font-family: "Dosis", sans-serif;
	height: 100%;
}

body {
}

* {
	touch-action: manipulation;
	box-sizing: border-box;
	user-select: none;
}

#app {
	max-width: 700px;
	margin: 0 auto;
	padding: 0;
	display: grid;
	grid-template-rows: 100px 75px 1fr 50px;
	/* height: fit-content; */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
