import classNames from "classnames";
import { FC } from "react";
import { TetrominosType } from "../../engine/game-tetrominos";
import './GameBlock.css';

export interface GameBlockProps {
  ghost?: number;

  glow?: boolean;

  grid?: boolean;

  speed?: number;

  type?: TetrominosType;
}

export const GAME_BLOCK_COLOR = {
  [TetrominosType.I]: 'color-i',
  [TetrominosType.O]: 'color-o',
  [TetrominosType.T]: 'color-t',
  [TetrominosType.S]: 'color-s',
  [TetrominosType.Z]: 'color-z',
  [TetrominosType.J]: 'color-j',
  [TetrominosType.L]: 'color-l'
};

export const GameBlock: FC<GameBlockProps> = ({
  ghost,
  glow,
  grid,
  speed,
  type
}) => {
  return (
   <div className={classNames('game-block', { 
     'game-block-border': grid
    })} data-testid="game-block">
       <div className={classNames(
        'block-color relative w-full h-full rounded-sm'
      )}></div>
    </div>
  )
}