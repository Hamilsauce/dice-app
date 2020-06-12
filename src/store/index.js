import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerCount: 2,
    gameType: "horses",
    gameActive: false,
    players: [{
        id: 1,
        name: "Player One",
        dice: [{
            id: 1,
            name: "die-1",
            value: 1,
            selected: false,
            kept: false
          },
          {
            id: 2,
            name: "die-2",
            value: 1,
            selected: false,
            kept: false
          },
          {
            id: 3,
            name: "die-3",
            value: 1,
            selected: false,
            kept: false
          },
          {
            id: 4,
            name: "die-4",
            value: 1,
            selected: false,
            kept: false
          },
          {
            id: 5,
            name: "die-5",
            value: 1,
            selected: false,
            kept: false
          }
        ]
      },
      {
        id: 2,
        name: "Player Two",
        dice: [{
            id: 1,
            value: 1,
            selected: false,
            kept: false
          },
          {
            id: 2,
            value: 1,
            selected: false,
            kept: false
          },
          {
            id: 3,
            value: 1,
            selected: false,
            kept: false
          },
          {
            id: 4,
            value: 1,
            selected: false,
            kept: false
          },
          {
            id: 5,
            value: 1,
            selected: false,
            kept: false
          }
        ]
      }
    ],
    activePlayer: {}
  },
  mutations: {
    setPlayerCount(state, count) {
      state.playerCount = count;
    },
    startGame(state) {
      state.gameActive = true;
      state.activePlayer = state.players[0];
    },
    setActivePlayer(state) {
      state.activePlayer = state.players[0];
    }
  },
  actions: {},
  modules: {}
});