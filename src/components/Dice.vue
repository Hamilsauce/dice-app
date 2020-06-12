<template>
	<div v-if="gameActive" class="dice">
		<die v-for="die in player.dice" :key="die.id" :die="die"></die>
	</div>
</template>

<script>
import Die from "@/components/Die";
export default {
	name: "Dice",
	components: { Die },
	props: {},
	data() {
		return {
			message: "message"
		};
	},
	methods: {},
	computed: {
		player() {
			return this.$store.state.activePlayer;
		},
		gameActive() {
			return this.$store.state.gameActive;
		}
	},
	watch: {},
	created() {},
	mounted() {},
	updated() {},
	destroyed() {}
};
</script>

<style scoped>
.dice {
	align-items: center;
	width: 300px;
	height: 300px;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(2, minmax(0.1rem, 1fr));
	grid-template-rows: auto;
	justify-items: center;
	padding: 2rem;
	perspective: 900px;
	transition: 0.8s ease;
	opacity: 1;
}

.dice.newDice {
	perspective: 1px;
	transform: scale(2);
	opacity: 0.9;
}
</style>
