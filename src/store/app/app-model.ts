export interface AppModel {
  dark: boolean;

  // dialog?:

  ghost_piece: boolean;

  high_scores: Array<number>

  // keys

  music: boolean;

  music_type: number;

  music_volume: number;

  sound: boolean;

  sound_volume: number;

  start_level: number;
}

export const APP_INITIAL_STATE: AppModel = {
  dark: false,
  ghost_piece: true,
  high_scores: [],
  music: true,
  music_type: 0,
  music_volume: 80,
  sound: true,
  sound_volume: 80,
  start_level: 1,
}

export const APP_NAME = 'app';