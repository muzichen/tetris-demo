import { FC } from "react";
import { useSelector } from "react-redux";
import { GameSelectors } from "../../store/game/game-selectors";
import { GameBlock } from "./GameBlock";

export interface GameBloackIndexProps {
  index: number;
}

export const GameBlockIndex: FC<GameBloackIndexProps> = ({
  index
}) => {
  const cell = useSelector(GameSelectors.screenCell(index));
  return (
    cell ? (<GameBlock grid={true} />) : null
  )
}