import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { gameReset } from "../../engine/game-reset";
import { GameActions } from "./game-actions";
import { GameModel, GameStatus, GAME_INITIAL_STATE, GAME_NAME } from "./game-model";

export namespace GameState {
  export const slice = createSlice({
    name: GAME_NAME,
    initialState: GAME_INITIAL_STATE,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<GameModel>) => {
      builder
        .addCase(GameActions.start, (state, {payload}) => {
          console.log('Start Game');
          const reset = gameReset(state.next_max);
          // state.status = GameStatus.STARTING;
          // state.level = payload;
          return {
            ...reset,
            level: payload,
            status: GameStatus.STARTING
          }
        })
    }
  })
}