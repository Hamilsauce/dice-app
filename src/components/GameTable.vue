<template>
	<section class="table">
		<div class="scoreDisplay"></div>
		<div class="display-container container1">
			<h3 class="table-label">Active Dice</h3>
			<ul class="rollDisplay"></ul>
		</div>
	</section>
</template>

<script>
export default {
	name: "GameTable",
	components: {},
	props: {},
	data() {
		return {
			message: "message"
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
.table-label {
	margin: 0;
	text-align: center;
	margin-bottom: 15px;
	background-color: rgba;
	background: rgb(33, 74, 112);
	padding: 5px;
}

.table {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		"s s"
		"r r";
	grid-template-rows: 40px 1fr;
	background: rgb(53, 107, 158);
	color: white;
	height: 435px;
}

.scoreDisplay {
	grid-area: s;
	text-align: center;
	display: flex;
	justify-content: center;
	font-size: 1.5em;
	font-weight: 600;
	padding: 0px 15px;
	background-color: white;
	color: rgba(59, 156, 42, 0);
	transition: 0.2s;
	height: 40px;
}

.scoreDisplay.show {
	color: rgba(59, 156, 42, 1);
}

.rollDisplay {
	box-sizing: border-box;
	padding: 0px 0px;
	margin: 0px 0;
	list-style: none;
	width: 100%;
	display: grid;
	justify-content: center;
	grid-template-areas:
		"die1 ."
		"die2 di3"
		"die4 die5";
}

.keptDisplay {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
	box-sizing: border-box;
	list-style: none;
	width: 100%;
}

.container1 {
	grid-area: r;
}

.container2 {
	grid-area: k;
}
</style>
