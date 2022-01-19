import { environment } from "../../environment/environment";

export const AUDIO_FILES = [
  `${environment.base}/audio/music/bonkers-for-arcades.mp3`,
  `${environment.base}/audio/music/the-ice-cream-man.mp3`,
  `${environment.base}/audio/music/8-bit-perplexion.mp3`,
  `${environment.base}/audio/music/its-raining-pixels.mp3`,
  `${environment.base}/audio/music/arcade-puzzler.mp3`
];

export const SOUND_FINISHED = `${environment.base}/audio/sounds/power-down-13.mp3`;
export const SOUND_LEVEL = `${environment.base}/audio/sounds/retro-chip-power.mp3`;
export const SOUND_SCORE = `${environment.base}/audio/sounds/ui-quirky-19.mp3`;
export const SOUND_DROP = `${environment.base}/audio/sounds/zapsplat_bambo_swoosh.mp3`;
export const SOUND_LEVEL_10 = `${environment.base}/audio/sounds/zapsplat_level_up.mp3`;

export const PRELOAD_AUDIO = [
    SOUND_FINISHED,
    SOUND_LEVEL,
    SOUND_SCORE,
    SOUND_DROP,
    SOUND_LEVEL_10
];