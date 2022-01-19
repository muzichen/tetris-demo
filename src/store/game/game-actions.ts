import { createAction } from "@reduxjs/toolkit";
import { GAME_NAME } from "./game-model";

export namespace GameActions {
  const prefix = (name: string) => `${GAME_NAME}/${name}`;

  export const start = createAction<number>(prefix('start'));
}