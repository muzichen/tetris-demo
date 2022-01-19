import classNames from "classnames";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { GameSelectors } from "../../../store/game/game-selectors";
import { GameGrid } from "../../molecules/game/GameGrid";
import { ClassNameProps } from "../../particles/particles.types";

export const GameEngine: FC<ClassNameProps> = ({
  className
}) => {
  const [loaded, setLoaded] = useState(false);
  // const [showToast]

  const starting = useSelector(GameSelectors.starting);
  console.log(starting);
  return (
    <div className={
      classNames(
        className,
        'flex relative overflow-hidden rounded-lg desktop:p-4 w-full',
        'border border-gray-200 dark:border-gray-600 dark:nm-inset-gray-800 nm-inset-gray-100'
      )
    }>
      {/* 游戏网格 */}
      <GameGrid />

      {/* {starting && !loaded && (
        
      )} */}
    </div>
  )
}