import { combineReducers } from "@reduxjs/toolkit"
import { AppState } from "./app/app-state";
import { GameState } from "./game/game-state";

export const getRootReducer = () => {
  return combineReducers({
    app: AppState.slice.reducer,
    game: GameState.slice.reducer,
  });
}

