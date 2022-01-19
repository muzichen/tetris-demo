import { FC } from "react";

export interface GameAudioLoaderProps {
  onLoaded: () => void;

  sources: Array<string>;
}

export const GameAudioLoader: FC<GameAudioLoaderProps> = ({
  sources,
  onLoaded
}) => {
  return (<h1>audios</h1>);
}