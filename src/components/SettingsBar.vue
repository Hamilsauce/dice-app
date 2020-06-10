<template>
	<section class="action-bar show">
		<div class="options-container show">
			<div class="control-group">
				<label for="player-count-input">Players:</label>
				<input
					type="number"
					name="player-count-input"
					id="player-count-input"
					class="player-count-input"
				/>
			</div>
			<div class="control-group">
				<label for="player-count-input">Game:</label>
				<select name="game-select" id="game-select" class="game-select">
					<option value="horses" class="game-option">Horses</option>
					<!-- <option value="" class="game-option"></option>
					<option value="" class="game-option"></option>-->
				</select>
			</div>
			<div class="control-group">
				<button class="start-button">Start</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "SettingsBar",
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
  transition: transform 1s 0.5s ease-out;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: space-between;
  margin: 0px;
  padding: 0px 0px 0px 0px;
  max-width: 100%;
  max-height: 70px;
  font-size: 1em;
  font-weight: 500;
  color: rgb(255, 255, 255);
  background: #4C4D5A;
  border-top: 2px solid #616375F5;
  border-bottom: 2px solid #616375F5;
  transition: 0.5s;
}

.action-bar.fade {
  opacity: 0.5;
}

.options-container {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
  justify-content: flex-end;
  margin: 0 auto 0px auto;
  padding: 0px 20px;
  max-width: fit-content;
  font-size: 1em;
  font-weight: 500;
  opacity: 1;
  transition: 1s;
}

.options-container.hide {
  opacity: 0.4;
}

.control-group {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  height: 100%;
}

.control-group:nth-child(3) {
  justify-content: flex-end;
  padding-bottom: 2px;
}

.control-group label {
  margin-bottom: 3px;
  font-size: 1.1em;
  font-weight: 600;
}

#player-count-input {
  max-width: 80px;
  font-size: 1em;
  font-weight: 500;
  padding: 4px;
}

.control-group input,
button,
select {
  font-size: 1em;
  font-weight: 500;
  padding: 4px;
}

.button-container {
  display: none;
}

.action-bar input,
button,
select {
  margin-bottom: 3px;
  font-weight: 500;
}
</style>