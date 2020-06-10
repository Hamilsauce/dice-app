<template>
	<div class="app-header">
		<h1 class="app-title">{{ appTitle }}</h1>
		<p class="subtitle">{{ subtitle }}</p>
	</div>
</template>

<script>
export default {
	name: "AppHeader",
	components: {},
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

<style scoped>
.app-header {
	max-width: 700px;
	margin: 0 auto;
	padding: 0px 6px;
	height: auto;
}

.text-container {
	margin: 0;
}

.app-title {
	margin: 0px auto 0px auto;
	font-size: 1.6em;
}

.subtitle {
	margin: 5px;
	font-size: 1em;
}
</style>
