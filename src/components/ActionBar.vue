<template>
	<div class="action-bar">
		<button class="rollButton">Roll</button>
		<button name="nextPlayerButton" class="nextPlayerButton">Next Player</button>
	</div>
</template>

<script>
export default {
	name: "ActionBar",
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
.action-bar {
	position: sticky;
	bottom: 0;
	left: 0;
	display: grid;
	grid-template-columns: repeat(2, minmax(max-content, 2fr));
	grid-column-gap: 10px;
	justify-content: space-between;
	justify-content: center;
	padding: 7px 25px;
	background: #4c4d5a;
	box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.341);
	border-top: 2px solid #616375f5;
}

.action-bar button {
	height: 30px;
	background: #ffffffd4;
	color: #4c4d5a;
	font-weight: 700;
	font-size: 1.2em;
	border-radius: 8px;
	padding: 0px 8px;
	border: 1px solid #737694;
	outline: none;
	cursor: pointer;
	min-width: max-content;
	box-shadow: 0 0 8px 1px inset rgba(128, 128, 128, 0.341);

	transition: 0.15s ease-out;
}

.action-bar button:active {
	box-shadow: 0 0 12px 1px inset rgba(68, 68, 68, 0.808);
	transform: scale(0.9);
	/* transform: scale(1.1); */
	background: #ffffff;
}

/* .nextPlayerButton {} */
</style>
