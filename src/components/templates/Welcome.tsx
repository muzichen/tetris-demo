import { FC } from "react";
import { useAppDispacth } from "../../store/app-store";
import { GameActions } from "../../store/game/game-actions";

export const Welcome: FC = () => {

  const dispatch = useAppDispacth();

  const startGame = () => {
    dispatch(GameActions.start(1));
  }

  return (
    <div className="flex flex-col h-full">
      <button onClick={startGame}>Start</button>
    </div>
  )
}