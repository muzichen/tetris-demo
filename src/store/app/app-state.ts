import { createSlice } from "@reduxjs/toolkit";
import { APP_INITIAL_STATE, APP_NAME } from "./app-model";

export namespace AppState {
  export const slice = createSlice({
    name: APP_NAME,
    initialState: APP_INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {}
  })
}