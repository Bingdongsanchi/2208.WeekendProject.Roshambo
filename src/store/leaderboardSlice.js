const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    playerLeaderboard: [],
    selectedPlayer: {},
  };

export const leaderboardSlice = createSlice({
    name: "leaderboard",
    initialState,
    reducers: {
        setLeadboard: (state, action) => {
            state.playerLeaderboard = action.payload;
          },
          setSelectedPlayer: (state, action) => {
            state.selectedPlayer = action.payload;
          },
          addPlayer: (state, action) => {
            state.playerLeaderboard.push(action.payload);
          }
    }
});

export const { ssetLeadboard, setSelectedPlayer, addPlayer  } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;